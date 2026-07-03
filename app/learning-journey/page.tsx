import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, CalendarCheck, CheckCircle2, Compass, FileCheck2, HeartHandshake, Lightbulb, Sparkles, Star } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { journey } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Learning Journey | From Parent Clarity To Child Confidence",
  description: "Explore the NIOS Kids learning journey with discovery, planning, guided practice, projects, reviews and achievement milestones."
};

const journeyDeepDive = [
  {
    title: "Discovery Call",
    copy: "We understand the child's age, current learning level, confidence, interests and parent expectations before suggesting any plan.",
    parentSees: "A clear starting picture",
    childFeels: "Listened to, not tested",
    icon: HeartHandshake
  },
  {
    title: "Learning Map",
    copy: "The support path is mapped across subjects, routines, activities and review checkpoints so families know what comes next.",
    parentSees: "Weekly focus areas",
    childFeels: "A path they can follow",
    icon: Compass
  },
  {
    title: "Guided Practice",
    copy: "Mentors blend concept learning with stories, worksheets, revision loops and hands-on tasks based on the learner's stage.",
    parentSees: "Visible learning evidence",
    childFeels: "Small wins every week",
    icon: BookOpenCheck
  },
  {
    title: "Projects & Expression",
    copy: "Children show understanding through speaking, art, experiments, coding puzzles or home projects instead of only memorising.",
    parentSees: "Confidence beyond marks",
    childFeels: "Proud of their work",
    icon: Lightbulb
  },
  {
    title: "Progress Review",
    copy: "Parents receive simple updates on strengths, gaps, habits and next steps so support at home becomes easier.",
    parentSees: "Where to help next",
    childFeels: "Encouraged, not judged",
    icon: CalendarCheck
  },
  {
    title: "Exam Readiness",
    copy: "Older learners get revision rhythm, assignment awareness, practice planning and calm preparation support.",
    parentSees: "Readiness checkpoints",
    childFeels: "Prepared and steady",
    icon: FileCheck2
  }
];

const parentMoments = [
  ["Week 1", "Parent receives starting-level notes and a suggested learning rhythm."],
  ["Week 2-4", "Child builds routine through activities, worksheets and mentor feedback."],
  ["Monthly", "Progress review highlights confidence, gaps and next focus areas."],
  ["Before Exams", "Practice, revision and readiness conversations become more focused."]
];

export default function LearningJourneyPage() {
  return (
    <>
      <CursorSparkles />
      <SmoothScroll />
      <Navbar />
      <main className="trust-page journey-page">
        <section className="trust-hero journey-page-hero">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="trust-eyebrow"><Compass className="size-4" aria-hidden /> Learning Journey</span>
              <h1>Every Child Needs A Path They Can Believe In</h1>
              <p>Our journey turns flexible learning into a visible adventure: discover the child, create a plan, learn with joy, review progress and prepare calmly for the next milestone.</p>
              <div className="trust-actions">
                <Link href="/contact">Create My Child&apos;s Roadmap <ArrowRight className="size-4" aria-hidden /></Link>
                <Link href="/programs">Compare Programs</Link>
              </div>
            </div>
            <div className="journey-orbit-card">
              {journey.map(([title, , Icon], index) => (
                <span key={title} style={{ "--i": index } as CSSProperties}>
                  <Icon aria-hidden />
                  {title}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section bg-cream">
          <div className="mx-auto max-w-7xl">
            <div className="trust-section-heading">
              <span>Roadmap</span>
              <h2>From First Conversation To Achievement</h2>
              <p>A deeper version of the homepage journey, designed for parents who want to understand the full learning flow.</p>
            </div>
            <div className="journey-deep-grid">
              {journeyDeepDive.map(({ title, copy, parentSees, childFeels, icon: Icon }, index) => (
                <article key={title} className="journey-deep-card">
                  <span>{index + 1}</span>
                  <Icon aria-hidden />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <div>
                    <strong>Parent sees</strong>
                    <small>{parentSees}</small>
                  </div>
                  <div>
                    <strong>Child feels</strong>
                    <small>{childFeels}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section bg-[#EEF8FF]">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="trust-sticky-note">
              <Sparkles className="size-12 text-coral" aria-hidden />
              <h2>What Parents Experience Over Time</h2>
              <p>The journey is not just for children. Parents also need rhythm, language and confidence to support learning at home.</p>
            </div>
            <div className="parent-moment-track">
              {parentMoments.map(([time, copy], index) => (
                <article key={time}>
                  <span>{time}</span>
                  <p>{copy}</p>
                  <Star aria-hidden style={{ "--i": index } as CSSProperties} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-final-cta">
          <CheckCircle2 className="size-12" aria-hidden />
          <h2>Ready To Turn Confusion Into A Clear Roadmap?</h2>
          <p>Start with a counselling call and we will map the child&apos;s current stage, support needs and next milestone.</p>
          <Link href="/contact">Book Parent Counselling <ArrowRight className="size-4" aria-hidden /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
