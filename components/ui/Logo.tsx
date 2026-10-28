// Domus logo, direction A "Pivot": a door frame with the pivot door swung open,
// the first frame of the hero film. Colours follow currentColor.
// TODO: convert the wordmark to outlines once the heading font is final (docs/PROJECT.md §3).

/** The symbol on its own (closed frame), e.g. for the favicon or small square uses. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <rect x="31" y="6" width="38" height="88" fill="none" stroke="currentColor" strokeWidth="4" />
      <polygon points="41,12 61,18 61,82 41,88" fill="currentColor" />
    </svg>
  );
}

// One weight for the frame and the floor. Borders snap to the same device pixels,
// so the corners meet exactly at every size and zoom level
const line = "max(1px, 0.06em) solid currentColor";

/**
 * Mark + wordmark. The doorway is open at the bottom: one ground line is both its threshold
 * and the floor that runs to the end of DOMUS. The capitals are centred on the door's height.
 * Size it with a text size class on `className`; everything scales with it.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-[0.5em] ${className}`} style={{ borderBottom: line }}>
      {/* Frame: left, top and right sides only, standing on the floor line */}
      <span
        aria-hidden
        className="relative h-[1.5em] w-[0.62em] shrink-0"
        style={{ borderTop: line, borderLeft: line, borderRight: line }}
      >
        {/* The pivot door, swung open: tall near edge on the floor, shorter far edge */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute bottom-0 left-[18%] h-[94%] w-[64%]">
          <polygon points="0,0 100,8 100,94 0,100" fill="currentColor" />
        </svg>
      </span>

      {/* Same height as the frame, capitals centred in it (text trimmed to cap height).
          The negative margin drops the trailing letter-space so the floor ends at the S */}
      <span className="-mr-[0.32em] flex h-[1.5em] items-center">
        <span className="font-serif leading-none tracking-[0.32em] uppercase [text-box:trim-both_cap_alphabetic]">
          Domus
        </span>
      </span>
    </span>
  );
}
