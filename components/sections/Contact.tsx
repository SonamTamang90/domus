"use client";

import { SectionContainer } from "../ui/SectionContainer";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SectionContainer background="white" id="contact">
      {/* Section Header */}
      <FadeIn>
        <div className="mb-12 lg:mb-16">
          <p className="text-[10px] sm:text-xs font-medium text-black/60 uppercase mb-4">
            CONTACT
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight mb-4">
            Get in <span className="italic font-light">touch</span>
          </h2>
          <p className="text-pretty text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-2xl">
            Receive expert guidance to maximize your next purchase, sale, or
            investment.
          </p>
        </div>
      </FadeIn>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Contact Information */}
        <FadeInStagger className="space-y-6">
          {/* Address */}
          <FadeIn>
            <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
              <Icon
                icon="lucide:map-pin"
                className="size-5 text-white"
              />
            </div>
            <div className="flex-1">
              <p className="text-base text-black font-light leading-relaxed">
                123 Investment Street, Seattle, WA 98101
              </p>
            </div>
            </div>
          </FadeIn>

          {/* Email */}
          <FadeIn>
            <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
              <Icon
                icon="lucide:mail"
                className="size-5 text-white"
              />
            </div>
            <div className="flex-1">
              <p className="text-base text-black font-light leading-relaxed">
                contact@hometi.com
              </p>
            </div>
            </div>
          </FadeIn>

          {/* Phone */}
          <FadeIn>
            <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
              <Icon
                icon="lucide:phone"
                className="size-5 text-white"
              />
            </div>
            <div className="flex-1">
              <p className="text-base text-black font-light leading-relaxed">
                (555) 123-4567
              </p>
            </div>
            </div>
          </FadeIn>
        </FadeInStagger>

        {/* Right: Contact Form */}
        <FadeIn>
          <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-gray-50 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-gray-50 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-black mb-2"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-gray-50 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type something here"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-xl border border-black/10 bg-gray-50 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black/90 transition-colors w-full sm:w-auto"
          >
            Send Message
          </button>
          </form>
        </FadeIn>
      </div>
    </SectionContainer>
  );
}
