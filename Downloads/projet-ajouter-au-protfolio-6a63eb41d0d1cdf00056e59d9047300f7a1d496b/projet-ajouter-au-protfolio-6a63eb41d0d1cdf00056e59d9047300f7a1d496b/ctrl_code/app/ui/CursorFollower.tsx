"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let posX = mouseX;
    let posY = mouseY;

    const lerp = (start: number, end: number, amt: number) => (1 - amt) * start + amt * end;

    const animate = () => {
      posX = lerp(posX, mouseX, 0.2);
      posY = lerp(posY, mouseY, 0.2);

      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed w-4 h-4 rounded-full bg-primary_folio opacity-80 mix-blend-difference z-[9999]"
      style={{ top: 0, left: 0, transform: "translate(-50%, -50%)" }}
    />
  );
}
