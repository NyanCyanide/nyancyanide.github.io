import BorderNoPattern from "./BorderNoPattern";
import Image from "next/image";

export default function Work() {
  // Define the slanted-line gradient pattern
  const slantGradient = `
    repeating-linear-gradient(45deg, rgba(156,163,175,0.3) 0, rgba(156,163,175,0.3) 1px, transparent 1px, transparent 6px)
  `;

  return (
    <section
      className="relative w-full flex items-center bg-[#0a0a0a] border-b border-zinc-700 text-white overflow-hidden"
    >
      {/* Left Border */}
      <BorderNoPattern side="left" />

      {/* Vertical Divider with Slanting Lines */}
      <div
        className="absolute left-1/2 top-0 bottom-0 w-[1rem] md:w-[2rem] bg-[#0a0a0a] border-x border-zinc-700 z-0"
        style={{
          backgroundImage: slantGradient,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col md:flex-row justify-between px-6 sm:px-10 md:px-16 py-16 z-10">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative">
          
          {/* LEFT: Work Experience */}
          <div className="w-full md:w-1/2 pr-0 md:pr-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-lime-400 mb-8 uppercase tracking-wider text-center md:text-left">
              Work Experience
            </h2>

            <div className="space-y-10">
              {/* Job 1 */}
              <div className="flex items-start gap-4 border-l-2 border-lime-500 pl-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12">
                  <Image
                    src="/biocliq.png"
                    alt="Biocliq Logo"
                    width={48}
                    height={48}
                    className="rounded-md object-contain brightness-110 contrast-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Deep Learning Engineer</h3>
                  <p className="text-zinc-400 text-sm">Biocliq Technologies · Jul 2024 — Present</p>
                  <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                    Developing AI-driven medical imaging and 3D reconstruction models 
                    for renal, thoracic, and body composition analysis.
                  </p>
                </div>
              </div>

              {/* Job 2 */}
              <div className="flex items-start gap-4 border-l-2 border-lime-500 pl-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12">
                  <Image
                    src="/biocliq.png"
                    alt="Biocliq Logo"
                    width={48}
                    height={48}
                    className="rounded-md object-contain brightness-110 contrast-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Deep Learning Intern</h3>
                  <p className="text-zinc-400 text-sm">Biocliq Technologies · Jan 2024 — Jun 2024</p>
                  <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                    Worked on lesion measurement, heuristic classifiers, and early pipeline 
                    automation for medical image processing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Education */}
          <div className="w-full md:w-1/2 pl-0 md:pl-12">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-8 uppercase tracking-wider text-center md:text-left">
              Education
            </h2>

            <div className="space-y-10">
              {/* Degree 1 */}
              <div className="flex items-start gap-4 border-l-2 border-blue-500 pl-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12">
                  <Image
                    src="/pes.png"
                    alt="PES University Logo"
                    width={48}
                    height={48}
                    className="rounded-full object-cover brightness-110 contrast-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">B.Tech in Computer Science Engineering</h3>
                  <p className="text-zinc-400 text-sm">PES University · 2020 — 2024</p>
                  <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                    Specialized in AI and Deep Learning, focusing on Medical Imaging and 3D Vision Systems.
                  </p>
                </div>
              </div>

              {/* Degree 2 */}
              <div className="flex items-start gap-4 border-l-2 border-blue-500 pl-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12">
                  <Image
                    src="/scpuc.png"
                    alt="Seshadripuram PU College Logo"
                    width={48}
                    height={48}
                    className="rounded-full object-cover brightness-110 contrast-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Pre-University Education</h3>
                  <p className="text-zinc-400 text-sm">Seshadripuram PU College · 2018 — 2020</p>
                  <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                    Focused on Physics, Chemistry, and Mathematics with a strong analytical base.
                  </p>
                </div>
              </div>

              {/* Degree 3 */}
              <div className="flex items-start gap-4 border-l-2 border-blue-500 pl-4 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex-shrink-0 w-12 h-12">
                  <Image
                    src="/chaitanya.jpeg"
                    alt="Sri Chaitanya Logo"
                    width={48}
                    height={48}
                    className="rounded-full object-cover brightness-110 contrast-110"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">High School</h3>
                  <p className="text-zinc-400 text-sm">Sri Chaitanya School · 2015 — 2018</p>
                  <p className="text-zinc-500 text-sm mt-1 leading-relaxed">
                    Built early foundations in logical reasoning, science, and mathematics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Border */}
      <BorderNoPattern side="right" />
    </section>
  );
}
