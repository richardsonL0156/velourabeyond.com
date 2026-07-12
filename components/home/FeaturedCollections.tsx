import Image from "next/image";
import Link from "next/link";

import { COLLECTIONS } from "@/data/collections";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FeaturedCollections() {
  return (
    <Section background="bg-white">
      <SectionHeader
        eyebrow="OUR COLLECTIONS"
        title="Crafted For Every Lifestyle"
        description="Discover handcrafted soaps, luxury hotel amenities, and private label manufacturing designed to elevate every experience."
      />

      <div className="mt-20 grid gap-10 lg:grid-cols-2">
        {COLLECTIONS.map((collection, index) => (
          <FadeIn key={collection.title}>
            <Link
              href={collection.href}
              className="
                group
                relative
                block
                h-[540px]
                overflow-hidden
                rounded-[36px]
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_30px_80px_rgba(0,0,0,.18)]
              "
            >
              {/* Background Image */}

              <Image
                src={collection.image}
                alt={collection.title}
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-[7000ms]
                  group-hover:scale-110
                "
              />

              {/* Gradient */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Luxury Glow */}

              <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#C5A572]/20 blur-3xl" />
              <div className="absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#C5A572]/10 blur-3xl" />

              {/* Content */}

              <div className="absolute inset-x-0 bottom-0 p-10">

                <div
                  className="
                    mb-6
                    h-1
                    w-20
                    rounded-full
                    bg-[#C5A572]
                    transition-all
                    duration-500
                    group-hover:w-32
                  "
                />

                <h3 className="text-4xl font-light tracking-tight text-white">
                  {collection.title}
                </h3>

                <p className="mt-5 max-w-md text-lg leading-8 text-white/85">
                  {collection.description}
                </p>

                <div
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    uppercase
                    tracking-[0.18em]
                    text-[#E4C38D]
                    transition-all
                    duration-300
                    group-hover:gap-5
                  "
                >
                  {collection.button}

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

              </div>

            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}