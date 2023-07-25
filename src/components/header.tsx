"use client";
import React, { useState } from "react";
import Image from "next/image";
import a from "../../public/assets/intro.jpg";

export default function Header() {
  const [hidden, SetHidden] = useState(false);

  const toggleHidden = () => {
    SetHidden(!hidden);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center  h-full">
        <div className="py-3 md:py-5 md:px-2 text-2xl font-bold select-none font-serif w-full md:w-auto flex flex-row items-center justify-center">
          <p className="md:hidden w-1/12"></p>
          <p className="w-10/12 md:w-full text-center ">


            <a href="/">hossa</a>
          </p>
          <button className="md:hidden w-1/12" onClick={toggleHidden}>
            {!hidden ? (
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={` md:h-full w-full md:flex flex-col select-none bg-opacity-100 duration-1000 md:justify-around font-semibold ${
            !hidden ? "hidden" : ""
          }`}
        >
          <a className="text-center md:-rotate-90 " href="#about">
            <div className="py-2 hover:bg-white hover:text-black duration-500 ">
              About Me
            </div>
          </a>
          <a className="text-center md:-rotate-90 " href="#projects">
            <div className="py-2 hover:bg-white hover:text-black duration-500">
              Projects
            </div>
          </a>
          <a className="text-center md:-rotate-90 " href="#contact">
            <div className="py-2 hover:bg-white hover:text-black duration-500">
              Contact Me
            </div>
          </a>
          <a data-type="link" className="text-center md:-rotate-90 interactable" href="https://drive.google.com/file/d/17dklhZ8WUNA4qju7dsNSRsqvQ15GcDXn/view?usp=drive_link" target="_blank">
            <div className="py-2 hover:bg-white hover:text-black duration-500">
              Resume
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
