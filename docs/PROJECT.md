# Domus — Project Brief

> Source of truth for the Domus redesign. Read before any design or code work.
> Update **§10 Status** when a phase completes or a decision changes.

**Goal:** an Awwwards-level website (Site of the Day bar ≈ 7.2–7.6 / 10) built by learning from recent winning real-estate sites and turning those patterns into our own identity.

---

## 1. What Domus is

Domus is a private curator of rare, architect-designed homes. We don't list everything. We select a small number of exceptional residences and present each one like a piece in a collection. **The website is the gallery.**

- **One-liner (draft):** *Rare homes, quietly curated.*
- **Central idea: The Threshold.** *Domus* is Latin for "home". Every section is built around the moment of arriving: light through an opening, a doorway, the frame of a window. The visual motif is the **frame**. Images reveal through arched and rectangular frames, morph between them, and open into full-bleed views.
- **Audience:** design-literate buyers (35–65) looking for a primary or second home. They value architecture, privacy and craft more than square-footage-per-dollar.
- **Voice:** calm, precise, unhurried. Short sentences. Lyrical for mood, exact for facts (m², bedrooms, architect, year).
  - Avoid: "masterpiece", "unparalleled", "dream home", "spaces designed for tomorrow", exclamation marks.
  - ROI, cap rate and yield are **not** part of the main story. If needed at all, they live as a detail on residence pages.

## 2. Reference sites (borrow patterns, never copy)

