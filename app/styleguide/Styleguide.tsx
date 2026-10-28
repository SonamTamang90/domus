"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

interface Palette {
  id: string;
  name: string;
  bg: string;
  surface: string;
  ink: string;
  stone: string;
  accent: string;
}

const palettes: Palette[] = [
  {
    id: "A",
    name: "Limestone & Ink",
    bg: "#F2EDE4",
    surface: "#E4DACB",
    ink: "#1D1B18",
    stone: "#8A7A69",
    accent: "#9C7553",
  },
  {
    id: "B",
    name: "Travertine & Olive",
    bg: "#F4F0E6",
    surface: "#E6DFCF",
    ink: "#2E3A2C",
    stone: "#B49A78",
    accent: "#6F7D5C",
  },
  {
    id: "C",
    name: "Sand & Charcoal",
    bg: "#EFE9DF",
    surface: "#DCD3C6",
    ink: "#282828",
    stone: "#998170",
    accent: "#C2A383",
  },
];

const serifs = [
  { id: "instrument", name: "Instrument Serif", variable: "--font-instrument-serif", note: "Condensed, fashion-editorial. Closest to Editorial Old." },
  { id: "fraunces", name: "Fraunces", variable: "--font-fraunces", note: "Soft, warm, characterful. Variable weight." },
  { id: "cormorant", name: "Cormorant Garamond", variable: "--font-cormorant", note: "Classic, high-contrast, very refined." },
];

const sans = [
  { id: "work", name: "Work Sans", variable: "--font-work-sans", note: "Used by Belgrade Arbor. Open, slightly wide." },
  { id: "intertight", name: "Inter Tight", variable: "--font-inter-tight", note: "Neutral, compact, modern." },
  { id: "manrope", name: "Manrope", variable: "--font-manrope", note: "Geometric, friendly, rounded details." },
];

// Hero headline font candidates (Newsreader rejected for the hero, 2026-10-28). Each is shown in the real hero layout
const heroFonts = [
  { id: "A", name: "Instrument Serif", note: "Narrow editorial serif, 400 only. The font the site started with.", font: "--font-instrument-serif", weight: 400, tracking: "normal" },
  { id: "B", name: "Cormorant Garamond", note: "Classic, refined, very fine hairlines.", font: "--font-cormorant", weight: 400, tracking: "normal" },
  { id: "C", name: "Fraunces Light", note: "Soft, warm serif with rounded details.", font: "--font-fraunces", weight: 300, tracking: "-0.01em" },
  { id: "D", name: "Bodoni Moda", note: "High-contrast Didone, fashion and luxury feel.", font: "--font-bodoni", weight: 400, tracking: "-0.01em" },
  { id: "E", name: "Libre Caslon Display", note: "Traditional, bookish, crisp.", font: "--font-caslon", weight: 400, tracking: "normal" },
  { id: "F", name: "Manrope Light (sans)", note: "Our body font, light and tight. Modern and architectural, no serif at all.", font: "--font-manrope", weight: 300, tracking: "-0.03em" },
];

