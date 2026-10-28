"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

// Residences, About and Contact pages arrive in Phase 3 (docs/PROJECT.md §6)
const links = [
  { label: "Home", href: "/" },
  { label: "Residences", href: "/residences" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const featured = {
  name: "Casa Lumen",
  location: "Malibu, California",
  image: "/media/hero/hero-start.webp",
};

// Minimal bar (wordmark + Menu) that opens a split "threshold" menu:
// a framed residence on the left, the way in on the right. Pattern: Heid (navbar.gallery).
// Static for now: open/close transitions come in the Motion phase.
export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header>
      {/* Over the hero the bar is travertine; when open, each side matches the panel beneath it */}
      <nav
        aria-label="Main"
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 pt-5 sm:px-8 sm:pt-6"
      >
        <Link
          href="/"
          aria-label="Domus, home"
          onClick={() => setOpen(false)}
          className={open ? "text-olive md:text-travertine" : "text-travertine"}
        >
          <Logo className="text-lg" />
        </Link>

        <div
          className={`flex items-center gap-8 text-kicker uppercase tracking-kicker ${open ? "text-olive" : "text-travertine"}`}
        >
          <Link href="/contact" className="hidden underline-offset-4 hover:underline sm:block">
            Inquire
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
            className="uppercase underline-offset-4 hover:underline"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      <div id="site-menu" hidden={!open} className="fixed inset-0 z-40 grid md:grid-cols-2">
        <Link
          href="/residences"
          onClick={() => setOpen(false)}
          className="relative hidden overflow-hidden bg-olive text-travertine md:block"
        >
          <Image src={featured.image} alt="" fill sizes="50vw" className="object-cover" />
          <div className="absolute inset-0 bg-olive/45" />
          <div className="absolute inset-x-8 bottom-8">
            <p className="text-kicker uppercase tracking-kicker text-travertine/75">Featured residence</p>
            <p className="mt-3 font-serif text-h2 font-light">{featured.name}</p>
            <p className="mt-2 text-kicker uppercase tracking-kicker text-travertine/75">{featured.location}</p>
          </div>
        </Link>

        <div className="flex flex-col justify-between overflow-y-auto bg-travertine px-4 pt-28 pb-8 text-olive sm:px-8 md:px-12 md:pt-32">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 font-serif text-h1 font-light hover:text-sage hover:italic"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-16 flex flex-col gap-6 border-t border-olive/15 pt-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xs text-sm leading-relaxed text-olive/70">
              Every residence is shown privately, by appointment.
            </p>
            <Button href="/contact" variant="secondary" size="sm" showIcon={false} className="self-start sm:self-auto">
              Book a viewing
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
