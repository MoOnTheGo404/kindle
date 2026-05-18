import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-spruce text-white shadow-glow hover:bg-teal",
  secondary: "bg-clay text-white hover:bg-[#A95F54]",
  ghost: "bg-transparent text-spruce hover:bg-sage/70",
  outline: "border border-spruce/20 bg-white/80 text-spruce hover:border-spruce/50 hover:bg-white"
};

const baseClasses =
  "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition duration-200";

type LinkButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = ""
}: LinkButtonProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}

type ActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function ActionButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: ActionButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
