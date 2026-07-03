"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/site-data";

export function FAQBooks() {
  const [open, setOpen] = useState(0);

  return (
    <div className="mx-auto max-w-4xl space-y-4">
      {faqs.map(([question, answer], index) => (
        <div key={question} className={`book-faq ${open === index ? "open" : ""}`}>
          <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)}>
            <BookOpen aria-hidden />
            <span>{question}</span>
          </button>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }}>
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
