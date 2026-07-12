import Link from "next/link";

import FadeIn from "@/components/ui/FadeIn";

export default function BulkCTA() {
  return (
    <section className="relative overflow-hidden bg-[#2B1D14] py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#B68A35]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#B68A35]/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">

        <FadeIn>

          <div className="rounded-[40px] border border-white/10 bg-white/5 p-12 text-center backdrop-blur-sm md:p-20">

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D9B76A]">
              Ready to Get Started?
            </p>

            <h2 className="mt-6 text-5xl font-light leading-tight text-white md:text-6xl">
              Let's Create Something
              <span className="block text-[#D9B76A]">
                Extraordinary Together
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/75">
              Whether you're supplying a luxury hotel, boutique Airbnb,
              spa, corporate event, or launching your own private label,
              Veloura Beyond is ready to help you create an unforgettable
              guest experience.
            </p>

            {/* Stats */}

            <div className="mt-14 grid gap-8 sm:grid-cols-3">

              <div>

                <h3 className="text-5xl font-light text-[#D9B76A]">
                  100+
                </h3>

                <p className="mt-3 uppercase tracking-[0.25em] text-white/60">
                  Minimum Order
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-light text-[#D9B76A]">
                  24H
                </h3>

                <p className="mt-3 uppercase tracking-[0.25em] text-white/60">
                  Average Response
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-light text-[#D9B76A]">
                  PH
                </h3>

                <p className="mt-3 uppercase tracking-[0.25em] text-white/60">
                  Nationwide Delivery
                </p>

              </div>

            </div>

            {/* Buttons */}

            <div className="mt-16 flex flex-col justify-center gap-5 sm:flex-row">

              <Link
                href="#quote"
                className="
                  rounded-full
                  bg-[#B68A35]
                  px-10
                  py-5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#9D742A]
                  hover:shadow-2xl
                "
              >
                Request Bulk Quote
              </Link>

              <Link
                href="/shop"
                className="
                  rounded-full
                  border
                  border-white/20
                  px-10
                  py-5
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-[#D9B76A]
                  hover:bg-white/10
                "
              >
                View Collection
              </Link>

            </div>

          </div>

        </FadeIn>

      </div>

    </section>
  );
}