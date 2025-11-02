"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import BorderPattern from "./BorderPattern";
import BorderNoPattern from "./BorderNoPattern";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b border-zinc-600">
      {/* Top bar */}
      <div className="flex items-stretch h-20 relative">
        {/* Left Border - ALWAYS visible */}
        <BorderNoPattern side="left" />

        {/* Center Container */}
        <div className="flex-1 flex justify-between items-center px-4 sm:px-6 text-white">
          {/* Logo + Name */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png" // 🔹 replace with your actual logo path
              alt="Logo"
              width={46}
              height={46}
              className="object-contain"
            />
            <h1 className="text-lg sm:text-3xl font-serif font-bold tracking-wide">
              hossa
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 lg:space-x-10 text-sm lg:text-base font-bold">
            <Link
              href="#intro"
              className="hover:text-lime-500 transition-colors"
            >
              Intro
            </Link>
            <Link
              href="#experience"
              className="hover:text-lime-500 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              className="hover:text-lime-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="https://drive.google.com/file/d/1eQUazC5uZ7mkzYFgDHCv55VbvlgPqfxj/view"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-500 transition-colors"
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Right Border - ALWAYS visible */}
        <BorderNoPattern side="right" />
      </div>

      {/* Dropdown Menu (Mobile Only) */}
      {isOpen && (
        <div className="md:hidden flex flex-col border-t border-zinc-600">
          <div className="flex items-stretch">
            {/* Left Border for dropdown */}
            <BorderPattern side="left" />

            {/* Dropdown Body */}
            <div className="flex-1 bg-[#0a0a0a] text-white flex flex-col px-6 py-4 space-y-3 text-sm border-x border-zinc-600">
              <Link
                href="#about"
                className="hover:text-blue-500 transition-colors w-full"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#work"
                className="hover:text-blue-500 transition-colors w-full"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                href="#projects"
                className="hover:text-blue-500 transition-colors w-full"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#connect"
                className="hover:text-blue-500 transition-colors w-full"
                onClick={() => setIsOpen(false)}
              >
                Connect
              </Link>
            </div>

            {/* Right Border for dropdown */}
            <BorderPattern side="right" />
          </div>
        </div>
      )}
    </nav>
  );
}
