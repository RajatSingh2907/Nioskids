"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookMarked, CalendarDays, ClipboardCheck, FlaskConical, GraduationCap, Mail, MapPin, MessageCircleQuestion, Phone } from "lucide-react";
import {
  activities,
  admissions,
  features,
  journey,
  learningPathways,
  parentProof,
  parentTrustReasons,
  programs,
  siteContact,
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
      <SectionTitle eyebrow="About NIOS Support" title="Flexible Schooling Needs A Clear Path" copy="NIOS gives families and students flexibility. We make it easier to use with mentoring, activity-based learning, subject planning and exam-ready milestones." />
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
        {["Younger learners build basics through curiosity, projects and guided practice.", "Older students get subject planning, revision rhythm and exam-readiness.", "Families understand the roadmap instead of guessing the next step."].map((item, index) => (
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
      <SectionTitle eyebrow="Why Choose Us" title="Warm Support With Academic Structure" copy="The platform is built for learners from Class 1 to 12 who need flexible learning without losing structure, accountability or confidence." />
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

export function LearningSupportSection() {
  return (
    <section className="section-pad bg-cream larkspur-world">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <Reveal className="support-story">
          <span className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-coral shadow-float">Learning Support</span>
          <h2>Support That Fits Each Learner</h2>
          <p>
            Clear pathways, small batches, remedial care and mentor guidance help students learn with less pressure and more confidence.
          </p>
          <div className="support-callout">
            <strong>Best for families looking for</strong>
            <span>nurturing support</span>
            <span>individual attention</span>
            <span>creative learning</span>
          </div>
          <div className="support-actions">
            <a href="#contact" className="support-cta">
              Discuss Learning Needs <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href="/nios-info" className="support-secondary-cta">
              Read NIOS Parent Info <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </Reveal>
        <div className="support-grid">
          {parentTrustReasons.map(([title, copy, Icon], index) => (
            <Reveal key={title} delay={index * 0.04} className="trust-reason">
              <Icon aria-hidden />
              <strong>{title}</strong>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {learningPathways.map(([title, level, copy, Icon, points], index) => (
          <Reveal key={title} delay={index * 0.04} className="pathway-card">
            <div>
              <Icon aria-hidden />
              <span>{level}</span>
            </div>
            <h3>{title}</h3>
            <p>{copy}</p>
            <ul>
              {points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
    <section id="journey" className="section-pad bg-[#FFE5EC] road-world">
      <SectionTitle eyebrow="Learning Journey" title="From Clarity To Confidence" copy="A simple roadmap helps students and parents see what is happening, from early basics to board preparation." />
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
      <SectionTitle eyebrow="Class Pathways" title="Choose The Right Stage From Class 1 To 12" copy="Each pathway balances creative learning, study habits and academic milestones so younger learners and higher-class students both feel included." />
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
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

const seniorSupport = [
  ["Subject Planning", "Choose and organize subjects with a realistic weekly study map.", BookMarked],
  ["TMA Guidance", "Understand assignment expectations, timelines and drafting support.", ClipboardCheck],
  ["Exam Readiness", "Build revision checkpoints, practice rhythm and confidence before exams.", GraduationCap],
  ["Practical Preparation", "Plan practical-related awareness early for applicable subjects.", FlaskConical],
  ["Study Schedule", "Create a steady timetable that works with flexible learning.", CalendarDays],
  ["Doubt Clearing", "Use mentor conversations to solve stuck topics before they pile up.", MessageCircleQuestion]
] as const;

export function SeniorSupportSection() {
  return (
    <section className="section-pad senior-support-world">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal className="senior-support-intro">
          <span>For Classes 9-12</span>
          <h2>Secondary & Senior Secondary Support</h2>
          <p>Older students need more than playful activities. They need subject clarity, TMA planning, revision rhythm, practical awareness and a calm mentor who can help them stay consistent.</p>
          <a href="/contact">Get Exam Support <ArrowRight className="size-4" aria-hidden /></a>
        </Reveal>
        <div className="senior-support-grid">
          {seniorSupport.map(([title, copy, Icon], index) => (
            <Reveal key={title} delay={index * 0.04} className="senior-support-card">
              <Icon aria-hidden />
              <h3>{title}</h3>
              <p>{copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ActivitiesSection() {
  return (
    <section className="section-pad bg-[#EEF8FF] activity-world">
      <SectionTitle eyebrow="Interactive Learning" title="Activities With Academic Purpose" copy="Activities are age-aware: playful for juniors, deeper and skill-focused for middle and higher-class students." />
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
      <SectionTitle eyebrow="Mentors & Stories" title="Guidance Students Can Actually Use" copy="Younger learners need friendly faces. Older students need credible academic guides. This section speaks to both." />
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
      <SectionTitle eyebrow="Gallery" title="Learning Evidence Across Stages" copy="A preview of reading, projects, STEM, digital learning and progress moments across younger and higher-class students." />
      <InteractiveGallery />
    </section>
  );
}

export function AdmissionsSection() {
  return (
    <section id="admissions" className="section-pad bg-cream launch-world">
      <SectionTitle eyebrow="Admissions" title="A Calm Start For Students And Parents" copy="The first step is not pressure. It is a clear conversation about class level, goals, subjects and whether this path fits." />
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
      <SectionTitle eyebrow="FAQ" title="Clear Answers Before Counselling" copy="Quick clarity for students and parents comparing flexible schooling, learning support and NIOS-aligned guidance." />
      <FAQBooks />
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section-pad contact-world">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <span className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-coral shadow-float">Mentor Counselling</span>
          <h2 className="mt-5 font-heading text-6xl font-extrabold leading-none text-ink">Start With A Learning Path Call</h2>
          <p className="mt-5 text-lg leading-8 text-ink/75">Tell us the student&apos;s class, current learning situation and NIOS goals. We will suggest the right program stage and next step.</p>
          <div className="mt-8 space-y-3 font-bold text-ink/80">
            <p><Phone className="mr-2 inline size-5" /> {siteContact.phone}</p>
            <p><Mail className="mr-2 inline size-5" /> {siteContact.email}</p>
            <p><MapPin className="mr-2 inline size-5" /> {siteContact.location}</p>
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
