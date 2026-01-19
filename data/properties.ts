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
  roi: string;
  capRate: string;
  monthlyIncome: string;
  investmentType: string;
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
    image: "/property-one.png",
    category: "Penthouse",
    featured: true,
    status: "Available",
    roi: "12.5%",
    capRate: "5.8%",
    monthlyIncome: "$15,200",
    investmentType: "Luxury Rental",
  },
  {
    id: "002",
    title: "Coastal Vista Estate",
    location: "Malibu, California",
    price: "$24.2M",
    bedrooms: 6,
    bathrooms: 7,
    sqft: "8,500",
    image: "/property-2.png",
    category: "Estate",
    featured: true,
    status: "Available",
    roi: "15.2%",
    capRate: "6.5%",
    monthlyIncome: "$22,800",
    investmentType: "Vacation Rental",
  },
  {
    id: "003",
    title: "Metropolitan Loft",
    location: "Tribeca, New York",
    price: "$12.8M",
    bedrooms: 3,
    bathrooms: 4,
    sqft: "4,100",
    image: "/property-3.png",
    category: "Loft",
    featured: true,
    status: "Available",
    roi: "10.8%",
    capRate: "5.2%",
    monthlyIncome: "$11,500",
    investmentType: "Long-term Rental",
  },
];
