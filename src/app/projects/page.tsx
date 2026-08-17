import Link from "next/link";

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  image: string;
  imagePosition?: string;
  tags: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Templo Siloé",
    eyebrow: "Live production site · Ozona, Texas",
    description:
      "A welcoming bilingual church presence that makes worship, prayer, family ministry, giving, and planning a visit easy to discover.",
    href: "https://templosiloe.org",
    image: "/templosiloe.png",
    tags: ["Bilingual", "Community", "Giving", "Responsive"],
    featured: true,
  },
  {
    title: "Brandon to Japan",
    eyebrow: "Live production site · Missionary support",
    description:
      "A warm, editorial home for Brandon Carrasco’s journey to Japan—bringing updates, prayer needs, and partnership opportunities into one clear experience.",
    href: "https://brandontojapan.org",
    image: "/brandontojapan.jpg",
    imagePosition: "center 28%",
    tags: ["Storytelling", "Newsletter", "Support", "Mobile-first"],
    featured: true,
  },
  {
    title: "Catfe",
    eyebrow: "Full-stack commerce",
    description:
      "An e-commerce experience with payment processing, authentication, and a polished product-first interface.",
    href: "https://github.com/aaposadas/stripe-estore-app",
    image: "/catfe.png",
    tags: ["Svelte 5", "PostgreSQL", "Stripe API", "Auth"],
  },
  {
    title: "BookInventory",
    eyebrow: "Inventory management",
    description:
      "A full-stack catalog and inventory system with Google Books discovery and user authentication.",
    href: "https://github.com/aaposadas/book-inventory-app",
    image: "/book-inv.png",
    tags: ["Angular 19", "ASP.NET Core", "MongoDB", "Google Books"],
  },
  {
    title: "Andrew Was Here",
    eyebrow: "Content platform",
    description:
      "A modern CMS-powered blog that pairs expressive motion with a flexible editorial workflow.",
    href: "https://github.com/aaposadas/andrew-was-here-blog",
    image: "/blogsite.png",
    tags: ["Next.js", "Tailwind CSS", "Contentful", "Lottie"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card group ${project.featured ? "project-card--featured" : ""}`}
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
          <h2>{project.title}</h2>
          <p className="project-card__description">{project.description}</p>
          <ul className="project-card__tags" aria-label={`${project.title} capabilities`}>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default function Works() {
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
      <section aria-labelledby="production-heading">
        <div className="projects-section-heading">
          <div>
            <p className="projects-kicker">On the web</p>
            <h2 id="production-heading">Featured production work</h2>
          </div>
          <p>Live, public-facing experiences built to be useful every day.</p>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">{featured.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>

      <section className="mt-16 sm:mt-24" aria-labelledby="archive-heading">
        <div className="projects-section-heading projects-section-heading--archive">
          <div>
            <p className="projects-kicker">More work</p>
            <h2 id="archive-heading">Product experiments &amp; applications</h2>
          </div>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{archive.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </section>
    </main>
  );
}
