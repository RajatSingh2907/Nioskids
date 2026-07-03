"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href^='#']");
      if (!(link instanceof HTMLAnchorElement)) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const section = document.querySelector(id);
      if (!section) return;
      event.preventDefault();
      section.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", id);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
