import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeader } from "../ui/SectionHeader";
import { ProcessCard } from "../ui/ProcessCard";
import { processSteps } from "@/data/services";

export function ServicesSection() {
  return (
    <SectionContainer background="white" id="services">
      <SectionHeader
        heading="Your Journey to Exceptional Living"
        subheading="A refined process crafted for discerning clients"
        alignment="center"
        theme="light"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {processSteps.map((step) => (
          <ProcessCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
