import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Images, Palette, Sparkles } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { InteractiveGallery } from "@/components/InteractiveGallery";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { galleryItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery | Learning Moments And Parent Evidence",
  description: "Explore NIOS Kids gallery moments across reading, science, creative learning, STEM, projects and parent reviews."
};

const galleryProof = [
  ["Activity evidence", "Parents can see what the child tried, made, explained or practiced."],
  ["Confidence signals", "Speaking, presenting and creating show growth beyond worksheets."],
  ["Progress conversations", "Gallery-style moments become useful material for review calls."],
  ["Joyful memory", "Children remember learning better when the moment feels meaningful."]
];

export default function GalleryPage() {
  return (
    <>
      <CursorSparkles />
      <SmoothScroll />
      <Navbar />
      <main className="trust-page gallery-page">
        <section className="trust-hero gallery-page-hero">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="trust-eyebrow"><Images className="size-4" aria-hidden /> Gallery</span>
              <h1>See Learning In Action, Not Just In Words</h1>
              <p>Parents need proof that learning is happening. Children need moments they feel proud of. This gallery is designed as a playful evidence wall for activities, projects, reviews and confidence-building work.</p>
              <div className="trust-actions">
                <Link href="#gallery-wall">Explore Moments <ArrowRight className="size-4" aria-hidden /></Link>
                <Link href="/learning-journey">See The Journey</Link>
              </div>
            </div>
            <div className="gallery-hero-stack">
              {galleryItems.slice(0, 4).map((item, index) => (
                <article key={item.title} style={{ "--i": index } as CSSProperties}>
                  <span>{item.category}</span>
                  <h2>{item.title}</h2>
                  <p>{item.proof}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section bg-cream" id="gallery-wall">
          <div className="mx-auto max-w-7xl">
            <div className="trust-section-heading">
              <span>Memory Wall</span>
              <h2>Filter Moments By Learning Type</h2>
              <p>Use the gallery as a preview of the kind of work, reflection and parent-visible evidence families can expect.</p>
            </div>
            <InteractiveGallery />
          </div>
        </section>

        <section className="trust-section bg-[#EEF8FF]">
          <div className="mx-auto max-w-7xl">
            <div className="trust-section-heading">
              <span>Why It Matters</span>
              <h2>A Gallery Should Build Trust</h2>
              <p>Pretty photos are not enough. The gallery should help parents understand what each activity proves.</p>
            </div>
            <div className="gallery-proof-grid">
              {galleryProof.map(([title, copy], index) => (
                <article key={title}>
                  {index % 2 === 0 ? <Camera aria-hidden /> : <Palette aria-hidden />}
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-final-cta">
          <Sparkles className="size-12" aria-hidden />
          <h2>Want These Moments For Your Child?</h2>
          <p>Start with counselling and we will suggest the right learning rhythm, activity style and review plan.</p>
          <Link href="/contact">Start Parent Counselling <CheckCircle2 className="size-4" aria-hidden /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
