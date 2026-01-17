import { Icon } from "@iconify/react";
import { Card } from "./Card";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card variant="elevated" padding="lg" className="h-full flex flex-col">
      {/* Quotation Mark */}
      <div className="mb-6">
        <Icon icon="lucide:quote" className="w-12 h-12 text-black/20" />
      </div>

      {/* Quote */}
      <p className="text-base sm:text-lg text-black/80 font-light leading-relaxed mb-6 flex-1">
        {testimonial.quote}
      </p>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Icon key={i} icon="lucide:star" className="w-5 h-5 text-black fill-black" />
        ))}
      </div>

      {/* Author */}
      <div>
        <h4 className="text-lg font-medium text-black mb-1">
          {testimonial.name}
        </h4>
        <p className="text-sm text-black/60 mb-2">
          {testimonial.title}
        </p>
        <p className="text-xs text-black/50 uppercase tracking-wider">
          {testimonial.location}
        </p>
      </div>
    </Card>
  );
}
