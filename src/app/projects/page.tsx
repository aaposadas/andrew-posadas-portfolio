import Image from "next/image";
import Link from "next/link";
import { FolderCode } from "lucide-react";

export default function Works() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-6 gap-8 max-w-6xl mx-auto p-4">
      <div className="lg:col-span-6 flex flex-row items-center justify-center gap-4">
        <FolderCode className="text-green-300" size={32} />
        <h1>My Projects</h1>
      </div>

      <Link
        href="https://github.com/aaposadas/stripe-estore-app"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:col-span-3 col-span-1 card-base min-w-0 group hover:border-green-300/50 transition-all overflow-hidden p-0"
      >
        <div className="relative h-48 w-full overflow-hidden bg-gray-900">
          <Image
            src={"/catfe.png"}
            alt="Catfe Project"
            width={800}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-6">
          <h4 className="text-xl font-bold text-white mb-2">
            Catfe: E-Commerce Platform
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Full-stack e-commerce solution with payment processing and
            authentication
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Svelte 5
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              PostgreSQL
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Stripe API
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Authentication
            </span>
          </div>
        </div>
      </Link>

      <Link
        href="https://github.com/aaposadas/book-inventory-app"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:col-span-3 col-span-1 card-base min-w-0 group hover:border-green-300/50 transition-all overflow-hidden p-0"
      >
        <div className="relative h-48 w-full overflow-hidden bg-gray-900">
          <Image
            src={"/bookinventory.png"}
            alt="BookInventory Project"
            width={800}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-6">
          <h4 className="text-xl font-bold text-white mb-2">
            BookInventory: Full-stack Web App
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Inventory management system with Google Books API integration and
            user authentication
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Angular 19
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              ASP.NET Core 8
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              MongoDB
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Google Books API
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Bootstrap
            </span>
          </div>
        </div>
      </Link>

      <Link
        href="https://github.com/aaposadas/andrew-was-here-blog"
        target="_blank"
        rel="noopener noreferrer"
        className="lg:col-span-3 col-span-1 card-base min-w-0 group hover:border-green-300/50 transition-all overflow-hidden p-0"
      >
        <div className="relative h-48 w-full items-center overflow-hidden bg-gray-900">
          <Image
            src={"/blogsite.png"}
            alt="AndrewWasHere Project"
            width={800}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-6">
          <h4 className="text-xl font-bold text-white mb-2">
            AndrewWasHere: CMS Blog Site
          </h4>
          <p className="text-gray-400 text-sm mb-4">
            Modern blog platform with headless CMS integration and smooth
            animations
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Next.js 13
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Tailwind CSS
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Lottie Animations
            </span>
            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
              Contentful CMS
            </span>
          </div>
        </div>
      </Link>
    </main>
  );
}
