"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryItems } from "@/lib/site-data";

const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];

export function InteractiveGallery() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);
  const visibleItems = useMemo(() => galleryItems.filter((item) => category === "All" || item.category === category), [category]);

  return (
    <>
      <div className="gallery-filters" aria-label="Gallery filters">
        {categories.map((item) => (
          <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>
      <motion.div layout className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visibleItems.map((item, index) => (
            <motion.button layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} key={item.title} type="button" className="polaroid gallery-card" style={{ transform: `rotate(${[-3, 2, -1, 3, -2, 1][index % 6]}deg)` }} onClick={() => setSelected(item)}>
              <div className={`polaroid-art bg-gradient-to-br ${item.color}`}>
                <span>{item.category}</span>
              </div>
              <p>{item.title}</p>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {selected && (
          <motion.div className="gallery-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={selected.title}>
            <motion.div initial={{ y: 24, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 24, scale: 0.96 }}>
              <button type="button" aria-label="Close gallery preview" onClick={() => setSelected(null)}><X aria-hidden /></button>
              <div className={`modal-art bg-gradient-to-br ${selected.color}`} />
              <h3>{selected.title}</h3>
              <p>{selected.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
