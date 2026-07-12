import {
  Leaf,
  Sparkles,
  Hotel,
  PackageCheck,
} from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  {
    icon: Leaf,
    title: "Premium Ingredients",
    description:
      "Carefully selected oils, botanical extracts, and luxurious fragrances create a rich, skin-loving cleansing experience.",
  },
  {
    icon: Sparkles,
    title: "Small Batch Crafted",
    description:
      "Every soap is handcrafted in small batches to ensure exceptional quality, consistency, and attention to every detail.",
  },
  {
    icon: Hotel,
    title: "Hospitality Ready",
    description:
      "Designed for hotels, resorts, Airbnbs, spas, and boutique accommodations seeking premium guest amenities.",
  },
  {
    icon: PackageCheck,
    title: "Private Label",
    description:
      "Launch your own luxury brand with custom formulations, premium packaging, and manufacturing support from Veloura Beyond.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section background="bg-white">
      <SectionHeader
        eyebrow="THE VELOURA DIFFERENCE"
        title="Crafted Without Compromise"
        description="Every Veloura Beyond product is thoughtfully designed to combine elegance, performance, and unforgettable fragrance."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <FadeIn key={feature.title}>
              <Card className="group h-full rounded-[32px] p-8 text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
                {/* Icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F8F5EF] transition-colors duration-300 group-hover:bg-[#C5A572]">
                  <Icon
                    size={36}
                    className="text-[#C5A572] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Gold Divider */}
                <div className="mx-auto mt-8 h-1 w-14 rounded-full bg-[#C5A572]" />

                {/* Title */}
                <h3 className="mt-6 text-2xl font-semibold text-[#1F1F1F]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </Card>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}