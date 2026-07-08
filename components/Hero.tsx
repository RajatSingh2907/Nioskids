"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CalendarHeart } from "lucide-react";

type HeroAction = {
  href: string;
  label: string;
  icon?: ReactNode;
};

type HeroProps = {
  id?: string;
  title?: string;
  copy?: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
  className?: string;
};

const defaultPrimaryAction = {
  href: "/programs",
  label: "Find My Learning Path",
  icon: <ArrowRight className="size-5" aria-hidden />
};

const defaultSecondaryAction = {
  href: "/contact",
  label: "Talk To A Mentor",
  icon: <CalendarHeart className="size-5" aria-hidden />
};

export function Hero({
  id = "home",
  title = "Flexible NIOS Learning For Every Stage",
  copy = "Support for young learners building basics and older students preparing for Secondary, Senior Secondary, assignments and exams.",
  primaryAction = defaultPrimaryAction,
  secondaryAction = defaultSecondaryAction,
  imageSrc = "/images/nios-learning-world.png",
  imageAlt = "Students exploring a colorful NIOS learning world with books, planning tools and guided support",
  priority = true,
  className = ""
}: HeroProps) {
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
    <section id={id} className={`hero-sky home-hero relative min-h-[92vh] overflow-hidden px-5 pb-24 pt-32 ${className}`} onPointerMove={handlePointerMove}>
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
      <div className="hero-inner mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div style={{ x: textX, y: textY }} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="hero-copy-wrap relative z-10">
          <h1 className="hero-title max-w-3xl font-heading text-[clamp(3.2rem,9vw,6.9rem)] font-extrabold leading-[0.92] text-ink">
            {title}
          </h1>
          <p className="hero-copy mt-6 max-w-2xl text-xl leading-8 text-ink/78">
            {copy}
          </p>
          <div className="hero-actions mt-8 flex flex-wrap gap-4">
            <a className="magic-button bg-coral text-white" href={primaryAction.href}>
              {primaryAction.label} {primaryAction.icon}
            </a>
            <a className="magic-button bg-white text-ink" href={secondaryAction.href}>
              {secondaryAction.label} {secondaryAction.icon}
            </a>
          </div>
        </motion.div>
        <motion.div style={{ x: heroArtX, y: heroArtY }} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="hero-picture relative z-10">
          <Image src={imageSrc} alt={imageAlt} width={1400} height={1000} priority={priority} className="h-auto w-full rounded-[2rem]" />
        </motion.div>
      </div>
      <div className="grass-divider" aria-hidden />
    </section>
  );
}
