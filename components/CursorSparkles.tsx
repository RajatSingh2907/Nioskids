"use client";

import { useEffect, useState } from "react";

type Dot = { id: number; x: number; y: number };

export function CursorSparkles() {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    if (matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
    let id = 0;
    const onMove = (event: PointerEvent) => {
      const dot = { id: id++, x: event.clientX, y: event.clientY };
      setDots((current) => [...current.slice(-14), dot]);
      setTimeout(() => setDots((current) => current.filter((item) => item.id !== dot.id)), 700);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60]">
      {dots.map((dot) => (
        <span key={dot.id} className="sparkle-dot" style={{ left: dot.x, top: dot.y }} />
      ))}
    </div>
  );
}
