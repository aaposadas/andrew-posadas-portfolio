"use client";

import { useState } from "react";
import Image from "next/image";
import { Linkedin, Facebook, Instagram, Mail, Github } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <main className="grid grid-cols-1 lg:grid-cols-6 gap-8 max-w-6xl mx-auto p-4">
      <div className="lg:col-span-6 gap-2 flex flex-col">
        <h2>
          Let’s <span className="text-green-300">Connect</span>
        </h2>
        <span className="lg:w-10/12">
          I enjoy hearing from others working to make technology more
          approachable and effective. Whether you’re exploring ideas, need
          technical perspective, or just want to compare notes, feel free to
          reach out. I occasionally take on small, independent projects outside
          my full-time role and am always open to meaningful conversations about
          tech and impact.
        </span>
      </div>
      <div className="card-base col-span-3 order-last flex flex-col items-center">
        <Image
          src="/contact-card2.png"
          className="rounded-xl w-full h-auto"
          width={400}
          height={400}
          alt="contact_card"
        />
        <div className="flex gap-2">
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
            <button className="rounded-full cursor-pointer border p-4 border-gray-800 bg-black hover:border-white hover:scale-110 transition-all group">
              <Github
                size={32}
                strokeWidth={1}
                className="text-gray-400 group-hover:text-white transition-colors"
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
      <div className="col-span-3">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-green-400"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="border border-green-300 cursor-pointer bg-green-300 text-black hover:bg-green-400 hover:border-green-400 px-6 py-3 rounded-lg transition-all font-medium"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
