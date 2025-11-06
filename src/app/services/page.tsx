"use client";

import { useState } from "react";
import { BadgeInfo, FileCode2, CloudCog, Database } from "lucide-react";
import ContactCard from "@/components/home/ContactCard";
import ProjectsCard from "@/components/home/ProjectsCard";
import ExperienceCard from "@/components/home/ExperienceCard";

export default function Services() {
  type ServiceKey = "support" | "web" | "cloud";
  const [selectedService, setSelectedService] = useState<ServiceKey>("web");

  const services = {
    web: {
      title: "Web Application Development",
      icon: FileCode2,
      description:
        "I can design and develop modern, scalable web applications using frameworks such as Svelte, Angular, and ASP.NET. Whether creating internal tools or full-featured public sites, I focus on clean architecture, responsive design, and maintainable code that fits your team’s workflow and long-term goals.",
    },
    cloud: {
      title: "Cloud Migration & Optimization",
      icon: CloudCog,
      description:
        "I can assist organizations in transitioning from on-premise or legacy environments to the cloud — including setup and configuration of compute, storage, and networking resources on platforms such as Azure and AWS. Projects are scoped to specific workloads or departments to ensure a focused, low-risk migration.",
    },
    support: {
      title: "Part-Time Technical Support/Advisory",
      icon: BadgeInfo,
      description:
        "I can provide part-time, independent technical support and advisory services for teams that need short-term assistance with troubleshooting, systems optimization, or infrastructure improvements. Each engagement is project-based and scoped to fit limited availability, making it ideal for small organizations that need expert help without a long-term commitment.",
    },
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-6 gap-8 max-w-6xl mx-auto p-4">
      <div className="lg:col-span-6 flex flex-col items-center px-4 gap-4">
        <h1>How I Can Help</h1>
        <span className="text-gray-400 italic">
          Independent freelance work performed outside my full-time employment.
          Not affiliated with or endorsed by my employer.
        </span>
      </div>

      <div className="lg:col-span-6 grid grid-cols-1 lg:grid-cols-2 gap-8 card-base">
        {/* Left side - Service list */}
        <div className="flex lg:flex-col flex-row gap-2 lg:gap-0">
          {Object.entries(services).map(([key, service]) => {
            const Icon = service.icon;
            return (
              <div
                key={key}
                onClick={() => setSelectedService(key as ServiceKey)}
                className={`cursor-pointer p-4 rounded-lg transition-all flex items-center gap-8 ${
                  selectedService === key
                    ? "text-green-300 bg-gray-800/50"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                }`}
              >
                <Icon size={48} />
                <h4 className="lg:w-3/4 lg:block hidden">{service.title}</h4>
              </div>
            );
          })}
        </div>

        {/* Right side - Service details */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {(() => {
              const Icon = services[selectedService].icon;
              return <Icon size={32} />;
            })()}
            <span className="text-white text-xl font-bold">
              {services[selectedService].title}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {services[selectedService].description}
          </p>
        </div>
      </div>
      <div className="lg:col-span-2">
        <ProjectsCard />
      </div>
      <div className="lg:col-span-2">
        <ExperienceCard />
      </div>
      <div className="lg:col-span-2">
        <ContactCard />
      </div>
    </main>
  );
}