| Site | Award | What we borrow |
|---|---|---|
| [Belgrade Arbor](https://belgradearbor.rs/en) (Square43) | SOTD Oct 2026 | Preloader with % counter, full-bleed cinematic hero video, giant serif title, sticky multi-screen intro with morphing image frames, floating pill nav that expands to a full menu, rolling-text buttons |
| [Silver Pinewood](https://silver-pinewood.com/) (Vide Infra) | SOTD + Dev, Oct 2025 | Restraint, warm muted palette, stone textures, even scroll rhythm |
| [ERA Residence](https://www.era-residence.com/) (The First The Last) | SOTM Aug 2026 | Residence-type cards with real specs, architect credits, "Book a call" modal, day/night mood |
| [Sobha Privy Collection](https://sobha-privy-collection.com/) (Vide Infra) | SOTD Sep 2026 | Collection framing, zoom-on-scroll imagery, property selector |
| [Realevate](https://realevate.agency/) | SOTD Sep 2026 | Curated themed collections, page transitions between cards and detail pages |
| LIKOVA (Vide Infra) | SOTD Aug 2026 | Scroll-driven cascading panels, layered depth |
| ERA (Vide Infra) | SOTD Jan 2025 | One visual thread through the whole site, ultra-high-res hero with scroll-revealed detail |

### Belgrade Arbor hero, how it is built (our main hero reference)
Studied from their production JS bundle and video files (Oct 2026).
- **No WebGL in the hero.** It is a pre-rendered video plus GSAP. Their WebGL (Three.js / React Three Fiber) is used only on the location map (a cursor "light circle" shader) and the separate `/3d` page.
- **The video is a "sketch to reality" story (15.6s, plays once, no loop):** blank cream paper → pencil lines draw the facade → a detailed architectural sketch → a white clay model → the photoreal render "paints in" through organic, misty patches → it holds on the final photoreal frame.
- **Files:** desktop `hero.mp4` (H.264, 2560×1440, 25fps, ~4.3 Mb/s, 9 MB). A separate mobile cut, `hero-m.webm` (VP9, **600×1200 portrait**, cropped on the entrance, 1.9 MB), is chosen with `matchMedia("(max-width: 600px)")`.
- **Sequence (code):** `preload="none"`, then `src` is set on mount → a **fake loader** tweens 0→100% over 2s (cream background, logo, hairline bar, % counter) while Lenis scroll is stopped → the loader fades out → `video.play()` and scroll resumes → **on `ended`**, the title overlay fades in and the title letters rise in one by one (SplitText chars, `y: 2rem → 0`, stagger 0.05s).
- **Title:** "BELGRADE ARBOR", uppercase serif, `10.5vw` (`17vw` on mobile), bottom-center, `text-sand`.
- **Intro:** a `900vh` sticky scroller (a simplified `600vh` version on mobile) with three statement screens. Images sit inside SVG-shaped frames that morph between screens. A leaf texture uses `mix-blend-multiply` with parallax over a radial green gradient. A `01 / 02 / 03` progress line sits bottom-left.
- **Navigation:** a floating, centered pill (dark green at 80% + `backdrop-blur`, `rounded-[1.75rem]`): "Menu" two-line toggle · logo · "Inquire". It expands into a full menu of large serif links that swap to italic accent on hover.
- **Fonts:** Work Sans + Editorial Old (serif). **WebGL:** OGL. **Stack:** Next.js + GSAP + Three.js.

## 3. Design system *(finalized in Phase 1)*

All tokens live in `styles/globals.css` (`@theme`). Use the token classes, never raw hex values or Tailwind default colors (`white`, `black`, `blue-*`, `gray-*`).

### Palette: B, Travertine & Olive ✅
| Token | Hex | Class | Use |
|---|---|---|---|
| travertine | `#F4F0E6` | `bg-travertine` / `text-travertine` | Page background; text on olive or images |
| limestone | `#E6DFCF` | `bg-limestone` | Surfaces, cards, quiet alternate sections |
| olive | `#2E3A2C` | `bg-olive` / `text-olive` | Ink: body text, dark sections, primary buttons |
| sand | `#B49A78` | `text-sand` / `bg-sand` | **Decorative only on light backgrounds** (low contrast): hairlines, textures, labels on olive |
| sage | `#6F7D5C` | `text-sage` | Accent: italic highlights, links, active states. On travertine use it for large text or underlined links |

Rule: olive and travertine carry the site; sage is the only accent; sand is texture. Alternatives A (Limestone & Ink) and C (Sand & Charcoal) were rejected.

### Typography: Newsreader + Manrope ✅ (changed 2026-10-28, was Instrument Serif)
- **Display / headings:** Newsreader (`font-serif`, variable 200–800 + italic, `opsz` axis so large sizes get the sharp display cut). Free stand-in for PP Editorial Old, which Belgrade Arbor uses (Regular for the hero title, Ultralight for headings). All `h1–h6` default to **300** (set in `@layer base`, so utilities override it); the hero title uses `font-normal` (400). Keep headings at 300–400, never `font-medium` or heavier. A comparison of the alternatives (Instrument Serif, Newsreader, Cormorant, Bodoni Moda, Libre Caslon) is at the top of `/styleguide`.
- **Body / UI:** Manrope (`font-sans`, variable weight).
- **Scale tokens:** `text-display` (10.5vw, hero wordmark, uppercase) · `text-h1` · `text-h2` · `text-h3` (all fluid `clamp()`) · `text-kicker` (11px, uppercase, `tracking-kicker` 0.25em).
- Italic serif in `text-sage` is the accent/hover state (menu links, highlighted words).
- **Easing tokens:** `ease-out-expo` (default for reveals), `ease-out-quart`, `ease-in-out-quart` (curtains, page transitions).

### Logo (`components/ui/Logo.tsx`) ✅ chosen 2026-10-28
Direction A, **Pivot**: a door frame with the pivot door swung open (the first frame of the hero film). `LogoMark` = the closed symbol (favicon, square uses). `Logo` = lockup: the doorway is open at the bottom and one ground line, the same weight as the frame, is both its threshold and the floor that runs to the end of "DOMUS" (spaced serif caps, `tracking-[0.32em]`, cap-height centred on the door via `text-box: trim-both cap alphabetic`). Frame and floor are CSS borders of one weight (`max(1px, 0.06em)`) so they snap to the same pixels and join cleanly at any zoom; the door leaf is a small SVG inside the frame; size it with a text class, colour via `currentColor`. Favicon: `app/icon.svg` (olive tile, travertine mark, heavier strokes for 16px). Rejected directions (Plan, Arch D, Threshold wordmark) are still viewable at `/styleguide/logo`. To do: convert the wordmark to outlines once the heading font is final.

### Button (`components/ui/Button.tsx`)
Rolling-text hover, uppercase, wide tracking. Pass `href` to render a `next/link`.
- `secondary`: olive fill, for light backgrounds (the default CTA on the site)
- `outline`: olive hairline, for light backgrounds
- `primary`: travertine fill, for olive or image backgrounds
- `outlineLight`: travertine hairline, for olive or image backgrounds
- **Layout:** 12-column grid, generous whitespace, no bordered cards by default. Sections vary in composition (full-bleed / split / sticky / horizontal). Never repeat the same "label + h2 + paragraph" block section after section.
- **Iconography:** minimal. Use numbers, hairlines and arrows instead of icon-in-circle.

## 4. Motion principles

- **Lenis** smooth scroll + **GSAP ScrollTrigger** as the single motion engine. **SplitText** line reveals for headings.
- Slow, eased, cinematic: 0.8–1.4s, expo/quart out. Nothing bouncy.
- At most one signature effect per section.
- Respect `prefers-reduced-motion`: fall back to simple fades, with no pinning or scrub.
- 60fps on mid-range phones. Heavy sequences get a simplified mobile version.

## 5. Photography & media art direction

- One coherent set, generated with Higgsfield. **Quote the credits before every batch.**
- Golden-hour and blue-hour exteriors, interiors in natural light, material close-ups (travertine, oak, linen, bronze), lifestyle shots without faces to camera, one aerial.
- No flat blue-sky daytime renders, no suburban stock houses, no random avatar photos.
- **Hero:** see "Hero media plan" below.

### Hero media plan: "Threshold walk-in" ✅ decided
Generated now (pulled forward from Phase 4). The rest of the photography stays in Phase 4.

**Story (~10–14s, plays once, holds on the last frame):** a slow, steady forward walk at eye level. We approach a tall pivot door set in a travertine wall at golden hour. We pass through the opening, cross a quiet stone-and-oak interior, and arrive at a floor-to-ceiling glass wall framing the landscape (ocean or canyon at golden hour). The final frame is the calm "arrival" view, with uncluttered floor/terrace at the bottom third where the DOMUS wordmark sits.

**Keyframes (stills, generated first, all at 16:9 with matching light and palette):**
1. **Approach:** exterior, centered on the pivot door in the travertine wall, olive planting, warm low sun.
2. **Threshold:** standing in the open doorway, the interior and far glass wall visible beyond.
3. **Arrival (hero poster / final frame):** inside, facing the glass wall and view. It is also the static hero image, the LCP image and the reduced-motion fallback.

**Video:** Higgsfield start/end-frame model, two clips (1→2, 2→3), joined with `ffmpeg`. No hard cuts, constant camera speed, no people.

**Deliverables (`public/media/hero/`):**
- `hero.mp4`: H.264, 1920×1080, ≤ 6 MB
- `hero-m.mp4`: portrait 1080×1920 cut, ≤ 2.5 MB. The walk-in is centered on the doorway, so it crops cleanly to portrait (Belgrade uses a separate portrait cut too)
- `hero-poster.avif` / `.webp` (frame 3), plus a portrait poster

**Fallback (WebGL, OGL):** if the generated transitions look unstable, use stills 1→2→3 with a shader that scales toward the door aperture (a fake dolly) while dissolving through soft noise. ~600 KB total.

**Build order:** static phase: the poster replaces the placeholder in `components/sections/Hero.tsx`, with the `<video poster>` markup in place. Motion phase: loader, play once, wordmark char reveal on `ended`, `matchMedia` source switch.

**Planned (deferred by the user 2026-10-28): arrival cinemagraph loop.** After the walk-in ends, crossfade into a seamless 10s loop of the final frame: camera locked, only nature moves (ocean swell and glints, sun reflection on water and floor, olive leaves, slow clouds). MiniMax H3, 2K 16:9, start and end frame = frame 3B (job `6a816511-05b8-4cb0-bc4b-7cde3d19f11e`) for a seamless loop. Quote: 20 credits per variant, 2 variants recommended (40). Then check for camera drift and a loop-point jump, encode desktop + portrait cuts (~2–3 MB each), and keep the still for `prefers-reduced-motion`. Implement in the Motion phase.

**Status:** ✅ Generated 2026-10-28 (≈40.5 credits). Stills: GPT Image 2.5 (2K, frames 1A → 2B → 3B, each referencing the previous). Clips: MiniMax H3 (2K, 6s each, start/end frames), joined in `ffmpeg` with the ease-out/ease-in stall at the doorway cut and a 4-frame crossfade. Final: 12s, 24fps. `hero.mp4` 1920×1080 5.3 MB, `hero-m.mp4` 1080×1920 2.3 MB, `hero-poster(-m).avif/.webp` (frame 3B; matches the last video frame). The poster is wired into `Hero.tsx`. The video autoplays once (muted, `<source media>` picks `hero-m.mp4` at ≤600px, first-frame poster `hero-start.webp`) and holds on the last frame. The loader, wordmark reveal and reduced-motion handling come in the Motion phase.
- **Delivery:** AVIF/WebP stills, H.264 + WebM video with poster frames, in `public/media/`. No image over 400 KB, and never `unoptimized` on `next/image`.

## 6. Sitemap

| Route | Purpose |
|---|---|
| `/` | Home |
| `/residences` | Collection with filters (location, type, bedrooms, price band) |
| `/residences/[slug]` | Residence detail: gallery, specs, architect, floor plan, location, inquire |
| `/about` | Philosophy + team |
| `/contact` | Inquiry / book a private viewing |
| `not-found` | Custom 404 |

## 7. Homepage structure (target)

1. **Preloader:** wordmark + hairline progress + %
2. **Hero:** full-bleed walk-in video with the value proposition bottom-left: kicker "A private collection of homes", h1 "Rare homes, / quietly curated." (`text-h1`, always two lines via `<br>`, no italic, no dashes; user decision 2026-10-28), sentence "Domus selects a small number of homes by notable architects and shows each one privately, by appointment.", CTAs "Explore the collection" + "Book a viewing", and an "In the film: Casa Lumen, Malibu" caption. No giant wordmark (the name lives in the nav). Rule: a first-time visitor must understand what Domus is and what to do next within 5 seconds.
3. **Threshold intro:** sticky 3-screen scroller, images revealed through morphing frames (arch → rectangle → full), stone texture parallax, 01/02/03 progress
4. **The Collection:** horizontal-scroll strip of residences → detail pages
5. **Residence spotlight:** zoom-on-scroll full-bleed image with specs
6. **The Domus way:** 4-step process, sticky left / scrolling right
7. **Places:** where our homes are (map or list with landmarks and distances)
8. **Voices:** one large testimonial at a time
9. **Closing scene:** full-bleed image + "Book a private viewing"
10. **Footer:** giant wordmark, nav, contact

## 8. Tech stack

Next.js 16 App Router · React 19 · Tailwind v4 (`@theme` tokens) · GSAP + `@gsap/react` (ScrollTrigger, SplitText) · Lenis · OGL for the WebGL signature effect · `next/font` · `next/image`.

GSAP and Lenis are added in Phase 5 (Motion), not before. New sections are built without animation, and framer-motion is phased out with the old components. Keep `components/ui/Button.tsx`'s rolling-text hover: it already matches the reference.

## 9. Quality bar (Awwwards + Developer Award)

- Lighthouse ≥ 90 in all four categories. LCP < 2.5s. No layout shift from the preloader.
- Full keyboard and screen-reader support (`aria-expanded` on menus and accordions, visible focus states).
- OG/Twitter metadata, `sitemap.ts`, `robots.ts`, JSON-LD on residence pages.
- Custom 404. No dead `#` links. Working contact form.

## 10. Status

### Working rules (agreed after Phase 1)
- **Layout and design first, motion last.** Build every section and page as a finished static design. Animation, smooth scrolling, the preloader sequence and page transitions all come in Phase 5, layered on top. Build static layouts so motion can be added later without restructuring (e.g. the Threshold intro starts as three stacked screens).
- **One section at a time.** Each section is built, reviewed by the user, then the next one starts.
- **Reusable UI only when needed.** No upfront component library. Extract a shared component when a second section actually needs it.
- **Old design for comparison:** `app/page.tsx` has the old sections commented out. The full old homepage still renders at `/legacy`.
- **File naming:** when a component is redesigned, the old file is renamed `<Name>2.tsx` (export `<Name>2`) and the new design takes `<Name>.tsx` in the same folder. Both are kept; the site uses `<Name>`, `/legacy` uses `<Name>2`. Example: `components/sections/Hero.tsx` (new) and `components/sections/Hero2.tsx` (old).

| Phase | Scope | Status |
|---|---|---|
| 0 | Project brief (`docs/PROJECT.md`, `CLAUDE.md`) | ✅ Done |
| 1 | Design foundations: `/styleguide` comparison → palette, fonts, `@theme` tokens, `Button` variants (`href`, outline, outlineLight) | ✅ Done |
| 2 | Homepage sections, static, one by one (§7) | ⏳ Next |
| 3 | Pages, static: residences list + filters, detail, about, contact, 404 | ⏳ |
| 4 | Art direction & assets: Higgsfield shot list → credit quote → generate → optimize (placeholders are used until then) | ⏳ |
| 5 | Motion: GSAP + Lenis smooth scroll, reveals, preloader, intro scroller choreography, page transitions | ⏳ |
| 6 | Signature WebGL moment (OGL) | ⏳ |
| 7 | Polish: SEO, a11y, performance, cross-device QA. Remove `/styleguide`, `/legacy` and old components | ⏳ |

### Phase 2 section checklist
| # | Section | Status |
|---|---|---|
| 1 | Header: minimal bar (wordmark · Inquire · Menu) + split "threshold" menu, framed residence left, serif links right. Pattern chosen from navbar.gallery (Heid); the Belgrade-style pill was dropped (user: no UI that looks like the inspiration sites). `components/layout/Header.tsx`, old: `Header2.tsx`. Static; links to Phase 3 routes | 🔍 Built, in review |
| 2 | Hero: full-bleed video + value proposition and CTAs (`components/sections/Hero.tsx`, old: `Hero2.tsx`). Reworked 2026-10-28: the wordmark-only version confused first-time visitors | 🔍 Built, in review |
| 3 | Threshold intro: three statement screens with frames | ⏳ |
| 4 | The Collection: residences strip | ⏳ |
| 5 | Residence spotlight | ⏳ |
| 6 | The Domus way: process | ⏳ |
| 7 | Places | ⏳ |
| 8 | Voices: testimonial | ⏳ |
| 9 | Closing scene: "Book a private viewing" | ⏳ |
| 10 | Footer | ⏳ |
