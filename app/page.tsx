import { CursorSparkles } from "@/components/CursorSparkles";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { AboutSection, ActivitiesSection, AdmissionsSection, ContactSection, FAQSection, FeaturesSection, GallerySection, JourneySection, PeopleAndStories, ProgramsSection, TrustedSection } from "@/components/Sections";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <CursorSparkles />
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <TrustedSection />
        <AboutSection />
        <FeaturesSection />
        <JourneySection />
        <ProgramsSection />
        <ActivitiesSection />
        <PeopleAndStories />
        <GallerySection />
        <AdmissionsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
