"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { BookOpenCheck, HelpCircle, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site-data";

const pageRoutes: Record<string, string> = {
  About: "/about",
  Programs: "/programs",
  Journey: "/learning-journey",
  Gallery: "/gallery",
  Admissions: "/admissions"
};

export function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const background = useTransform(scrollY, [0, 80], ["rgba(255, 248, 236, 0.68)", "rgba(255, 255, 255, 0.9)"]);
  const shadow = useTransform(scrollY, [0, 80], ["0 0 0 rgba(0,0,0,0)", "0 16px 42px rgba(49,64,95,.14)"]);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = navItems.map(([, href]) => document.querySelector(href)).filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const navHref = (label: string, href: string) => pageRoutes[label] ?? (pathname === "/" ? href : `/${href}`);
  const isActive = (label: string, href: string) => (pageRoutes[label] ? pathname === pageRoutes[label] : pathname === "/" && active === href);

  return (
    <motion.header style={{ background, boxShadow: shadow }} className="fixed left-1/2 top-4 z-50 w-[min(1120px,calc(100%-24px))] -translate-x-1/2 rounded-[1.8rem] border border-white/70 px-4 py-3 backdrop-blur-xl lg:rounded-full">
      <nav className="flex items-center justify-between gap-4" aria-label="Main navigation">
        <a href={pathname === "/" ? "#home" : "/"} onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-full text-ink focus-visible:outline focus-visible:outline-3 focus-visible:outline-coral">
          <span className="grid size-10 place-items-center rounded-full bg-sun shadow-glow"><BookOpenCheck aria-hidden /></span>
          <span className="font-heading text-xl font-bold">NIOS Kids</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map(([label, href, Icon]) => (
            <a key={label} href={navHref(label, href)} className={`group flex items-center gap-1 rounded-full px-3 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-sky ${isActive(label, href) ? "bg-sun text-ink" : "text-ink/80 hover:bg-white hover:text-ink"}`}>
              <Icon className="size-4 transition group-hover:-translate-y-1 group-hover:rotate-6" aria-hidden />
              {label}
            </a>
          ))}
          <a href="/nios-info" className="group flex items-center gap-1 rounded-full px-3 py-2 text-sm font-bold text-ink/80 transition hover:bg-white hover:text-ink focus-visible:outline focus-visible:outline-3 focus-visible:outline-sky">
            <HelpCircle className="size-4 transition group-hover:-translate-y-1 group-hover:rotate-6" aria-hidden />
            NIOS Info
          </a>
        </div>
        <div className="flex items-center gap-2">
          <a href={pathname === "/" ? "#contact" : "/#contact"} onClick={() => setOpen(false)} className="hidden rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-float transition hover:-translate-y-1 hover:bg-coral focus-visible:outline focus-visible:outline-3 focus-visible:outline-sun sm:inline-flex">
            Book Counselling
          </a>
          <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center rounded-full bg-white text-ink shadow-float lg:hidden">
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mobile-menu lg:hidden">
            {navItems.map(([label, href, Icon]) => (
              <a key={label} href={navHref(label, href)} onClick={() => setOpen(false)} className={isActive(label, href) ? "active" : ""}>
                <Icon className="size-5" aria-hidden />
                {label}
              </a>
            ))}
            <a href="/nios-info" onClick={() => setOpen(false)}>
              <HelpCircle className="size-5" aria-hidden />
              NIOS Info
            </a>
            <a href={pathname === "/" ? "#contact" : "/#contact"} onClick={() => setOpen(false)} className="mobile-cta">Book Parent Counselling</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
