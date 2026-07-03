import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, FileQuestion, HelpCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { CuteFinalCTA, PageEmotionalSections, StorybookChapter } from "@/components/PageEnhancements";
import { SmoothScroll } from "@/components/SmoothScroll";
import { niosInfoCards, niosInfoHighlights, niosInfoSteps, siteContact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "NIOS Parent Information | NIOS Kids",
  description: "Parent-friendly answers about OBE, Secondary, Senior Secondary, documents, TMA support, practical readiness, certificate validity and NIOS support boundaries."
};

export default function NiosInfoPage() {
  return (
    <>
      <CursorSparkles />
      <SmoothScroll />
      <Navbar />
      <main className="nios-info-page">
        <Hero id="nios-info" title="NIOS Questions Parents Ask First" copy="A simple, friendly guide to OBE, Secondary, Senior Secondary, documents, TMA support, practical readiness and what a learning-support platform can help with." imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80" imageAlt="Child using a laptop for guided digital learning" primaryAction={{ href: siteContact.whatsapp, label: "Ask on WhatsApp", icon: <ArrowRight className="size-5" aria-hidden /> }} secondaryAction={{ href: `tel:${siteContact.phone.replace(/\s/g, "")}`, label: "Call Counselling", icon: <Phone className="size-5" aria-hidden /> }} />

        <StorybookChapter
          chapter="Chapter 07 - Parent Compass"
          title="A Calm Compass For NIOS Words, Stages And Boundaries"
          copy="This chapter helps parents separate official NIOS rules from learning support, so counselling starts with clarity instead of panic."
          trust="Parents see what we can support and what must be verified officially."
          path={["OBE", "Secondary", "TMA", "Practical", "Verify"]}
          tone="mint"
        />

        <PageEmotionalSections
          eyebrow="Parent clarity"
          title="NIOS feels easier when the words stop sounding like a maze."
          copy="OBE, Secondary, Senior Secondary, TMA and practicals can feel like separate puzzles. This guide connects those pieces into a calmer parent decision."
          points={[
            { title: "Know the stage", copy: "Understand whether the question is about foundation, class 10 level or class 12 level support." },
            { title: "Know the boundary", copy: "Separate official NIOS decisions from learning support and mentoring." },
            { title: "Know what to ask", copy: "Walk into counselling with better questions and less panic." }
          ]}
          bridgeTitle="Information should reduce fear, not create more tabs to open."
          bridgeCopy="That is why this page keeps the language simple and repeatedly points parents toward official verification where needed."
          bridgeItems={["OBE", "Secondary", "TMA", "Practical", "Clarity"]}
        />

        <section className="section-pad bg-cream">
          <div className="mx-auto max-w-7xl">
            <div className="info-decision-strip">
              <article>
                <FileQuestion aria-hidden />
                <strong>Confused about stage?</strong>
                <p>Start by comparing OBE, Secondary and Senior Secondary before counselling.</p>
              </article>
              <article>
                <ShieldCheck aria-hidden />
                <strong>Need official clarity?</strong>
                <p>We explain support boundaries clearly and remind parents to verify official rules.</p>
              </article>
              <article>
                <Sparkles aria-hidden />
                <strong>Ready for guidance?</strong>
                <p>Use the dummy WhatsApp contact until actual institute details are available.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#FFF8EC]">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
            {niosInfoHighlights.map(([title, copy]) => (
              <article key={title} className="info-highlight">
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-pad bg-[#EEF8FF]">
          <div className="mx-auto max-w-7xl">
            <div className="info-section-heading">
              <span className="info-eyebrow"><HelpCircle className="size-4" aria-hidden /> Detailed answers</span>
              <h2>Everything In One Calm Place</h2>
              <p>No heavy jargon. Just the practical information parents usually want before booking counselling.</p>
            </div>
            <div className="info-card-grid">
              {niosInfoCards.map(([title, copy, Icon, points]) => (
                <article key={title} className="info-card">
                  <Icon aria-hidden />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <ul>
                    {points.map((point) => (
                      <li key={point}><CheckCircle2 className="size-4" aria-hidden /> {point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-[#FFE5EC]">
          <div className="mx-auto max-w-6xl">
            <div className="info-section-heading">
              <span className="info-eyebrow">How support begins</span>
              <h2>From Parent Doubt To Clear Plan</h2>
            </div>
            <div className="info-steps">
              {niosInfoSteps.map(([title, copy], index) => (
                <article key={title}>
                  <span>{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <CuteFinalCTA title="Still Unsure Which NIOS Path Fits?" copy="Send us the child&apos;s age, current class level and biggest confusion. We will help you frame the next question clearly." href="/contact" label="Ask For Parent Clarity" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
