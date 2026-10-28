// Redesign in progress — sections are rebuilt one by one (see docs/PROJECT.md §7).
// The previous design is commented out below and still viewable at /legacy for comparison.

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

// import { Footer } from "@/components/layout/Footer";
// import { Hero2 } from "@/components/sections/Hero2";
// import { About } from "@/components/sections/About";
// import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
// import { HowItWorks } from "@/components/sections/HowItWorks";
// import { PropertyShowcase } from "@/components/sections/PropertyShowcase";
// import { Team } from "@/components/sections/Team";
// import { Testimonials } from "@/components/sections/Testimonials";
// import { CTASection } from "@/components/sections/CTASection";
// import { FAQ } from "@/components/sections/FAQ";
// import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <Hero2 /> */}
        {/* <About /> */}
        {/* <FeaturedProperties /> */}
        {/* <HowItWorks /> */}
        {/* <PropertyShowcase /> */}
        {/* <Team /> */}
        {/* <Testimonials /> */}
        {/* <CTASection /> */}
        {/* <FAQ /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
