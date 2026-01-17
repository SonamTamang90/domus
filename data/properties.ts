export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  image: string;
  category: string;
  featured: boolean;
  status: string;
}

export const featuredProperties: Property[] = [
  {
    id: "001",
    title: "Horizon Penthouse",
    location: "Upper East Side, Manhattan",
    price: "$18.5M",
    bedrooms: 4,
    bathrooms: 5,
    sqft: "5,200",
    image: "/hero-2.png",
    category: "Penthouse",
    featured: true,
    status: "Available"
  },
  {
    id: "002",
    title: "Coastal Vista Estate",
    location: "Malibu, California",
    price: "$24.2M",
    bedrooms: 6,
    bathrooms: 7,
    sqft: "8,500",
    image: "/hero.png",
    category: "Estate",
    featured: false,
    status: "Available"
  },
  {
    id: "003",
    title: "Metropolitan Loft",
    location: "Tribeca, New York",
    price: "$12.8M",
    bedrooms: 3,
    bathrooms: 4,
    sqft: "4,100",
    image: "/hero-2.png",
    category: "Loft",
    featured: false,
    status: "Under Contract"
  }
];
