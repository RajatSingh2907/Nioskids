import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpenCheck, HeartHandshake, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { PageEmotionalSections, StorybookChapter } from "@/components/PageEnhancements";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "About NIOS Kids | Flexible Learning Support For Class 1-12",
  description: "Learn how NIOS Kids supports younger learners and higher-class students with mentoring, parent clarity and NIOS-aligned pathways."
};

const principles: [string, string, LucideIcon][] = [
  ["Child comfort first", "Learning becomes easier when children feel seen, safe and curious.", HeartHandshake],
  ["Parent clarity always", "Families get visible plans, milestones and next-step guidance.", ShieldCheck],
  ["Creative before pressure", "Stories, projects and practice help concepts stick without fear.", Sparkles],
  ["Flexible but structured", "Children can learn at a healthy pace while parents still see progress.", BookOpenCheck]
];

const storySteps = [
  ["Listen", "We begin with the child's current level, confidence, interests and parent goals."],
  ["Map", "We suggest the right support path: foundation, primary, OBE, secondary or senior secondary."],
  ["Mentor", "Teachers guide weekly learning with activities, revision rhythm and gentle accountability."],
  ["Reflect", "Parents receive progress clarity so learning never feels like guesswork."]
];

export default function AboutPage() {
  return (
    <>
      <CursorSparkles />
      <SmoothScroll />
      <Navbar />
      <main className="trust-page about-page">
        <Hero id="about" title="Flexible Learning, Clear And Structured" copy="NIOS Kids helps families and students keep flexible learning warm, structured and confidence-building from foundation skills to board preparation." imageSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80" imageAlt="Teacher and family discussing student learning progress in a classroom" primaryAction={{ href: "/programs", label: "Explore Class Paths", icon: <ArrowRight className="size-5" aria-hidden /> }} secondaryAction={{ href: "/contact", label: "Talk To A Mentor" }} />

        <StorybookChapter
          chapter="Chapter 01 - The Beginning"
          title="Where A Child's Learning Story Starts Feeling Softer"
          copy="This chapter introduces the heart of NIOS Kids: a place where children are not rushed into confidence, and parents are not left alone to decode flexible learning."
          trust="Parents see a clear philosophy before they ever fill a form."
          path={["Wonder", "Listen", "Understand", "Support", "Grow"]}
          tone="sky"
        />

        <PageEmotionalSections
          eyebrow="Why this exists"
          title="Some children only need one thing: learning that finally feels kind."
          copy="Parents often arrive after trying strict routines, rushed classes or confusing advice. This space is built to slow the noise down and help the child feel capable again."
          points={[
            { title: "For the child", copy: "Lessons feel playful enough to enter, but structured enough to create progress." },
            { title: "For the parent", copy: "You stop guessing what to do next because the learning path becomes visible." },
            { title: "For the mentor", copy: "Teaching starts with the learner's confidence, not only the syllabus." }
          ]}
          bridgeTitle="The real goal is not only marks. It is relief."
          bridgeCopy="When a child feels understood and a parent feels guided, learning becomes lighter at home. That emotional shift is the foundation of every academic step."
          bridgeItems={["Confusion", "Listening", "Small wins", "Trust", "Confidence"]}
        />

        <section className="trust-section bg-cream">
          <div className="mx-auto max-w-7xl">
            <div className="trust-section-heading">
              <span>Our Promise</span>
              <h2>Trust Is Built Through Clarity</h2>
              <p>These principles shape every class, counselling call and parent update.</p>
            </div>
            <div className="trust-card-grid">
              {principles.map(([title, copy, Icon]) => (
                <article key={title} className="trust-page-card">
                  <Icon aria-hidden />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section bg-[#EEF8FF]">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="trust-sticky-note">
              <Lightbulb className="size-12 text-orange" aria-hidden />
              <h2>How We Think About Learning</h2>
              <p>Children do not all need the same classroom. Some need more creativity, some need more time, and some need a cleaner roadmap. Our role is to make that support visible and gentle.</p>
            </div>
            <div className="story-ladder">
              {storySteps.map(([title, copy], index) => (
                <article key={title}>
                  <span>{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
