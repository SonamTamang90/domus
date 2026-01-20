import Image from "next/image";

export function PropertyShowcase() {
  return (
    <section className="w-full -mt-4 pb-12 lg:-mt-6 lg:pb-16 bg-white">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div className="relative w-full h-100 sm:h-125 lg:h-150 rounded-2xl overflow-hidden">
          <Image
            src="/showcase-property.png"
            alt="Modern residential property showcase"
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
