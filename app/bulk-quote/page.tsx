import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import BulkHero from "../../components/bulkquote/BulkHero";
import BulkBenefits from "@/components/bulkquote/BulkBenefits";
import BulkForm from "@/components/bulkquote/BulkForm";
import BulkFAQ from "@/components/bulkquote/BulkFAQ";
import BulkCTA from "@/components/bulkquote/BulkCTA";
import HowItWorks from "@/components/bulkquote/HowItWorks";

export default function BulkQuotePage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FDFBF7]">

        <BulkHero />

        <BulkBenefits />

        <HowItWorks />

        <BulkForm />

        <BulkFAQ />

        <BulkCTA />

      </main>

      <Footer />
    </>
  );
}