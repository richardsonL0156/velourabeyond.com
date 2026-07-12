import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300 focus:outline-none";

  const variants = {
    primary:
      "bg-[#C5A572] text-white hover:bg-[#B39260] hover:shadow-xl",

    outline:
      "border border-[#C5A572] bg-transparent text-[#C5A572] hover:bg-[#C5A572] hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-sm",

    md: "px-7 py-3 text-base",

    lg: "px-9 py-4 text-lg",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {/* Shimmer Effect */}

      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <span className="relative z-10">{children}</span>
    </>
  );

 if (href) {
  return (
    <Link
      href={href}
      className={classes}
      scroll={true}
    >
      {content}
    </Link>
  );
}
}