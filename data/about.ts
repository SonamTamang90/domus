export interface Stat {
  label: string;
  value: string;
}

export interface AboutContent {
  tagline: string;
  heading: string;
  body: string[];
  stats: Stat[];
  image: string;
  imageAlt: string;
}

export const aboutContent: AboutContent = {
  tagline: "ESTABLISHED IN 2008",
  heading: "Redefining the Art of Luxury Living",
  body: [
    "At Domus, we don't just sell properties—we curate lifestyles. For over 15 years, we've been the trusted partner for discerning clients seeking the world's most exceptional homes.",
    "Our portfolio represents the pinnacle of architectural innovation, prime locations, and unparalleled craftsmanship. Every property tells a story of distinction, and we're honored to be part of yours."
  ],
  stats: [
    { label: "Exclusive Listings", value: "150+" },
    { label: "Global Network", value: "45 Cities" },
    { label: "Client Retention", value: "98%" },
    { label: "Average Property Value", value: "$8.2M" }
  ],
  image: "/hero.png",
  imageAlt: "Modern architectural excellence"
};