function HeroFontCompare() {
  return (
    <div className="bg-olive text-travertine">
      {heroFonts.map((f) => (
        <section key={f.id} className="relative h-svh min-h-140 overflow-hidden">
          <Image src="/media/hero/hero-poster.webp" alt="" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-olive/80 via-olive/35 to-transparent md:bg-linear-to-tr md:from-olive/70 md:via-olive/20" />

          <p className="absolute top-6 right-6 max-w-xs text-right text-kicker uppercase tracking-kicker">
            <span className="text-sand">{f.id} · </span>
            {f.name}
            <span className="mt-1 block normal-case tracking-normal text-travertine/75">{f.note}</span>
          </p>

          <div className="absolute inset-x-0 bottom-0 px-4 pb-8 sm:px-8 sm:pb-10 md:w-7/12">
            <p className="text-kicker uppercase tracking-kicker">A private collection of homes</p>
            <p className="mt-4 text-h1" style={{ fontFamily: `var(${f.font})`, fontWeight: f.weight, letterSpacing: f.tracking }}>
              Rare homes,
              <br />
              quietly curated.
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-travertine/85">
              Domus selects a small number of homes by notable architects and shows each one privately, by appointment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary">Explore the collection</Button>
              <Button variant="outlineLight" showIcon={false}>Book a viewing</Button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

// WCAG relative luminance contrast ratio
function contrast(a: string, b: string) {
  const lum = (hex: string) => {
    const [r, g, bl] = [1, 3, 5].map((i) => {
      const c = parseInt(hex.slice(i, i + 2), 16) / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * bl;
  };
  const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

function Segmented<T extends { id: string; name: string }>({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: T[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">{label}</span>
      <div className="flex flex-wrap gap-1">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            aria-pressed={value === option.id}
            className={`rounded-full px-3 py-1.5 text-xs transition-colors ${
              value === option.id ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function RollingButton({
  children,
  bg,
  fg,
  border,
}: {
  children: React.ReactNode;
  bg: string;
  fg: string;
  border?: string;
}) {
  return (
    <button
      type="button"
      className="group relative inline-flex h-12 items-center rounded-full px-7 text-xs uppercase tracking-[0.18em]"
      style={{ background: bg, color: fg, border: border ? `1px solid ${border}` : undefined }}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
          {children}
        </span>
      </span>
    </button>
  );
}

export function Styleguide() {
  const [paletteId, setPaletteId] = useState("B");
  const [serifId, setSerifId] = useState("instrument");
  const [sansId, setSansId] = useState("manrope");

  const p = palettes.find((x) => x.id === paletteId)!;
  const serif = serifs.find((x) => x.id === serifId)!;
  const body = sans.find((x) => x.id === sansId)!;

  const serifFont = { fontFamily: `var(${serif.variable})` };

  const swatches: { key: keyof Palette; role: string }[] = [
    { key: "bg", role: "Background" },
    { key: "surface", role: "Surface" },
    { key: "ink", role: "Ink / text" },
    { key: "stone", role: "Stone / muted" },
    { key: "accent", role: "Accent" },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ background: p.bg, color: p.ink, fontFamily: `var(${body.variable})` }}
    >
      {/* Above the fixed Phase 1 control panel, so the panel only shows below the comparison */}
      <div className="relative z-60">
        <HeroFontCompare />
      </div>

      {/* Control panel */}
      <div className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 rounded-3xl bg-black/85 p-4 text-white backdrop-blur-lg">
        <div className="grid gap-4 sm:grid-cols-3">
          <Segmented
            label="Palette"
            options={palettes.map((x) => ({ id: x.id, name: `${x.id} · ${x.name}` }))}
            value={paletteId}
            onChange={setPaletteId}
          />
          <Segmented label="Display serif" options={serifs} value={serifId} onChange={setSerifId} />
          <Segmented label="Body sans" options={sans} value={sansId} onChange={setSansId} />
        </div>
      </div>

      {/* Hero preview */}
      <section className="relative h-svh overflow-hidden">
        <Image src="/property-one.png" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${p.ink}E6, ${p.ink}33 55%, transparent)` }} />

        {/* Floating pill nav */}
        <div
          className="absolute top-6 left-1/2 flex w-[calc(100%-2rem)] max-w-160 -translate-x-1/2 items-center justify-between rounded-[1.75rem] p-2 pl-5 backdrop-blur-lg"
          style={{ background: `${p.ink}CC`, color: p.bg }}
        >
          <span className="flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
            <span className="flex w-8 flex-col gap-1.5">
              <span className="h-px w-full" style={{ background: p.accent }} />
              <span className="h-px w-full" style={{ background: p.accent }} />
            </span>
            Menu
          </span>
          <span className="text-2xl" style={serifFont}>Domus</span>
          <RollingButton bg="transparent" fg={p.bg} border={p.accent}>Inquire</RollingButton>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-4 pb-10 text-center" style={{ color: p.bg }}>
          <p className="mb-4 text-[11px] uppercase tracking-[0.3em] opacity-80">Rare homes, quietly curated</p>
          <h1 className="text-[17vw] leading-[0.85] uppercase md:text-[10.5vw]" style={serifFont}>
            Domus
          </h1>
        </div>
        <span className="absolute bottom-10 left-6 hidden text-[11px] uppercase tracking-[0.25em] md:block" style={{ color: p.bg }}>
          34.0259° N, 118.7798° W
        </span>
        <span className="absolute right-6 bottom-10 hidden text-[11px] uppercase tracking-[0.25em] md:block" style={{ color: p.bg }}>
          Scroll ↓
        </span>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-24 pb-56 sm:px-8">
        {/* Current selection */}
        <header className="mb-24 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-[11px] uppercase tracking-[0.25em]" style={{ color: p.accent }}>
              Current selection
            </p>
            <h2 className="text-5xl leading-none md:text-6xl" style={serifFont}>
              {p.name}
            </h2>
          </div>
          <dl className="grid grid-cols-2 gap-6 text-sm md:col-span-7">
            <div>
              <dt className="mb-1 text-[11px] uppercase tracking-[0.2em]" style={{ color: p.stone }}>Display</dt>
              <dd className="text-2xl" style={serifFont}>{serif.name}</dd>
              <dd className="mt-1 opacity-70">{serif.note}</dd>
            </div>
            <div>
              <dt className="mb-1 text-[11px] uppercase tracking-[0.2em]" style={{ color: p.stone }}>Body</dt>
              <dd className="text-2xl">{body.name}</dd>
              <dd className="mt-1 opacity-70">{body.note}</dd>
            </div>
          </dl>
        </header>

        {/* Swatches */}
        <section className="mb-32">
          <p className="mb-6 text-[11px] uppercase tracking-[0.25em]" style={{ color: p.stone }}>01 — Palette</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {swatches.map(({ key, role }) => {
              const hex = p[key];
              const onBg = contrast(hex, p.bg);
              return (
                <div key={key}>
                  <div className="mb-3 aspect-[4/5] rounded-sm" style={{ background: hex, boxShadow: `inset 0 0 0 1px ${p.ink}1A` }} />
                  <p className="text-sm">{role}</p>
                  <p className="font-mono text-xs opacity-60">{hex}</p>
                  {key !== "bg" && (
                    <p className="mt-1 text-xs" style={{ color: onBg >= 4.5 ? p.ink : p.stone }}>
                      {onBg.toFixed(2)}:1 on bg {onBg >= 4.5 ? "· AA text" : onBg >= 3 ? "· large text only" : "· decorative only"}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Type scale */}
        <section className="mb-32">
          <p className="mb-10 text-[11px] uppercase tracking-[0.25em]" style={{ color: p.stone }}>02 — Typography</p>
          <div className="space-y-10">
            <div className="grid items-baseline gap-4 md:grid-cols-12">
              <span className="text-xs opacity-60 md:col-span-2">Display · 8vw</span>
              <p className="text-[12vw] leading-[0.9] uppercase md:col-span-10 md:text-[8vw]" style={serifFont}>
                The Threshold
              </p>
            </div>
            <div className="grid items-baseline gap-4 md:grid-cols-12">
              <span className="text-xs opacity-60 md:col-span-2">H2 · 64px</span>
              <h2 className="text-5xl leading-[1.05] md:col-span-10 md:text-[64px]" style={serifFont}>
                A home is the first thing you <em style={{ color: p.accent }}>arrive</em> at.
              </h2>
            </div>
            <div className="grid items-baseline gap-4 md:grid-cols-12">
              <span className="text-xs opacity-60 md:col-span-2">H3 · 32px</span>
              <h3 className="text-[32px] leading-tight md:col-span-10" style={serifFont}>
                Casa Lumen, Malibu
              </h3>
            </div>
            <div className="grid items-baseline gap-4 md:grid-cols-12">
              <span className="text-xs opacity-60 md:col-span-2">Kicker · 11px</span>
              <p className="text-[11px] uppercase tracking-[0.25em] md:col-span-10" style={{ color: p.accent }}>
                Featured residence · 2026
              </p>
            </div>
            <div className="grid items-baseline gap-4 md:grid-cols-12">
              <span className="text-xs opacity-60 md:col-span-2">Body · 17px</span>
              <p className="max-w-2xl text-[17px] leading-relaxed md:col-span-10">
                We don&apos;t list everything. We select a small number of exceptional residences and present each one
                like a piece in a collection — with its architect, its materials and the light it was designed around.
              </p>
            </div>
            <div className="grid items-baseline gap-4 md:grid-cols-12">
              <span className="text-xs opacity-60 md:col-span-2">Small · 14px</span>
              <p className="max-w-xl text-sm leading-relaxed md:col-span-10" style={{ color: p.stone }}>
                Renders are illustrative. Specifications may change before completion.
              </p>
            </div>
          </div>
        </section>

        {/* Components */}
        <section className="mb-32">
          <p className="mb-10 text-[11px] uppercase tracking-[0.25em]" style={{ color: p.stone }}>03 — Components</p>

          <div className="mb-16 flex flex-wrap items-center gap-4">
            <RollingButton bg={p.ink} fg={p.bg}>Book a private viewing</RollingButton>
            <RollingButton bg="transparent" fg={p.ink} border={p.ink}>Explore residences</RollingButton>
            <RollingButton bg={p.accent} fg={p.bg}>Inquire</RollingButton>
            <a href="#" className="group text-sm" style={{ color: p.ink }}>
              <span className="border-b pb-1 transition-colors" style={{ borderColor: p.accent }}>
                View the collection →
              </span>
            </a>
          </div>

          {/* Menu link hover demo */}
          <div className="mb-16 rounded-sm p-10 text-center" style={{ background: p.ink, color: p.bg }}>
            <p className="mb-6 text-[11px] uppercase tracking-[0.25em] opacity-60">Full menu · hover a link</p>
            {["Residences", "Places", "About", "Contact"].map((item) => (
              <a key={item} href="#" className="group relative block overflow-hidden text-5xl leading-tight md:text-6xl" style={serifFont}>
                <span className="block transition-transform duration-500 group-hover:-translate-y-full">{item}</span>
                <span className="absolute inset-0 block translate-y-full italic transition-transform duration-500 group-hover:translate-y-0" style={{ color: p.accent }}>
                  {item}
                </span>
              </a>
            ))}
          </div>

          {/* Residence card */}
          <div className="grid gap-10 md:grid-cols-12">
            <article className="group md:col-span-7">
              <div className="relative mb-5 aspect-[4/3] overflow-hidden">
                <Image src="/property-2.png" alt="" fill className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105" />
              </div>
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em]" style={{ color: p.stone }}>Malibu, California</p>
                  <h3 className="text-4xl leading-none" style={serifFont}>Casa Lumen</h3>
                </div>
                <p className="text-2xl" style={serifFont}>$24.2M</p>
              </div>
              <div className="mt-5 flex gap-8 border-t pt-5 text-sm" style={{ borderColor: `${p.ink}26` }}>
                <span>6 bedrooms</span>
                <span>790 m²</span>
                <span style={{ color: p.stone }}>Studio Arkhe, 2025</span>
              </div>
            </article>

            <div className="flex flex-col justify-between gap-10 rounded-sm p-8 md:col-span-5" style={{ background: p.surface }}>
              <blockquote className="text-3xl leading-snug" style={serifFont}>
                “They showed us four homes. We knew at the second door.”
              </blockquote>
              <div>
                <p className="text-sm">A. Morrison</p>
                <p className="text-sm" style={{ color: p.stone }}>Purchased in Malibu, 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* All palettes at a glance */}
        <section>
          <p className="mb-10 text-[11px] uppercase tracking-[0.25em]" style={{ color: p.stone }}>04 — All palettes at a glance</p>
          <div className="grid gap-4 md:grid-cols-3">
            {palettes.map((x) => (
              <button
                key={x.id}
                type="button"
                onClick={() => setPaletteId(x.id)}
                className="overflow-hidden rounded-sm text-left transition-transform hover:-translate-y-1"
                style={{ background: x.bg, color: x.ink, boxShadow: x.id === p.id ? `0 0 0 2px ${x.accent}` : `inset 0 0 0 1px ${x.ink}1A` }}
              >
                <div className="flex h-24">
                  {[x.bg, x.surface, x.stone, x.accent, x.ink].map((c) => (
                    <span key={c} className="flex-1" style={{ background: c }} />
                  ))}
                </div>
                <div className="p-6">
                  <p className="mb-2 text-[11px] uppercase tracking-[0.25em]" style={{ color: x.accent }}>Palette {x.id}</p>
                  <p className="text-3xl" style={serifFont}>{x.name}</p>
                  <div className="mt-6 flex h-11 w-fit items-center rounded-full px-6 text-xs uppercase tracking-[0.18em]" style={{ background: x.ink, color: x.bg }}>
                    Inquire
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      <LiveTokens />
    </div>
  );
}

// Renders the real @theme tokens and <Button> used by the site, independent of the switcher above
function LiveTokens() {
  const tokens = [
    { name: "travertine", className: "bg-travertine", hex: "#F4F0E6" },
    { name: "limestone", className: "bg-limestone", hex: "#E6DFCF" },
    { name: "olive", className: "bg-olive", hex: "#2E3A2C" },
    { name: "sand", className: "bg-sand", hex: "#B49A78" },
    { name: "sage", className: "bg-sage", hex: "#6F7D5C" },
  ];

  return (
    <section className="bg-travertine font-sans text-olive">
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-56 sm:px-8">
        <p className="mb-4 text-kicker uppercase tracking-kicker text-sage">05 — Live site tokens (final)</p>
        <h2 className="mb-16 text-h2">Travertine &amp; Olive · Instrument Serif · Manrope</h2>

        <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-5">
          {tokens.map((token) => (
            <div key={token.name}>
              <div className={`mb-3 aspect-4/5 rounded-sm ring-1 ring-olive/10 ring-inset ${token.className}`} />
              <p className="text-sm">{token.className}</p>
              <p className="font-mono text-xs opacity-60">{token.hex}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 space-y-6">
          <p className="text-display uppercase">Domus</p>
          <p className="text-h1">The Threshold</p>
          <p className="text-h2">A home is the first thing you <em className="text-sage">arrive</em> at.</p>
          <p className="text-h3 font-serif">Casa Lumen, Malibu</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-wrap items-center gap-4 rounded-sm bg-travertine p-8 ring-1 ring-olive/10 ring-inset">
            <Button variant="secondary">Book a viewing</Button>
            <Button variant="outline" showIcon={false}>Explore residences</Button>
            <Button variant="secondary" size="sm" showIcon={false}>Inquire</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 rounded-sm bg-olive p-8">
            <Button variant="primary">Book a viewing</Button>
            <Button variant="outlineLight" showIcon={false}>Explore residences</Button>
            <Button variant="primary" size="sm" showIcon={false}>Inquire</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
