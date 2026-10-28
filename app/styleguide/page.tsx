import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Cormorant_Garamond,
  Fraunces,
  Instrument_Serif,
  Inter_Tight,
  Libre_Caslon_Display,
  Manrope,
  Newsreader,
  Work_Sans,
} from "next/font/google";
import { Styleguide } from "./Styleguide";

// Temporary route for Phase 1 — removed in Phase 8 (see docs/PROJECT.md)
export const metadata: Metadata = {
  title: "Domus — Styleguide",
  robots: { index: false, follow: false },
};

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

// Editorial Old alternatives for the hero wordmark and headings
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const caslon = Libre_Caslon_Display({
  variable: "--font-caslon",
  subsets: ["latin"],
  weight: "400",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export default function StyleguidePage() {
  const fontVariables = [
    instrumentSerif,
    fraunces,
    cormorant,
    newsreader,
    bodoni,
    caslon,
    workSans,
    interTight,
    manrope,
  ]
    .map((font) => font.variable)
    .join(" ");

  return (
    <div className={fontVariables}>
      <Styleguide />
    </div>
  );
}
