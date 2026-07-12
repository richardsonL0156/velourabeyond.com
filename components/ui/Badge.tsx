type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-block rounded-full bg-[#C5A572]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#C5A572]">
      {children}
    </span>
  );
}