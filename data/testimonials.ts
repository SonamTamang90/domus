export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "001",
    name: "Alexandra Morrison",
    title: "Tech Entrepreneur",
    quote: "Domus transformed our search for a family estate into an experience we'll never forget. Their attention to detail and understanding of our needs was remarkable.",
    location: "Purchased in Beverly Hills, 2024",
    rating: 5
  },
  {
    id: "002",
    name: "David Chen",
    title: "Private Investor",
    quote: "The level of service and exclusivity Domus provides is unmatched. They found us the perfect penthouse that exceeded all expectations.",
    location: "Purchased in Manhattan, 2024",
    rating: 5
  },
  {
    id: "003",
    name: "Sarah Williams",
    title: "Creative Director",
    quote: "Working with Domus felt like having a trusted partner who truly understood our vision. The entire process was seamless and sophisticated.",
    location: "Purchased in Miami, 2023",
    rating: 5
  }
];
