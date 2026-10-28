import Link from "next/link";
import { Icon } from "@iconify/react";

type ButtonVariant = "primary" | "secondary" | "outline" | "outlineLight";

interface ButtonProps {
  children: React.ReactNode;
  /** Renders a Next.js Link instead of a <button> */
  href?: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  /**
   * primary — travertine fill, for olive or image backgrounds
   * secondary — olive fill, for light backgrounds
   * outline — olive hairline, for light backgrounds
   * outlineLight — travertine hairline, for olive or image backgrounds
   */
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  size?: "sm" | "default";
}

const sizeStyles = {
  default: "h-14 pl-8 text-xs",
  sm: "h-11 px-6 text-[11px]",
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-travertine text-olive hover:bg-limestone",
  secondary: "bg-olive text-travertine hover:bg-olive/90",
  outline: "border border-olive text-olive hover:bg-olive/5",
  outlineLight: "border border-travertine/50 text-travertine hover:bg-travertine/10",
};

const iconBgStyles: Record<ButtonVariant, string> = {
  primary: "bg-olive",
  secondary: "bg-travertine",
  outline: "bg-olive",
  outlineLight: "bg-travertine",
};

const iconColorStyles: Record<ButtonVariant, string> = {
  primary: "text-travertine",
  secondary: "text-olive",
  outline: "text-travertine",
  outlineLight: "text-olive",
};

export function Button({
  children,
  href,
  type = "button",
  icon = "lucide:arrow-right",
  variant = "primary",
  onClick,
  className = "",
  showIcon = true,
  size = "default",
}: ButtonProps) {
  const paddingRight = showIcon && size === "default" ? "pr-16" : size === "default" ? "pr-8" : "";
  const classes = `group relative inline-flex items-center gap-4 rounded-full font-medium uppercase tracking-[0.18em] transition-colors duration-500 overflow-hidden ${sizeStyles[size]} ${paddingRight} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">
          {children}
        </span>
        <span aria-hidden className="absolute inset-0 block transition-transform duration-500 ease-out-expo translate-y-full group-hover:translate-y-0">
          {children}
        </span>
      </span>
      {showIcon && (
        <span className={`absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center justify-center size-10 ${iconBgStyles[variant]} rounded-full overflow-hidden`}>
          <span className="relative block overflow-hidden">
            <Icon icon={icon} className={`size-4 ${iconColorStyles[variant]} block transition-transform duration-500 ease-out-expo group-hover:translate-x-full`} />
            <Icon icon={icon} className={`size-4 ${iconColorStyles[variant]} absolute top-0 left-0 block transition-transform duration-500 ease-out-expo -translate-x-full group-hover:translate-x-0`} />
          </span>
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
