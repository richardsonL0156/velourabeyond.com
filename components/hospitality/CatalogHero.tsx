import Image from "next/image";
import Link from "next/link";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

export default function CatalogHero() {
  return (
    <Section
      background="bg-[#FAF8F5]"
      className="relative overflow-hidden pt-24 pb-24"
    >
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
                Hospitality
              </span>

            </div>

            {/* Eyebrow */}

            <span className="inline-flex rounded-full border border-[#C5A572]/30 bg-white px-6 py-2 text-xs uppercase tracking-[0.35em] text-[#C5A572] shadow-sm">
              Hotel & Hospitality
            </span>

            {/* Heading */}

            <h1 className="mt-8 text-6xl font-light leading-[0.95] text-[#1F1F1F] md:text-7xl">
              Premium
              <br />
              Hospitality
              <br />
              <span className="text-[#C5A572]">
                Solutions
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 text-xl leading-9 text-gray-600">
              Elevate every guest experience with handcrafted soaps,
              premium amenities, and elegant hospitality products
              designed for hotels, resorts, Airbnbs, spas, and
              boutique accommodations.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Button
                href="/bulk-quote"
                size="lg"
              >
                Request Quote
              </Button>

              <Button
                href="/shop"
                variant="outline"
                size="lg"
              >
                Shop Collection
              </Button>

            </div>

            {/* Trust Badges */}

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">

              <span>✓ Philippine Made</span>

              <span>✓ Low Minimum Orders</span>

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
              src="/images/hospitality/catalog-hero.png"
              alt="Veloura Hospitality"
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