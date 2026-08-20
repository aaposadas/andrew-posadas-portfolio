import { NextResponse } from "next/server";
import { Resend } from "resend";

const MAX_NAME_LENGTH = 160;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;
const MAX_BODY_BYTES = 10_000;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestAttempts = new Map<string, number[]>();

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function getClientIdentifier(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function hasExceededRateLimit(identifier: string) {
  const now = Date.now();
  const recentAttempts = (requestAttempts.get(identifier) ?? []).filter(
    (attempt) => now - attempt < RATE_LIMIT_WINDOW_MS
  );

  recentAttempts.push(now);
  requestAttempts.set(identifier, recentAttempts);

  return recentAttempts.length > MAX_REQUESTS_PER_WINDOW;
}

function isSameOriginRequest(request: Request) {
  return request.headers.get("origin") === new URL(request.url).origin;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured" },
      { status: 503 }
    );
  }

  if (!isSameOriginRequest(request)) {
    return NextResponse.json(
      { error: "This request was not accepted." },
      { status: 403 }
    );
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json(
      { error: "This request was not accepted." },
      { status: 415 }
    );
  }

  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Your message is too large. Please shorten it and try again." },
      { status: 413 }
    );
  }

  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (typeof body.companyWebsite === "string" && body.companyWebsite.trim()) {
    return NextResponse.json({ success: true });
  }

  if (
    typeof body.name !== "string" ||
    typeof body.email !== "string" ||
    typeof body.message !== "string"
  ) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 }
    );
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  if (
    !name ||
    !email ||
    !message ||
    name.length > MAX_NAME_LENGTH ||
    email.length > MAX_EMAIL_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH ||
    /[\r\n]/.test(name) ||
    !/^\S+@\S+\.\S+$/.test(email)
  ) {
    return NextResponse.json(
      { error: "Please provide a valid name, email address, and message." },
      { status: 400 }
    );
  }

  if (hasExceededRateLimit(getClientIdentifier(request))) {
    return NextResponse.json(
      { error: "Too many messages. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "andrewposadas5@gmail.com",
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\r?\n/g, "<br />")}</p>
      `,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json(
        { error: "Unable to send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message. Please try again." },
      { status: 502 }
    );
  }
}
