import BorderPattern from "./BorderPattern";

export default function Newdivision() {
  return (
    <div className="relative w-full bg-[#0a0a0a] border-b border-zinc-700 overflow-hidden flex">
      {/* Left Border */}
      <BorderPattern side="left" />

      {/* 3-column divider grid */}
      <div className="grid grid-cols-3 flex-1 divide-x divide-zinc-700">
        {[0, 1, 2].map((_, i) => (
          <div
            key={i}
            className="relative h-6 md:h-8 border-b border-zinc-700 bg-[#0a0a0a]"
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    rgba(156,163,175,0.3) 0,
                    rgba(156,163,175,0.3) 1px,
                    transparent 1px,
                    transparent 6px
                  )
                `,
              }}
            />
          </div>
        ))}
      </div>

      {/* Right Border */}
      <BorderPattern side="right" />
    </div>
  );
}
