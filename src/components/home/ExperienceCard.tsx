import { ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ExperienceCard() {
  return (
    <Link href="/experience">
      <div className="flex flex-col gap-1 h-full card-base hover:scale-102 justify-between">
        <ShieldCheck size={64} strokeWidth={1} />
        <div>
          <div>
            <span className=" text-gray-400">More About Me</span>
          </div>
          <div>
            <h3>Experience</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
