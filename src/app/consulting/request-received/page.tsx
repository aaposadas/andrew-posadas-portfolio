import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Andrew Posadas | Technical Pro & Web Dev", robots: { index: false, follow: false } };

export default function RequestReceivedPage() {
  return <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24"><Reveal><section className="rounded-3xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-7 sm:p-10"><p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Andrew Posadas Technology Consulting</p><h1 className="mt-4 text-4xl tracking-[-0.05em] text-white sm:text-5xl">Request received.</h1><p className="mt-6 text-base leading-7 text-zinc-300">Thanks for reaching out. I’ll review your project, confirm availability, and make sure the selected package fits before anything is billed.</p><p className="mt-4 text-base leading-7 text-zinc-400">If the project is a good fit, the next step will be a project agreement outlining the exact scope and pricing.</p><div className="mt-8 flex flex-wrap gap-3"><Link className="inline-flex min-h-11 items-center justify-center rounded-xl bg-green-200 px-5 py-3 text-sm font-bold text-black" href="/">Back to Home</Link><Link className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-700 bg-black/30 px-5 py-3 text-sm font-bold text-zinc-100" href="/consulting">View Services</Link></div></section></Reveal></main>;
}
