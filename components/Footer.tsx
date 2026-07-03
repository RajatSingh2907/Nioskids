import Link from "next/link";
import { ArrowRight, BookOpenCheck, CloudMoon, Mail, Moon, Phone, Star } from "lucide-react";
import { siteContact } from "@/lib/site-data";

const footerLinks = [
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Journey", "/learning-journey"],
  ["Gallery", "/gallery"],
  ["Admissions", "/admissions"],
  ["NIOS Info", "/nios-info"],
  ["Contact", "/contact"]
];

export function Footer() {
  return (
    <footer className="night-footer px-5 py-14 text-white">
      <div className="footer-cloud footer-cloud-one" aria-hidden />
      <div className="footer-cloud footer-cloud-two" aria-hidden />
      <div className="footer-hill" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="footer-world">
          <div className="footer-moon-wrap">
            <Moon className="size-12 text-sun" aria-hidden />
            <CloudMoon className="footer-mini-cloud size-8" aria-hidden />
          </div>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,5.4rem)] font-extrabold leading-none">NIOS Kids</h2>
          <p>A soft landing after the learning adventure: child-friendly support, parent clarity and flexible NIOS-aligned guidance.</p>
          <div className="footer-cta-row">
            <Link href="/contact">Book Counselling <ArrowRight className="size-4" aria-hidden /></Link>
            <Link href="/nios-info">Read NIOS Info</Link>
          </div>
        </div>
        <div className="footer-panel">
          <BookOpenCheck className="size-9 text-sun" aria-hidden />
          <nav aria-label="Footer navigation">
            {footerLinks.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
          </nav>
          <div className="footer-contact">
            <a href={`tel:${siteContact.phone.replace(/\s/g, "")}`}><Phone className="size-4" aria-hidden /> {siteContact.phone}</a>
            <a href={`mailto:${siteContact.email}`}><Mail className="size-4" aria-hidden /> {siteContact.email}</a>
          </div>
        </div>
        <div className="footer-stars" aria-hidden>
          {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="twinkle size-5 text-sun" />)}
        </div>
      </div>
    </footer>
  );
}
