// components/BorderPattern.jsx
import React from "react";

export default function BorderPattern({ side = "left", color = "rgba(156,163,175,0.3)" }) {
  const isLeft = side === "left";
  const borderClass = isLeft ? "border-r" : "border-l";
  const angle = isLeft ? "45deg" : "45deg";

  const gradient = `repeating-linear-gradient(${angle}, ${color} 0, rgba(156,163,175,0.3) 1px, transparent 1px, transparent 6px)`;

  return (
    <div
      // ALWAYS visible (no hidden). Responsive width and full height.
      className={`${borderClass} border-zinc-600 self-stretch w-[1rem] md:w-[2rem] bg-[#0a0a0a]`}
      style={{
        backgroundImage: gradient,
      }}
    >
    </div>
  );
}
