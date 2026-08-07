import Image from "next/image";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

export default function Hero() {
  return (
    <Section
      background="bg-[#FAF8F5]"
      className="relative overflow-hidden pt-32 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-28"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">

        {/* ================= LEFT SIDE ================= */}

        <FadeIn>
          <div className="max-w-xl mx-auto lg:mx-0">

            <div className="inline-flex items-center rounded-full border border-[#C5A572]/30 bg-white px-5 py-2 shadow-sm">

              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C5A572] sm:text-xs">
                Luxury Soap • Hotel Amenities
              </span>

            </div>

            <h1 className="mt-8 leading-[0.92]">

              <span className="block text-5xl font-light text-[#1F1F1F] sm:text-6xl md:text-7xl lg:text-[88px]">
                Elevating
              </span>

              <span className="block text-5xl font-light text-[#1F1F1F] sm:text-6xl md:text-7xl lg:text-[88px]">
                Everyday
              </span>

              <span className="block text-5xl font-light text-[#C5A572] sm:text-6xl md:text-7xl lg:text-[88px]">
                Luxury
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600 md:mt-10 md:text-xl md:leading-10">

              Veloura Beyond creates handcrafted soaps,
              premium hotel amenities, and private label
              collections designed to elevate everyday
              experiences through exceptional quality,
              elegant fragrances, and timeless craftsmanship.

            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <Button
                href="/shop"
                size="lg"
                className="rounded-full px-10 py-4 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                Explore Collection
              </Button>

              <Button
                href="/hospitality"
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-4"
              >
                Hotel Catalog
              </Button>

            </div>

            <div className="mt-12 h-px w-32 bg-gradient-to-r from-[#C5A572] to-transparent" />

            {/* ================= STATS ================= */}

            <div className="mt-12 grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left">

              <div>

                <h2 className="text-4xl font-light text-[#C5A572] md:text-5xl">
                  100%
                </h2>

                <div className="my-3 h-px w-10 bg-[#C5A572]/40 mx-auto sm:mx-0" />

                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  Handmade
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-light text-[#C5A572] md:text-5xl">
                  Hotel
                </h2>

                <div className="my-3 h-px w-10 bg-[#C5A572]/40 mx-auto sm:mx-0" />

                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  Ready
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-light text-[#C5A572] md:text-5xl">
                  Premium
                </h2>

                <div className="my-3 h-px w-10 bg-[#C5A572]/40 mx-auto sm:mx-0" />

                <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
                  Ingredients
                </p>

              </div>

            </div>

          </div>
        </FadeIn>

        {/* ================= RIGHT SIDE ================= */}

        <FadeIn>

          <div className="relative">

            <div className="absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#C5A572]/20 blur-[120px]" />

            <div className="absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-[#D6B37A]/15 blur-[120px]" />

            {/* Hero Image */}

            <div className="relative overflow-hidden rounded-3xl md:rounded-[42px] shadow-[0_35px_80px_rgba(0,0,0,.18)]">

              <Image
                src="/images/hero/hero-products.png"
                alt="Veloura Beyond Luxury Soap Collection"
                width={900}
                height={1000}
                priority
                className="h-auto w-full object-cover transition duration-[9000ms] hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />

            </div>

            {/* Trust Card */}

            <div className="mt-6 rounded-3xl border border-[#E9E1D4] bg-white p-6 shadow-xl md:mt-8 md:p-8">

              <div className="mb-4 h-1 w-16 rounded-full bg-[#C5A572]" />

              <p className="text-lg tracking-wide text-[#C5A572]">
                ★★★★★
              </p>

              <h3 className="mt-3 text-2xl font-light leading-tight text-[#1F1F1F] md:text-3xl">
                Trusted by
                <br />
                Luxury Hotels
                <br />
                & Resorts
              </h3>

              <p className="mt-5 leading-8 text-gray-600">
                Premium handcrafted amenities created for hotels,
                resorts, Airbnbs, spas, boutique properties,
                and luxury guest experiences.
              </p>

              <Button
                href="/hospitality"
                variant="outline"
                className="mt-8"
              >
                Learn More →
              </Button>

            </div>

          </div>

        </FadeIn>

      </div>

      {/* Background Glow */}

      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">

        <div className="absolute -left-40 -top-32 h-[420px] w-[420px] rounded-full bg-[#C5A572]/10 blur-[180px]" />

        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#D6B37A]/10 blur-[220px]" />

        <div className="absolute bottom-0 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-[#F5E6C8]/30 blur-[180px]" />

      </div>

    </Section>
  );
}