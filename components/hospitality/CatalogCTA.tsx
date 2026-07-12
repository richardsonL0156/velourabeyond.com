import Link from "next/link";
import Image from "next/image";

export default function CatalogCTA() {
  return (
    <section className="relative overflow-hidden bg-[#071C34] py-28">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/hospitality/catalog-hero.png"
          alt="Luxury Hospitality"
          fill
          className="object-cover"
        />
      </div>

      {/* Gold Glow */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#C5A572]/20 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#C5A572]/15 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
          READY TO GET STARTED?
        </p>

        <h2 className="mt-6 text-5xl font-light leading-tight text-white">
          Elevate Every Stay.
          <br />
          Delight Every Guest.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">
          From boutique hotels and luxury resorts to Airbnbs,
          spas, and corporate hospitality, Veloura provides
          premium amenities, private label manufacturing,
          and flexible wholesale solutions tailored to your business.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <Link
            href="/bulk-quote"
            className="rounded-full bg-[#C5A572] px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#b58f58]"
          >
            Request Hospitality Quote
          </Link>

          <Link
            href="#"
            className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#C5A572] hover:bg-white/10"
          >
            Download Catalog
          </Link>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">

          <div>
            <h3 className="text-3xl font-light text-[#E4C38D]">
              Philippine
            </h3>

            <p className="mt-2 text-white/70">
              Made
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-light text-[#E4C38D]">
              Low
            </h3>

            <p className="mt-2 text-white/70">
              Minimum Orders
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-light text-[#E4C38D]">
              Private
            </h3>

            <p className="mt-2 text-white/70">
              Label Available
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-light text-[#E4C38D]">
              Nationwide
            </h3>

            <p className="mt-2 text-white/70">
              Delivery
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}