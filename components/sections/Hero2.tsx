"use client";

import Image from "next/image";
import { Button } from "../ui";
import { FadeInStagger, FadeIn } from "../shared/FadeIn";

function TrustIndicators() {
  const indicators = [
    { value: "15+", label: "Years Experience" },
    { value: "2,500+", label: "Properties Sold" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  return (
    <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20">
      {indicators.map((indicator, index) => (
        <div key={index} className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-semibold text-white mb-1">
              {indicator.value}
            </span>
            <span className="text-[10px] sm:text-xs text-white/70 uppercase tracking-wider">
              {indicator.label}
            </span>
          </div>
          {index < indicators.length - 1 && (
            <div className="h-12 w-px bg-white/20" />
          )}
        </div>
      ))}
    </div>
  );
}

export function Hero2() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-2.png"
        alt="Modern futuristic architecture"
        fill
        priority
        unoptimized
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-between pt-20 pb-8">
        <FadeInStagger faster className="flex-1 flex flex-col justify-center">
          {/* Tagline */}
          <FadeIn>
            <p className="text-xs sm:text-sm font-medium tracking-[0.2em] text-white/90 uppercase mb-6">
              Where Vision Meets Reality
            </p>
          </FadeIn>

          {/* Main Heading */}
          <FadeIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-medium! text-white leading-tight mb-6 max-w-4xl">
              Spaces designed for tomorrow
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed font-light">
              Discover extraordinary homes that redefine modern living. From sleek
              architectural masterpieces to innovative smart residences, find your
              dream home in the future.
            </p>
          </FadeIn>

          {/* CTA Button */}
          <FadeIn>
            <div>
              <Button>Get started</Button>
            </div>
          </FadeIn>
        </FadeInStagger>

        {/* Trust Indicators */}
        <FadeIn>
          <div className="self-start">
            <TrustIndicators />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
