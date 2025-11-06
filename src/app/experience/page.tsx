import Image from "next/image";
import { Compass, Contact } from "lucide-react";
import SocialsCard from "@/components/home/SocialsCard";
import ContactCard from "@/components/home/ContactCard";
import HeroSection from "@/components/home/HeroSection";

export default function Experience() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-6 lg:auto-rows-min gap-8 max-w-6xl mx-auto p-4">
      <div className="lg:col-span-2 lg:row-span-2 col-span-1 card-base min-w-0">
        <Image
          className="rounded-xl aspect-3/2 object-cover"
          src="/credentials_2.jpg"
          alt="Experience_Image"
          width={300}
          height={200}
        />
      </div>
      <div className="lg:col-span-4 order-first min-h-0 min-w-0">
        <div className="flex flex-row content-center items-center gap-2 p-4">
          <Compass color="#b9f8cf" size={48}></Compass>
          <h1>How we got here...</h1>
        </div>
      </div>
      <div className="lg:col-span-4 min-h-0 min-w-0">
        <div className="card-base">
          <div className="space-y-2 flex flex-col max-w-10/12">
            <h2>Andrew Posadas</h2>
            <p>
              IT professional with experience in management, cloud systems, and
              client support. Focused on bridging the gap between people and
              technology through clear communication and effective
              implementation.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 card-base min-w-0">
        <div className="flex flex-col">
          <h3>Experience</h3>
          <ul className="list-none space-y-6 mt-4">
            <li>
              <p className=" text-gray-400">May 2022 - Present</p>
              <h4>Technical Analyst II</h4>
              <p className="text-gray-400">Valorem Reply</p>
            </li>
            <li>
              <p className=" text-gray-400">May 2016 - May 2022</p>
              <h4>IT Manager</h4>
              <p className="text-gray-400">Christ Mission College</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="lg:col-span-3 card-base flex-col min-w-0">
        <h3>Education</h3>
        <ul className="list-none space-y-6">
          <li>
            <span className="text-lg font-bold">
              Azure Administrator Associate
            </span>
            <p className=" text-gray-400">Microsoft</p>
          </li>
          <li>
            <span className="text-lg font-bold">A+/Network+</span>
            <p className=" text-gray-400">CompTIA</p>
          </li>
          <li>
            <span className="text-lg font-bold">
              Bachelor of Science in Church Ministries
            </span>
            <p className=" text-gray-400">Christ Mission College</p>
          </li>
        </ul>
      </div>
      <div className="lg:col-span-2 min-w-0">
        <SocialsCard />
      </div>
      <div className="lg:col-span-4 min-w-0">
        <ContactCard />
      </div>
    </main>
  );
}
