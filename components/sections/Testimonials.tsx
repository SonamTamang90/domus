import { SectionContainer } from "../ui/SectionContainer";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  avatarId: number;
  bgColor: "white" | "gray" | "dark";
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The process of investing with Hometi was seamless and transparent. Their market analysis helped us identify a property that delivered 18% ROI in the first year.",
    name: "Sarah Mitchell",
    location: "Seattle, USA",
    avatarId: 1,
    bgColor: "white",
  },
  {
    quote:
      "We have had exceptional experiences with Hometi. They guided us through two successful property investments with professional, attentive service throughout.",
    name: "Michael Chen",
    location: "Portland, USA",
    avatarId: 2,
    bgColor: "white",
  },
  {
    quote:
      "Great experience working with Hometi, especially as a first-time real estate investor. They made the complex simple and profitable.",
    name: "Jessica Thompson",
    location: "San Francisco, USA",
    avatarId: 3,
    bgColor: "dark",
  },
];

export function Testimonials() {
  return (
    <SectionContainer background="white" id="testimonials">
      {/* Section Header */}
      <FadeIn>
        <div className="mb-12 lg:mb-16">
          <p className="text-[10px] sm:text-xs font-medium text-black/60 uppercase mb-4">
            TESTIMONIALS
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight mb-4">
            Trusted by Investors
          </h2>
          <p className="text-pretty text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-2xl">
            Real stories from real investors who have grown their wealth with our
            guidance.
          </p>
        </div>
      </FadeIn>

      {/* Testimonials Grid */}
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={index}>
            <div
              className={`
              rounded-2xl p-8 flex flex-col justify-between min-h-95
              ${
                testimonial.bgColor === "white"
                  ? "bg-white border border-black/10"
                  : testimonial.bgColor === "gray"
                    ? "bg-gray-50 border border-black/10"
                    : "bg-blue-100"
              }
            `}
          >
            {/* Quote */}
            <p className="text-sm sm:text-base font-light leading-[1.8] mb-32 text-black">
              &quot;{testimonial.quote}&quot;
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="relative size-14 rounded-full overflow-hidden shrink-0 border-2 border-blue-600">
                <Image
                  src={`https://i.pravatar.cc/150?img=${testimonial.avatarId}`}
                  alt={testimonial.name}
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>

              {/* Name and Location */}
              <div>
                <p className="font-medium text-base text-black">
                  {testimonial.name}
                </p>
                <p className="text-sm font-light text-black/60">
                  {testimonial.location}
                </p>
              </div>
            </div>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </SectionContainer>
  );
}
