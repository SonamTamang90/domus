import { SectionContainer } from "../ui/SectionContainer";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { FadeIn, FadeInStagger } from "../shared/FadeIn";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "David Richardson",
    role: "Founder & CEO",
    bio: "20+ years of experience in real estate investment and portfolio management. Former VP at Goldman Sachs Real Estate Division.",
    image: "/teams/ceo.png",
    linkedin: "#",
  },
  {
    name: "Emily Santos",
    role: "Head of Investments",
    bio: "Expert in market analysis and investment strategy with a proven track record of identifying high-ROI opportunities.",
    image: "/teams/female-excutive.png",
    linkedin: "#",
  },
  {
    name: "Marcus Williams",
    role: "Chief Financial Officer",
    bio: "15+ years in financial planning and risk management. Specialized in real estate investment portfolios and wealth optimization.",
    image: "/teams/male-team-member.png",
    linkedin: "#",
  },
  {
    name: "Sophia Chen",
    role: "Director of Client Relations",
    bio: "Dedicated to ensuring every client receives personalized guidance and exceptional service throughout their investment journey.",
    image: "/teams/female-team-member.png",
    linkedin: "#",
  },
];

export function Team() {
  return (
    <SectionContainer background="blue" id="team">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side - Section Header */}
        <FadeIn className="lg:col-span-4 flex flex-col justify-start">
          <p className="text-[10px] sm:text-xs font-medium text-black/60 uppercase mb-4">
            OUR TEAM
          </p>
          <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight mb-6">
            Experts who invest in your success
          </h2>
          <div className="mb-8">
            <p className="text-pretty text-base sm:text-lg text-black/80 font-light leading-relaxed mb-4">
              "We believe in building lasting relationships with our investors, guiding them toward financial freedom through strategic real estate investments."
            </p>
            <p className="text-sm text-black/60 font-medium">
              — David Richardson, Founder & CEO
            </p>
          </div>
          <button className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black/90 transition-colors w-fit">
            Meet the team
          </button>
        </FadeIn>

        {/* Right Side - Team Grid */}
        <FadeInStagger className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <FadeIn key={index}>
              <div className="group rounded-2xl bg-white border border-black/10 overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Avatar */}
              <div className="relative w-full aspect-3/4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Member Info */}
              <div className="p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-black/60 font-light">
                    {member.role}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center group-hover:bg-black/90 transition-colors">
                  <Icon icon="mdi:arrow-right" className="size-5 text-white" />
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
