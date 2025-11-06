import Image from "next/image";
import { Linkedin, Facebook, Instagram, Mail } from "lucide-react";

export default function About() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto p-4">
      <div className="card-base lg:order-first order-last flex flex-col items-center">
        <Image
          src="/about.jpg"
          className="rounded-xl w-full h-auto"
          width={300}
          height={300}
          alt="About_Me"
        />
        <div>
          <h3 className="">Andrew Posadas</h3>
          <span className=" text-gray-400">Alpine Texas</span>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full border p-4 border-gray-800 bg-black">
            <Linkedin size={32} strokeWidth={1} />
          </button>
          <button className="rounded-full border p-4 border-gray-800 bg-black">
            <Facebook size={32} strokeWidth={1} />
          </button>
          <button className="rounded-full border p-4 border-gray-800 bg-black">
            <Instagram size={32} strokeWidth={1} />
          </button>
          <button className="rounded-full border p-4 border-gray-800 bg-black">
            <Mail size={32} strokeWidth={1} />
          </button>
        </div>
      </div>
      <div className="col-span-2 space-y-4 flex flex-col justify-center p-2">
        <h1 className="text-white">
          A <span className="text-green-200">human</span> approach to tech.
        </h1>
        <p>
          Many of us are trying to make a real difference. Yet it can seem like
          the tools we need to do what we feel called to do are just outside
          reach, too complex or burdensome for us to take on. This is why I will
          always take a human approach to tech. An approach that values empathy
          and collaboration over simple returns or faceless processes.{" "}
        </p>
        <p>
          During my time as IT Manager at Christ Mission College, I saw
          firsthand how many organizations need a trusted advocate to help them
          navigate technology, especially when resources are limited. But my
          desire to bridge the gap between people and their tech started much
          earlier. As a teenager, I was the one building MySpace pages for
          friends (very millennial), and as the son of first-generation Hispanic
          parents, I was often the go-to tech support at home. Those experiences
          shaped how I approach my work today: with patience, empathy, and a
          genuine desire to make technology accessible to everyone.
        </p>
        <p>
          I’ve always seen my role as part educator, part builder; helping
          others understand their options and make confident choices. Outside of
          my full-time role, I occasionally take on small projects or provide
          guidance to teams looking for practical, people-focused solutions. My
          goal is simple: to make technology feel approachable and empowering.
        </p>
      </div>
    </main>
  );
}
