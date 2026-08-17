import { Resend } from "resend";
import { NextResponse } from "next/server";
import { getConsultingPlan } from "@/lib/consulting";

const escapeHtml = (value: string) => value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
const requestAttempts = new Map<string, number[]>();
const rateLimitWindowMs = 15 * 60 * 1000;
const maxRequestsPerWindow = 5;
const maxBodyBytes = 25_000;

function getClientIdentifier(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown";
}

function hasExceededRateLimit(identifier: string) {
  const now = Date.now();
  for (const [key, attempts] of requestAttempts) {
    const recentAttempts = attempts.filter((attempt) => now - attempt < rateLimitWindowMs);
    if (recentAttempts.length) requestAttempts.set(key, recentAttempts);
    else requestAttempts.delete(key);
  }
  const recentAttempts = (requestAttempts.get(identifier) ?? []).filter((attempt) => now - attempt < rateLimitWindowMs);
  recentAttempts.push(now);
  requestAttempts.set(identifier, recentAttempts);
  return recentAttempts.length > maxRequestsPerWindow;
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
    const requestOrigin = request.headers.get("origin");
    if (requestOrigin && requestOrigin !== new URL(request.url).origin) return NextResponse.json({ error: "This request was not accepted." }, { status: 403 });
    if (!request.headers.get("content-type")?.includes("application/json")) return NextResponse.json({ error: "This request was not accepted." }, { status: 415 });
    if (Number(request.headers.get("content-length")) > maxBodyBytes) return NextResponse.json({ error: "Your request is too large. Please shorten it and try again." }, { status: 413 });
    if (hasExceededRateLimit(getClientIdentifier(request))) return NextResponse.json({ error: "Too many requests. Please wait a few minutes and try again." }, { status: 429 });
    const body = await request.json() as Record<string, unknown>;
    if (typeof body.companyWebsite === "string" && body.companyWebsite.trim()) return NextResponse.json({ success: true });
    const required = ["name", "email", "plan", "description", "siteSize", "domainStatus", "timeline"];
    if (required.some((field) => typeof body[field] !== "string" || !body[field].trim())) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
    if (Object.values(body).some((value) => typeof value === "string" && value.length > 5_000)) return NextResponse.json({ error: "Please shorten your response and try again." }, { status: 400 });
    const plan = getConsultingPlan(String(body.plan));
    if (!plan) return NextResponse.json({ error: "Please select a valid service." }, { status: 400 });
    const email = String(body.email).trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    const features = Array.isArray(body.features) ? body.features.map(String).join(", ") || "None selected" : "None selected";
    const entries = [["Name", body.name], ["Organization", body.organization], ["Email", email], ["Phone", body.phone || "Not provided"], ["Service", plan.name], ["Existing website", body.websiteUrl || "Not provided"], ["Site size", body.siteSize], ["Desired features", features], ["Domain status", body.domainStatus], ["Timeline", body.timeline], ["Project description", body.description], ["Additional notes", body.notes || "None"]] as const;
    const html = `<h2>New consulting request</h2><p><strong>Andrew Posadas, d.b.a. Andrew Posadas Technology Consulting</strong></p><table>${entries.map(([label, value]) => `<tr><th align="left" style="padding:8px 12px 8px 0;vertical-align:top">${escapeHtml(label)}</th><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(String(value))}</td></tr>`).join("")}</table><p>Submitted: ${new Date().toISOString()}</p>`;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({ from: "Consulting Requests <onboarding@resend.dev>", to: "andrewposadas5@gmail.com", replyTo: email, subject: `Consulting request: ${plan.name} — ${String(body.organization)}`, html });
    if (error) return NextResponse.json({ error: "Unable to submit your request. Please try again." }, { status: 502 });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unable to submit your request. Please try again." }, { status: 500 });
  }
}
