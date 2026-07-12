import {
  BadgeCheck,
  Package,
  Sparkles,
  Truck,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeCheck,
    title: "Custom Branding",
    description:
      "Your logo, packaging, colors, and identity. We manufacture products that represent your brand.",
  },
  {
    icon: Sparkles,
    title: "Premium Ingredients",
    description:
      "Luxury oils, botanicals, and fragrances crafted to create a memorable customer experience.",
  },
  {
    icon: Package,
    title: "Luxury Packaging",
    description:
      "Gift boxes, sleeves, hotel amenities, retail packaging, and fully customized presentations.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "Reliable production and shipping throughout the Philippines for businesses of every size.",
  },
];

export default function PrivateBenefits() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            Why Veloura
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            Everything You Need
            <br />
            To Launch Your Brand
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We handle everything from formulation and manufacturing to
            packaging and delivery, allowing you to focus on growing your
            business.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-[#EFE7DA] bg-[#FCFAF7] p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A572]/10">
                  <Icon className="h-8 w-8 text-[#C5A572]" />
                </div>

                <h3 className="mt-8 text-2xl font-medium text-[#1F1F1F]">
                  {benefit.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {benefit.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}