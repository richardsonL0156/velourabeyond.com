import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-xl
        border
        border-gray-200
        bg-white
        px-5
        py-3
        outline-none
        transition
        focus:border-[#C5A572]
        focus:ring-2
        focus:ring-[#C5A572]/30
        ${className}
      `}
    />
  );
}