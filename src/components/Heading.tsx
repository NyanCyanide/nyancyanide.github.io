import BorderNoPattern from "./BorderNoPattern";

interface HeadingProps {
  id_label: string;    // e.g. "experience"
  sectionLabel: string; // e.g. "[02 / 04] EXPERIENCE"
  dataAsOf: string;     // e.g. "DATA AS OF: 05/11/2025"
  subtitle: string;     // e.g. "Skill Harnessing"
  title: string;        // e.g. "My Experience"
}

export default function Heading({
  id_label,
  sectionLabel,
  dataAsOf,
  subtitle,
  title,
}: HeadingProps) {
  return (
    <section
      id={id_label}
      className="relative flex items-stretch bg-[#0a0a0a] border-b border-zinc-700 overflow-hidden min-h-[30vh] text-white"
    >
      {/* Left Border */}
      <BorderNoPattern side="left" />

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12 z-10">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
          {/* Top Info Row */}
          <div className="flex justify-between items-center text-xs sm:text-sm text-zinc-400 font-mono tracking-wider">
            <p>{sectionLabel}</p>
            <p>{dataAsOf}</p>
          </div>

          {/* Text Content */}
          <div className="text-center sm:text-left">
            <p className="text-purple-400 font-bold text-sm sm:text-base tracking-wide uppercase mb-2">
              {subtitle}
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Right Border */}
      <BorderNoPattern side="right" />
    </section>
  );
}
