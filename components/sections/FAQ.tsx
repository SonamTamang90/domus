"use client";

import { useState } from "react";
import { SectionContainer } from "../ui/SectionContainer";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is the minimum investment amount?",
    answer:
      "The minimum investment varies by property, typically starting from $50,000. We offer a range of investment opportunities to suit different budgets and investment goals. Our team can help you find properties that match your financial capacity.",
  },
  {
    question: "How long does the investment process take?",
    answer:
      "The typical investment process takes 4-6 weeks from property selection to closing. This includes property analysis, due diligence, financing arrangements, and legal documentation. We streamline the process to ensure efficiency while maintaining thorough oversight.",
  },
  {
    question: "What kind of returns can I expect?",
    answer:
      "Historical returns on our curated properties range from 12-20% annually, including both rental income and appreciation. However, past performance doesn't guarantee future results. Each property comes with detailed projections and market analysis to help set realistic expectations.",
  },
  {
    question: "Do you offer property management services?",
    answer:
      "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, and financial reporting. Our management team ensures your investment remains profitable with minimal involvement required from you.",
  },
  {
    question: "What markets do you operate in?",
    answer:
      "We currently focus on high-growth markets across the United States, with particular emphasis on the Pacific Northwest and Sun Belt regions. Our market selection is based on rigorous analysis of employment growth, population trends, and rental demand.",
  },
  {
    question: "How is my investment protected?",
    answer:
      "We conduct thorough due diligence on every property, including inspections, title searches, and market analysis. All transactions are handled by licensed professionals, and we recommend appropriate insurance coverage. Additionally, our diversified portfolio approach helps mitigate risk.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionContainer background="white" id="faq">
      {/* Section Header */}
      <FadeIn>
        <div className="mb-12 lg:mb-16">
          <p className="text-[10px] sm:text-xs font-medium text-black/60 uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-pretty text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-2xl">
            Find answers to common questions about investing in real estate with
            Hometi.
          </p>
        </div>
      </FadeIn>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 lg:items-start">
        {/* Left: Image */}
        <FadeIn className="lg:col-span-2">
          <div className="relative h-100 lg:h-150 overflow-hidden lg:sticky lg:top-24">
            <Image
              src="/faq.png"
              alt="Beautiful modern house"
              fill
              className="object-cover"
            />
          </div>
        </FadeIn>

        {/* Right: FAQ Items */}
        <FadeInStagger className="lg:col-span-3 space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index}>
              <div className="rounded-xl bg-gray-50 border border-black/10 overflow-hidden transition-all duration-300">
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between gap-4 text-left hover:bg-white transition-colors duration-200"
              >
                <span className="text-base sm:text-lg font-medium text-black">
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-black flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                >
                  <Icon
                    icon="lucide:arrow-up-right"
                    className="size-4 text-white"
                  />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6">
                  <p className="text-sm sm:text-base text-black/70 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </div>
    </SectionContainer>
  );
}
