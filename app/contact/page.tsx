import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { InteractiveMap } from "@/components/InteractiveMap";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { siteContact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact NIOS Kids | Book Parent Counselling",
  description: "Contact NIOS Kids for parent counselling, program guidance and child-friendly NIOS-aligned learning support."
};

const contactReasons = [
  ["Choose the right program", "Tell us the child's age, current learning stage and goals."],
  ["Understand NIOS support", "Ask about OBE, secondary, senior secondary, TMA or practical readiness."],
  ["Plan learning rhythm", "Discuss weekly classes, practice, activities and parent review style."],
  ["Start calmly", "Get a suggested next step without pressure-heavy admission language."]
];

const counsellingFlow = [
  ["Share", "Fill the form or message us on WhatsApp."],
  ["Discuss", "We understand the child's needs and parent goals."],
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
        <section className="trust-hero contact-page-hero">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="trust-eyebrow"><MessageCircle className="size-4" aria-hidden /> Contact</span>
              <h1>Start With A Parent Counselling Conversation</h1>
              <p>Share your child&apos;s age, current learning situation and NIOS goals. We will help you understand the best next step with dummy contact details for now.</p>
              <div className="trust-actions">
                <a href={siteContact.whatsapp}>Message On WhatsApp <ArrowRight className="size-4" aria-hidden /></a>
                <a href={`tel:${siteContact.phone.replace(/\s/g, "")}`}>Call Counselling</a>
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

        <section className="trust-final-cta">
          <CalendarCheck className="size-12" aria-hidden />
          <h2>Prefer To Read Before Talking?</h2>
          <p>Visit the NIOS parent guide first, then come back when you are ready for counselling.</p>
          <Link href="/nios-info">Read NIOS Parent Info <ArrowRight className="size-4" aria-hidden /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
