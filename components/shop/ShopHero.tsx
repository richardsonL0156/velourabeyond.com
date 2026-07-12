import Image from "next/image";

import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function ShopHero() {
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

              <a
                href="/"
                className="transition hover:text-[#C5A572]"
              >
                Home
              </a>

              <span>/</span>

              <span className="text-[#C5A572]">
                Shop
              </span>

            </div>

            <span className="inline-flex rounded-full border border-[#C5A572]/30 bg-white px-6 py-2 text-xs uppercase tracking-[0.35em] text-[#C5A572] shadow-sm">
              Shop Collection
            </span>

            <h1 className="mt-8 text-6xl font-light leading-[0.95] text-[#1F1F1F] md:text-7xl">
              Crafted to
              <br />
              Elevate
              <br />
              <span className="text-[#C5A572]">
                Everyday Luxury
              </span>
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              Discover Veloura's handcrafted collections, thoughtfully
              created with premium ingredients, elegant fragrances,
              and timeless craftsmanship for everyday luxury and
              hospitality.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button size="lg">
                Browse Products
              </Button>

              <Button
                href="/about"
                variant="outline"
                size="lg"
              >
                About Veloura
              </Button>

            </div>

            {/* Trust Badges */}

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">

              <span>✓ Handcrafted</span>

              <span>✓ Philippine Made</span>

              <span>✓ Hospitality Quality</span>

            </div>

          </div>
        </FadeIn>

        {/* RIGHT */}

        <FadeIn>
          <div className="relative">

            <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-[#C5A572]/15 blur-3xl" />

            <div className="absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-[#C5A572]/10 blur-3xl" />

            <Image
              src="/images/hero/hero-products.png"
              alt="Veloura Collection"
              width={900}
              height={900}
              priority
              className="relative z-10 w-full object-contain"
            />

          </div>
        </FadeIn>

      </div>
    </Section>
  );
}