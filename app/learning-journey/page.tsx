import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ArrowRight, BookOpenCheck, CalendarCheck, Compass, FileCheck2, HeartHandshake, Lightbulb, Sparkles, Star } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { CuteFinalCTA, PageEmotionalSections, StorybookChapter } from "@/components/PageEnhancements";
import { SmoothScroll } from "@/components/SmoothScroll";

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
        <Hero
          id="learning-journey"
          eyebrow="Learning Journey"
          eyebrowIcon={<Compass className="size-4" aria-hidden />}
          title="Every Child Needs A Path They Can Believe In"
          copy="Our journey turns flexible learning into a visible adventure: discover the child, create a plan, learn with joy, review progress and prepare calmly for the next milestone."
          primaryAction={{ href: "/contact", label: "Create My Child's Roadmap", icon: <ArrowRight className="size-5" aria-hidden /> }}
          secondaryAction={{ href: "/programs", label: "Compare Programs" }}
        />

        <StorybookChapter
          chapter="Chapter 03 - The Learning Map"
          title="A Roadmap Children Can Follow And Parents Can Trust"
          copy="This chapter turns learning into a visible map, where every milestone is small enough to start and meaningful enough to celebrate."
          trust="Parents understand the rhythm before the child enters the routine."
          path={["Discover", "Plan", "Practice", "Create", "Achieve"]}
          tone="mint"
        />

        <PageEmotionalSections
          eyebrow="More than steps"
          title="A journey works when the child can feel progress before the parent demands it."
          copy="The roadmap is not only a timeline. It is a way to make small effort visible, celebrate consistency and help the child trust their own learning again."
          points={[
            { title: "Tiny wins matter", copy: "A completed worksheet, spoken answer or project explanation becomes proof of movement." },
            { title: "Reviews stay gentle", copy: "Progress updates focus on next support, not blame." },
            { title: "Confidence compounds", copy: "When the child sees progress, the next milestone feels less scary." }
          ]}
          bridgeTitle="The roadmap connects home, mentor and child."
          bridgeCopy="Parents know what to support, mentors know what to adjust, and the child knows what victory looks like this week."
          bridgeItems={["Start", "Practice", "Create", "Review", "Achieve"]}
        />

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

        <CuteFinalCTA title="Let Us Draw Your Child&apos;s Next Little Map" copy="No heavy promises. Just one warm conversation to understand where your child is and what the next doable milestone should be." label="Create A Learning Roadmap" />
      </main>
      <Footer />
    </>
  );
}
