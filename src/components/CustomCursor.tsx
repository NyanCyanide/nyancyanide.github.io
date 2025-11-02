"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);

    // Detect hover over links
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Smooth follow animation (runs continuously)
    let frame: number;
    const follow = () => {
      setSmoothPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.12,
        y: prev.y + (pos.y - prev.y) * 0.12,
      }));
      frame = requestAnimationFrame(follow);
    };
    follow();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.querySelectorAll("a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      cancelAnimationFrame(frame);
    };
  }, [pos]);

  return (
    <div
      className={`fixed top-0 left-0 z-[9999] rounded-full pointer-events-none mix-blend-difference transition-all duration-150 ease-out`}
      style={{
        width: isHovering ? "60px" : "30px",
        height: isHovering ? "60px" : "30px",
        transform: `translate(${smoothPos.x - (isHovering ? 16 : 10)}px, ${smoothPos.y - (isHovering ? 16 : 10)}px)`,
        backgroundColor: "white",
      }}
    />
  );
}
