import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

export default function AboutHero() {
  return (
    <Section background="bg-[#FAF8F5]">
      <div className="grid items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <FadeIn>
          <div className="max-w-xl">

            {/* Breadcrumb */}

            <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">

              <Link
                href="/"
                className="transition hover:text-[#C5A572]"
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-[#C5A572]">
                About
              </span>

            </div>

            {/* Eyebrow */}

            <span className="inline-flex rounded-full border border-[#C5A572]/30 bg-white px-6 py-2 text-xs uppercase tracking-[0.35em] text-[#C5A572] shadow-sm">
              About Veloura
            </span>

            {/* Heading */}

            <h1 className="mt-8 text-6xl font-light leading-[0.95] text-[#1F1F1F] md:text-7xl">
              Crafted with
              <br />
              <span className="text-[#C5A572]">
                Purpose.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 text-xl leading-9 text-gray-600">
              Veloura creates premium soaps, hospitality amenities,
              and private label products designed to leave lasting
              impressions. Every product reflects our commitment
              to exceptional quality, thoughtful craftsmanship,
              and timeless elegance.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                href="/shop"
                size="lg"
              >
                Shop Collection
              </Button>

              <Button
                href="/contact"
                variant="outline"
                size="lg"
              >
                Contact Us
              </Button>

            </div>

            {/* Trust Badges */}

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">

              <span>✓ Philippine Made</span>

              <span>✓ Hospitality Quality</span>

              <span>✓ Private Label Available</span>

            </div>

          </div>
        </FadeIn>

        {/* RIGHT */}

        <FadeIn>

          <div className="relative">

            {/* Gold Glow */}

            <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#C5A572]/15 blur-3xl" />

            <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#C5A572]/10 blur-3xl" />

            <Image
              src="/images/about/about-hero.png"
              alt="About Veloura"
              width={900}
              height={900}
              priority
              className="relative z-10 w-full rounded-[36px] object-cover shadow-2xl"
            />

          </div>

        </FadeIn>

      </div>
    </Section>
  );
}