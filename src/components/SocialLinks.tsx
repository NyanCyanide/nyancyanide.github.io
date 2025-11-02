"use client";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function SocialLinks() {
  const links = [
    { icon: <Github size={22} />, href: "https://github.com/NyanCyanide" },
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/hariomswarupsa/" },
    { icon: <Instagram size={22} />, href: "https://www.instagram.com/nyancyanide.cloudx9" },
    { icon: <Mail size={22} />, href: "mailto:hariomswarupsa@gmail.com" },
  ];

  return (
    <div className="flex justify-center sm:justify-start gap-5 mt-6 text-zinc-400">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all hover:text-white hover:scale-110"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
