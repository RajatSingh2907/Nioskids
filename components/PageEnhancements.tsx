import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, BookOpenCheck, HeartHandshake, Lightbulb, ShieldCheck, Sparkles, Star } from "lucide-react";

type EmotionalPoint = {
  title: string;
  copy: string;
};

type PageEmotionalSectionsProps = {
  eyebrow: string;
  title: string;
  copy: string;
  points: EmotionalPoint[];
  bridgeTitle: string;
  bridgeCopy: string;
  bridgeItems: string[];
};

export function PageEmotionalSections({ eyebrow, title, copy, points, bridgeTitle, bridgeCopy, bridgeItems }: PageEmotionalSectionsProps) {
  return (
    <>
      <section className="emotional-section bg-[#FFF8EC]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="emotion-note">
            <span><Sparkles className="size-4" aria-hidden /> {eyebrow}</span>
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          <div className="emotion-grid">
            {points.map((point, index) => (
              <article key={point.title}>
                <Star aria-hidden style={{ "--i": index } as CSSProperties} />
                <h3>{point.title}</h3>
                <p>{point.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="emotional-section bg-[#EEF8FF]">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="bridge-ribbon">
            {bridgeItems.map((item, index) => (
              <span key={item} style={{ "--i": index } as CSSProperties}>{item}</span>
            ))}
          </div>
          <div className="emotion-note">
            <span><HeartHandshake className="size-4" aria-hidden /> Parent and child connection</span>
            <h2>{bridgeTitle}</h2>
            <p>{bridgeCopy}</p>
            <Link href="/contact">Talk Through This Together <ArrowRight className="size-4" aria-hidden /></Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function CuteFinalCTA({ title, copy, href = "/contact", label = "Book A Warm Counselling Call" }: { title: string; copy: string; href?: string; label?: string }) {
  return (
    <section className="trust-final-cta cute-final-cta">
      <span className="cta-star cta-star-one" aria-hidden />
      <span className="cta-star cta-star-two" aria-hidden />
      <Lightbulb className="size-12" aria-hidden />
      <h2>{title}</h2>
      <p>{copy}</p>
      <Link href={href}>{label} <ArrowRight className="size-4" aria-hidden /></Link>
    </section>
  );
}

export function StorybookChapter({
  chapter,
  title,
  copy,
  trust,
  path,
  tone = "sun"
}: {
  chapter: string;
  title: string;
  copy: string;
  trust: string;
  path: string[];
  tone?: "sun" | "sky" | "mint" | "coral" | "grape";
}) {
  return (
    <section className={`storybook-chapter chapter-${tone}`}>
      <div className="storybook-cloud cloud-left" aria-hidden />
      <div className="storybook-cloud cloud-right" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="chapter-copy">
          <span><BookOpenCheck className="size-4" aria-hidden /> {chapter}</span>
          <h2>{title}</h2>
          <p>{copy}</p>
          <div className="chapter-trust">
            <ShieldCheck className="size-5" aria-hidden />
            <strong>{trust}</strong>
          </div>
        </div>
        <div className="chapter-map" aria-label={`${chapter} adventure path`}>
          {path.map((item, index) => (
            <div key={item} style={{ "--i": index } as CSSProperties}>
              <span>{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
