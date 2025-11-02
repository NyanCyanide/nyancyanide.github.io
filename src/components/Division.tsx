import BorderPattern from "./BorderPattern";

export default function Division() {
  return (
    <div className="relative flex items-stretch h-6 md:h-8 bg-[#0a0a0a] overflow-hidden">
      {/* Left Border */}
      <BorderPattern side="left" />
            <div className="absolute bord inset-0 flex justify-between pointer-events-none z-0">
        <div className="border-b border-x border-zinc-700 w-1/3 h-full" />
        <div className="border-b border-x border-zinc-700 w-1/3 h-full" />
        <div className="border-b border-x border-zinc-700 w-1/3 h-full" />
      </div>
      {/* Middle Slanted Light Section */}
      <div
        className="flex-1 self-stretch border-zinc-600 bg-[#0a0a0a]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(156,163,175,0.3) 0,
              rgba(156,163,175,0.3) 1px,
              transparent 1px,
              transparent 6px
            )
          `
        }}
      ></div>

      {/* Right Border */}
      <BorderPattern side="right" />
    </div>
  );
}
