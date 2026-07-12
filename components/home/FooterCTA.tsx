import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function FooterCTA() {
  return (
    <Section className="bg-[#1F1F1F] text-white">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-4 uppercase tracking-[0.35em] text-[#C5A572]">
          READY TO GET STARTED?
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          Elevate Your Brand
          <br />
          With Veloura Beyond
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-300">
          From handcrafted soaps to luxury hotel amenities and custom private
          label manufacturing, we're ready to bring your vision to life.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Button size="lg">
            Request a Quote
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#1F1F1F]"
          >
            Contact Us
          </Button>

        </div>

      </div>
    </Section>
  );
}