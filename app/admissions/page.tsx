import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, ClipboardList, FileCheck2, HeartHandshake, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
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
        <section className="trust-hero admissions-hero">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <span className="trust-eyebrow"><CalendarCheck className="size-4" aria-hidden /> Admissions</span>
              <h1>A Calm Start For Parents, A Gentle Start For Children</h1>
              <p>Admission begins with a conversation, not pressure. We understand your child&apos;s learning stage, family goals and support needs before suggesting a program.</p>
              <div className="trust-actions">
                <Link href="/contact">Book Counselling <ArrowRight className="size-4" aria-hidden /></Link>
                <a href={siteContact.whatsapp}>WhatsApp Us</a>
              </div>
            </div>
            <div className="admission-help-card">
              <Phone className="size-12 text-coral" aria-hidden />
              <h2>Dummy Counselling Desk</h2>
              <p>{siteContact.phone}</p>
              <p>{siteContact.hours}</p>
              <span>Real centre details can replace this anytime.</span>
            </div>
          </div>
        </section>

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

        <section className="trust-final-cta">
          <Sparkles className="size-12" aria-hidden />
          <h2>Ready To Understand The Best Starting Point?</h2>
          <p>Share the child&apos;s age, current learning situation and parent goals. We will suggest the next step.</p>
          <Link href="/contact">Start Parent Counselling <HeartHandshake className="size-4" aria-hidden /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
