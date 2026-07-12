import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

const info = [
  {
    title: "Business Hours",
    value: "Monday – Friday\n9:00 AM – 6:00 PM",
  },
  {
    title: "Response Time",
    value: "We typically respond within\n1 business day.",
  },
  {
    title: "We Specialize In",
    value:
      "Hotels • Resorts • Airbnbs\nPrivate Label • Wholesale • Retail",
  },
];

export default function ContactInfo() {
  return (
    <Section background="bg-[#FAF8F5]">

      <div className="text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
          WHY CONTACT VELOURA
        </p>

        <h2 className="mt-5 text-5xl font-light text-[#1F1F1F]">
          We're Here to Help
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Whether you're ordering a single product or developing
          a complete hospitality collection, our team is ready
          to assist you.
        </p>

      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">

        {info.map((item) => (

          <FadeIn key={item.title}>

            <div className="rounded-[30px] bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#C5A572] text-2xl text-white">

                ✓

              </div>

              <h3 className="text-2xl font-medium text-[#1F1F1F]">
                {item.title}
              </h3>

              <p className="mt-5 whitespace-pre-line leading-8 text-gray-600">
                {item.value}
              </p>

            </div>

          </FadeIn>

        ))}

      </div>

    </Section>
  );
}