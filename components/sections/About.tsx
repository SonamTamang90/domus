import Image from "next/image";
import { Icon } from "@iconify/react";
import { SectionContainer } from "../ui/SectionContainer";
import { Button } from "../ui/Button";
import { aboutContent } from "@/data/about";
import { FadeIn } from "../shared/FadeIn";

// Group Avatar Component
function GroupAvatar() {
  const avatars = [
    { id: 1, alt: "Team member 1" },
    { id: 2, alt: "Team member 2" },
    { id: 3, alt: "Team member 3" },
    { id: 4, alt: "Team member 4" },
  ];

  return (
    <div className="flex items-center">
      {avatars.map((avatar, index) => (
        <div
          key={avatar.id}
          className={`relative size-10 rounded-full border-2 border-white overflow-hidden ${
            index > 0 ? "-ml-3" : ""
          }`}
        >
          <Image
            src={`https://i.pravatar.cc/150?img=${avatar.id + 10}`}
            alt={avatar.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function About() {
  return (
    <SectionContainer background="white" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left: Title and Description */}
        <FadeIn className="flex flex-col">
          <p className="text-[10px] sm:text-xs font-medium text-black/60 uppercase mb-6">
            {aboutContent.tagline}
          </p>

          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight">
            Find Your Perfect Investment
          </h2>

          <p className="text-pretty text-sm sm:text-base text-black/70 font-light leading-relaxed mb-10 mt-auto">
            We handle the heavy lifting by conducting in-depth research, analyzing the numbers, and finding high-performing properties for you.
          </p>

          <div>
            <Button variant="secondary" size="sm" showIcon={false}>Learn More</Button>
          </div>
        </FadeIn>

        {/* Right: Bento Grid */}
        <FadeIn className="grid grid-cols-2 auto-rows-fr gap-4">
          {/* Row 1: Three cards */}
          <div className="col-span-2 sm:col-span-1 rounded-2xl bg-gray-50/40 border border-black/10 p-4 sm:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-black flex items-center justify-center">
                <Icon icon="lucide:users" className="size-5 text-white" />
              </div>
            </div>
            <h3 className="text-balance text-lg sm:text-xl font-medium text-black mb-auto">
              Expert Real Estate Team
            </h3>
            <GroupAvatar />
            <p className="text-pretty text-sm text-black/60 font-light mt-3">
              Expert guidance at every step of your journey.
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 rounded-2xl bg-gray-50/40 border border-black/10 p-4 sm:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-black flex items-center justify-center">
                <Icon icon="lucide:shield-check" className="size-5 text-white" />
              </div>
            </div>
            <h3 className="text-balance text-lg sm:text-xl font-medium text-black mb-auto">
              99% Trusted Investor
            </h3>
            <p className="text-pretty text-sm text-black/60 font-light">
              Users trust our picks and return for more deals.
            </p>
          </div>

          {/* Row 2: Two larger cards */}
          <div className="col-span-2 sm:col-span-1 rounded-2xl bg-gray-50/40 border border-black/10 p-4 sm:p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-black flex items-center justify-center">
                <Icon icon="lucide:map" className="size-5 text-white" />
              </div>
            </div>
            <h3 className="text-balance text-lg sm:text-xl font-medium text-black mb-auto">
              Strategic Locations
            </h3>
            <p className="text-pretty text-sm text-black/60 font-light">
              High-demand areas backed by real market data insights.
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 rounded-2xl bg-gray-50 border border-black/10 p-4 sm:p-6 overflow-hidden flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-full bg-black flex items-center justify-center">
                <Icon icon="lucide:building-2" className="size-5 text-white" />
              </div>
            </div>
            <h3 className="text-balance text-lg sm:text-xl font-medium text-black mb-6">
              Curated Portfolio
            </h3>
            <div className="relative flex-1 flex items-center justify-center mb-6">
              {/* Stacked Images */}
              <div className="relative w-40 h-28">
                <div className="absolute inset-0 -translate-x-4 -translate-y-2 rotate-[-8deg]">
                  <Image
                    src="/stack-one.png"
                    alt="Property showcase 1"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="absolute inset-0 -translate-x-2 -translate-y-1 rotate-[-4deg]">
                  <Image
                    src="/stack-two.png"
                    alt="Property showcase 2"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="absolute inset-0">
                  <Image
                    src="/stack-three.png"
                    alt="Property showcase 3"
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            <p className="text-pretty text-sm text-black/60 font-light">
              Hand-picked properties that meet our highest standards.
            </p>
          </div>
        </FadeIn>
      </div>
    </SectionContainer>
  );
}
