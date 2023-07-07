import React from "react";
import Image from "next/image";
import as from "../../public/assets/intro.jpg";
import asa from "../../public/assets/down.png";
import asb from "../../public/assets/up.png";

export default function myself() {
  return (
    <>
      <div id="about" className=" bg-red-400 text-black">
        <div className="md:px-14 md:py-10 px-3 py-6 flex flex-col">
          <div>
            <p className="text-5xl font-bold">About Me</p>
          </div>
          <div className="flex flex-col md:flex-row my-4 b">
            <div className="md:w-1/2 justify-center items-center flex flex-col">
              <div className=" md:p-4 w-3/4 md:w-1/2">
                <img className="rounded-full" src={as.src} alt="" />
              </div>
              <div className=" font-bold text-center">
                <p className=" font-bold text-[2.15rem] md:text-5xl my-2 md:my-4">
                  Hari Om Swarup S A
                </p>
                <div className="md:my-4">
                  <p>| Full Stack Developer | Game Developer |</p>
                  <p>| UI/UX Designer |</p>
                  <p>| Software Developer | Gamer |</p>
                </div>
              </div>
              <div>
                <p className="md:px-10 text-center my-1 ">
                  A computer science engineer studying 4th year at 
                  <a data-type="link" href="https://pes.edu/" className="interactable font-bold" target="_blank">
                  {" "}
                     PES University
                  </a>
                  . With a passion for Full Stack Development, Game Development,
                  UI/UX Design, Software Development, and Gaming, I&apos;ve worked on
                  various projects to refine my skills. As a versatile
                  professional, I excel in building dynamic web applications as
                  a Full Stack Developer, creating immersive games, designing
                  intuitive interfaces, and developing efficient software
                  solutions. I&apos;m dedicated to continuous learning and growth,
                  always staying up-to-date with the latest technologies and
                  trends. Take a moment to explore my portfolio and discover my
                  diverse abilities as a technologist.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 py-6 flex flex-col ">
              <div className=" text-4xl font-bold">Tech Stack</div>
              <div className="my-4 flex justify-center items-center">
                <img
                  src="https://skillicons.dev/icons?i=aws,bash,blender,cs,cpp,css,dart,docker,express,figma,firebase,flutter,git,github,html,js,md,mysql,nextjs,nodejs,py,react,tailwind,threejs,ts,unity,vite,vscode&perline=11"
                  className="hidden md:block"
                  alt=""
                />
                <img
                  src="https://skillicons.dev/icons?i=aws,bash,blender,cs,cpp,css,dart,docker,express,figma,firebase,flutter,git,github,html,js,md,mysql,nextjs,nodejs,py,react,tailwind,threejs,ts,unity,vite,vscode&perline=7"
                  className="md:hidden"
                  alt=""
                />
              </div>
              <div className=" ">
                <p className="text-justify">
                  I specialize in creating exceptional projects using a diverse
                  range of technologies. From front-end development with HTML,
                  CSS, and JavaScript, to robust back-end solutions with Node.js
                  and databases like MySQL, I have the skills to bring ideas to
                  life. Leveraging frameworks like React and Flutter, I build
                  immersive and responsive applications across platforms. With
                  expertise in cloud computing using AWS, efficient scripting
                  with Bash, and version control with Git, I ensure seamless
                  development workflows. By combining my creativity with tools
                  like Figma and Blender, I deliver visually stunning and
                  user-centric experiences.
                </p>
              </div>
              <div className="text-4xl font-bold mt-6">
                Interests and Hobbies
              </div>
              <div>
                <ul className="list-disc pl-5 md:pl-4 my-3 ">
                  <li>Piano - Mastering the art of piano-playing, creating beautiful melodies one key at a time.</li>
                  <li>Video Gamer - Embarking on epic virtual adventures as a dedicated video gamer, conquering dragons and saving galaxies.</li>
                  <li>Coding - Embracing the world of coding with a fervor, always seeking new challenges and pushing the boundaries of what&apos;s possible.</li>
                  <li>Solving Math - Finding joy in the realm of mathematics, solving intricate equations and diving deep into the wonders of numbers.</li>
                  <li>Because let&apos;s face it, who needs a boring and predictable life when you can add a touch of music, gaming, coding, and math to spice things up?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
