import { Icon } from "@iconify/react";
import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const benefits = [
  {
    title: "Portfolio Diversification",
    description: "Prime real estate as a cornerstone of wealth preservation",
    icon: "lucide:trending-up"
  },
  {
    title: "Expert Market Analysis",
    description: "Data-driven insights on emerging luxury markets and opportunities",
    icon: "lucide:bar-chart-3"
  },
  {
    title: "Exclusive Access",
    description: "Off-market properties and pre-launch investment opportunities",
    icon: "lucide:lock-keyhole"
  }
];

export function InvestmentSection() {
  return (
    <SectionContainer background="gradient" id="investment">
      <SectionHeader
        heading="Beyond Ownership"
        subheading="Invest in properties that appreciate in value and prestige"
        alignment="center"
        theme="dark"
      />

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        {benefits.map((benefit, index) => (
          <Card key={index} variant="glass" padding="lg" hover className="h-full">
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <Icon icon={benefit.icon} className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-base text-white/70 font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <Button variant="primary">Schedule Consultation</Button>
        <Button variant="secondary">Investment Portfolio</Button>
      </div>
    </SectionContainer>
  );
}
