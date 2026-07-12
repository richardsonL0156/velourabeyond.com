import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import Stats from "@/components/home/Stats";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LuxuryQuote from "@/components/home/LuxuryQuote";
import HotelCollection from "@/components/home/HotelCollection";
import PrivateLabel from "@/components/home/PrivateLabel";
import Testimonials from "@/components/home/Testimonials";
import FooterCTA from "@/components/home/FooterCTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FeaturedCollections />

        <Stats />

        <WhyChooseUs />

        <FeaturedProducts />

        <LuxuryQuote />

        <HotelCollection />

        <PrivateLabel />

        <Testimonials />

        <FooterCTA />
      </main>

      <Footer />
    </>
  );
}