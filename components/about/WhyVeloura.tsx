import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

const features = [
  {
    title: "Premium Quality",
    description:
      "Every product is crafted with carefully selected ingredients and attention to detail.",
  },
  {
    title: "Hospitality Focused",
    description:
      "Designed specifically for hotels, resorts, Airbnbs, spas, and premium accommodations.",
  },
  {
    title: "Private Label Solutions",
    description:
      "Launch your own branded collection with custom packaging and professional manufacturing.",
  },
  {
    title: "Reliable Partnership",
    description:
      "Consistent quality, responsive communication, and dependable production you can trust.",
  },
];

export default function WhyVeloura() {
  return (
    <Section background="bg-white">

      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
          WHY CHOOSE VELOURA
        </p>

        <h2 className="mt-5 text-5xl font-light text-[#1F1F1F]">
          More Than Beautiful Products
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          We help businesses create exceptional customer experiences
          through premium hospitality products, elegant presentation,
          and dependable service.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {features.map((item) => (

          <FadeIn key={item.title}>

            <div className="rounded-[28px] border border-[#E8DCC7] bg-[#FAF8F5] p-10 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C5A572] text-2xl text-white">

                ✓

              </div>

              <h3 className="text-2xl font-medium text-[#1F1F1F]">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {item.description}
              </p>

            </div>

          </FadeIn>

        ))}

      </div>

    </Section>
  );
}