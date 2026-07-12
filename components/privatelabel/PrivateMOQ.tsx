import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    title: "Starter",
    quantity: "100 Bars",
    badge: "",
    description:
      "Perfect for new businesses, boutiques, gift shops, and entrepreneurs launching their first soap collection.",
    features: [
      "Minimum 100 Bars",
      "Custom Soap Formula",
      "Custom Label Design",
      "Standard Packaging",
      "Private Branding",
    ],
  },
  {
    title: "Growing Brand",
    quantity: "500 Bars",
    badge: "Most Popular",
    description:
      "Ideal for growing brands, hotels, spas, resorts, and retailers looking for consistent production.",
    features: [
      "Minimum 500 Bars",
      "Premium Ingredients",
      "Luxury Packaging",
      "Brand Consultation",
      "Priority Production",
      "Private Label Manufacturing",
    ],
    featured: true,
  },
  {
    title: "Commercial",
    quantity: "1,000+ Bars",
    badge: "",
    description:
      "Designed for large hotels, retail chains, distributors, and nationwide businesses.",
    features: [
      "1,000+ Bars",
      "OEM Manufacturing",
      "Custom Packaging",
      "Dedicated Account Support",
      "Nationwide Delivery",
      "Long-Term Production",
    ],
  },
];

export default function PrivateMOQ() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            Minimum Order Quantities
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            Flexible Production
            <br />
            For Every Business
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Whether you're launching your first product or supplying hotels
            nationwide, we have a production plan that fits your business.
          </p>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan) => (

            <div
              key={plan.title}
              className={`relative rounded-[36px] border p-10 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-[#C5A572] bg-[#FCFAF7]"
                  : "border-[#ECE5D8] bg-white"
              }`}
            >

              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#C5A572] px-6 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white">
                  {plan.badge}
                </div>
              )}

              <h3 className="mt-4 text-3xl font-light text-[#1F1F1F]">
                {plan.title}
              </h3>

              <p className="mt-2 text-5xl font-light text-[#C5A572]">
                {plan.quantity}
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                {plan.description}
              </p>

              <div className="mt-10 space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check className="h-5 w-5 text-[#C5A572]" />

                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </div>

                ))}

              </div>

              <Link
                href="#quote"
                className={`mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
                  plan.featured
                    ? "bg-[#C5A572] text-white hover:bg-[#B18E56]"
                    : "border border-[#C5A572] text-[#C5A572] hover:bg-[#C5A572] hover:text-white"
                }`}
              >
                Start This Plan

                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}