"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "../ui";
import { Container } from "./Container";

// Animation variants - defined outside component to avoid re-creation
const BG_VARIANTS = {
  hidden: { y: '-100%', opacity: 1 },
  visible: { y: '0%', opacity: 1 },
};

const BG_TRANSITION = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

function Logo({ isScrolled }: { isScrolled: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        icon="tabler:hexagon-letter-d"
        className={`w-7 h-7 transition-colors duration-300 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}
      />
      <span
        className={`text-xl font-medium transition-colors duration-300 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}
      >
        Domus
      </span>
    </div>
  );
}

function NavLinks({ isScrolled }: { isScrolled: boolean }) {
  const navLinks = [
    { name: "Properties", href: "#properties" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Invest", href: "#investment" },
  ];

  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-sm font-medium transition-colors duration-300 ${
            isScrolled
              ? 'text-black/70 hover:text-black'
              : 'text-white/80 hover:text-white'
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Set initial state based on current scroll position (handles page refresh while scrolled)
    setIsScrolled(window.scrollY > 0);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <nav>
        <Container className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
          {/* Sliding white background */}
          <motion.div
            className="absolute inset-0 bg-white -z-10"
            initial="hidden"
            animate={isScrolled ? 'visible' : 'hidden'}
            variants={BG_VARIANTS}
            transition={BG_TRANSITION}
          />

          {/* Content layer */}
          <div className="relative flex items-center justify-between h-20">
            {/* Logo */}
            <Logo isScrolled={isScrolled} />

            {/* Navigation Links */}
            <NavLinks isScrolled={isScrolled} />

            {/* Contact Us */}
            <div className="hidden md:block">
              <Button
                size="sm"
                showIcon={false}
                variant={isScrolled ? 'secondary' : 'primary'}
              >
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              <Icon icon="lucide:menu" className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
