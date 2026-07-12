"use client";

import {
  Building2,
  Gift,
  PackageCheck,
  Palette,
  Truck,
  ShieldCheck,
} from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";

const benefits = [
  {
    icon: Building2,
    title: "Trusted by Hotels & Resorts",
    description:
      "Premium artisan soaps crafted to elevate guest experiences in hotels, resorts, spas, and Airbnbs.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description:
      "Private label packaging, custom scents, and branded presentation tailored to your business.",
  },
  {
    icon: Gift,
    title: "Corporate & Event Gifts",
    description:
      "Luxury soap collections for corporate gifting, weddings, special events, and premium client appreciation.",
  },
  {
    icon: PackageCheck,
    title: "Low Minimum Orders",
    description:
      "Flexible order quantities make it easy for businesses of every size to get started.",
  },
  {
    icon: Truck,
    title: "Nationwide Delivery",
    description:
      "Reliable shipping throughout the Philippines with careful packaging and fast fulfillment.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Ingredients",
    description:
      "Handcrafted using nourishing oils, premium fragrances, and ingredients selected for exceptional quality.",
  },
];

export default function BulkBenefits() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#C5A572]">
              Why Choose Veloura
            </p>

            <h2 className="text-4xl font-light tracking-tight text-[#2C221B] md:text-5xl">
              Crafted for Businesses That
              <span className="block font-semibold">
                Value Luxury & Quality
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6B625B]">
              From boutique hotels to luxury resorts, corporate gifting,
              retailers, and private-label partners, Veloura delivers
              handcrafted soaps that leave a lasting impression.
            </p>

          </div>
        </FadeIn>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.1}>

                <div className="group rounded-3xl border border-[#ECE6DD] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#C5A572] hover:shadow-2xl">

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7F2EA] text-[#C5A572] transition group-hover:bg-[#C5A572] group-hover:text-white">

                    <Icon className="h-8 w-8" />

                  </div>

                  <h3 className="mb-4 text-2xl font-semibold text-[#2C221B]">
                    {item.title}
                  </h3>

                  <p className="leading-7 text-[#6B625B]">
                    {item.description}
                  </p>

                </div>

              </FadeIn>
            );
          })}

        </div>

      </div>
    </section>
  );
}