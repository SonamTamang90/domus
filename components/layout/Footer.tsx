import { Icon } from "@iconify/react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "Featured Properties", href: "#featured-properties" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Investment Guide", href: "#" },
      { label: "FAQ", href: "#faq" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: "lucide:facebook", href: "#", label: "Facebook" },
    { icon: "lucide:twitter", href: "#", label: "Twitter" },
    { icon: "lucide:instagram", href: "#", label: "Instagram" },
    { icon: "lucide:linkedin", href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 mb-4">
                <Icon
                  icon="tabler:hexagon-letter-d"
                  className="w-7 h-7 text-white"
                />
                <span className="text-xl font-medium text-white">Domus</span>
              </div>
              <p className="text-sm text-white/70 font-light leading-relaxed mb-6">
                Empowering investors to build wealth through strategic real
                estate investments. Expert guidance, curated properties,
                transparent process.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon icon={social.icon} className="size-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-medium uppercase mb-4 text-white/60">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-medium uppercase mb-4 text-white/60">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-medium uppercase mb-4 text-white/60">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors font-light"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Large DOMUS Text */}
        <div className="overflow-hidden -mt-8 sm:-mt-12">
          <h2 className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] font-bold text-white/5 text-center leading-none select-none tracking-wider">
            DOMUS
          </h2>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60 font-light">
              © {currentYear} Domus. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors font-light"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors font-light"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors font-light"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
