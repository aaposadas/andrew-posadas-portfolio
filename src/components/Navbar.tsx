"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full border-b border-zinc-900/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-center">
          <div className="flex items-center gap-0.5 sm:gap-2 lg:gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll
                  className={`relative px-2 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition-colors sm:px-3 ${
                    isActive
                      ? "text-white after:absolute after:inset-x-3 after:-bottom-1 after:h-px after:bg-green-200"
                      : "text-zinc-400 hover:text-green-200"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
