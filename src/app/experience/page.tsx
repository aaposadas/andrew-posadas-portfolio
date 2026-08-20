import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const certifications = [
  {
    name: "Azure Administrator Associate",
    provider: "Microsoft",
    featured: true,
  },
  { name: "Azure Fundamentals", provider: "Microsoft" },
  { name: "Power Platform Fundamentals", provider: "Microsoft" },
  { name: "CompTIA Network+", provider: "CompTIA" },
  { name: "CompTIA A+", provider: "CompTIA" },
];

const roles = [
  {
    dates: "Jan 2026 - Present",
    location: "Kansas City, MO · Remote",
    company: "Valorem Reply",
    title: "Technical Analyst III",
    highlights: [
      "Lead root-cause investigations with engineering to deliver long-term fixes across Angular and ASP.NET applications.",
      "Build full-stack fixes for support-driven defects across the front end and backend APIs.",
      "Develop AI-powered automation, including intelligent agents and MCP integrations, to improve support workflows.",
    ],
  },
  {
    dates: "Apr 2022 - Jan 2026",
    location: "Kansas City, MO · Remote",
    company: "Valorem Reply",
    title: "Technical Analyst II",
    highlights: [
      "Managed an average of 80 Zendesk tickets each week for Microsoft platform projects while coordinating with project managers, developers, and engineers.",
      "Used SQL and Angular and ASP.NET code analysis to identify root causes and speed up bug resolution.",
      "Built Zendesk and Power BI reporting and maintained Azure DevOps escalation tracking for clearer project visibility.",
    ],
  },
  {
    dates: "May 2016 - Apr 2022",
    location: "San Antonio, TX",
    company: "Christ Mission College",
    title: "IT Manager",
    highlights: [
      "Established IT manuals, procedures, and security practices for a 40 to 50 person staff and student community.",
      "Led Office 365 and Microsoft 365 adoption and improved the organization's network infrastructure and connectivity.",
      "Maintained a fleet of about 20 devices, including patching, security, and hardware upkeep.",
    ],
  },
];

const sectionClassName = "mx-auto max-w-6xl pt-16 sm:pt-24";

export default function Experience() {
  return (
    <main className="bg-zinc-950 px-4 pb-16 sm:px-6 sm:pb-24">
      <section className="mx-auto max-w-6xl pt-4 sm:pt-6">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 to-zinc-950 p-7 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgb(134_239_172_/_0.16),transparent_20rem)]" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -bottom-16 hidden font-[family-name:var(--font-montserrat)] text-[13rem] font-bold leading-none tracking-[-0.1em] text-green-200/[0.07] sm:block lg:text-[16rem]"
          >
            10+
          </div>
          <div className="relative z-10">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Professional experience
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Experience built around people and technology.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
              Over ten years in technology have taken me from IT leadership to
              enterprise support, full-stack troubleshooting, cloud systems,
              and practical AI automation.
            </p>
            <p className="mt-8 border-t border-zinc-800 pt-6 text-sm text-zinc-400 sm:mt-12">
              Currently: Technical Analyst III at Valorem Reply
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 border-b border-zinc-800 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
            Professional snapshot
          </p>
          <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white sm:text-4xl">
            Bridging support, engineering, and AI.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-8 text-zinc-300 lg:col-span-6 lg:col-start-7 lg:text-lg">
          <p>
            My work sits at the point where people&apos;s needs meet the systems
            behind them. I translate complex issues into clear next steps,
            partner with engineering on long-term fixes, and keep the end-user
            perspective present in technical decisions.
          </p>
          <p>
            Today, that includes investigating issues across Angular and ASP.NET
            applications, building support-driven fixes, and applying AI agents
            and MCP integrations to make support work more effective. Earlier
            IT leadership experience gave me a durable foundation in
            infrastructure, Microsoft 365, security, and the day-to-day
            technology an organization depends on.
          </p>
        </div>
      </section>

      <section className={sectionClassName}>
        <SectionHeading
          eyebrow="Career timeline"
          title="A path built through real responsibility."
          description="From leading day-to-day IT operations to resolving complex product issues and building better support systems."
          variant="split"
        />

        <ol className="divide-y divide-zinc-800">
          {roles.map((role) => (
            <li key={`${role.company}-${role.title}`} className="grid gap-6 py-8 sm:py-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-3">
                <p className="text-sm text-green-200">{role.dates}</p>
                <p className="mt-1 text-sm text-zinc-500">{role.location}</p>
              </div>
              <div className="lg:col-span-9">
                <p className="text-sm text-zinc-400">{role.company}</p>
                <h3 className="mt-2 text-2xl tracking-[-0.035em] text-white">
                  {role.title}
                </h3>
                <ul className="mt-6 grid gap-3 text-base leading-7 text-zinc-300 sm:text-lg">
                  {role.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={sectionClassName}>
        <SectionHeading
          eyebrow="Credentials & education"
          title="A foundation that keeps growing."
          description="Certifications in cloud, Microsoft platforms, networking, and IT support complement hands-on experience."
          variant="split"
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Certifications
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {certifications.map((certification) => (
                <li
                  key={certification.name}
                  className={`group relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-green-200/40 hover:bg-zinc-900 sm:p-7 ${
                    certification.featured ? "sm:col-span-2" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4 -bottom-3 font-[family-name:var(--font-montserrat)] text-5xl font-bold tracking-[-0.08em] text-zinc-100/[0.05] transition group-hover:text-green-200/[0.12] sm:text-6xl"
                  >
                    {certification.provider}
                  </span>
                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <p className="max-w-xs text-lg font-medium text-white">
                      {certification.name}
                    </p>
                    <p className="mt-6 text-sm text-zinc-400">
                      {certification.provider}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
                Education
              </p>
              <h3 className="mt-5 text-2xl tracking-[-0.035em] text-white">
                Bachelor in Church Ministries
              </h3>
              <p className="mt-3 text-base text-zinc-300">Christ Mission College</p>
              <p className="mt-1 text-sm text-zinc-400">San Antonio, TX · May 2017</p>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className="relative isolate overflow-hidden rounded-2xl border border-zinc-800 bg-linear-to-br from-zinc-900 via-zinc-900 to-green-950/35 p-7 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 size-96 rounded-full border border-green-200/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-12 size-64 rounded-full border border-green-200/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-24 top-20 size-28 rounded-full border border-green-200/10"
          />
          <div className="relative z-10">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              Next step
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl tracking-[-0.04em] text-white sm:text-4xl">
              Let&apos;s keep the conversation going.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
              Explore the work I&apos;ve built, or get in touch if you think my
              background could be a fit for your team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-green-200 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
              >
                View selected work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-green-200/70 hover:text-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
