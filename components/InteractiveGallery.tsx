"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Camera, CheckCircle2, Sparkles, X } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryItems } from "@/lib/site-data";

const categories = ["All", ...Array.from(new Set(galleryItems.map((item) => item.category)))];
const rotations = [-3, 2, -1, 3, -2, 1];

export function InteractiveGallery() {
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);
  const visibleItems = useMemo(() => galleryItems.filter((item) => category === "All" || item.category === category), [category]);
  const featured = visibleItems[0] ?? galleryItems[0];

  return (
    <>
      <div className="gallery-console">
        <div className="gallery-filters" aria-label="Gallery filters">
          {categories.map((item) => {
            const count = item === "All" ? galleryItems.length : galleryItems.filter((galleryItem) => galleryItem.category === item).length;
            return (
              <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)}>
                {item}
                <span>{count}</span>
              </button>
            );
          })}
        </div>
        <div className="gallery-feature">
          <div className={`gallery-feature-art bg-gradient-to-br ${featured.color}`}>
            <GalleryScene category={featured.category} />
          </div>
          <div>
            <span><Camera className="size-4" aria-hidden /> Featured moment</span>
            <h3>{featured.title}</h3>
            <p>{featured.outcome}</p>
            <button type="button" onClick={() => setSelected(featured)}>
              View moment <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
      <motion.div layout className="gallery-board mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {visibleItems.map((item, index) => (
            <motion.button layout initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} key={item.title} type="button" className="polaroid gallery-card" style={{ transform: `rotate(${rotations[index % rotations.length]}deg)` }} onClick={() => setSelected(item)}>
              <div className={`polaroid-art bg-gradient-to-br ${item.color}`}>
                <GalleryScene category={item.category} />
                <span>{item.category}</span>
              </div>
              <p>{item.title}</p>
              <small>{item.proof}</small>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        {selected && (
          <motion.div className="gallery-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
            <motion.div initial={{ y: 24, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 24, scale: 0.96 }} onClick={(event) => event.stopPropagation()}>
              <button type="button" aria-label="Close gallery preview" onClick={() => setSelected(null)}><X aria-hidden /></button>
              <div className={`modal-art bg-gradient-to-br ${selected.color}`}>
                <GalleryScene category={selected.category} />
              </div>
              <h3>{selected.title}</h3>
              <p>{selected.caption}</p>
              <div className="gallery-modal-details">
                <span><Sparkles className="size-4" aria-hidden /> {selected.age}</span>
                <span><CheckCircle2 className="size-4" aria-hidden /> {selected.proof}</span>
              </div>
              <p className="gallery-outcome">{selected.outcome}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GalleryScene({ category }: { category: string }) {
  return (
    <div className={`gallery-scene scene-${category.toLowerCase()}`} aria-hidden>
      <i />
      <i />
      <i />
      <b />
      <b />
    </div>
  );
}
