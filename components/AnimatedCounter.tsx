"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

function parseStat(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  return {
    target: match ? Number(match[1]) : 0,
    suffix: match ? match[2] : value
  };
}

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [done, setDone] = useState(false);
  const { target, suffix } = parseStat(value);
  const count = useMotionValue(0);
  const smooth = useSpring(count, { duration: 1400, bounce: 0.22 });
  const rounded = useTransform(smooth, (latest) => `${Math.round(latest).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    count.set(target);
    const timer = window.setTimeout(() => setDone(true), 950);
    return () => window.clearTimeout(timer);
  }, [count, inView, target]);

  return (
    <span ref={ref} className="counter-wrap">
      <motion.span>{rounded}</motion.span>
      {done && (
        <span className="mini-confetti" aria-hidden>
          {Array.from({ length: 10 }).map((_, index) => (
            <i key={index} style={{ "--i": index } as CSSProperties} />
          ))}
        </span>
      )}
    </span>
  );
}
