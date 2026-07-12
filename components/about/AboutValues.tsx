import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

const values = [
  {
    title: "Premium Quality",
    description:
      "Every product is thoughtfully crafted using quality ingredients, elegant packaging, and careful attention to detail.",
  },
  {
    title: "Exceptional Service",
    description:
      "We believe every customer deserves responsive communication, reliable delivery, and personalized support.",
  },
  {
    title: "Responsible Choices",
    description:
      "We strive to create products that are gentle, practical, and responsibly produced for modern hospitality and retail.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "Our goal isn't simply selling products—we're committed to helping businesses grow through dependable partnerships.",
  },
];

export default function AboutValues() {
  return (
    <Section background="bg-white">

      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
          OUR VALUES
        </p>

        <h2 className="mt-5 text-5xl font-light text-[#1F1F1F]">
          What Guides Everything We Do
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Every decision we make is guided by craftsmanship,
          consistency, and creating products our customers are proud
          to use and share.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {values.map((value) => (

          <FadeIn key={value.title}>

            <div className="rounded-[30px] border border-[#E8DCC7] bg-[#FAF8F5] p-10 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A572] text-3xl text-white">

                ✦

              </div>

              <h3 className="text-2xl font-medium text-[#1F1F1F]">
                {value.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                {value.description}
              </p>

            </div>

          </FadeIn>

        ))}

      </div>

    </Section>
  );
}