import type { Metadata } from "next";
import { ArrowRight, ClipboardList, FileCheck2, ShieldCheck } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { CuteFinalCTA, PageEmotionalSections, StorybookChapter } from "@/components/PageEnhancements";
import { SmoothScroll } from "@/components/SmoothScroll";
import { admissions, siteContact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Admissions | Start With Parent Counselling",
  description: "Understand the calm admissions and counselling process for NIOS Kids learning support programs."
};

const documents = [
  "Child age or birth proof",
  "Parent contact details",
  "Previous learning records, if available",
  "Current academic concern or goal note",
  "Recent photo or learner profile details"
];

const fitChecks = [
  ["Flexible schooling need", "The child needs learning support that can adapt to pace, confidence or schedule."],
  ["Parent wants clarity", "The family wants a visible roadmap instead of only classes."],
  ["Creative learning helps", "The child responds better to activities, stories, projects and patient mentoring."],
  ["NIOS pathway interest", "The family is exploring OBE, secondary, senior secondary or support around NIOS."]
];

export default function AdmissionsPage() {
  return (
    <>
      <CursorSparkles />
      <SmoothScroll />
      <Navbar />
      <main className="trust-page admissions-page">
        <Hero id="admissions" title="A Calm Start For Parents, A Gentle Start For Children" copy="Admission begins with a conversation, not pressure. We understand your child's learning stage, family goals and support needs before suggesting a program." imageSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80" imageAlt="Students working with a teacher during a hands-on classroom activity" primaryAction={{ href: "/contact", label: "Book Counselling", icon: <ArrowRight className="size-5" aria-hidden /> }} secondaryAction={{ href: siteContact.whatsapp, label: "WhatsApp Us" }} />

        <StorybookChapter
          chapter="Chapter 05 - The Welcome Gate"
          title="A Gentle Entry Point Before Any Formal Decision"
          copy="This chapter helps parents step in without pressure. First we understand the child, then we suggest the right path."
          trust="Parents see the process, documents and fit checks before committing."
          path={["Connect", "Counsel", "Prepare", "Register", "Begin"]}
          tone="grape"
        />

        <PageEmotionalSections
          eyebrow="No pressure start"
          title="Admissions should feel like opening a door, not entering an interview."
          copy="Families need a calm first step where questions are welcome, documents are explained and the child is not made to feel behind before learning even begins."
          points={[
            { title: "A soft first conversation", copy: "We begin with listening to the family story and learning concern." },
            { title: "A clear next action", copy: "Parents leave knowing whether counselling, program mapping or NIOS info is the right step." },
            { title: "A child-safe tone", copy: "The process avoids fear-based urgency and keeps the child emotionally protected." }
          ]}
          bridgeTitle="The first yes should come from clarity."
          bridgeCopy="When parents understand the process, children feel less pressure. That is why admission begins with a conversation before commitment."
          bridgeItems={["Question", "Counselling", "Fit", "Documents", "Start"]}
        />

        <section className="trust-section bg-cream">
          <div className="mx-auto max-w-7xl">
            <div className="trust-section-heading">
              <span>Process</span>
              <h2>Four Steps From Query To Learning Plan</h2>
              <p>The flow is designed to reduce confusion before a family commits.</p>
            </div>
            <div className="admission-page-steps">
              {admissions.map(([title, copy, Icon], index) => (
                <article key={title}>
                  <span>{index + 1}</span>
                  <Icon aria-hidden />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section bg-[#EEF8FF]">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="trust-sticky-note">
              <ClipboardList className="size-12 text-orange" aria-hidden />
              <h2>Documents Parents Can Keep Ready</h2>
              <p>These are dummy preparation points. Exact NIOS enrolment requirements should always be verified from official NIOS instructions.</p>
            </div>
            <div className="document-list">
              {documents.map((item) => (
                <article key={item}>
                  <FileCheck2 className="size-5" aria-hidden />
                  <span>{item}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section bg-[#FFE5EC]">
          <div className="mx-auto max-w-7xl">
            <div className="trust-section-heading">
              <span>Fit Check</span>
              <h2>Who This Works Well For</h2>
              <p>A quick parent-facing filter before counselling.</p>
            </div>
            <div className="trust-card-grid">
              {fitChecks.map(([title, copy]) => (
                <article key={title} className="trust-page-card">
                  <ShieldCheck aria-hidden />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CuteFinalCTA title="Take The First Step Without The Admission Stress" copy="Tell us where your child is today. We will help you see the next step clearly before you decide anything formal." label="Start A Calm Counselling Chat" />
      </main>
      <Footer />
    </>
  );
}
