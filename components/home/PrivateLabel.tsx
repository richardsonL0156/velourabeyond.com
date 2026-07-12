import Image from "next/image";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    title: "Custom Branding",
    description:
      "Create products that reflect your brand with custom labels, packaging, colors, and fragrances.",
  },
  {
    title: "Flexible Production",
    description:
      "From boutique businesses to commercial hospitality groups, we scale production to fit your needs.",
  },
  {
    title: "Premium Ingredients",
    description:
      "Luxury oils, botanical extracts, and elegant fragrances crafted to premium standards.",
  },
  {
    title: "Hospitality & Retail Ready",
    description:
      "Perfect for hotels, resorts, spas, boutiques, gift shops, and online brands.",
  },
];

export default function PrivateLabel() {
  return (
    <Section background="bg-white">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Image */}

        <FadeIn>
          <div className="relative h-[650px] overflow-hidden rounded-[32px] bg-white p-3 shadow-2xl">

            {/* Gold Glow */}

            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#C5A572]/20 blur-3xl" />

            <div className="absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-[#C5A572]/10 blur-3xl" />

            <div className="relative h-full w-full overflow-hidden rounded-[24px]">

              <Image
                src="/images/collections/private-label.png"
                alt="Private Label Manufacturing"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

            </div>
          </div>
        </FadeIn>

        {/* Content */}

        <FadeIn>

          <SectionHeader
            eyebrow="PRIVATE LABEL"
            title="Launch Your Own Luxury Brand"
            description="Whether you're starting a skincare brand, hotel amenities collection, spa line, or boutique business, Veloura Beyond helps bring your vision to life."
            align="left"
          />

          <div className="mt-10 space-y-6">

            {services.map((service) => (

              <div
                key={service.title}
                className="rounded-2xl bg-[#FAF8F5] p-6 shadow-md transition duration-300 hover:shadow-lg"
              >
                <div className="mb-3 h-1 w-14 rounded-full bg-[#C5A572]" />

                <h3 className="text-xl font-semibold text-[#1F1F1F]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <Button size="lg">
              Request Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Learn More
            </Button>

          </div>

        </FadeIn>

      </div>
    </Section>
  );
}