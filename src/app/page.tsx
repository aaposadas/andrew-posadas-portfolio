import HeroChat from "@/components/home/HeroChat";
import ProjectsCard from "@/components/home/ProjectsCard";
import ServicesCard from "@/components/home/ServicesCard";
import ExperienceCard from "@/components/home/ExperienceCard";

export default function Home() {
  return (
    <main className="bg-zinc-950 px-4 pb-4">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 xl:h-[min(45rem,calc(100svh-7rem))] xl:grid-cols-4 xl:grid-rows-3">
        <div className="min-w-0 xl:col-span-2 xl:row-span-3">
          <HeroChat />
        </div>
        <div className="min-w-0 xl:col-span-2">
          <ProjectsCard />
        </div>
        <div className="min-w-0 xl:col-span-2">
          <ExperienceCard />
        </div>
        <div className="min-w-0 xl:col-span-2">
          <ServicesCard />
        </div>
      </div>
    </main>
  );
}
