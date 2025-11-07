import Image from "next/image";
import Link from "next/link";
import { FolderCode } from "lucide-react";

export default function Works() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="lg:col-span-6 flex flex-row items-center justify-center gap-4">
        <FolderCode className="text-green-300" size={32} />
        <h1>My Projects</h1>
      </div>

      <Link
        href="https://github.com/aaposadas/stripe-estore-app"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:col-span-3 hover:scale-102 col-span-1 card-base min-w-0 group hover:border-green-300/50 transition-all overflow-hidden p-0 relative min-h-[280px] sm:min-h-80 border-gray-800/30"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/catfe.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative p-6 flex flex-col justify-end min-h-[280px] sm:min-h-80">
          <h4 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
            Catfe: E-Commerce Platform
          </h4>
          <p className="text-gray-100 text-sm mb-4 drop-shadow">
            Full-stack e-commerce solution with payment processing and
            authentication
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Svelte 5
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              PostgreSQL
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Stripe API
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Authentication
            </span>
          </div>
        </div>
      </Link>

      <Link
        href="https://github.com/aaposadas/book-inventory-app"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:col-span-3 hover:scale-102 col-span-1 card-base min-w-0 group hover:border-green-300/50 transition-all overflow-hidden p-0 relative min-h-[280px] sm:min-h-80 border-gray-800/30"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/book-inv.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative p-6 flex flex-col justify-end min-h-[280px] sm:min-h-80]">
          <h4 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
            BookInventory: Full-stack Web App
          </h4>
          <p className="text-gray-100 text-sm mb-4 drop-shadow">
            Inventory management system with Google Books API integration and
            user authentication
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Angular 19
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              ASP.NET Core 8
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              MongoDB
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Google Books API
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Bootstrap
            </span>
          </div>
        </div>
      </Link>

      <Link
        href="https://github.com/aaposadas/andrew-was-here-blog"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:col-span-3 hover:scale-102 col-span-1 card-base min-w-0 group hover:border-green-300/50 transition-all overflow-hidden p-0 relative min-h-[280px] sm:min-h-80 border-gray-800/30"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/blogsite.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative p-6 flex flex-col justify-end min-h-[280px] sm:min-h-80">
          <h4 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
            AndrewWasHere: CMS Blog Site
          </h4>
          <p className="text-gray-100 text-sm mb-4 drop-shadow">
            Modern blog platform with headless CMS integration and smooth
            animations
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Next.js 13
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Tailwind CSS
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Lottie Animations
            </span>
            <span className="text-xs px-2 py-1 bg-black/60 backdrop-blur-sm text-gray-100 rounded border border-gray-500">
              Contentful CMS
            </span>
          </div>
        </div>
      </Link>
    </main>
  );
}
