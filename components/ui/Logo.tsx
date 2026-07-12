import { BRAND } from "@/constants/brand";

type LogoProps = {
  light?: boolean;
};

export default function Logo({ light = false }: LogoProps) {
  return (
    <div className="leading-none">
      <h1
        className={`text-2xl font-bold tracking-wide ${
          light ? "text-white" : "text-[#1F1F1F]"
        }`}
      >
        {BRAND.name}
      </h1>

      <p
        className={`mt-1 text-xs uppercase tracking-[0.3em] ${
          light ? "text-white/70" : "text-[#C5A572]"
        }`}
      >
        Luxury Soap
      </p>
    </div>
  );
}