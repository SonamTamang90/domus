import { Icon } from "@iconify/react";
import { Button } from "../ui";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Icon icon="tabler:hexagon-letter-d" className="w-7 h-7 text-white" />
      <span className="text-xl font-medium text-white">Domus</span>
    </div>
  );
}

export function Header() {
  const navLinks = [
    { name: "Properties", href: "#properties" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Invest", href: "#investment" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Us */}
          <div className="hidden md:block">
            <Button size="sm" showIcon={false}>
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <Icon icon="lucide:menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
