import type { Metadata } from "next";
import Image from "next/image";

// Temporary route: Domus logo directions for review (Phase 2). Removed in Phase 7 with /styleguide.
export const metadata: Metadata = {
  title: "Domus — Logo directions",
  robots: { index: false, follow: false },
};

type Mark = (props: { className?: string }) => React.JSX.Element;

// A · Pivot: a door frame with the pivot door swung open, the first frame of the hero film
const Pivot: Mark = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <rect x="31" y="6" width="38" height="88" fill="none" stroke="currentColor" strokeWidth="4" />
    <polygon points="41,12 61,18 61,82 41,88" fill="currentColor" />
  </svg>
);

// B · Plan: the floor-plan symbol for a door, a heavy leaf and its thin swing arc, which together draw a D
const Plan: Mark = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <line x1="30" y1="8" x2="30" y2="92" stroke="currentColor" strokeWidth="7" />
    <path d="M30 8 A42 42 0 0 1 30 92" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

// C · Arch D: a solid D, like a building in elevation, with an arched doorway cut through it
const ArchD: Mark = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} aria-hidden>
    <path
      fillRule="evenodd"
      fill="currentColor"
      d="M14 8 H52 A42 42 0 0 1 52 92 H14 Z M31 92 V50 A12 12 0 0 1 55 50 V92 Z"
    />
  </svg>
);

const directions: { id: string; name: string; idea: string; Mark?: Mark }[] = [
  { id: "A", name: "Pivot", idea: "A door frame with the pivot door swung open: the first frame of the hero film.", Mark: Pivot },
  { id: "B", name: "Plan", idea: "The architect's floor-plan symbol for a door. The leaf and its swing arc draw a D.", Mark: Plan },
  { id: "C", name: "Arch D", idea: "A solid D, like a building in elevation, with an arched doorway cut through it.", Mark: ArchD },
  { id: "D", name: "Threshold wordmark", idea: "No separate symbol: the O in DOMUS becomes an arched doorway." },
];

// D · the O drawn as an arched opening, sized to the cap height
function ArchO() {
  return (
    <svg viewBox="0 0 60 80" className="mr-[0.32em] inline-block h-[0.86em] w-[0.64em] align-baseline" aria-hidden>
      <path d="M9 77 V30 A21 21 0 0 1 51 30 V77 Z" fill="none" stroke="currentColor" strokeWidth="5" />
    </svg>
  );
}

function Lockup({ d, size = "text-xl" }: { d: (typeof directions)[number]; size?: string }) {
  const word = "uppercase tracking-[0.32em] pl-[0.32em] font-serif leading-none";
  if (!d.Mark) {
    return (
      <span className={`${word} ${size} inline-flex items-baseline`} aria-label="Domus">
        D<ArchO />MUS
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-3">
      <d.Mark className="size-[1.6em]" />
      <span className={`${word} ${size}`}>Domus</span>
    </span>
  );
}

export default function LogoPage() {
  return (
    <main className="bg-travertine text-olive">
      <header className="px-4 pt-16 pb-12 sm:px-8">
        <p className="text-kicker uppercase tracking-kicker text-sage">Logo directions</p>
        <h1 className="mt-4 max-w-3xl text-h2">Four ways to draw the threshold</h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-olive/70">
          Each direction is shown as a mark, as a lockup on travertine, in the nav over the hero, and at favicon
          size. The wordmark uses the site serif for now; the chosen logo will be converted to outlines so it no
          longer depends on a web font.
        </p>
      </header>

      {directions.map((d) => (
        <section key={d.id} className="border-t border-olive/15 px-4 py-14 sm:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="text-kicker uppercase tracking-kicker text-sage">
                {d.id} · {d.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-olive/75">{d.idea}</p>
            </div>

            {/* Mark alone, large */}
            <div className="flex aspect-square items-center justify-center bg-limestone md:col-span-3">
              {d.Mark ? <d.Mark className="size-1/2" /> : <Lockup d={d} size="text-4xl" />}
            </div>

            <div className="flex flex-col gap-4 md:col-span-6">
              {/* In the nav, over the hero */}
              <div className="relative h-40 overflow-hidden bg-olive text-travertine">
                <Image src="/media/hero/hero-poster.webp" alt="" fill sizes="50vw" className="object-cover object-top" />
                <div className="absolute inset-0 bg-olive/25" />
                <div className="absolute inset-x-6 top-5 flex items-center justify-between">
                  <Lockup d={d} size="text-lg" />
                  <span className="text-kicker uppercase tracking-kicker">Inquire&nbsp;&nbsp;&nbsp;Menu</span>
                </div>
              </div>

              {/* Lockup on olive and favicon sizes */}
              <div className="flex flex-1 items-center justify-between gap-6 bg-olive px-6 py-8 text-travertine">
                <Lockup d={d} size="text-2xl" />
                <div className="flex items-end gap-4">
                  {[16, 32, 48].map((px) => (
                    <span
                      key={px}
                      className="flex items-center justify-center rounded-sm bg-travertine text-olive"
                      style={{ width: px + 8, height: px + 8 }}
                    >
                      {d.Mark ? (
                        <d.Mark className="size-full p-[12%]" />
                      ) : (
                        <span className="font-serif leading-none" style={{ fontSize: px * 0.8 }}>
                          <ArchO />
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
