"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our standard minimum order starts at 100 bars for wholesale orders. Private label projects may have different minimums depending on packaging and customization requirements.",
  },
  {
    question: "Can you create custom branded soap for my business?",
    answer:
      "Yes. We offer private label manufacturing including custom soap formulas, fragrances, packaging, labels, and gift boxes tailored to your brand.",
  },
  {
    question: "Do you supply hotels, resorts and Airbnbs?",
    answer:
      "Absolutely. We work with hotels, resorts, boutique accommodations, Airbnbs, spas, and wellness businesses looking for premium handcrafted amenities.",
  },
  {
    question: "How long does production take?",
    answer:
      "Production time depends on order size. Most wholesale orders are completed within 2–4 weeks after artwork and specifications are approved.",
  },
  {
    question: "Do you deliver throughout the Philippines?",
    answer:
      "Yes. We ship nationwide using trusted courier partners, with careful packaging to ensure your products arrive in excellent condition.",
  },
  {
    question: "Can I request samples before placing a large order?",
    answer:
      "Yes. Sample packs are available so you can evaluate our soap quality, fragrances, and packaging before committing to a bulk order.",
  },
];

export default function BulkFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-5xl px-6">

        <FadeIn>

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#B68A35]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-5xl font-light text-[#2B1D14]">
              Everything You Need to Know
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6D6257]">
              Here are answers to the questions we receive most often from
              hotels, Airbnbs, resorts, spas, retailers, and wholesale partners.
            </p>

          </div>

        </FadeIn>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <FadeIn
                key={faq.question}
                delay={index * 0.08}
              >

                <div className="overflow-hidden rounded-3xl border border-[#ECE6DD] bg-[#FDFBF7]">

                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between p-8 text-left transition hover:bg-[#FAF5EE]"
                  >

                    <h3 className="pr-6 text-xl font-semibold text-[#2B1D14]">
                      {faq.question}
                    </h3>

                    <ChevronDown
                      className={`h-6 w-6 text-[#B68A35] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="px-8 pb-8 leading-8 text-[#6D6257]">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>

              </FadeIn>

            );

          })}

        </div>

      </div>

    </section>
  );
}