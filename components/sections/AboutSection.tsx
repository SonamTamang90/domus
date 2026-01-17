import Image from "next/image";
import { Icon } from "@iconify/react";
import { SectionContainer } from "../ui/SectionContainer";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <SectionContainer background="white" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Title and Description */}
        <div className="flex flex-col justify-center">
          <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-black/60 uppercase mb-6">
            {aboutContent.tagline}
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-black leading-tight mb-8">
            Discover the value behind smart property choices
          </h2>

          <p className="text-base sm:text-lg text-black/70 font-light leading-relaxed mb-10">
            We handle the heavy lifting by conducting in-depth research, analyzing the numbers, and finding high-performing properties for you.
          </p>

          <div>
            <Button variant="primary">Find Your Perfect Property</Button>
          </div>
        </div>

        {/* Right: Bento Grid */}
        <div className="grid grid-cols-2 auto-rows-fr gap-4">
          {/* Row 1: Three cards */}
          <Card variant="elevated" padding="md" className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center">
                <Icon icon="lucide:search" className="w-5 h-5 text-black/60" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-black mb-2">
              Smart Suggestions
            </h3>
            <p className="text-sm text-black/60 font-light">
              AI scans listings to find your best-fit property.
            </p>
          </Card>

          <Card variant="elevated" padding="md" className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <Icon icon="lucide:shield-check" className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-black mb-2">
              99% Trusted Investor
            </h3>
            <p className="text-sm text-black/60 font-light">
              Users trust our picks and return for more deals.
            </p>
          </Card>

          {/* Row 2: Two larger cards */}
          <Card variant="elevated" padding="md" className="col-span-2 sm:col-span-1">
            <h3 className="text-lg sm:text-xl font-medium text-black mb-3">
              Invest Where It Matters
            </h3>
            <p className="text-sm text-black/60 font-light mb-4">
              We pinpoint high-demand, high-grow areas backed by market data.
            </p>
            <div className="relative w-full h-32 bg-gradient-to-br from-black/5 to-black/10 rounded-lg flex items-center justify-center">
              <div className="flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-full text-sm font-medium">
                <Icon icon="lucide:trending-up" className="w-4 h-4" />
                <span>${aboutContent.stats[3].value}</span>
              </div>
            </div>
          </Card>

          <Card variant="elevated" padding="sm" className="col-span-2 sm:col-span-1 overflow-hidden">
            <div className="relative h-40 rounded-lg overflow-hidden mb-3">
              <Image
                src={aboutContent.image}
                alt={aboutContent.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-base font-medium text-black mb-1">
              Modern Architectural Marvel
            </h3>
            <p className="text-xs text-black/60 font-light">
              {aboutContent.stats[1].value} Cities Worldwide
            </p>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}
