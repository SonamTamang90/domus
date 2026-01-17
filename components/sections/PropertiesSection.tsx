import { SectionContainer } from "../ui/SectionContainer";
import { SectionHeader } from "../ui/SectionHeader";
import { PropertyCard } from "../ui/PropertyCard";
import { Button } from "../ui/Button";
import { featuredProperties } from "@/data/properties";

export function PropertiesSection() {
  const [featuredProperty, ...otherProperties] = featuredProperties;

  return (
    <SectionContainer background="black" id="properties">
      <SectionHeader
        heading="Curated Collection"
        subheading="Handpicked properties that define luxury living"
        alignment="center"
        theme="dark"
      />

      {/* Featured Property */}
      <div className="mb-8 lg:mb-12">
        <PropertyCard property={featuredProperty} featured />
      </div>

      {/* Other Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12">
        {otherProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center">
        <Button variant="primary">View All Properties</Button>
      </div>
    </SectionContainer>
  );
}
