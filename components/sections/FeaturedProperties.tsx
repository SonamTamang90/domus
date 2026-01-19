import Image from "next/image";
import { Icon } from "@iconify/react";
import { Fragment } from "react";
import { SectionContainer } from "../ui/SectionContainer";
import { Button } from "../ui/Button";
import { featuredProperties } from "@/data/properties";

interface PropertyCardProps {
  property: typeof featuredProperties[0];
}

function PropertyImageCard({ property }: { property: typeof featuredProperties[0] }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-white border border-black/10 hover:shadow-xl transition-all duration-300 h-full">
      {/* Property Image */}
      <div className="relative h-full min-h-[400px] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

function PropertyDetailsCard({ property }: { property: typeof featuredProperties[0] }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gray-50 border border-black/10 hover:shadow-xl transition-all duration-300 h-full">
      {/* Property Details */}
      <div className="p-6 flex flex-col h-full">
        {/* Location */}
        <div className="flex items-center gap-2 mb-2">
          <Icon icon="lucide:map-pin" className="size-4 text-black/60" />
          <span className="text-sm text-black/60 font-light">
            {property.location}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-medium text-black mb-4">
          {property.title}
        </h3>

        {/* Investment Type Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center bg-black px-3 py-1.5 rounded-full text-xs font-medium text-white">
            {property.investmentType}
          </span>
        </div>

        {/* Property Stats */}
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-black/10">
          <div className="flex items-center gap-1.5">
            <Icon icon="lucide:bed" className="size-4 text-black/60" />
            <span className="text-sm text-black/70">{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon icon="lucide:bath" className="size-4 text-black/60" />
            <span className="text-sm text-black/70">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon icon="lucide:maximize" className="size-4 text-black/60" />
            <span className="text-sm text-black/70">{property.sqft} sqft</span>
          </div>
        </div>

        {/* Investment Metrics */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col">
            <span className="text-xs text-black/60 mb-1">ROI</span>
            <span className="text-lg font-semibold text-green-600">
              {property.roi}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-black/60 mb-1">Cap Rate</span>
            <span className="text-lg font-semibold text-black">
              {property.capRate}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-black/60 mb-1">Monthly</span>
            <span className="text-lg font-semibold text-black">
              {property.monthlyIncome}
            </span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-6 border-t border-black/10 mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-black/60 mb-1">Price</span>
            <span className="text-2xl font-semibold text-black">
              {property.price}
            </span>
          </div>
          <button className="flex items-center justify-center size-10 rounded-full bg-black hover:bg-black/90 transition-colors">
            <Icon icon="lucide:arrow-right" className="size-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function FeaturedProperties() {
  const featured = featuredProperties.filter((property) => property.featured);

  return (
    <SectionContainer background="white" id="properties">
      {/* Section Header */}
      <div className="mb-12 lg:mb-16">
        <p className="text-[10px] sm:text-xs font-medium text-black/60 uppercase mb-4">
          FEATURED OPPORTUNITIES
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-medium text-black leading-tight mb-4">
              Investment Masterpieces
            </h2>
            <p className="text-pretty text-sm sm:text-base text-black/70 font-light leading-relaxed max-w-2xl">
              Handpicked investment opportunities with proven returns. Each property has been thoroughly analyzed for maximum profitability.
            </p>
          </div>
          <div className="shrink-0">
            <Button variant="secondary" size="sm" showIcon={false}>
              View All
            </Button>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featured.map((property) => (
          <Fragment key={property.id}>
            <PropertyImageCard property={property} />
            <PropertyDetailsCard property={property} />
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  );
}
