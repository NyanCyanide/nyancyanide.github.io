"use client";
import React, { useEffect, useRef } from "react";
import Introduction from "@/components/introduction";
import Header from "@/components/header";
import Myself from "@/components/myself";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function App() {
  useEffect(() => {
    const animateTrailer = (e: MouseEvent, interacting: boolean) => {
      const trailer = document.getElementsByClassName(
        "trailer"
      )[0] as HTMLElement;
      const x = e.clientX - trailer.offsetWidth / 2;
      const y = e.clientY - trailer.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 3 : 1})`,
      };

      trailer.animate(keyframes, {
        duration: 800,
        fill: "forwards",
      });
    };

    const trailer = document.getElementById("trailer");

    window.onmousemove = (e: MouseEvent) => {
      const interactable = (e.target as HTMLElement)?.closest(".interactable");
      const interacting = interactable !== null;

      const trailerlink = document.getElementById(
        "trailerlink"
      ) as HTMLElement | null;
      const trialervideo = document.getElementById(
        "trialervideo"
      ) as HTMLElement | null;

      animateTrailer(e, interacting);

      if (interacting) {
        if ((interactable as HTMLElement)?.dataset.type === "link" && trailerlink) {
          trailerlink.classList.remove("hidden");
          trialervideo?.classList.add("hidden");
        } else if ((interactable as HTMLElement)?.dataset.type === "video" && trialervideo) {
          trialervideo.classList.remove("hidden");
          trailerlink?.classList.add("hidden");
        }
      } else {
        trailerlink?.classList.add("hidden");
        trialervideo?.classList.add("hidden");
      }
    };
  }, []);

  return (
    <>
      <div className="invisible md:visible trailer ">
        <div className="h-full w-full flex justify-center items-center ">
          <svg
            id="trailerlink"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-2 h-2 font-bold text-center hidden "
          >
            <path
              fillRule="evenodd"
              d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
              clipRule="evenodd"
            />
          </svg>
          <svg
            id="trialervideo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-2 h-2"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <section className=" bg-black h-screen w-screen selection:text-black selection:bg-lime-500 text-white flex flex-col md:flex-row">
        
        <div className="md:w-1/12 bg-opacity-5 backdrop-filter backdrop-blur-sm border-white bg-white">
          <Header />
        </div>
        <div className="h-full overflow-y-scroll md:w-11/12 scroll-smooth">
          <Introduction />
          <Myself />
          <Projects />
          <Contact />
        </div>
      </section>
    </>
  );
}
