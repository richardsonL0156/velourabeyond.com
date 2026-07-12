type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-full border border-[#E8E0D5] bg-white px-7 py-4 text-lg shadow-sm outline-none transition focus:border-[#C5A572] focus:ring-2 focus:ring-[#C5A572]/20"
    />
  );
}