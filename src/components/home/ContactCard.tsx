import Link from "next/link";
export default function ContactCard() {
  return (
    <Link href="/contact">
      <div className="card-base hover:scale-102 flex gap-8 rounded-xl  h-full items-center">
        <h1>
          Let's build
          <br /> <span className="text-green-200">together</span>
        </h1>
      </div>
    </Link>
  );
}
