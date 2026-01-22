import { Icon } from "@iconify/react";
import { SectionContainer } from "../ui/SectionContainer";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";

interface Step {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: "solar:eye-line-duotone",
    title: "Discover Opportunities",
    description: "Browse our curated selection of high-performing properties. Each listing includes comprehensive market analysis and investment metrics.",
  },
  {
    number: "02",
    icon: "solar:chart-line-duotone",
    title: "Deep Market Analysis",
    description: "Expert reports on property performance, trends, and projected returns. Comprehensive analysis helps you make confident, informed investment decisions.",
  },
  {
    number: "03",
    icon: "solar:shield-check-line-duotone",
    title: "Secure Your Investment",
    description: "We handle all paperwork, legal requirements, and due diligence. Our team ensures a smooth, transparent transaction.",
  },
  {
    number: "04",
    icon: "solar:graph-up-line-duotone",
    title: "Watch It Grow",
    description: "Track your investment performance with our analytics dashboard. Receive detailed monthly reports and ongoing market insights.",
  },
];

export function HowItWorks() {
  return (
    <SectionContainer background="white" id="how-it-works">
      {/* Section Header */}
      <FadeIn>
        <div className="mb-12 lg:mb-16">
          <p className="text-[10px] sm:text-xs font-medium text-black/60 uppercase mb-4">
            THE PROCESS
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight mb-4">
            Built for Success
          </h2>
          <p className="text-pretty text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-2xl">
            A seamless journey guided by expertise, backed by data, and built on trust.
          </p>
        </div>
      </FadeIn>

      {/* Steps Grid */}
      <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step) => (
          <FadeIn key={step.number}>
            <div className="relative group rounded-2xl bg-gray-50 border border-black/10 p-6 sm:p-8 hover:shadow-lg transition-all duration-300">
            {/* Step Card */}
            <div className="flex flex-col">
              {/* Icon Circle */}
              <div className="relative mb-6">
                <div className="size-12 rounded-full bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Icon icon={step.icon} className="size-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-black mb-10">
                {step.title}
              </h3>
              <p className="text-sm text-black/70 font-light leading-relaxed">
                {step.description}
              </p>
            </div>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </SectionContainer>
  );
}
