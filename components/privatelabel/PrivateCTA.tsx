import Link from "next/link";

export default function PrivateCTA() {
  return (
    <section className="bg-[#1F1F1F] py-24 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
          Ready to Build Your Brand?
        </p>

        <h2 className="mt-6 text-5xl font-light">
          Launch Your Private Label
          <br />
          Soap Collection
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Whether you're starting a boutique soap company, creating a hotel
          amenities collection, or expanding your retail product line,
          Veloura Soaps can help bring your vision to life.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="#quote"
            className="rounded-full bg-[#C5A572] px-10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:bg-[#B18E56]"
          >
            Start Your Brand
          </Link>

          <Link
            href="/bulk-quote"
            className="rounded-full border border-[#C5A572] px-10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-[#C5A572] transition hover:bg-[#C5A572] hover:text-white"
          >
            Bulk Orders
          </Link>

        </div>

      </div>
    </section>
  );
}