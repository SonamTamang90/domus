export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin with an in-depth consultation to understand your lifestyle, aspirations, and requirements for your ideal space.",
    icon: "lucide:compass"
  },
  {
    number: "02",
    title: "Curation",
    description: "Our team meticulously curates a selection of exclusive properties that align perfectly with your vision and standards.",
    icon: "lucide:sparkles"
  },
  {
    number: "03",
    title: "Experience",
    description: "Private viewings and immersive tours designed to help you envision your life in these extraordinary spaces.",
    icon: "lucide:home"
  },
  {
    number: "04",
    title: "Acquisition",
    description: "Expert negotiation and seamless transaction management ensuring a smooth journey to ownership.",
    icon: "lucide:key"
  }
];
