import Link from "next/link";

export default function HotelCTA() {
  return (
    <section className="mt-32 rounded-[40px] bg-[#1F1F1F] px-12 py-20 text-center text-white">

      <p className="uppercase tracking-[0.35em] text-[#C5A572]">
        Hotels • Resorts • Airbnbs • Spas
      </p>

      <h2 className="mt-6 text-5xl font-light">
        Need Bulk Orders?
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
        We manufacture premium handcrafted soaps and hotel amenities
        for hotels, boutique resorts, spas, Airbnbs, and private-label
        partners throughout the Philippines.
      </p>

      <Link
        href="/bulk-quote"
        className="
          mt-10
          inline-block
          rounded-full
          bg-[#C5A572]
          px-10
          py-5
          text-sm
          font-medium
          uppercase
          tracking-[0.25em]
          text-white
          transition
          hover:bg-[#B18E56]
        "
      >
        Request Bulk Quote
      </Link>

    </section>
  );
}