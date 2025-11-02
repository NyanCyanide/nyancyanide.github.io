import BorderNoPattern from "./BorderNoPattern";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Connect() {
  return (
    <section
      id="connect"
      className="relative w-full bg-black text-white border-t border-zinc-800 flex items-center"
    >
      {/* Left thin border column */}
      <BorderNoPattern side="left" />

      {/* Center content */}
      <div className="flex-1 max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Left Side - Name and Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-zinc-400">
          <span className="font-semibold text-white">© 2025 Hari Om Swarup S A</span>
          <span className="hidden sm:block">•</span>
          <span>All rights reserved</span>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/NyanCyanide"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 p-2 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/hariomswarupsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 p-2 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://www.instagram.com/nyancyanide.cloudx9/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 p-2 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>

          <a
            href="mailto:hariomswarupsa@gmail.com"
            className="bg-zinc-900 p-2 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Right thin border column */}
      <BorderNoPattern side="right" />
    </section>
  );
}
