"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import {
  activities,
  admissions,
  features,
  journey,
  parentProof,
  programs,
  stats,
  teachers,
  trustBadges
} from "@/lib/site-data";
import { AnimatedCounter } from "./AnimatedCounter";
import { ContactForm } from "./ContactForm";
import { FAQBooks } from "./FAQBooks";
import { InteractiveGallery } from "./InteractiveGallery";
import { InteractiveMap } from "./InteractiveMap";
import { Reveal } from "./Motion";
import { TestimonialCarousel } from "./TestimonialCarousel";

export function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-3xl text-center">
      <span className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-coral shadow-float">{eyebrow}</span>
      <h2 className="mt-5 font-heading text-[clamp(2.3rem,5vw,4.8rem)] font-extrabold leading-none text-ink">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-ink/72">{copy}</p>
    </Reveal>
  );
}

export function TrustedSection() {
  return (
    <section className="section-pad bg-cream section-clouds">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([number, label], index) => (
            <Reveal key={label} delay={index * 0.05} className="play-card text-center">
              <strong className="font-heading text-5xl text-coral"><AnimatedCounter value={number} /></strong>
              <p className="mt-2 font-bold text-ink/75">{label}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trustBadges.map(([title, copy], index) => (
            <Reveal key={title} delay={index * 0.06} className="trust-badge">
              <strong>{title}</strong>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section-pad bg-[#EEF8FF] story-world">
      <SectionTitle eyebrow="About NIOS Support" title="Flexible Schooling Needs A Clear Path" copy="NIOS gives families flexibility. We make that flexibility easier to use with mentoring, activity-based learning, subject planning and parent-friendly milestones." />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {["Children learn through curiosity, projects and guided practice.", "Parents understand the roadmap instead of guessing the next step.", "Mentors balance confidence, consistency and exam-readiness."].map((item, index) => (
          <Reveal key={item} delay={index * 0.08} className="story-card">
            <span className="story-spark" aria-hidden />
            <span className="story-badge">{index + 1}</span>
            <p>{item}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="section-pad doodle-bg pencil-world">
      <SectionTitle eyebrow="Why Choose Us" title="Trust For Parents, Joy For Children" copy="The platform is built for families who want flexible learning without losing structure, accountability or warmth." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map(([title, copy, Icon, color], index) => (
          <Reveal key={title} delay={index * 0.04} className={`feature-card ${color}`}>
            <span className="card-orbit" aria-hidden />
            <Icon className="size-12 text-ink" aria-hidden />
            <h3>{title}</h3>
            <p>{copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section id="journey" className="section-pad bg-[#FFE5EC] road-world">
      <SectionTitle eyebrow="Learning Journey" title="From Clarity To Confidence" copy="A simple roadmap helps parents see what is happening and helps children feel progress without pressure." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3 lg:grid-cols-6">
        {journey.map(([title, copy, Icon], index) => (
          <Reveal key={title} delay={index * 0.05} className="journey-step">
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.18 }} className="journey-icon">
              <Icon aria-hidden />
            </motion.div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </Reveal>
        ))}
      </div>
      <div className="journey-ribbon" aria-hidden />
    </section>
  );
}

export function ProgramsSection() {
  return (
    <section id="programs" className="section-pad bg-cream island-world">
      <SectionTitle eyebrow="Programs" title="Choose The Right Learning Stage" copy="Each program combines joyful learning with parent-visible outcomes, so families can choose with confidence." />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {programs.map(({ title, age, copy, gradient, outcomes, parentFit }, index) => (
          <Reveal key={title} delay={index * 0.08} className={`program-island bg-gradient-to-br ${gradient}`}>
            <div className="island-cloud" aria-hidden />
            <div className="island-star" aria-hidden />
            <h3>{title}</h3>
            <span>{age}</span>
            <p>{copy}</p>
            <ul className="program-outcomes">
              {outcomes.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <small>{parentFit}</small>
            <a href="#contact">Discuss this stage <ArrowRight className="size-4" aria-hidden /></a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ActivitiesSection() {
  return (
    <section className="section-pad bg-[#EEF8FF] activity-world">
      <SectionTitle eyebrow="Interactive Learning" title="Activities With Academic Purpose" copy="Every activity is fun on the surface and useful underneath: vocabulary, reasoning, expression, observation or confidence." />
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4">
        {activities.map(([label, Icon], index) => (
          <Reveal key={label} delay={index * 0.04} className="activity-pill">
            <Icon aria-hidden /> {label}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function PeopleAndStories() {
  return (
    <section className="section-pad doodle-bg speech-world">
      <SectionTitle eyebrow="Mentors & Stories" title="Real Guidance Families Can Feel" copy="Children need friendly faces. Parents need credible guides. This section speaks to both." />
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="grid gap-5 sm:grid-cols-3">
          {teachers.map(({ name, role, intro, strengths }, index) => (
            <Reveal key={name} delay={index * 0.06} className="teacher-card">
              <div className="avatar">{name.charAt(0)}</div>
              <h3>{name}</h3>
              <span className="teacher-role">{role}</span>
              <p>{intro}</p>
              <div className="teacher-tags">
                {strengths.map((item) => <small key={item}>{item}</small>)}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="quote-card">
          <TestimonialCarousel />
        </Reveal>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="section-pad bg-[#FFE5EC] gallery-world">
      <SectionTitle eyebrow="Gallery" title="Moments Parents Want To See" copy="A preview of the kind of learning evidence families value: projects, reading, experiments and celebration." />
      <InteractiveGallery />
    </section>
  );
}

export function AdmissionsSection() {
  return (
    <section id="admissions" className="section-pad bg-cream launch-world">
      <SectionTitle eyebrow="Admissions" title="A Calm Start For Parents" copy="The first step is not pressure. It is a clear conversation about your child, your goals and whether this path fits." />
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
        {admissions.map(([step, copy, Icon], index) => (
          <Reveal key={step} delay={index * 0.05} className="admission-step">
            <span className="step-trail" aria-hidden />
            <span>{index + 1}</span>
            <Icon className="admission-icon" aria-hidden />
            <h3>{step}</h3>
            <p>{copy}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="parent-proof">
        {parentProof.map((item) => <span key={item}>{item}</span>)}
      </Reveal>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="section-pad bg-[#EEF8FF]">
      <SectionTitle eyebrow="FAQ" title="Clear Answers Before Counselling" copy="Quick clarity for parents comparing flexible schooling, learning support and NIOS-aligned guidance." />
      <FAQBooks />
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section-pad contact-world">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-coral shadow-float">Parent Counselling</span>
          <h2 className="mt-5 font-heading text-6xl font-extrabold leading-none text-ink">Start With A Parent Counselling Call</h2>
          <p className="mt-5 text-lg leading-8 text-ink/75">Tell us your child&apos;s age, current learning situation and NIOS goals. We will suggest the right program stage and next step.</p>
          <div className="mt-8 space-y-3 font-bold text-ink/80">
            <p><Phone className="mr-2 inline size-5" /> +91 98765 43210</p>
            <p><Mail className="mr-2 inline size-5" /> hello@nioskids.example</p>
            <p><MapPin className="mr-2 inline size-5" /> Online and guided learning support</p>
          </div>
          <InteractiveMap />
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
