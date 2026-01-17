import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PropertiesSection } from "@/components/sections/PropertiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { InvestmentSection } from "@/components/sections/InvestmentSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PropertiesSection />
      <InvestmentSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
