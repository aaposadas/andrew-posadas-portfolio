"use client";

import Image from "next/image";
import { useState } from "react";
import { Check } from "lucide-react";

const colors = [
  ["Canvas", "zinc-950", "bg-zinc-950 border-zinc-700"],
  ["Surface", "zinc-900", "bg-zinc-900 border-zinc-700"],
  ["Border", "zinc-800", "bg-zinc-800 border-zinc-600"],
  ["Accent", "green-200", "bg-green-200 border-green-100"],
  ["Primary text", "white", "bg-white border-zinc-200"],
  ["Supporting text", "zinc-300", "bg-zinc-300 border-zinc-200"],
];

export default function DesignGuide() {
  const [action, setAction] = useState("No action selected");
  const [sent, setSent] = useState(false);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <section className="overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900 px-6 py-10 sm:px-10 sm:py-14" style={{ backgroundImage: "radial-gradient(circle at 86% 5%, rgb(134 239 172 / 0.18), transparent 27rem), linear-gradient(135deg, rgb(39 39 42), rgb(9 9 11) 72%)" }}>
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Approval draft</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] tracking-[-0.05em] text-white">A cohesive system for every page.</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">The proposed visual language: deliberate rhythm, quiet surfaces, clear hierarchy, and one purposeful accent color.</p>
      </section>

      <section className="mt-16">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Foundations</p>
        <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white">Color with a job to do</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-300">Green indicates movement and focus. Dark neutrals create room for content to speak.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{colors.map(([name, token, swatch]) => <div key={name} className="flex items-center gap-4 rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-4"><span className={`size-11 rounded-xl border ${swatch}`} /><div><p className="font-semibold text-white">{name}</p><p className="mt-0.5 text-sm text-zinc-400">{token}</p></div></div>)}</div>
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-6 sm:p-7"><p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Typography</p><h2 className="mt-4 text-4xl tracking-[-0.045em] text-white">Clear, human, direct.</h2><p className="mt-4 max-w-lg text-base leading-7 text-zinc-300">Montserrat carries key moments with confidence. Roboto keeps details readable, calm, and approachable.</p><p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Eyebrow · 11px · bold · tracked</p></div>
        <div className="rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-6 sm:p-7"><p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Spacing rhythm</p><div className="mt-6 space-y-4">{[8, 12, 16, 24, 32, 48, 64].map((space) => <div key={space} className="flex items-center gap-4"><span className="w-9 text-right font-mono text-xs text-zinc-500">{space}</span><span className="h-2 rounded-full bg-green-200" style={{ width: `${space * 2}px` }} /><span className="text-sm text-zinc-300">{space}px</span></div>)}</div></div>
      </section>

      <section className="mt-16">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Components</p>
        <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white">Consistent by default</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-300">Try these states. This is the component language proposed for the rest of the site.</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-6 sm:p-7"><p className="text-sm font-semibold text-white">Actions</p><div className="mt-5 flex flex-wrap gap-3"><button className="inline-flex min-h-11 items-center justify-center rounded-full bg-green-200 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950" onClick={() => setAction("Primary action")}>Primary action</button><button className="inline-flex min-h-11 items-center justify-center rounded-full border border-zinc-700 bg-black/30 px-5 py-3 text-sm font-bold text-zinc-100 transition hover:border-green-200/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950" onClick={() => setAction("Secondary action")}>Secondary action</button></div><p className="mt-5 text-sm text-zinc-400">Selected state: <span className="text-green-200">{action}</span></p></div>
          <form className="rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-6 sm:p-7" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="guide-email">Field control</label><input className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-200 focus:ring-2 focus:ring-green-200/20" id="guide-email" type="email" placeholder="you@example.com" /><button className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-green-200 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-100" type="submit">Test form state</button>{sent && <p className="mt-3 flex items-center gap-2 text-sm text-green-200"><Check size={16} /> Clear feedback stays close to the action.</p>}</form>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
          Contact &amp; footer
        </p>
        <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white">
          Direct, approachable, and quiet.
        </h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-12">
          <div className="relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-900 to-green-950/25 p-7 lg:col-span-4">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-16 size-56 rounded-full border border-green-200/15"
            />
            <div className="relative z-10">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
                Contact panel
              </p>
              <p className="mt-3 text-2xl tracking-[-0.04em] text-white">
                A real person will read your note.
              </p>
              <p className="mt-5 text-sm leading-6 text-zinc-400">
                Pair a human, direct-contact panel with the ordinary dark form
                surface. Keep social links compact and secondary.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 lg:col-span-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Footer
            </p>
            <div className="mt-6 flex flex-col gap-4 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-200">Andrew Posadas</p>
                <p className="mt-1 text-sm text-zinc-500">
                  Technology Professional &amp; Web Developer
                </p>
              </div>
              <p className="text-sm text-zinc-500">© 2026 Andrew Posadas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
          Navigation
        </p>
        <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white">
          Quiet, clear route switching.
        </h2>
        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-4 sm:px-6">
          <div className="flex h-16 items-center justify-center gap-0.5 sm:gap-2 lg:gap-4">
            {["Home", "About", "Experience", "Projects", "Contact"].map(
              (item) => (
                <span
                  key={item}
                  className={`relative px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] sm:px-3 ${
                    item === "Experience"
                      ? "text-white after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:bg-green-200"
                      : "text-zinc-400"
                  }`}
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400">
          Keep the navigation centered and text-first. The active route earns
          the only underline; avoid containers, icons, and secondary actions.
        </p>
      </section>

      <section className="mt-16">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
          Homepage patterns
        </p>
        <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white">
          A shared visual language
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          Reuse these patterns for a consistent rhythm as the portfolio grows.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Standard section heading
            </p>
            <h3 className="mt-3 text-2xl tracking-[-0.04em] text-white">
              One clear thought at a time
            </h3>
            <p className="mt-5 text-base leading-7 text-zinc-400">
              Use this left-aligned format for strengths, interactive examples,
              and other focused sections.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8">
            <div className="flex flex-col gap-4 border-b border-zinc-800 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
                  Split section heading
                </p>
                <h3 className="mt-3 text-2xl tracking-[-0.04em] text-white">
                  Context where it helps
                </h3>
              </div>
              <p className="max-w-44 text-sm leading-6 text-zinc-400">
                Use this for work and experience sections.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <article className="flex min-h-64 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              01
            </p>
            <h3 className="mt-12 text-2xl tracking-[-0.035em] text-white">
              Strength card
            </h3>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Numbered, spacious, and focused on one useful point.
            </p>
          </article>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8">
            <p className="font-[family-name:var(--font-montserrat)] text-5xl font-bold tracking-[-0.06em] text-green-200 sm:text-6xl">
              10+
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-300">
              Metric card
            </p>
          </div>

          <div className="border-t border-zinc-800 pt-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Tools &amp; platforms
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Next.js", "Azure", "React", "OpenAI", "Stripe"].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-zinc-700 px-3 py-2 text-xs text-zinc-300"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-zinc-400">
              Keep the real toolkit compact and logo-led, without a separate
              card around each tool.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
          Professional page patterns
        </p>
        <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white">
          Evidence, not a service pitch.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          Use this set for employer-facing pages that need to show progression,
          proven work, and clear qualifications.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-zinc-950 p-7 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgb(134_239_172_/_0.16),transparent_14rem)]" />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -bottom-8 font-[family-name:var(--font-montserrat)] text-8xl font-bold tracking-[-0.1em] text-green-200/[0.07]"
            >
              10+
            </span>
            <div className="relative z-10">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
                Professional hero
              </p>
              <h3 className="mt-3 max-w-sm text-3xl tracking-[-0.045em] text-white">
                Experience built around people and technology.
              </h3>
              <p className="mt-6 border-t border-zinc-800 pt-6 text-sm text-zinc-400">
                Use one credible metric as a low-contrast background accent.
              </p>
            </div>
          </div>

          <div className="divide-y divide-zinc-800 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-7 sm:px-8">
            <div className="grid gap-3 py-6 sm:grid-cols-3">
              <p className="text-sm text-green-200">2026 - Present</p>
              <div className="sm:col-span-2">
                <p className="text-sm text-zinc-400">Organization</p>
                <h3 className="mt-2 text-2xl tracking-[-0.035em] text-white">
                  Current role
                </h3>
              </div>
            </div>
            <div className="grid gap-3 py-6 sm:grid-cols-3">
              <p className="text-sm text-green-200">Earlier role</p>
              <p className="sm:col-span-2 text-sm leading-6 text-zinc-400">
                Timeline entries use a restrained date column and outcome-led
                responsibilities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:col-span-2 sm:p-7">
                <span
                  aria-hidden="true"
                  className="absolute -right-4 -bottom-3 font-[family-name:var(--font-montserrat)] text-6xl font-bold tracking-[-0.08em] text-zinc-100/[0.05]"
                >
                  Microsoft
                </span>
                <p className="relative z-10 text-lg font-medium text-white">
                  Featured certification
                </p>
                <p className="relative z-10 mt-6 text-sm text-zinc-400">Provider</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-7">
                <p className="text-lg font-medium text-white">Credential</p>
                <p className="mt-6 text-sm text-zinc-400">Provider</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-7">
                <p className="text-lg font-medium text-white">Credential</p>
                <p className="mt-6 text-sm text-zinc-400">Provider</p>
              </div>
            </div>
          </div>
          <div className="relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-900 to-green-950/35 p-7 lg:col-span-4">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-10 size-48 rounded-full border border-green-200/20"
            />
            <div className="relative z-10">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
                Visual CTA
              </p>
              <p className="mt-3 text-xl font-medium text-white">
                One focused next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
          Personal page patterns
        </p>
        <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white">
          An image-led story, with room for the words.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
          Use this pattern when a page benefits from a personal introduction.
          The photo establishes presence, while the narrative begins below it.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <div className="relative flex min-h-72 items-end overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-700 via-zinc-900 to-zinc-950 p-7 sm:p-10">
            <div className="absolute inset-0 bg-linear-to-r from-zinc-950/80 via-zinc-950/35 to-transparent" />
            <div className="relative z-10 max-w-xl">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
                Title-only hero
              </p>
              <h3 className="mt-3 text-4xl tracking-[-0.05em] text-white sm:text-5xl">
                Working with <span className="text-green-200">real</span>{" "}
                people.
              </h3>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Narrative section
            </p>
            <h3 className="mt-3 text-2xl tracking-[-0.04em] text-white">
              One clear idea, then the story.
            </h3>
            <p className="mt-6 text-base leading-7 text-zinc-300">
              Start with an unrestricted, full-width opening paragraph. Follow
              it with distinct labeled chapters, each using the standard
              eyebrow and section-heading treatment.
            </p>
            <blockquote className="mt-8 border-l-2 border-green-200 pl-5 text-lg leading-8 text-zinc-100">
              “Connection and relationship belong at the center of the story.”
            </blockquote>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="relative min-h-80 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
          <Image
            src="/coffee-connect.png"
            alt=""
            fill
            unoptimized
            className="pointer-events-none object-cover object-[50%_56%] brightness-[0.65]"
            sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-zinc-950/65 via-zinc-950/25 to-transparent" />
          <div className="relative z-10 max-w-2xl p-7 sm:p-10 lg:p-12">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Closing callout
            </p>
            <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white sm:text-4xl">
              Contextual imagery, quietly used
            </h2>
            <p className="mt-5 text-base leading-7 text-zinc-300">
              A personal image can support the invitation without becoming a
              second hero. Preserve its subject and protect readable copy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
