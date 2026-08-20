import Image from "next/image";
import Link from "next/link";
import HeroChat from "@/components/home/HeroChat";
import HomeScrollReset from "@/components/home/HomeScrollReset";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaMicrosoft } from "react-icons/fa6";
import {
  SiAngular,
  SiAnthropic,
  SiContentful,
  SiDotnet,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiStripe,
  SiSvelte,
  SiSupabase,
  SiTailwindcss,
  SiVercel,
  SiZendesk,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { VscAzure } from "react-icons/vsc";

const strengths = [
  {
    number: "01",
    title: "Clear, practical problem solving",
    description:
      "I turn unclear needs and complicated systems into an understandable path forward.",
  },
  {
    number: "02",
    title: "Enterprise experience, personal approach",
    description:
      "I bring experience supporting clients, leading IT work, and working across teams, while staying close to the people the work affects.",
  },
  {
    number: "03",
    title: "From systems to the web",
    description:
      "My background spans cloud systems, technical support, and modern web development, helping me connect the big picture to the details.",
  },
];

const metrics = [
  { value: "10+", label: "Years in technology" },
  { value: "4+", label: "Years in enterprise consulting" },
  { value: "5", label: "Technical credentials" },
];

type Technology = {
  name: string;
  icon: IconType;
};

const technologies: Technology[] = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "Svelte", icon: SiSvelte },
  { name: "Angular", icon: SiAngular },
  { name: ".NET", icon: SiDotnet },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vercel", icon: SiVercel },
  { name: "Azure", icon: VscAzure },
  { name: "Supabase", icon: SiSupabase },
  { name: "Microsoft SQL Server", icon: DiMsqlServer },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Microsoft 365", icon: FaMicrosoft },
  { name: "Stripe", icon: SiStripe },
  { name: "Contentful", icon: SiContentful },
  { name: "Zendesk", icon: SiZendesk },
  { name: "OpenAI", icon: RiOpenaiFill },
  { name: "Claude", icon: SiAnthropic },
];

const featuredProjects = [
  {
    title: "Templo Siloé",
    eyebrow: "Live production site · Ozona, Texas",
    description:
      "A welcoming bilingual church presence that makes worship, prayer, family ministry, giving, and planning a visit easy to discover.",
    href: "https://templosiloe.org",
    image: "/templosiloe.png",
  },
  {
    title: "Brandon to Japan",
    eyebrow: "Live production site · Missionary support",
    description:
      "A warm, editorial home for Brandon Carrasco’s journey to Japan, bringing updates, prayer needs, and partnership opportunities into one clear experience.",
    href: "https://brandontojapan.org",
    image: "/brandontojapan.jpg",
    imagePosition: "center 28%",
  },
];

