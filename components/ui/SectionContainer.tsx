interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "black" | "gradient";
  id?: string;
}

export function SectionContainer({
  children,
  className = "",
  background = "white",
  id,
}: SectionContainerProps) {
  const backgroundStyles = {
    white: "bg-white",
    black: "bg-black",
    gradient: "bg-gradient-to-br from-black to-slate-900",
  };

  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} py-16 sm:py-20 lg:py-24 xl:py-32 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {children}
      </div>
    </section>
  );
}
