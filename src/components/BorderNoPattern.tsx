import React from "react";

export default function BorderNoPattern({
  side = "left",
  color = "rgba(156,163,175,0.3)",
}) {
  const isLeft = side === "left";
  const borderClass = isLeft ? "border-r" : "border-l";

  return (
    <div
      className={`${borderClass} border-zinc-600 self-stretch w-[1rem] md:w-[2rem] bg-[#0a0a0a]`}
      style={{
      }}
    ></div>
  );
}
