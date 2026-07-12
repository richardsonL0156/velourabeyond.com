"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your minimum order quantity?",
    answer:
      "Our private label production starts at 100 bars, making it easy for new brands to launch while still supporting larger commercial orders.",
  },
  {
    question: "Can I use my own logo and branding?",
    answer:
      "Yes. Your products can feature your own logo, packaging, labels, colors, and overall brand identity.",
  },
  {
    question: "Can you help with packaging design?",
    answer:
      "Absolutely. We can assist with packaging concepts, label layouts, and premium presentation ideas that reflect your brand.",
  },
  {
    question: "Can I create my own fragrance?",
    answer:
      "Yes. You may choose from our existing fragrance collection or work with us to develop a custom scent for your brand.",
  },
  {
    question: "How long does production take?",
    answer:
      "Production timelines vary depending on quantity and customization. Most projects are completed within 3–6 weeks after artwork approval.",
  },
  {
    question: "Do you manufacture hotel amenities?",
    answer:
      "Yes. We produce guest soaps and other premium amenities for hotels, resorts, Airbnbs, and spas.",
  },
];

export default function PrivateFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            Everything You Need to Know
          </h2>

        </div>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-[#ECE5D8] bg-[#FCFAF7]"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between px-8 py-6 text-left"
              >
                <span className="text-lg font-medium text-[#1F1F1F]">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-8 pb-8 leading-8 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}