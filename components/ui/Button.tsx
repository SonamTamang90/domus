import { Icon } from "@iconify/react";

interface ButtonProps {
  children: React.ReactNode;
  icon?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  size?: "sm" | "default";
}

export function Button({
  children,
  icon = "lucide:arrow-right",
  variant = "primary",
  onClick,
  className = "",
  showIcon = true,
  size = "default"
}: ButtonProps) {
  const sizeStyles = {
    default: "pl-8 pr-16 py-3.5 text-base",
    sm: "px-6 py-2.5 text-sm",
  };

  const baseStyles = `group relative inline-flex items-center gap-4 rounded-full font-medium transition-all duration-300 overflow-hidden ${sizeStyles[size]}`;

  const variantStyles = {
    primary: "bg-white text-black hover:bg-white/95",
    secondary: "bg-black text-white hover:bg-black/90",
  };

  const iconBgStyles = {
    primary: "bg-black",
    secondary: "bg-white",
  };

  const iconColorStyles = {
    primary: "text-white",
    secondary: "text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute inset-0 block transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0">
          {children}
        </span>
      </span>
      {showIcon && (
        <span className={`absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 ${iconBgStyles[variant]} rounded-full overflow-hidden`}>
          <span className="relative block overflow-hidden">
            <Icon icon={icon} className={`w-5 h-5 ${iconColorStyles[variant]} block transition-transform duration-300 ease-out group-hover:translate-x-full`} />
            <Icon icon={icon} className={`w-5 h-5 ${iconColorStyles[variant]} absolute top-0 left-0 block transition-transform duration-300 ease-out -translate-x-full group-hover:translate-x-0`} />
          </span>
        </span>
      )}
    </button>
  );
}
