"use client";

import { useState } from "react";
import { consultingPlans, type ConsultingPlan } from "@/lib/consulting";

const featureOptions = ["Contact forms", "Events/calendar", "Donations/payments", "CMS/content editing", "Blog/news", "Authentication/member area", "Analytics", "Existing-site migration", "Third-party integrations", "Not sure", "Other"];
const fieldClass = "mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-green-200 focus:ring-2 focus:ring-green-200/20";
const labelClass = "text-sm font-medium text-zinc-200";

export default function IntakeForm({ selectedPlan }: { selectedPlan?: ConsultingPlan["slug"] }) {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [plan, setPlan] = useState(selectedPlan ?? "");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const features = new FormData(form).getAll("features").map(String);
    try {
      const response = await fetch("/api/consulting-request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, features }) });
      if (!response.ok) throw new Error((await response.json()).error ?? "Unable to submit your request.");
      window.location.assign("/consulting/request-received");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Unable to submit your request.");
    }
  }

  return (
    <form className="mt-10 rounded-2xl border border-zinc-800/80 bg-linear-to-br from-zinc-800 to-zinc-950 p-6 sm:p-8" onSubmit={submit}>
      <div aria-hidden="true" className="hidden">
        <label>Company website<input autoComplete="off" name="companyWebsite" tabIndex={-1} /></label>
      </div>
      <div className="rounded-xl border border-green-200/20 bg-green-200/10 px-4 py-3 text-sm text-zinc-200">You&apos;re requesting: <strong className="text-white">{consultingPlans.find((consultingPlan) => consultingPlan.slug === plan)?.name ?? "Choose a service"}</strong></div>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>Full name<input className={fieldClass} name="name" required /></label>
        <label className={labelClass}>Organization name <span className="text-zinc-500">(if applicable)</span><input className={fieldClass} name="organization" /></label>
        <label className={labelClass}>Email<input className={fieldClass} name="email" required type="email" /></label>
        <label className={labelClass}>Phone <span className="text-zinc-500">(optional)</span><input className={fieldClass} name="phone" type="tel" /></label>
        <label className={`${labelClass} sm:col-span-2`}>Selected service<select className={fieldClass} name="plan" onChange={(event) => setPlan(event.target.value)} required value={plan}><option disabled value="">Select a service</option>{consultingPlans.map((consultingPlan) => <option key={consultingPlan.slug} value={consultingPlan.slug}>{consultingPlan.name}</option>)}</select></label>
        <label className={`${labelClass} sm:col-span-2`}>Existing website URL <span className="text-zinc-500">(optional)</span><input className={fieldClass} name="websiteUrl" placeholder="https://" type="url" /></label>
        <label className={`${labelClass} sm:col-span-2`}>Project description<textarea className={fieldClass} name="description" required rows={5} /></label>
        <label className={labelClass}>Approximate site size<select className={fieldClass} name="siteSize" required><option value="">Select one</option>{["1–5 pages", "6–10 pages", "10+ pages", "Not sure", "Not applicable"].map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className={labelClass}>Domain status<select className={fieldClass} name="domainStatus" required><option value="">Select one</option>{["I already own a domain", "I need a domain", "I’m not sure", "Not applicable"].map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className={`${labelClass} sm:col-span-2`}>Desired timeline<select className={fieldClass} name="timeline" required><option value="">Select one</option>{["Flexible", "Within 1 month", "1–2 months", "2–3 months", "Not sure"].map((option) => <option key={option}>{option}</option>)}</select></label>
      </div>
      <fieldset className="mt-7"><legend className={labelClass}>Desired features</legend><p className="mt-1 text-sm text-zinc-500">These help with discovery and do not promise inclusion in a package.</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{featureOptions.map((feature) => <label className="flex items-center gap-3 text-sm text-zinc-300" key={feature}><input className="size-4 accent-green-200" name="features" type="checkbox" value={feature} />{feature}</label>)}</div></fieldset>
      <label className={`mt-7 block ${labelClass}`}>Additional notes <span className="text-zinc-500">(optional)</span><textarea className={fieldClass} name="notes" rows={4} /></label>
      <p className="mt-7 border-t border-zinc-800 pt-5 text-sm leading-6 text-zinc-400">Submitting this request does not create a service agreement or initiate billing. Availability, project scope, final pricing, and any applicable sales tax will be confirmed before services begin.</p>
      <button className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl bg-green-200 px-5 py-3 text-sm font-bold text-black transition hover:bg-green-100 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400" disabled={status === "sending"} type="submit">{status === "sending" ? "Submitting…" : "Submit Project Request"}</button>
      {status === "error" && <p className="mt-4 text-sm text-red-300" role="alert">{error}</p>}
    </form>
  );
}
