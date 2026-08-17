"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

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
          <div className="rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-6 sm:p-7"><p className="text-sm font-semibold text-white">Actions</p><div className="mt-5 flex flex-wrap gap-3"><button className="inline-flex min-h-11 items-center justify-center rounded-xl bg-green-200 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950" onClick={() => setAction("Primary action")}>Primary action <ArrowUpRight className="ml-2" size={16} /></button><button className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-700 bg-black/30 px-5 py-3 text-sm font-bold text-zinc-100 transition hover:border-green-200/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200 focus-visible:ring-offset-4 focus-visible:ring-offset-zinc-950" onClick={() => setAction("Secondary action")}>Secondary action</button></div><p className="mt-5 text-sm text-zinc-400">Selected state: <span className="text-green-200">{action}</span></p></div>
          <form className="rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-6 sm:p-7" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label className="mb-2 block text-sm font-medium text-zinc-200" htmlFor="guide-email">Field control</label><input className="w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-green-200 focus:ring-2 focus:ring-green-200/20" id="guide-email" type="email" placeholder="you@example.com" /><button className="mt-4 inline-flex min-h-11 items-center justify-center rounded-xl bg-green-200 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-100" type="submit">Test form state</button>{sent && <p className="mt-3 flex items-center gap-2 text-sm text-green-200"><Check size={16} /> Clear feedback stays close to the action.</p>}</form>
        </div>
      </section>
    </main>
  );
}
