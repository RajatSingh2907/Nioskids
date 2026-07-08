import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Clock, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Navbar } from "@/components/Navbar";
import { CuteFinalCTA, PageEmotionalSections, StorybookChapter } from "@/components/PageEnhancements";
import { SmoothScroll } from "@/components/SmoothScroll";
import { siteContact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact NIOS Kids | Talk To A Learning Mentor",
  description: "Contact NIOS Kids for class-wise guidance, program counselling and NIOS-aligned learning support from Class 1 to 12."
};

const contactReasons = [
  ["Choose the right program", "Tell us the student's class, current learning stage and goals."],
  ["Understand NIOS support", "Ask about OBE, secondary, senior secondary, TMA or practical readiness."],
  ["Plan learning rhythm", "Discuss weekly classes, practice, activities and parent review style."],
  ["Start calmly", "Get a suggested next step without pressure-heavy admission language."]
];

const counsellingFlow = [
  ["Share", "Fill the form or message us on WhatsApp."],
  ["Discuss", "We understand the student's needs and family goals."],
  ["Suggest", "You receive a suitable program or support pathway."],
  ["Begin", "Learning starts with a simple weekly rhythm."]
];

export default function ContactPage() {
  return (
    <>
      <CursorSparkles />
      <SmoothScroll />
      <Navbar />
      <main className="trust-page contact-page">
        <Hero id="contact" title="Talk To A Mentor About Your Learning Path" copy="Share the student's class, current learning situation and NIOS goals. We will help you understand the best next step." imageSrc="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80" imageAlt="Teacher and family discussing progress in a classroom environment" primaryAction={{ href: siteContact.whatsapp, label: "Message On WhatsApp", icon: <ArrowRight className="size-5" aria-hidden /> }} secondaryAction={{ href: `tel:${siteContact.phone.replace(/\s/g, "")}`, label: "Call A Mentor" }} />

        <StorybookChapter
          chapter="Chapter 06 - Counselling Camp"
          title="A Warm Place To Bring The Questions You Cannot Yet Name"
          copy="This chapter is for parents who know something needs support, even if they do not yet know the exact program, stage or NIOS question."
          trust="Parents get a clear response path: message, discuss, suggest, begin."
          path={["Ask", "Share", "Listen", "Guide", "Begin"]}
          tone="sky"
        />

        <PageEmotionalSections
          eyebrow="Before you call"
          title="You do not need perfect clarity before reaching out."
          copy="Parents often come with half-formed questions: my child avoids writing, we are confused about NIOS, we need structure, we need kindness. That is enough to begin."
          points={[
            { title: "Bring the real concern", copy: "Academic, emotional, routine-based or NIOS-related questions are all welcome." },
            { title: "No pressure script", copy: "The first conversation is for understanding, not forcing a decision." },
            { title: "Leave with one next step", copy: "Even if you do not join immediately, you should feel clearer than before." }
          ]}
          bridgeTitle="The best contact form is the one parents are not afraid to submit."
          bridgeCopy="So we keep the ask simple: age, contact and what you are worried about. The human conversation can do the rest."
          bridgeItems={["Worry", "Message", "Listen", "Guide", "Relief"]}
        />

        <section className="trust-section contact-form-section">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="contact-form-note">
              <Sparkles className="size-12 text-coral" aria-hidden />
              <h2>Send The First Details Calmly</h2>
              <p>Share the basic contact, student class and what feels confusing right now. The form stays short so the counselling conversation can do the real listening.</p>
              <div>
                <span>Parent name</span>
                <span>Phone number</span>
                <span>Child age</span>
              </div>
            </div>
            <div className="contact-page-panel">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="trust-section bg-cream">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="trust-sticky-note">
              <Sparkles className="size-12 text-coral" aria-hidden />
              <h2>What You Can Ask Us</h2>
              <p>Parents usually come with confusion. This page is designed to turn that into a clear first action.</p>
              <div className="contact-direct-list">
                <a href={`tel:${siteContact.phone.replace(/\s/g, "")}`}><Phone className="size-5" aria-hidden /> {siteContact.phone}</a>
                <a href={`mailto:${siteContact.email}`}><Mail className="size-5" aria-hidden /> {siteContact.email}</a>
                <span><Clock className="size-5" aria-hidden /> {siteContact.hours}</span>
                <span><MapPin className="size-5" aria-hidden /> {siteContact.location}</span>
              </div>
            </div>
            <div className="contact-reason-grid">
              {contactReasons.map(([title, copy]) => (
                <article key={title}>
                  <CheckCircle2 aria-hidden />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section bg-[#EEF8FF]">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="trust-section-heading text-left">
                <span>Support Map</span>
                <h2>How Your Query Moves Forward</h2>
                <p>Use the interactive map to see how parent counselling connects to learning, home practice and reviews.</p>
              </div>
              <InteractiveMap />
            </div>
            <div className="counselling-flow">
              {counsellingFlow.map(([title, copy], index) => (
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

        <CuteFinalCTA title="Still Want To Read Before You Talk?" copy="That is completely okay. Start with the parent info guide, then come back when your questions feel ready." href="/nios-info" label="Read The Parent Guide" />
      </main>
      <Footer />
    </>
  );
}
