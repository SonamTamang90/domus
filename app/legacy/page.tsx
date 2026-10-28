import type { Metadata } from "next";
import { Header2 } from "@/components/layout/Header2";
import { Footer } from "@/components/layout/Footer";
import { Hero2 } from "@/components/sections/Hero2";
import { About } from "@/components/sections/About";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PropertyShowcase } from "@/components/sections/PropertyShowcase";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

// Temporary route: the pre-redesign homepage, kept for side-by-side comparison.
// Removed together with the old section components in Phase 8 (see docs/PROJECT.md).
export const metadata: Metadata = {
  title: "Domus — Legacy design",
  robots: { index: false, follow: false },
};

export default function LegacyHome() {
  return (
    <>
      <Header2 />
      <main>
        <Hero2 />
        <About />
        <FeaturedProperties />
        <HowItWorks />
        <PropertyShowcase />
        <Team />
        <Testimonials />
        <CTASection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
