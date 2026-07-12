type Props = {
  benefits: string[];
};

const icons = [
  "💧",
  "🫧",
  "🌿",
  "✨",
  "🧼",
  "🌸",
];

export default function ProductBenefits({
  benefits,
}: Props) {
  return (
    <section className="mt-20">

      <div className="mb-10">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
          Benefits
        </p>

        <h2 className="mt-3 text-4xl font-light text-[#1F1F1F]">
          Why You'll Love It
        </h2>

      </div>

      <div className="grid gap-6 sm:grid-cols-2">

        {benefits.map((benefit, index) => (

          <div
            key={benefit}
            className="
              rounded-[28px]
              border
              border-[#E8E0D5]
              bg-white
              p-8
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
          >

            <div className="text-4xl">
              {icons[index % icons.length]}
            </div>

            <h3 className="mt-5 text-xl font-medium text-[#1F1F1F]">
              {benefit}
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Crafted with premium ingredients to deliver a luxurious
              cleansing experience every day.
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}