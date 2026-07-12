import Link from "next/link";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from "@/constants/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#161616] text-gray-300">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[#C5A572]/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#C5A572]/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Top */}

        <div className="grid gap-16 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <span className="inline-flex rounded-full border border-[#C5A572]/30 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#C5A572]">
              Luxury Handcrafted
            </span>

            <h2 className="mt-6 text-5xl font-light leading-tight text-white">
              Veloura
              <br />
              <span className="text-[#C5A572]">
                Soaps
              </span>
            </h2>

            <p className="mt-8 max-w-md leading-8 text-gray-400">
              Premium handcrafted soaps, luxury hospitality amenities,
              and private label manufacturing for hotels, resorts,
              Airbnbs, spas, and boutique brands.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="mb-6 text-sm uppercase tracking-[0.25em] text-[#C5A572]">
              Explore
            </h3>

            <ul className="space-y-4">

              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/shop" className="transition hover:text-white">
                  Shop
                </Link>
              </li>

              <li>
                <Link href="/hospitality" className="transition hover:text-white">
                  Hospitality
                </Link>
              </li>

              <li>
                <Link href="/private-label" className="transition hover:text-white">
                  Private Label
                </Link>
              </li>

              <li>
                <Link href="/bulk-quote" className="transition hover:text-white">
                  Bulk Quote
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Business */}

          <div>

            <h3 className="mb-6 text-sm uppercase tracking-[0.25em] text-[#C5A572]">
              Business
            </h3>

            <ul className="space-y-4">

              <li>Hotels & Resorts</li>

              <li>Airbnb Hosts</li>

              <li>Private Label</li>

              <li>Wholesale</li>

              <li>Corporate Gifts</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-sm uppercase tracking-[0.25em] text-[#C5A572]">
              Contact
            </h3>

            <div className="space-y-6">

              <div>

                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Email
                </p>

                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="transition hover:text-white"
                >
                  {COMPANY_EMAIL}
                </a>

              </div>

              <div>

                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Phone
                </p>

                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="transition hover:text-white"
                >
                  {COMPANY_PHONE}
                </a>

              </div>

              <div>

                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                  Location
                </p>

                <p>Metro Manila, Philippines</p>

              </div>

            </div>

          </div>

        </div>

        {/* Other Project */}

<div className="mt-20 rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">

  <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

    <div>

      <p className="text-xs uppercase tracking-[0.35em] text-[#C5A572]">
        YOU MAY ALSO BE INTERESTED IN
      </p>

      <h3 className="mt-4 text-3xl font-light text-white">
        Silkytox
      </h3>

      <p className="mt-4 max-w-2xl leading-8 text-gray-400">
Discover luxurious skincare that leaves your skin feeling soft, smooth,
and beautifully hydrated. Made for everyday radiance, Silkytox™ helps you 
achieve a healthy-looking glow with a lightweight, silky finish.

      </p>

    </div>

    <a
      href="https://www.silkytox.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-full bg-[#C5A572] px-8 py-4 font-medium text-white transition hover:bg-[#B39260] hover:shadow-xl"
    >
      Visit Silkytox ↗
    </a>

  </div>

</div>

{/* Divider */}

<div className="my-16 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p className="text-sm text-gray-500">
            © {year} {COMPANY_NAME}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-8">

            <Link
              href="/privacy"
              className="transition hover:text-[#C5A572]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#C5A572]"
            >
              Terms of Service
            </Link>

            <a
              href="https://www.facebook.com/VelouraSoaps"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#C5A572]"
            >
              Facebook
            </a>

            <a
              href="https://instagram.com/veloura_soap_retail"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#C5A572]"
            >
              Instagram
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}