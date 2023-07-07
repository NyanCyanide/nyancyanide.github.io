import React from "react";
import Image from "next/image";
import a from "../../public/assets/Group 2.png";

export default function introduction() {
  return (
    <>
      <div id="stylish" className="h-full flex flex-col items-center justify-evenly">
        <div className=" text-center text-red-500 font-semibold">
          <p>Unleashing Boundless</p>
          <p>Creativity</p>
        </div>
        <div className="flex md:w-2/6 flex-row items-center justify-center">
          <img src={a.src} alt="" className="hover:scale-105 duration-1000" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p>Scroll for amazing work</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </p>
        </div>
      </div>
    </>
  );
}
