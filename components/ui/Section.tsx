import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  background?: string;
}

export default function Section({
  children,
  background = "bg-white",
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`
        ${background}
        py-20
        md:py-28
        lg:py-32
        ${className}
      `}
      {...props}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}