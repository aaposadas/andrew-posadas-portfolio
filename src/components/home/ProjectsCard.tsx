import { FolderCode } from "lucide-react";
import Link from "next/link";

export default function ProjectsCard() {
  return (
    <Link href="/projects">
      <div className="flex flex-col hover:scale-102 h-full gap-1 justify-between card-base">
        <FolderCode size={64} strokeWidth={1} />
        <div>
          <div>
            <span className=" text-gray-400">Showcase</span>
          </div>
          <div className="flex">
            <h3>Projects</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
