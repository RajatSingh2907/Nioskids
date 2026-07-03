"use client";

import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CalendarHeart } from "lucide-react";

export function Hero() {
  const { scrollY } = useScroll();
  const reduced = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const heroArtX = useTransform(springX, [-1, 1], [-18, 18]);
  const heroArtY = useTransform(springY, [-1, 1], [-12, 12]);
  const textX = useTransform(springX, [-1, 1], [8, -8]);
  const textY = useTransform(springY, [-1, 1], [5, -5]);
  const planeX = useTransform(scrollY, [0, 700], [0, 150]);
  const planeY = useTransform(scrollY, [0, 700], [0, -80]);
  const sunY = useTransform(scrollY, [0, 500], [0, 46]);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduced) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  return (
    <section id="home" className="hero-sky relative min-h-[92vh] overflow-hidden px-5 pb-24 pt-32" onPointerMove={handlePointerMove}>
      <motion.div aria-hidden className="hero-sun" style={{ y: sunY }} />
      <div aria-hidden className="cloud cloud-one" />
      <div aria-hidden className="cloud cloud-two" />
      <div aria-hidden className="cloud cloud-three" />
      <div aria-hidden className="rainbow-arc" />
      <div aria-hidden className="bird bird-one" />
      <div aria-hidden className="bird bird-two" />
      <motion.div aria-hidden className="paper-plane" style={{ x: planeX, y: planeY }}>✦</motion.div>
      <motion.div aria-hidden className="floating-pencil" style={{ x: textX, y: textY }} />
      <motion.div aria-hidden className="floating-book" style={{ x: heroArtX, y: heroArtY }} />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div style={{ x: textX, y: textY }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="relative z-10">
          <h1 className="max-w-3xl font-heading text-[clamp(3.2rem,9vw,6.9rem)] font-extrabold leading-[0.92] text-ink">
            Flexible NIOS Learning, Made Joyful
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/78">
            A colorful learning world where children build confidence through stories, projects and practice, while parents get clear guidance for flexible NIOS-aligned learning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="magic-button bg-coral text-white" href="/programs">
              Find Your Program <ArrowRight className="size-5" aria-hidden />
            </a>
            <a className="magic-button bg-white text-ink" href="/contact">
              Book Parent Counselling <CalendarHeart className="size-5" aria-hidden />
            </a>
          </div>
        </motion.div>
        <motion.div style={{ x: heroArtX, y: heroArtY }} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="hero-picture relative z-10">
          <Image src="/images/nios-learning-world.png" alt="Happy children exploring a colorful NIOS learning world with books, rainbow, clouds and nature" width={1400} height={1000} priority className="h-auto w-full rounded-[2rem]" />
        </motion.div>
      </div>
      <div className="grass-divider" aria-hidden />
    </section>
  );
}
