import Link from "next/link";
import SpriteAvatar from "@/components/SpriteAvatar";

export default function HeroSection() {
  return (
    <Link href="/about">
      <div className="card-base  hover:scale-102 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 items-center overflow-hidden">
        <div className="shrink-0 w-42 sm:w-44 lg:w-48">
          <SpriteAvatar />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm lg:text-base text-gray-400">
            Technical Professional & Web Developer
          </span>
          <h2>Andrew Posadas</h2>
          <span className="text-sm lg:text-base text-gray-300">
            Empowering teams and nonprofits through practical, modern tech.
          </span>
        </div>
      </div>
    </Link>
  );
}
