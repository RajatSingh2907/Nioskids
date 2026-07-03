import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, HeartHandshake, Rocket } from "lucide-react";
import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { learningPathways, programs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Programs | NIOS Kids Learning Pathways",
  description: "Explore foundation, primary, OBE, secondary, senior secondary and remedial learning support programs for children and parents."
};

const weeklyRhythm = [
  ["Plan", "Weekly focus areas and parent-visible goals."],
  ["Learn", "Mentor-led sessions with stories, practice and activities."],
  ["Create", "Projects, worksheets or speaking tasks that show understanding."],
  ["Review", "Progress notes and next-step guidance for parents."]
];

export default function ProgramsPage() {
  return (
    <>
      <CursorSparkles />
      <SmoothScroll />
      <Navbar />
      <main className="trust-page programs-page">
        <section className="trust-hero programs-hero">
          <div className="mx-auto max-w-7xl">
            <span className="trust-eyebrow"><Rocket className="size-4" aria-hidden /> Programs</span>
            <h1>Choose A Learning Path That Fits Your Child</h1>
            <p>Each program is designed around age, confidence, parent goals and NIOS-aligned academic needs. Dummy details are used for now and can be replaced with exact offerings later.</p>
            <div className="trust-actions">
              <Link href="/contact">Get Program Guidance <ArrowRight className="size-4" aria-hidden /></Link>
              <Link href="/nios-info">Understand NIOS Info</Link>
            </div>
          </div>
        </section>

        <section className="trust-section bg-cream">
          <div className="mx-auto max-w-7xl">
            <div className="program-detail-grid">
              {programs.map((program) => (
                <article key={program.title} className={`program-detail-card bg-gradient-to-br ${program.gradient}`}>
                  <span>{program.age}</span>
                  <h2>{program.title}</h2>
                  <p>{program.copy}</p>
                  <ul>
                    {program.outcomes.map((outcome) => (
                      <li key={outcome}><CheckCircle2 className="size-4" aria-hidden /> {outcome}</li>
                    ))}
                  </ul>
                  <strong>{program.parentFit}</strong>
                  <Link href="/contact">Discuss this program <ArrowRight className="size-4" aria-hidden /></Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section bg-[#EEF8FF]">
          <div className="mx-auto max-w-7xl">
            <div className="trust-section-heading">
              <span>NIOS & Support Pathways</span>
              <h2>More Than One Kind Of Learner Can Belong Here</h2>
              <p>Parents can compare support stages before choosing the right counselling conversation.</p>
            </div>
            <div className="pathway-detail-grid">
              {learningPathways.map(([title, level, copy, Icon, points]) => (
                <article key={title} className="pathway-detail-card">
                  <Icon aria-hidden />
                  <span>{level}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-section bg-[#FFE5EC]">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div className="trust-sticky-note">
              <BookOpen className="size-12 text-coral" aria-hidden />
              <h2>A Simple Weekly Rhythm</h2>
              <p>Programs can change by age and subject, but the parent experience stays clear: know the plan, see the work, understand the next step.</p>
            </div>
            <div className="rhythm-track">
              {weeklyRhythm.map(([title, copy], index) => (
                <article key={title}>
                  <span>{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="trust-final-cta">
          <GraduationCap className="size-12" aria-hidden />
          <h2>Not Sure Which Program Fits?</h2>
          <p>A short counselling call can map the child&apos;s current level, parent goals and best starting point.</p>
          <Link href="/contact">Book Parent Counselling <HeartHandshake className="size-4" aria-hidden /></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