export default function Home() {
  return (
    <main className="bg-zinc-950 px-4 pb-16 sm:px-6 sm:pb-24">
      <HomeScrollReset />
      <section className="mx-auto max-w-6xl pt-4 lg:pt-6">
        <div className="grid overflow-hidden rounded-2xl border border-zinc-800 lg:grid-cols-12">
          <div className="flex min-h-[32rem] flex-col justify-between bg-linear-to-br from-zinc-900 to-zinc-950 p-7 sm:min-h-[36rem] sm:p-10 lg:col-span-6 lg:min-h-[40rem] lg:p-12">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
                Andrew Posadas · Technology Professional &amp; Web Developer
              </p>
              <h1 className="mt-6 max-w-xl text-4xl tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                A human approach to technology.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                I help people and organizations turn complex ideas into
                practical technology. With experience in enterprise consulting,
                IT leadership, cloud systems, and web development, I bring a
                thoughtful, hands-on approach to work that matters.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-green-200 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-green-200/70 hover:text-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
              >
                About me
              </Link>
            </div>
          </div>

          <div className="relative min-h-[30rem] border-t border-zinc-800 bg-zinc-900 lg:col-span-6 lg:min-h-[40rem] lg:border-t-0 lg:border-l">
            <Image
              src="/andrew-hero.jpg"
              alt="Andrew Posadas outdoors in West Texas"
              fill
              priority
              className="object-cover object-[64%_center]"
              quality={85}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-zinc-950/10 to-zinc-950/10" />
          </div>
        </div>
      </section>

      <section
        id="strengths"
        className="mx-auto max-w-6xl scroll-mt-8 pt-16 sm:pt-24"
      >
        <SectionHeading
          eyebrow="Professional strengths"
          title="What I bring to the work"
        />

        <RevealGroup className="mt-8 grid gap-4 md:grid-cols-3">
          {strengths.map((strength) => (
            <RevealItem key={strength.number}>
              <article className="flex min-h-64 flex-col rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8">
                <p className="text-[0.68rem] font-bold tracking-[0.18em] text-green-200/85">
                  {strength.number}
                </p>
                <h3 className="mt-12 text-2xl tracking-[-0.035em] text-white">
                  {strength.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {strength.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="mx-auto max-w-6xl pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="Experience at a glance"
          title="A foundation built over time"
          description="Technical depth, consulting perspective, and continued investment in the tools that help teams move forward."
          variant="split"
        />

        <RevealGroup as="dl" className="mt-4 grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <RevealItem
              key={metric.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-8"
            >
              <dd className="font-[family-name:var(--font-montserrat)] text-5xl font-bold tracking-[-0.06em] text-green-200 sm:text-6xl">
                {metric.value}
              </dd>
              <dt className="mt-3 text-sm font-medium text-zinc-300">
                {metric.label}
              </dt>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal className="mt-10 border-t border-zinc-800 pt-8 sm:mt-12">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
            Tools &amp; platforms
          </p>
          <ul className="mt-6 grid grid-cols-4 gap-y-7 sm:grid-cols-6 lg:grid-cols-[repeat(18,minmax(0,1fr))]">
            {technologies.map((technology) => {
              const Icon = technology.icon;

              return (
                <li
                  key={technology.name}
                  title={technology.name}
                  className="grid place-items-center"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-6 text-zinc-500 transition hover:text-green-200 sm:size-7"
                  />
                  <span className="sr-only">{technology.name}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured production work"
          description="Live, public-facing experiences built to be useful every day."
          variant="split"
        />

        <RevealGroup className="mt-6 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <RevealItem key={project.title}>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card group project-card--featured"
              >
                <div
                  className="project-card__image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundPosition: project.imagePosition ?? "center",
                  }}
                />
                <div className="project-card__wash" />
                <div className="project-card__content">
                  <p className="project-card__eyebrow">{project.eyebrow}</p>
                  <div className="mt-auto">
                    <h3 className="max-w-md text-3xl tracking-[-0.04em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-200">
                      {project.description}
                    </p>
                    <span className="mt-5 inline-block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-green-200">
                      Visit site
                    </span>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <Reveal className="mx-auto max-w-6xl">
        <section className="grid gap-10 border-y border-zinc-800 py-16 sm:py-24 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-green-200/85">
              How I work
            </p>
            <h2 className="mt-3 text-3xl tracking-[-0.04em] text-white sm:text-4xl">
              Good technology starts with listening.
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-zinc-300 lg:col-span-6 lg:col-start-7 lg:text-lg">
            <p>
              From leading IT at Christ Mission College to supporting enterprise
              clients at Valorem Reply, I&apos;ve learned that the best technical
              work starts by understanding the people behind the need. I bring
              patience, clear communication, and practical follow-through to
              work that can otherwise feel complicated or out of reach.
            </p>
            <p>
              Whether I&apos;m helping a team navigate a system, shape a new idea,
              or build for the web, my goal is to make the next step
              understandable and achievable.
            </p>
          </div>
        </section>
      </Reveal>

      <section className="mx-auto max-w-6xl pt-16 sm:pt-24">
        <SectionHeading
          eyebrow="Interactive example"
          title="Ask about the work behind this site."
          description="This portfolio includes a small AI assistant built with the OpenAI API and context about my background, projects, and technical approach. It is an example of the kind of practical, thoughtful AI experience I can implement."
        />
        <Reveal className="mt-8">
          <HeroChat />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl pt-16 sm:pt-24">
        <Reveal className="relative min-h-[26rem] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
          <Image
            src="/coffee-connect.png"
            alt=""
            fill
            className="pointer-events-none object-cover object-[50%_56%] brightness-[0.65]"
            quality={80}
            sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-zinc-950/65 via-zinc-950/25 to-transparent" />
          <div className="relative z-10 flex flex-col items-start p-7 sm:p-10 lg:p-12">
            <SectionHeading
              eyebrow="Let’s connect"
              title="Have something in mind?"
              description="Whether you’re building a team, shaping an idea, or looking for someone who can help make technology feel more approachable, I’d be glad to connect."
            />
            <Link
              href="/contact"
              className="mt-8 w-fit rounded-full bg-green-200 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
