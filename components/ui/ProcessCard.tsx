import { Icon } from "@iconify/react";
import { Card } from "./Card";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export function ProcessCard({ number, title, description, icon }: ProcessCardProps) {
  return (
    <Card variant="default" padding="md" hover className="h-full">
      <div className="flex flex-col h-full">
        {/* Number Badge */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black text-white font-semibold text-sm mb-6">
          {number}
        </div>

        {/* Icon */}
        <div className="mb-6">
          <Icon icon={icon} className="w-10 h-10 text-black" />
        </div>

        {/* Content */}
        <h3 className="text-xl sm:text-2xl font-medium text-black mb-4">
          {title}
        </h3>
        <p className="text-base text-black/70 font-light leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
