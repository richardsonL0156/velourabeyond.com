import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    name: "Maria Santos",
    company: "Boutique Hotel Manager",
    quote:
      "Veloura Beyond transformed our guest amenities. The quality, fragrance, and presentation perfectly complement our luxury rooms.",
  },
  {
    name: "Daniel Cruz",
    company: "Airbnb Host",
    quote:
      "Guests consistently compliment the soaps and room sprays. It's a simple touch that creates a memorable experience.",
  },
  {
    name: "Sophia Lim",
    company: "Spa Owner",
    quote:
      "Beautiful handcrafted products with premium ingredients. Our clients appreciate the elegant presentation and luxurious feel.",
  },
];

export default function Testimonials() {
  return (
    <Section background="bg-[#FAF8F5]">
      <SectionHeader
        eyebrow="TESTIMONIALS"
        title="Trusted by Businesses That Value Quality"
        description="Our handcrafted products help hotels, Airbnbs, spas, and boutique businesses create memorable guest experiences."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <FadeIn key={testimonial.name}>
            <Card className="group h-full rounded-[32px] bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

              {/* Stars */}
              <div className="mb-6 flex text-2xl text-[#C5A572]">
                ★★★★★
              </div>

              {/* Quote */}
              <p className="leading-8 text-gray-600 italic">
                "{testimonial.quote}"
              </p>

              {/* Divider */}
              <div className="my-8 h-px bg-gray-200" />

              {/* Avatar */}
              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C5A572] text-xl font-semibold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#1F1F1F]">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {testimonial.company}
                  </p>
                </div>

              </div>

            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}