import Image from "next/image";
import { Icon } from "@iconify/react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

export function PropertyCard({ property, featured = false }: PropertyCardProps) {
  if (featured) {
    return (
      <div className="relative h-[500px] sm:h-[600px] rounded-2xl overflow-hidden group cursor-pointer">
        {/* Image */}
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4 w-fit">
            <span className="text-xs sm:text-sm text-white/90 uppercase tracking-wider font-medium">
              {property.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-2">
            {property.title}
          </h3>

          <p className="text-base sm:text-lg text-white/80 mb-4 flex items-center gap-2">
            <Icon icon="lucide:map-pin" className="w-5 h-5" />
            {property.location}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-2xl sm:text-3xl font-semibold text-white">
              {property.price}
            </span>

            <div className="flex items-center gap-6 text-white/80 text-sm sm:text-base">
              <span className="flex items-center gap-2">
                <Icon icon="lucide:bed" className="w-5 h-5" />
                {property.bedrooms}
              </span>
              <span className="flex items-center gap-2">
                <Icon icon="lucide:bath" className="w-5 h-5" />
                {property.bathrooms}
              </span>
              <span className="flex items-center gap-2">
                <Icon icon="lucide:maximize" className="w-5 h-5" />
                {property.sqft} sqft
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer">
      {/* Image */}
      <Image
        src={property.image}
        alt={property.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
          {property.title}
        </h3>

        <p className="text-sm sm:text-base text-white/80 mb-3 flex items-center gap-2">
          <Icon icon="lucide:map-pin" className="w-4 h-4" />
          {property.location}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-semibold text-white">
            {property.price}
          </span>

          <div className="flex items-center gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1">
              <Icon icon="lucide:bed" className="w-4 h-4" />
              {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Icon icon="lucide:bath" className="w-4 h-4" />
              {property.bathrooms}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
