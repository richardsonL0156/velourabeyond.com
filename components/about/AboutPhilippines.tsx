import Image from "next/image";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

const advantages = [
  "Proudly manufactured in the Philippines",
  "Faster turnaround and local delivery",
  "Lower minimum order quantities",
  "Responsive customer support",
  "Flexible custom branding options",
  "Consistent quality and dependable supply",
];

export default function AboutPhilippines() {
  return (
    <Section background="bg-[#FAF8F5]">
      <div className="grid items-center gap-20 lg:grid-cols-[1.4fr_0.6fr]">

        {/* Left Content */}

        <FadeIn>

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
              PROUDLY PHILIPPINE MADE
            </p>

            <h2 className="mt-6 text-5xl font-light leading-tight text-[#1F1F1F]">
              Local Partnership.
              <br />
              <span className="text-[#C5A572]">
                Global Standards.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Veloura proudly partners with Philippine manufacturers to
              deliver premium soaps, hospitality amenities, and private
              label products with exceptional quality and dependable
              service.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              By producing locally, we're able to offer faster lead
              times, flexible order quantities, personalized support,
              and consistent inventory while supporting Philippine
              craftsmanship and businesses.
            </p>

            <div className="mt-12 grid gap-5">

              {advantages.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-5 rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C5A572] text-lg text-white">
                    ✓
                  </div>

                  <span className="text-lg text-[#1F1F1F]">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </FadeIn>

        {/* Right Image */}

        <FadeIn>

          <div className="mx-auto w-full max-w-[430px]">

            <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">

              <Image
                src="/images/about/philippines.png"
                alt="Veloura Philippines"
                width={900}
                height={650}
                className="h-auto w-full"
                priority
              />

            </div>

          </div>

        </FadeIn>

      </div>
    </Section>
  );
}