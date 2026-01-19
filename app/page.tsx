import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { HowItWorks } from "@/components/sections/HowItWorks";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <FeaturedProperties />
      <HowItWorks />
    </main>
  );
}
