import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

export default function ContactCTA() {
  return (
    <Section background="bg-[#0F172A]">

      <FadeIn>

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            READY TO GET STARTED?
          </p>

          <h2 className="mt-6 text-5xl font-light leading-tight text-white">
            Let's Build Something
            <br />
            <span className="text-[#C5A572]">
              Exceptional Together.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-gray-300">
            From luxury hospitality amenities to custom private label
            collections, Veloura is committed to helping businesses
            create memorable experiences through beautifully crafted
            products.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Button
              href="/bulk-quote"
              size="lg"
            >
              Request a Quote
            </Button>

            <Button
              href="/shop"
              variant="outline"
              size="lg"
            >
              Shop Collection
            </Button>

          </div>

        </div>

      </FadeIn>

    </Section>
  );
}