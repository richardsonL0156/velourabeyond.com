import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

const stats = [
  {
    value: "100%",
    title: "Handcrafted",
    description:
      "Every soap is handcrafted in small batches with exceptional attention to detail.",
  },
  {
    value: "Premium",
    title: "Ingredients",
    description:
      "Made with carefully selected oils, botanical extracts, and luxurious fragrances.",
  },
  {
    value: "Private",
    title: "Label",
    description:
      "Create your own branded collection with custom formulations and packaging.",
  },
  {
    value: "Hotel",
    title: "Ready",
    description:
      "Luxury amenities designed for hotels, resorts, Airbnbs, spas, and boutique properties.",
  },
];

export default function Stats() {
  return (
    <Section background="bg-[#FAF8F5]">
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <FadeIn key={stat.title}>
            <div className="group rounded-[32px] bg-white p-10 text-center shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              {/* Gold Accent */}
              <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-[#C5A572]" />

              {/* Main Value */}
              <h2 className="text-4xl font-light text-[#1F1F1F]">
                {stat.value}
              </h2>

              {/* Title */}
              <h3 className="mt-3 text-2xl font-semibold text-[#1F1F1F]">
                {stat.title}
              </h3>

              {/* Description */}
              <p className="mt-5 leading-7 text-gray-600">
                {stat.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}