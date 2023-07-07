import React from "react";
import Image from "next/image";
import Card from "./card";
import bl1 from "../../public/assets/blender1.png";
import bl2 from "../../public/assets/blender2.png";
import bl3 from "../../public/assets/blender3.png";
import bl4 from "../../public/assets/blender4.png";
import bl5 from "../../public/assets/blender5.png";
import bl6 from "../../public/assets/blender6.png";

import p1 from "../../public/assets/p1.png";
import p2 from "../../public/assets/p2.png";
import p3 from "../../public/assets/p3.jpeg";
import p4 from "../../public/assets/p4.jpeg";
import p5 from "../../public/assets/p5.png";
import p6 from "../../public/assets/p6.png";
import p7 from "../../public/assets/p7.jpeg";
import p8 from "../../public/assets/p8.png";
import p9 from "../../public/assets/p9.png";
import p10 from "../../public/assets/p10.png";
import p11 from "../../public/assets/p11.png";
import p12 from "../../public/assets/p12.png";



export default function projects() {

  const data = [
    {title : "Abstract Cube Art", image : bl1.src , link: "https://drive.google.com/file/d/1zGFLSeyWvwaZeywFoPpqCdqMeCXA9evt/view?usp=sharing", type: "link" },
    {title: "Donut",  image : bl2.src, link: "https://drive.google.com/file/d/1ANWQMlQNNPKZLcE0EPT5gngHfsR6M6kE/view?usp=sharing", type: "link" },
    {title: "Heat Waves Sound Trap", image : bl3.src, link: "https://drive.google.com/file/d/1hukrJVsYfXO_DAL6JGFZI9lqg5RUbK6a/view?usp=sharing", type: "video" },
    {title: "Spinning Lightning Art", image : bl4.src, link: "https://drive.google.com/file/d/1lbmQ_P1w-nOFRlXDcIqFrn9uZ1KEXtIi/view?usp=sharing", type: "video" },
    {title: "Variant Dancing",  image : bl5.src, link: "https://drive.google.com/file/d/1MlQ2KdWfG1THTladL2Qmhx-mLxnz4BNH/view?usp=sharing", type: "video" },
    {title: "Last Hope",  image : bl6.src, link: "https://drive.google.com/file/d/15mIwR7XyCAod7uB_N9Xbux2yeDYTXBBa/view?usp=sharing", type: "video" },
  ]

  const projects = [
    {title : "Octa Ocean", image : p1.src , link: "https://github.com/NyanCyanide/OctaOcean", type: "link" },
    {title: "Survive Nights",  image : p2.src, link: "https://github.com/NyanCyanide/Survive-Nights", type: "link" },
    {title: "Anime Search Engine", image : p3.src, link: "https://github.com/NyanCyanide/Otaku-Oasis", type: "link" },
    {title: "OS Scratch", image : p4.src, link: "https://github.com/NyanCyanide/OS-Scratch", type: "link" },
    {title: "MusioPhile",  image : p5.src, link: "https://github.com/NyanCyanide/MusioPhile", type: "link" },
    {title: "Boxy - Text Editor",  image : p6.src, link: "https://github.com/NyanCyanide/Boxy-TextEditor", type: "link" },
    {title : "Huff Compressor", image : p7.src , link: "https://github.com/NyanCyanide/Huffman-Compressor", type: "link" },
    {title: "Windows 11 Clone",  image : p8.src, link: "https://nyancyanide.github.io/Windows-11-Clone/", type: "link" },
    {title: "Ethan Shooting", image : p9.src, link: "https://github.com/NyanCyanide/Shooting-Game", type: "link" },
    {title: "3D Portfolio", image : p10.src, link: "https://github.com/NyanCyanide/3D-Website", type: "link" },
    {title: "Parallax Effect",  image : p11.src, link: "https://github.com/NyanCyanide/Parallax-Effect", type: "link" },
    {title: "Wumpus World",  image : p12.src, link: "https://github.com/NyanCyanide/Wumpus-World", type: "link" },

  ]



  return (
    <>
      <div id="projects" className="  bg-black ">
        <div className="md:px-14 md:py-10 px-3 py-6 flex flex-col">
          <div>
            <p className="text-5xl font-bold text-white">Projects</p>
          </div>
          <div className="">
            <div className="my-6">
              <p className="text-4xl font-bold">Blender Arts</p>
            </div>
            <div className="select-none grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              {data.map((item) => (
                <Card
                key={item.title}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                  type={item.type}
                />
              ))}
            </div>
            <div className="my-6">
              <p className="text-4xl font-bold">Tech Projects</p>
            </div>
            <div className="select-none grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
              {projects.map((item) => (
                <Card
                key={item.title}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                  type={item.type}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
