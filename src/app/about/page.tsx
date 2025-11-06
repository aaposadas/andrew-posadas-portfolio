import Image from "next/image";
import Link from "next/link";
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
          <Link href="/contact" target="_self" rel="noopener noreferrer">
            <button className="rounded-full cursor-pointer border p-4 border-gray-800 bg-black hover:border-white hover:scale-110 transition-all group">
              <Mail
                size={32}
                strokeWidth={1}
                className="text-gray-400 group-hover:text-white transition-colors"
              />
            </button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/andrew-posadas-644065142/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full cursor-pointer border p-4 border-gray-800 bg-black hover:border-blue-500 hover:scale-110 transition-all group">
              <Linkedin
                size={32}
                strokeWidth={1}
                className="text-gray-400 group-hover:text-blue-500 transition-colors"
              />
            </button>
          </Link>
          <Link
            href="https://www.facebook.com/andrew.posadas.7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full cursor-pointer border p-4 border-gray-800 bg-black hover:border-blue-600 hover:scale-110 transition-all group">
              <Facebook
                size={32}
                strokeWidth={1}
                className="text-gray-400 group-hover:text-blue-600 transition-colors"
              />
            </button>
          </Link>

          <Link
            href="https://www.instagram.com/andee_123/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-full cursor-pointer border p-4 border-gray-800 bg-black hover:border-pink-500 hover:scale-110 transition-all group">
              <Instagram
                size={32}
                strokeWidth={1}
                className="text-gray-400 group-hover:text-pink-500 transition-colors"
              />
            </button>
          </Link>
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
          and collaboration over simple returns or faceless processes.
        </p>
        <p>
          As IT Manager at Christ Mission College, I learned how important it is
          for organizations to have someone who can make technology work for
          them. That passion for connecting people and tech started long before
          then. As a teenager, I was the one building MySpace pages for friends
          (very millennial), and as the son of first-generation Hispanic
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
