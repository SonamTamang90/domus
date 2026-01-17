interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "elevated" | "bordered";
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
  className?: string;
}

export function Card({
  children,
  variant = "default",
  padding = "md",
  hover = false,
  className = "",
}: CardProps) {
  const variantStyles = {
    default: "bg-white border border-black/10",
    glass: "bg-white/10 backdrop-blur-sm border border-white/20",
    elevated: "bg-white shadow-lg border border-black/5",
    bordered: "bg-transparent border-2 border-black/10",
  };

  const paddingStyles = {
    sm: "p-4 sm:p-6",
    md: "p-6 sm:p-8",
    lg: "p-8 sm:p-10 lg:p-12",
  };

  const hoverStyles = hover
    ? "transition-all duration-300 hover:scale-105"
    : "";

  return (
    <div
      className={`rounded-2xl ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
