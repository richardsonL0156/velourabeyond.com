"use client";

import {
  FileText,
  MessageCircle,
  PackageCheck,
  Truck,
} from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Request a Quote",
    description:
      "Tell us about your business, preferred products, quantities, and any custom branding requirements.",
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Receive Your Proposal",
    description:
      "We'll prepare pricing, recommend the best options, and discuss timelines tailored to your needs.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Production Begins",
    description:
      "Once approved, our artisans begin carefully crafting your order using premium ingredients.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Delivery",
    description:
      "Your handcrafted soaps are carefully packaged and delivered anywhere in the Philippines.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#C5A572]">
              Our Process
            </p>

            <h2 className="text-4xl font-light text-[#2C221B] md:text-5xl">
              Ordering Made
              <span className="block font-semibold">
                Simple & Stress-Free
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#6B625B]">
              From your first inquiry to final delivery, we make bulk ordering
              straightforward, transparent, and personalized.
            </p>

          </div>
        </FadeIn>

        <div className="relative mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <FadeIn
                key={step.number}
                delay={index * 0.15}
              >
                <div className="group relative rounded-3xl border border-[#ECE6DD] bg-[#FAF8F5] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                  <span className="absolute right-8 top-8 text-5xl font-bold text-[#F2ECE4]">
                    {step.number}
                  </span>

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C5A572] text-white transition-all group-hover:scale-110">

                    <Icon className="h-8 w-8" />

                  </div>

                  <h3 className="mb-4 text-2xl font-semibold text-[#2C221B]">
                    {step.title}
                  </h3>

                  <p className="leading-7 text-[#6B625B]">
                    {step.description}
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