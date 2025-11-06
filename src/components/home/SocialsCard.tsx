import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function SocialsCard() {
  return (
    <div className="flex flex-col h-full gap-1 card-base">
      <span className=" text-gray-400">Connect with Me</span>
      <h3>Socials</h3>
      <div className="flex flex-row gap-4">
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
          href="https://github.com/aaposadas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded-full border cursor-pointer p-4 border-gray-800 bg-black hover:border-white hover:scale-110 transition-all group">
            <Github
              size={32}
              strokeWidth={1}
              className="text-gray-400 group-hover:text-white transition-colors"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
