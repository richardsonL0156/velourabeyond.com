import Image from "next/image";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

export default function Mission() {
  return (
    <Section background="bg-[#FAF8F5]">
      <div className="grid items-center gap-16 lg:grid-cols-2">

        {/* Image */}

        <FadeIn>

          <div className="relative h-[620px] overflow-hidden rounded-[36px] shadow-xl">

            <Image
              src="/images/about/mission.png"
              alt="Veloura Mission"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-cover"
            />

          </div>

        </FadeIn>

        {/* Content */}

        <FadeIn>

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
              OUR MISSION
            </p>

            <h2 className="mt-6 text-5xl font-light text-[#1F1F1F]">
              Helping Businesses
              <br />
              Create Memorable
              <span className="block text-[#C5A572]">
                Guest Experiences
              </span>
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Veloura partners with hotels, resorts, Airbnbs,
              retailers, and businesses to deliver premium soaps,
              hospitality amenities, and private label products
              that reflect the quality of every brand we serve.
            </p>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              We believe thoughtful details—from elegant packaging
              to refined fragrances—create memorable experiences,
              inspire customer loyalty, and elevate every property.
            </p>

          </div>

        </FadeIn>

      </div>
    </Section>
  );
}