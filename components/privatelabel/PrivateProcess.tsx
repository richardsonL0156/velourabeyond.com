import {
  MessageCircle,
  FlaskConical,
  Palette,
  Factory,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Consultation",
    description:
      "Tell us about your brand, target market, packaging preferences, and product vision.",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Formula Selection",
    description:
      "Choose from our premium soap bases, fragrances, colors, and ingredients—or develop a custom formula.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Brand & Packaging",
    description:
      "We'll manufacture your soaps with your logo, packaging, labels, gift boxes, and branding.",
  },
  {
    icon: Factory,
    number: "04",
    title: "Production",
    description:
      "Your products are handcrafted, quality checked, and prepared for shipment.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Delivery",
    description:
      "Your finished products are securely packed and delivered anywhere in the Philippines.",
  },
];

export default function PrivateProcess() {
  return (
    <section className="bg-[#FCFAF7] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            Our Process
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            From Your Idea
            <br />
            To Store Shelves
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            We make launching your own soap brand simple by guiding you
            through every stage of production.
          </p>

        </div>

        <div className="mt-20 space-y-8">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="flex flex-col gap-8 rounded-3xl border border-[#ECE5D8] bg-white p-8 shadow-sm transition hover:shadow-xl lg:flex-row lg:items-center"
              >

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#C5A572]/10">
                  <Icon className="h-10 w-10 text-[#C5A572]" />
                </div>

                <div className="lg:w-20">
                  <p className="text-3xl font-light text-[#C5A572]">
                    {step.number}
                  </p>
                </div>

                <div>

                  <h3 className="text-2xl font-semibold text-[#1F1F1F]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-3xl leading-8 text-gray-600">
                    {step.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}