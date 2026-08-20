import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

const sectionClassName = "mx-auto max-w-6xl pt-16 sm:pt-24";
const bodyCopyClassName = "text-base leading-8 text-zinc-300 sm:text-lg";

export default function About() {
  return (
    <main className="bg-zinc-950 px-4 pb-16 sm:px-6 sm:pb-24">
      <section className="mx-auto max-w-6xl pt-4 sm:pt-6">
        <div className="relative min-h-[34rem] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 sm:min-h-[38rem]">
          <Image
            src="/andrew-family-hero.jpg"
            alt="Andrew Posadas with his wife and daughter"
            fill
            priority
            className="object-cover object-[58%_20%]"
            quality={85}
            sizes="(min-width: 1280px) 1152px, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
          />
          <div className="absolute inset-0 bg-linear-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/10" />
          <div className="relative z-10 flex min-h-[34rem] max-w-2xl flex-col justify-end p-7 sm:min-h-[38rem] sm:p-10 lg:p-12">
            <h1 className="text-5xl tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Working with <span className="text-green-200">real</span> people.
            </h1>
          </div>
        </div>
      </section>

      <section className={sectionClassName}>
        <div className={bodyCopyClassName}>
          <p>
            A goal of mine is that in every project, I connect with the very
            real people affected by the work. I am continuously striving to
            bridge the gap between the sometimes intimidating world of
            technology and people with ambitions and dreams they want to see
            fulfilled. I love moments of connection and relationship, where we
            are able to see each other as people and work together toward an
            end goal.
          </p>

          <div className="mt-12">
            <SectionHeading
              eyebrow="What matters to me"
              title="Family, integrity, and compassion."
            />
          </div>

          <p className="mt-6">
            My family is the most important relationship in my life. I am
            blessed with a great wife and amazing daughter, as well as a close
            relationship with my parents, who instilled in me values like
            compassion and integrity from an early age. My hope is to bring
            those values into the professional and technological world and be
            an example through my work. Whatever my career may bring, I have
            promised to always take a human approach to technology and put
            empathy and collaboration over returns and processes.
          </p>
        </div>
      </section>

      <section className={sectionClassName}>
        <figure className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 sm:p-10 lg:p-12">
          <blockquote className="max-w-4xl font-[family-name:var(--font-montserrat)] text-3xl font-bold leading-tight tracking-[-0.045em] text-white sm:text-4xl lg:text-5xl">
            “I love moments of{" "}
            <span className="text-green-200">connection and relationship</span>
            , where we are able to see each other as people and work together
            toward an end goal.”
          </blockquote>
        </figure>
      </section>

      <section className={sectionClassName}>
        <SectionHeading
          eyebrow="Where it started"
          title="Helping people make technology work."
        />
        <div className={`mt-8 ${bodyCopyClassName}`}>
          <p>
            I remember as a teenager, I would help friends with their websites,
            and growing up with first-generation Hispanic parents, I became
            family tech support. It has always been a part of me to help others
            with technology and bridge the gaps so that people are not limited
            to what they currently know. I think technology should be and can be
            accessible to anyone. During my time serving as IT Manager at Christ
            Mission College, I received the necessary foundational training to
            establish my career as an IT expert. Now, after four years of
            consulting and providing support at an enterprise level, it is my
            goal to continue making technology feel approachable and empowering.
          </p>
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
            <SectionHeading
              eyebrow="Next step"
              title="Learn more about my experience."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/experience"
                className="rounded-full bg-green-200 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
              >
                Explore my experience
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-green-200/70 hover:text-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
              >
                Get in touch
              </Link>
              <Link
                href="https://www.linkedin.com/in/andrew-posadas-644065142/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-green-200/70 hover:text-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-200"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
