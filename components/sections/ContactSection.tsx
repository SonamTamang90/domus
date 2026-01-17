import Image from "next/image";
import { Icon } from "@iconify/react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const contactInfo = {
  phone: "+1 (555) 123-4567",
  email: "concierge@domus.com",
  address: "Madison Avenue, New York"
};

export function ContactSection() {
  return (
    <section className="relative h-[600px] sm:h-[700px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="Contact us"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-center">
        <Card variant="glass" padding="lg" className="max-w-3xl w-full text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-6">
            Begin Your Journey
          </h2>

          {/* Subheading */}
          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-10">
            Let's discover your perfect space together
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <Button variant="primary">Schedule a Consultation</Button>
            <Button variant="secondary">Browse Properties</Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white/80">
            <div className="flex items-center gap-3">
              <Icon icon="lucide:phone" className="w-5 h-5" />
              <span className="text-sm sm:text-base font-light">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:mail" className="w-5 h-5" />
              <span className="text-sm sm:text-base font-light">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="lucide:map-pin" className="w-5 h-5" />
              <span className="text-sm sm:text-base font-light">{contactInfo.address}</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
