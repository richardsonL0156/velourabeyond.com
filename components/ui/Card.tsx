import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "glass";
}

export default function Card({
  children,
  className = "",
  variant = "default",
  ...props
}: CardProps) {
  const variants = {
    default:
      "bg-white border border-gray-100 shadow-sm",

    glass:
      "bg-white/70 backdrop-blur-md border border-white/20 shadow-xl",
  };

  return (
    <div
      className={`
        group
        overflow-hidden
        rounded-3xl
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}