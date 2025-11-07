import HeroSection from "@/components/home/HeroSection";
import ProjectsCard from "@/components/home/ProjectsCard";
import ServicesCard from "@/components/home/ServicesCard";
import SocialsCard from "@/components/home/SocialsCard";
import BlogCard from "@/components/home/BlogCard";
import ContactCard from "@/components/home/ContactCard";
import StatsCard from "@/components/home/StatsCard";
import ExperienceCard from "@/components/home/ExperienceCard";

export default function Home() {
  return (
    <main className=" bg-zinc-950 p-4">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* First row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 min-w-0">
            <HeroSection />
          </div>
          <div className="lg:col-span-1 min-w-0">
            <ProjectsCard />
          </div>
          <div className="lg:col-span-1 min-w-0">
            <ExperienceCard />
          </div>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1 min-w-0">
            <BlogCard />
          </div>
          <div className="lg:col-span-2 min-w-0">
            <ServicesCard />
          </div>
          <div className="lg:col-span-1 min-w-0">
            <SocialsCard />
          </div>
        </div>

        {/* Third row */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-2 min-w-0">
            <StatsCard />
          </div>
          <div className="lg:col-span-2 min-w-0">
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}
