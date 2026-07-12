const categories = [
  "All",
  "Essentials",
  "Signature",
];

type Props = {
  selected: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  selected,
  onChange,
}: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] transition ${
            selected === category
              ? "bg-[#C5A572] text-white shadow-lg"
              : "border border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}