interface SectionHeaderProps {
  tagline?: string;
  heading: string;
  subheading?: string;
  alignment?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeader({
  tagline,
  heading,
  subheading,
  alignment = "center",
  theme = "dark",
}: SectionHeaderProps) {
  const alignmentStyles = {
    left: "text-left",
    center: "text-center",
  };

  const themeStyles = {
    light: {
      heading: "text-black",
      subheading: "text-black/70",
      tagline: "text-black/60",
    },
    dark: {
      heading: "text-white",
      subheading: "text-white/70",
      tagline: "text-white/60",
    },
  };

  return (
    <div className={`${alignmentStyles[alignment]} mb-12 lg:mb-16`}>
      {tagline && (
        <p className={`uppercase tracking-[0.2em] text-xs sm:text-sm font-medium mb-4 ${themeStyles[theme].tagline}`}>
          {tagline}
        </p>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 ${themeStyles[theme].heading}`}>
        {heading}
      </h2>
      {subheading && (
        <p className={`text-base sm:text-lg font-light leading-relaxed max-w-2xl ${alignment === "center" ? "mx-auto" : ""} ${themeStyles[theme].subheading}`}>
          {subheading}
        </p>
      )}
    </div>
  );
}
