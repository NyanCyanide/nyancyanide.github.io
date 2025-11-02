"use client";

import { useEffect, useState } from "react";
import BorderNoPattern from "./BorderNoPattern";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function Intro() {
  const [secondsOnPage, setSecondsOnPage] = useState(0);

  // ⏱ Track how long user has been on the page
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const diff = Math.floor((Date.now() - start) / 1000);
      setSecondsOnPage(diff);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsOnPage / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (secondsOnPage % 60).toString().padStart(2, "0");

  return (
    <section
    id="intro"
      className="relative flex items-stretch bg-[#0a0a0a] border-b border-zinc-700 overflow-hidden
                 min-h-fit sm:min-h-screen"
    >
      {/* Left Border */}
      <BorderNoPattern side="left" />

      {/* Background Grid / Divs */}
      <div className="absolute inset-0 flex justify-between pointer-events-none z-0">
        <div className="border border-zinc-900 w-1/3 h-full" />
        <div className="border border-zinc-900 w-1/3 h-full" />
        <div className="border border-zinc-900 w-1/3 h-full" />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col px-6 sm:px-10 md:px-16 pt-18 sm:pb-10 text-white z-10">
        {/* Top Status Row */}
        <div className="flex flex-row justify-between items-center w-full max-w-6xl text-xs sm:text-sm text-zinc-400 font-mono mx-auto tracking-wider sm:mb-16">
          <p>[01 / 03] HERO</p>
          <p>
            User Connected: {minutes}:{seconds}
          </p>
        </div>

        {/* Core Content */}
        <div className="max-w-6xl mx-auto w-full flex flex-col-reverse sm:flex-row items-center sm:items-start sm:gap-16 mt-10 sm:mt-0">
          {/* Left Text Section */}
          <div className="flex flex-col sm:items-start items-center text-center sm:text-left w-full">
            <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              AI / ML Engineer,
              <br />
              Developer, Designer,
              <br />
              Biker & Gamer.
            </h1>
            </div>

            <div>
            <p className="mt-6 text-zinc-500 text-sm sm:text-lg max-w-2xl">
I'm a Machine Learning Engineer focused on building AI-driven healthcare solutions that make clinical workflows smarter and more efficient. Outside of work, I enjoy riding my bike, playing games, and continuously learning new technologies. I'm always open to conversations and collaborations—feel free to drop me a message via email anytime.
            </p>
            </div>
            <div>
<SocialLinks />
            </div>
          </div>

          {/* Right Profile Pic Section */}
          <div className="flex-shrink-0 flex justify-center items-center mb-10 sm:mb-0">
            <Image
              src="/ascii_image.png"
              alt="ASCII-style profile picture"
              width={300}
              height={300}
              className="object-cover brightness-125 contrast-125"
              priority
            />
          </div>
        </div>
      </div>

      {/* Right Border */}
      <BorderNoPattern side="right" />
    </section>
  );
}
