import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

export default function OurStory() {
  return (
    <Section background="bg-white">

      <FadeIn>

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            OUR STORY
          </p>

          <h2 className="mt-6 text-5xl font-light text-[#1F1F1F]">
            Luxury Without Compromise
          </h2>

          <p className="mt-10 text-xl leading-10 text-gray-600">
            Veloura was founded with a simple vision:
            luxury should be experienced every day—not only
            in five-star hotels.
          </p>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Every soap, amenity, and private label product is
            thoughtfully developed to combine elegant design,
            premium ingredients, and dependable quality.
            Whether serving hospitality businesses or retail
            customers, our goal remains the same:
            create products people genuinely enjoy using.
          </p>

        </div>

      </FadeIn>

    </Section>
  );
}