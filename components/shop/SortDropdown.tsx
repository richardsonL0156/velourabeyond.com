type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-full border border-[#E8E0D5] bg-white px-6 py-4 shadow-sm outline-none focus:border-[#C5A572]"
    >
      <option value="featured">Featured</option>
      <option value="price-low">Price: Low → High</option>
      <option value="price-high">Price: High → Low</option>
      <option value="name">Name</option>
    </select>
  );
}