import type { Metadata } from "next";
import { ArrowRight, Camera, Images, Palette } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InteractiveGallery } from "@/components/InteractiveGallery";
import { Navbar } from "@/components/Navbar";
import { CuteFinalCTA, PageEmotionalSections, StorybookChapter } from "@/components/PageEnhancements";
import { SmoothScroll } from "@/components/SmoothScroll";

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
        <Hero id="gallery" eyebrow="Memory Meadow" eyebrowIcon={<Images className="size-4" aria-hidden />} title="Every Learning Moment Becomes A Little Story" copy="Step into a warm evidence wall where reading circles, projects, creative work and parent reviews feel less like records and more like memories children are proud to revisit." primaryAction={{ href: "#gallery-wall", label: "Explore Moments", icon: <ArrowRight className="size-5" aria-hidden /> }} secondaryAction={{ href: "/learning-journey", label: "See The Journey" }} />

        <StorybookChapter
          chapter="Chapter 04 - Memory Meadow"
          title="The Place Where Learning Leaves Little Souvenirs"
          copy="This chapter makes learning visible through projects, reading circles, experiments and moments children can feel proud to show."
          trust="Parents see evidence of effort, expression and progress."
          path={["Try", "Make", "Show", "Celebrate", "Remember"]}
          tone="coral"
        />

        <PageEmotionalSections
          eyebrow="Visible joy"
          title="A gallery should feel like proof that a child is waking up to learning."
          copy="These moments are not decoration. They are signals: the child tried, expressed, made, explained or smiled while learning something useful."
          points={[
            { title: "Parents see effort", copy: "Activities make practice visible in a way marks alone cannot." },
            { title: "Children feel proud", copy: "A displayed moment turns learning into memory and ownership." },
            { title: "Mentors see patterns", copy: "Work samples reveal confidence, curiosity and where support is needed next." }
          ]}
          bridgeTitle="Every photo should answer: what did the child discover?"
          bridgeCopy="That question keeps the gallery connected to learning evidence, not just pretty visuals."
          bridgeItems={["Try", "Make", "Speak", "Smile", "Remember"]}
        />

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

        <CuteFinalCTA title="Imagine Your Child Proudly Showing Their Work" copy="We can help you choose activities and learning rhythm that create these small, memorable wins." label="Plan Joyful Learning Moments" />
      </main>
      <Footer />
    </>
  );
}
