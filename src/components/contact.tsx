import React from "react";
import Image from "next/image";
import moonl from "../../public/assets/left.jpg";
import moonb from "../../public/assets/bottom.jpg";

export default function contact() {
  return (
    <>
      <div id="contact" className="h-full">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/2 h-1/2  flex flex-col justify-center items-start md:items-center md:h-full">
            <div className="">
              <div className="text-5xl md:text-6xl px-4 font-bold">
                <p>Let&apos;s Connect</p>
                <p>together...</p>
              </div>
              <div className="px-4 grid gap-5 my-10 grid-flow-row grid-cols-2 w-screen md:w-full">
                <a data-type="link" target="_blank" href="https://github.com/NyanCyanide" className="interactable"><div className="hover:bg-slate-300 duration-500 text-black justify-center items-center bg-white flex flex-row rounded-2xl p-2"><img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt="" /><p className="px-2 font-bold">Github</p></div></a>
                <a data-type="link" target="_blank" href="mailto:hariomswarupsa@gmail.com" className="interactable"><div className="hover:bg-red-300 duration-500 text-black justify-center items-center bg-white flex flex-row rounded-2xl p-2"><img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="" /><p className="px-2 font-bold">Email</p></div></a>
                <a data-type="link" target="_blank" href="tel:+919902106941" className="interactable"><div className="hover:bg-blue-300 duration-500 text-black justify-center items-center bg-white flex flex-row rounded-2xl p-2"><img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="" /><p className="px-2 font-bold">Phone</p></div></a>
                <a data-type="link" target="_blank" href="https://www.instagram.com/nyancyanide.cloudx9/" className="interactable"><div className="hover:bg-pink-300 duration-500 text-black justify-center items-center bg-white flex flex-row rounded-2xl p-2"><img className="h-8 w-8" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="" /><p className="px-2 font-bold">Instagram</p></div></a>
                
              </div>
            </div>
          </div>
          <div className="md:w-1/2 h-1/2 md:h-full">
            <div className="hidden md:flex md:flex-row justify-end items-end">
              <img src={moonl.src} alt="" className="h-screen" />
            </div>
            <div className="md:hidden flex flex-col items-end justify-end h-full">
              <img src={moonb.src} alt="" className="w-screen" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
