"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrew-posadas-644065142/",
    Icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/aaposadas", Icon: Github },
  {
    label: "Facebook",
    href: "https://www.facebook.com/andrew.posadas.7/",
    Icon: Facebook,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/andee_123/",
    Icon: Instagram,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    companyWebsite: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          message: "",
          companyWebsite: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <main className="bg-zinc-950 px-4 pb-16 sm:px-6 sm:pb-24">
      <section className="mx-auto max-w-6xl pt-4 sm:pt-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-zinc-950 p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgb(134_239_172_/_0.16),transparent_20rem)]" />
          <div className="relative z-10 max-w-3xl">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Contact
            </p>
            <h1 className="mt-6 text-5xl tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s <span className="text-green-200">connect</span>.
            </h1>
            <p className="mt-6 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              Whether you&apos;re thinking about a role, a collaboration, or an
              idea that involves technology, I&apos;d be glad to hear from you.
            </p>
          </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 pt-16 sm:pt-24 lg:grid-cols-12">
        <RevealGroup className="contents">
          <RevealItem className="lg:col-span-4">
            <aside className="relative isolate h-full overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-900 to-green-950/25 p-7 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 size-96 rounded-full border border-green-200/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-12 size-64 rounded-full border border-green-200/15"
          />
          <div className="relative z-10 flex h-full flex-col">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Start a conversation
            </p>
            <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white sm:text-4xl">
              A real person will read your note.
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-300">
              I value thoughtful conversations and clear communication. Send a
              note with what&apos;s on your mind, and I&apos;ll get back to you.
            </p>
            <a
              href="mailto:andrewposadas5@gmail.com"
              className="mt-8 w-fit text-sm font-medium text-green-200 transition hover:text-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
            >
              andrewposadas5@gmail.com
            </a>
            <div className="mt-auto pt-12">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-zinc-500">
                Elsewhere
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {socialLinks.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid size-10 place-items-center rounded-full border border-zinc-700 bg-zinc-950/50 text-zinc-300 transition hover:border-green-200/70 hover:text-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
            </aside>
          </RevealItem>

          <RevealItem className="lg:col-span-8">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8"
            >
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
            Send a message
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                maxLength={160}
                autoComplete="name"
                value={formData.name}
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-200 focus:ring-2 focus:ring-green-200/20"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-200 focus:ring-2 focus:ring-green-200/20"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={7}
              maxLength={5000}
              value={formData.message}
              onChange={(event) =>
                setFormData({ ...formData, message: event.target.value })
              }
              className="w-full resize-y rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-200 focus:ring-2 focus:ring-green-200/20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
          >
            <label htmlFor="companyWebsite">Company website</label>
            <input
              id="companyWebsite"
              name="companyWebsite"
              tabIndex={-1}
              autoComplete="off"
              value={formData.companyWebsite}
              onChange={(event) =>
                setFormData({ ...formData, companyWebsite: event.target.value })
              }
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-full bg-green-200 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-green-100 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            <div aria-live="polite" className="text-sm">
              {status === "success" && (
                <p className="text-green-200">Message sent successfully.</p>
              )}
              {status === "error" && (
                <p className="text-red-300">
                  Failed to send your message. Please try again.
                </p>
              )}
            </div>
          </div>
            </form>
          </RevealItem>
        </RevealGroup>
      </section>
    </main>
  );
}
