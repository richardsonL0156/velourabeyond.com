import Section from "@/components/ui/Section";

export default function LuxuryQuote() {
  return (
    <Section background="bg-white">
      <div className="mx-auto max-w-4xl text-center">

        <div className="mx-auto mb-8 h-[2px] w-24 bg-[#C5A572]" />

        <h2 className="text-4xl md:text-5xl font-light leading-tight text-[#1F1F1F] italic">
          "Luxury isn't about excess.
          <br />
          It's about the feeling you create
          every single day."
        </h2>

        <p className="mt-10 text-lg tracking-[0.3em] uppercase text-[#C5A572]">
          — Veloura Beyond —
        </p>

      </div>
    </Section>
  );
}