"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/site-data";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % testimonials.length), 5200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-carousel">
      <AnimatePresence mode="wait">
        <motion.blockquote key={active.quote} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.32 }}>
          <span className="quote-mark">&quot;{active.quote}&quot;</span>
          <cite>{active.parent}</cite>
          <span>{active.result}</span>
        </motion.blockquote>
      </AnimatePresence>
      <div className="carousel-controls">
        <button type="button" aria-label="Previous testimonial" onClick={() => setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}>
          <ChevronLeft aria-hidden />
        </button>
        <div aria-label="Testimonial slides">
          {testimonials.map((item, itemIndex) => (
            <button key={item.parent} type="button" aria-label={`Show testimonial ${itemIndex + 1}`} aria-current={itemIndex === index} onClick={() => setIndex(itemIndex)} />
          ))}
        </div>
        <button type="button" aria-label="Next testimonial" onClick={() => setIndex((current) => (current + 1) % testimonials.length)}>
          <ChevronRight aria-hidden />
        </button>
      </div>
    </div>
  );
}
