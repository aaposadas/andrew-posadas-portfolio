import type { Metadata } from "next";
import IntakeForm from "@/components/consulting/IntakeForm";
import { getConsultingPlan } from "@/lib/consulting";

export const metadata: Metadata = { title: "Andrew Posadas | Technical Pro & Web Dev", robots: { index: false, follow: false } };

export default async function GetStartedPage({ searchParams }: { searchParams: Promise<{ plan?: string }> }) {
  const { plan } = await searchParams;
  const selectedPlan = getConsultingPlan(plan);
  return <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:py-20"><p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200/80">Andrew Posadas Technology Consulting</p><h1 className="mt-4 text-4xl tracking-[-0.05em] text-white sm:text-5xl">Tell me about your project.</h1><p className="mt-5 text-base leading-7 text-zinc-300">I’ll review your request, confirm availability, and make sure the selected package fits before anything is billed.</p><IntakeForm selectedPlan={selectedPlan?.slug} /></main>;
}
