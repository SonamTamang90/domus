import Image from "next/image";
import { Button } from "../ui";

export function CTASection() {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/home.png"
        alt="Modern luxury property"
        fill
        className="object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-8 text-center -mt-40">
        {/* Main Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8 max-w-xl">
          Find your dream property today!
        </h2>

        {/* CTA Button */}
        <Button>Browse Properties</Button>
      </div>
    </section>
  );
}
