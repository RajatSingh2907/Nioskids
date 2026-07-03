import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, BookOpenCheck, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, UsersRound } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageEmotionalSections } from "@/components/PageEnhancements";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "About NIOS Kids | Child-Friendly Flexible Learning Support",
  description: "Learn how NIOS Kids supports children with joyful mentoring, parent clarity and flexible NIOS-aligned learning pathways."
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
        <section className="trust-hero about-hero">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="trust-eyebrow"><Sparkles className="size-4" aria-hidden /> About NIOS Kids</span>
              <h1>Flexible Learning Should Feel Clear, Kind And Joyful</h1>
              <p>
                NIOS Kids is built for families who want child-friendly learning support without losing structure. We combine creative lessons, mentoring and parent guidance so flexible education feels confident instead of confusing.
              </p>
              <div className="trust-actions">
                <Link href="/programs">Explore Programs <ArrowRight className="size-4" aria-hidden /></Link>
                <Link href="/contact">Talk To A Counsellor</Link>
              </div>
            </div>
            <div className="about-story-card">
              <span className="story-spark" aria-hidden />
              <UsersRound className="size-14 text-coral" aria-hidden />
              <h2>For children, it feels like discovery. For parents, it feels like a plan.</h2>
              <p>Every learner gets a rhythm that respects their age, confidence and academic goals.</p>
            </div>
          </div>
        </section>

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
