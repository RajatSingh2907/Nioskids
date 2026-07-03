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
    default: "NIOS Kids Learning Platform | Learn Beyond Boundaries",
    template: "%s | NIOS Kids"
  },
  description:
    "A colorful, parent-trusted and child-friendly NIOS learning platform with flexible programs, creative activities and joyful mentoring.",
  keywords: ["NIOS kids", "NIOS learning support", "open schooling support", "homeschool support", "children education", "flexible learning"],
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
    description: "A magical learning world for children and trusted guidance for parents.",
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
    audience: [{ "@type": "Audience", audienceType: "Children and parents" }],
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
