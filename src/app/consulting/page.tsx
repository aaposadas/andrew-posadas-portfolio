import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { consultingAvailability, consultingPlans } from "@/lib/consulting";

export const metadata: Metadata = {
  title: "Andrew Posadas | Technical Pro & Web Dev",
  robots: { index: false, follow: false },
};

export default function ConsultingPage() {
  const availability = consultingAvailability;
  const reservedPercentage = Math.round((availability.reservedSpots / availability.totalSpots) * 100);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20">
      <section className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(14rem,19rem)] md:gap-10">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900 md:order-2">
          <Image
            alt="People sketching a user flow together"
            className="object-cover object-[55%_62%] brightness-[0.8] saturate-[0.85]"
            fill
            priority
            sizes="(min-width: 768px) 19rem, 100vw"
            src="/consulting-collaboration.jpg"
          />
        </div>
        <div className="md:order-1">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Andrew Posadas Technology Consulting</p>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-[-0.055em] text-white">Bridging people and technology.</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">I love helping people and organizations bring their ideas to life. Drawing on years of experience in enterprise technology consulting, I help turn your vision into something real, so you can focus on what matters most to you.</p>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-6 sm:p-7" aria-labelledby="availability-heading">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Current availability</p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div><h2 id="availability-heading" className="text-2xl text-white">Limited quarterly availability</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">To provide personal, hands-on support, I accept a limited number of new website and consulting clients each quarter.</p></div>
          {availability.acceptingClients ? <div className="w-full shrink-0 sm:max-w-64"><p className="text-sm font-semibold text-green-200">{availability.quarter} · {availability.reservedSpots} of {availability.totalSpots} project spots reserved</p><div aria-label={`${availability.reservedSpots} of ${availability.totalSpots} project spots reserved`} aria-valuemax={availability.totalSpots} aria-valuemin={0} aria-valuenow={availability.reservedSpots} className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800" role="progressbar"><div className="h-full rounded-full bg-green-200" style={{ width: `${reservedPercentage}%` }} /></div></div> : <p className="shrink-0 text-sm font-semibold text-green-200">{availability.quarter} bookings are currently full.</p>}
        </div>
      </section>

      <section className="mt-12" aria-labelledby="packages-heading">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Service packages</p>
        <h2 id="packages-heading" className="mt-3 text-3xl tracking-[-0.04em] text-white">Choose a starting point.</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {consultingPlans.map((plan) => (
            <article className="flex min-h-[29rem] flex-col rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-6 sm:p-7" key={plan.slug}>
              <div><h3 className="text-2xl text-white">{plan.name}</h3><p className="mt-2 text-base text-green-200">{plan.tagline}</p></div>
              <div className="mt-6 border-y border-zinc-800 py-5">
                {plan.consultation && <div className="mb-5 border-b border-zinc-800 pb-5"><p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Start with a consultation</p><p className="mt-2 text-sm text-zinc-500 line-through">Regular: {plan.consultation.regularPrice}</p><p className="mt-1 text-base font-semibold text-white">Founding Client Pricing: {plan.consultation.foundingPrice}</p><p className="mt-2 text-xs leading-5 text-zinc-500">Focused conversation, high-level review, and a clear next-step recommendation. {plan.consultation.credit}</p></div>}
                {plan.regularPrice && <p className="text-sm text-zinc-500 line-through">Regular: {plan.regularPrice}</p>}
                {plan.foundingPrice ? <><p className="mt-1 text-lg font-semibold text-white">Founding Client Pricing: {plan.foundingPrice}</p><p className="mt-1 text-xs text-zinc-500">Plus applicable sales tax.</p>{plan.consultation && <p className="mt-1 text-xs text-zinc-500">Monthly service begins after the site is accepted.</p>}</> : <p className="text-lg font-semibold text-white">Custom fixed-price quote</p>}
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-300">{plan.features.map((feature) => <li className="flex gap-3" key={feature}><span className="mt-2 size-1.5 shrink-0 rounded-full bg-green-200" />{feature}</li>)}</ul>
              <div className="mt-6 border-t border-zinc-800 pt-5"><p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Best for</p><p className="mt-2 text-sm leading-6 text-zinc-400">{plan.bestFor}</p></div>
              {plan.scopeNote && <p className="mt-5 text-xs leading-5 text-zinc-500">{plan.scopeNote}</p>}
              <Link className={`mt-auto pt-7 ${availability.acceptingClients ? "inline-flex" : "pointer-events-none opacity-50"}`} href={`/consulting/get-started?plan=${plan.slug}`}><span className="inline-flex min-h-11 items-center justify-center rounded-xl bg-green-200 px-5 py-3 text-sm font-bold text-black">{availability.acceptingClients ? plan.cta : "Bookings currently full"}</span></Link>
            </article>
          ))}
        </div>
      </section>
      <p className="mt-12 text-center text-xs text-zinc-600">Andrew Posadas, d.b.a. Andrew Posadas Technology Consulting</p>
    </main>
  );
}
