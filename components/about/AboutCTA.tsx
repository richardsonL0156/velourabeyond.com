import Link from "next/link";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

export default function AboutCTA() {
  return (
    <Section background="bg-[#0F172A]">

      <FadeIn>

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            LET'S WORK TOGETHER
          </p>

          <h2 className="mt-6 text-5xl font-light leading-tight text-white">
            Let's Create Something
            <br />
            <span className="text-[#C5A572]">
              Exceptional.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-300">
            Whether you're launching a private label brand,
            supplying a hotel, or looking for premium handcrafted
            products, Veloura is ready to help bring your vision
            to life.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link href="/bulk-quote">
              <Button size="lg">
                Request a Quote
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
              >
                Contact Us
              </Button>
            </Link>

          </div>

        </div>

      </FadeIn>

    </Section>
  );
}