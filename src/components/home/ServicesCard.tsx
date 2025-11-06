import { BadgeInfo, FileCode2, CloudCog, Database } from "lucide-react";
import Link from "next/link";

export default function ServicesCard() {
  return (
    <Link href="/services">
      <div className="justify-between hover:scale-102 flex flex-col h-full card-base">
        <div className="flex gap-8">
          <BadgeInfo size={64} strokeWidth={1} />
          <FileCode2 size={64} strokeWidth={1} />
          <CloudCog size={64} strokeWidth={1} />
        </div>
        <div className="align-bottom">
          <h3>How I Can Help</h3>
        </div>
      </div>
    </Link>
  );
}
