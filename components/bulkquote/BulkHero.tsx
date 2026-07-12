import Hero from "@/components/shared/Hero";

export default function BulkHero() {
  return (
    <Hero
      eyebrow="HOTELS • RESORTS • AIRBNBS • SPA"

      title="Premium Bulk Orders"

      description="Handcrafted luxury soap and premium hotel amenities designed for boutique hotels, luxury resorts, Airbnbs, spas, wellness centers, and private label partners."

      image="/images/bulk/bulk-hero1.png"

      imageAlt="Veloura Bulk Orders"

      primaryText="Request Quote"

      primaryHref="#quote"

      secondaryText="Hotel Collection"

      secondaryHref="/hotels"

      stats={[
        {
          value: "100+",
          label: "MOQ",
        },
        {
          value: "100%",
          label: "Handmade",
        },
        {
          value: "PH",
          label: "Nationwide",
        },
        {
          value: "OEM",
          label: "Private Label",
        },
      ]}
    />
  );
}