import Image from "next/image";
import Link from "next/link";

export default function PrivateHero() {
  return (
    <section className="relative overflow-hidden bg-[#FDFBF7]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <div className="inline-flex rounded-full border border-[#E7D7BE] bg-white px-6 py-2 text-xs font-medium uppercase tracking-[0.3em] text-[#C5A572] shadow-sm">
              Private Label • OEM • Custom Branding
            </div>

            <h1 className="mt-8 text-6xl font-light leading-none tracking-tight text-[#1F1F1F] lg:text-7xl">
              Launch
              <br />
              Your Own
              <br />
              Luxury Brand
            </h1>

            <p className="mt-10 max-w-xl text-xl leading-9 text-gray-600">
              Partner with Veloura Soaps to create your own premium soap
              collection. We manufacture handcrafted luxury soaps under
              your brand with custom fragrances, packaging, and
              professional presentation.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="#quote"
                className="rounded-full bg-[#C5A572] px-10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-white transition hover:bg-[#B18E56]"
              >
                Start Your Brand
              </Link>

              <Link
                href="#packaging"
                className="rounded-full border border-[#C5A572] px-10 py-5 text-sm font-medium uppercase tracking-[0.25em] text-[#C5A572] transition hover:bg-[#C5A572] hover:text-white"
              >
                View Packaging
              </Link>

            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">

              <div>
                <p className="text-5xl font-light text-[#C5A572]">
                  100+
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                  MOQ
                </p>
              </div>

              <div>
                <p className="text-5xl font-light text-[#C5A572]">
                  OEM
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Manufacturing
                </p>
              </div>

              <div>
                <p className="text-5xl font-light text-[#C5A572]">
                  100%
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Custom
                </p>
              </div>

              <div>
                <p className="text-5xl font-light text-[#C5A572]">
                  PH
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Nationwide
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="overflow-hidden rounded-[40px] shadow-2xl">

              <Image
                src="/images/private/private-hero.png"
                alt="Private Label Soap Manufacturing"
                width={1200}
                height={1400}
                className="h-full w-full object-cover"
                priority
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}