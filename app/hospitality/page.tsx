import CatalogHero from "@/components/hospitality/CatalogHero";
import CatalogCategories from "@/components/hospitality/CatalogCategories";
import CatalogScents from "@/components/hospitality/CatalogScents";
import CatalogAdvantage from "@/components/hospitality/CatalogAdvantage";
import CatalogIndustries from "@/components/hospitality/CatalogIndustries";
import CatalogCTA from "@/components/hospitality/CatalogCTA";

export default function HospitalityPage() {
  return (
    <>
      <CatalogHero />

      <CatalogCategories />

      <CatalogScents />

      <CatalogAdvantage />

      <CatalogIndustries />

      <CatalogCTA />
    </>
  );
}