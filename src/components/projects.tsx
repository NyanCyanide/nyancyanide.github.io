import BorderNoPattern from "./BorderNoPattern";
import Image from "next/image";
import { ExternalLink } from "lucide-react"; // icon for link hover

export default function Projects() {
  const projects = [
    {
      title: "PokéLLM",
      date: "Oct 2025",
      tag: "AI / Game Dev",
      desc: "A LangChain-powered Pokémon battle game where two LLM agents make strategic decisions using real-time battle state analysis.",
      img: "/projects/pokellm.png",
      link: "https://github.com/NyanCyanide/PokeLLM-Battle",
    },
    {
      title: "Img2DCM",
      date: "Sep 2025",
      tag: "Medical Imaging",
      desc: "Converts standard medical images to DICOM format with complete metadata, compression, and orientation preservation.",
      img: "/projects/img2dcm.png",
      link: "https://github.com/NyanCyanide/img2dcm",
    },
    {
      title: "Huffman Compressor",
      date: "Aug 2025",
      tag: "Algorithms / Compression",
      desc: "A lossless text compression tool implementing Huffman coding for efficient storage and transmission.",
      img: "/projects/huffman.png",
      link: "https://github.com/NyanCyanide/Huffman-Compressor",
    },
    {
      title: "Survive Nights",
      date: "Jul 2025",
      tag: "Game Dev",
      desc: "A 2D survival horror game built with Python and Pygame featuring procedural night challenges.",
      img: "/projects/game.png",
      link: "https://github.com/NyanCyanide/Survive-Nights",
    },
    {
      title: "Instagram Scraper",
      date: "Jun 2025",
      tag: "Automation / AI",
      desc: "A smart Instagram scraping pipeline extracting user posts, captions, and insights using headless automation.",
      img: "/projects/instascrapper.png",
      link: "https://github.com/NyanCyanide/InstagramScrapper",
    },
    {
      title: "Calcium Scoring",
      date: "May 2025",
      tag: "Medical AI",
      desc: "An AI-based calcium scoring system that detects coronary calcifications and computes Agatston scores from CT data.",
      img: "/projects/calciumscore.png",
      link: "https://github.com/NyanCyanide/CalciumScore",
    },
  ];

  return (
    <section
      className="relative w-full bg-[#0a0a0a] border-b border-zinc-700 text-white flex"
    >
      {/* Left Border */}
      <BorderNoPattern side="left" />

      {/* Projects Grid */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
          divide-x divide-zinc-700 flex-1
        "
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center w-full p-4 border-b border-zinc-700"
          >
            {/* Image section */}
            <div className="relative group w-full aspect-[4/3] p-4 rounded-2xl border border-zinc-700 overflow-hidden mb-4 bg-[#161616] transition-all duration-300 hover:border-zinc-500">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover rounded-xl transition-all duration-300 group-hover:brightness-110 group-hover:scale-[1.02] group-hover:saturate-150 group-hover:opacity-90"
                />

                {/* Hover Overlay */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="text-yellow-400 w-10 h-10" />
                </a>
              </div>
            </div>

            {/* Text content */}
            <div className="w-full text-left space-y-2">
              <div className="flex items-center justify-between text-zinc-500 text-sm">
                <span>{project.date}</span>
                <span>{project.tag}</span>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-100">
                {project.title}
              </h3>
              <p className="text-zinc-400">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Border */}
      <BorderNoPattern side="right" />
    </section>
  );
}
