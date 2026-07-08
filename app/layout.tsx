import type { Metadata } from "next";
import { Baloo_2, Nunito, Poppins } from "next/font/google";
import "./globals.css";

const heading = Baloo_2({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = Nunito({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const button = Poppins({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-button", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nioskids.example"),
  applicationName: "NIOS Kids",
  title: {
    default: "NIOS Kids Learning Platform | Class 1-12 Flexible Learning Support",
    template: "%s | NIOS Kids"
  },
  description:
    "Flexible learning support for every stage, from foundational years to board-ready NIOS students with mentoring, class pathways, TMA guidance and exam readiness.",
  keywords: ["NIOS learning support", "open schooling support", "Class 1 to 12 learning", "secondary exam support", "senior secondary NIOS", "flexible learning"],
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "NIOS Kids Learning Platform",
    description: "Where curiosity begins and learning feels like a magical adventure.",
    url: "/",
    siteName: "NIOS Kids",
    type: "website",
    locale: "en_IN",
    images: ["/images/nios-learning-world.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "NIOS Kids Learning Platform",
    description: "Flexible learning support for younger learners and higher-class NIOS students.",
    images: ["/images/nios-learning-world.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "NIOS Kids Learning Platform",
    url: "https://nioskids.example",
    description: "Child-friendly NIOS learning support with creative activities and flexible programs.",
    educationalCredentialAwarded: "NIOS learning support",
    telephone: "+91 98765 43210",
    email: "hello@nioskids.example",
    audience: [{ "@type": "Audience", audienceType: "Students from Class 1 to 12 and parents" }],
    sameAs: ["https://nioskids.example/about", "https://nioskids.example/programs", "https://nioskids.example/nios-info"]
  };

  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} ${button.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
