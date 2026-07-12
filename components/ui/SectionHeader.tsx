interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={align === "left" ? "text-left" : "text-center"}>
      {eyebrow && (
        <p className="mb-3 uppercase tracking-[0.35em] text-sm text-[#C5A572]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold text-[#1F1F1F] md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}