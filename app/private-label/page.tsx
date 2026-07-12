import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import PrivateHero from "../../components/privatelabel/PrivateHero";
import PrivateBenefits from "../../components/privatelabel/PrivateBenefits";
import PrivateProcess from "../../components/privatelabel/PrivateProcess";
import PrivateCustomization from "../../components/privatelabel/PrivateCustomization";
import PrivatePackaging from "../../components/privatelabel/PrivatePackaging";
import PrivateMOQ from "../../components/privatelabel/PrivateMOQ";
import PrivateForm from "../../components/privatelabel/PrivateForm";
import PrivateFAQ from "../../components/privatelabel/PrivateFAQ";
import PrivateCTA from "../../components/privatelabel/PrivateCTA";

export default function PrivateLabelPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FDFBF7]">

        <PrivateHero />

        <PrivateBenefits />

        <PrivateProcess />

        <PrivateCustomization />

        <PrivatePackaging />

        <PrivateMOQ />

        <PrivateForm />

        <PrivateFAQ />

        <PrivateCTA />

      </main>

      <Footer />
    </>
  );
}