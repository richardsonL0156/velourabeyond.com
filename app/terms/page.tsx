import Link from "next/link";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

export default function TermsPage() {
  return (
    <Section
      background="bg-[#FAF8F5]"
      className="pt-24 pb-24"
    >
      <FadeIn>

        <div className="mx-auto max-w-4xl">

          {/* Breadcrumb */}

          <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">

            <Link
              href="/"
              className="transition hover:text-[#C5A572]"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-[#C5A572]">
              Terms of Service
            </span>

          </div>

          <span className="inline-flex rounded-full border border-[#C5A572]/30 bg-white px-6 py-2 text-xs uppercase tracking-[0.35em] text-[#C5A572] shadow-sm">
            Legal
          </span>

          <h1 className="mt-8 text-6xl font-light leading-tight text-[#1F1F1F]">
            Terms of Service
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Effective Date: July 2026
          </p>

          <div className="mt-16 space-y-12 leading-8 text-gray-700">

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Acceptance of Terms
              </h2>

              <p className="mt-4">
                By accessing or using the Veloura website, you agree to
                these Terms of Service. If you do not agree, please do
                not use this website.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Products & Availability
              </h2>

              <p className="mt-4">
                Product availability, pricing, packaging, and
                specifications may change without prior notice. We make
                every effort to ensure product information is accurate,
                but errors may occasionally occur.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Orders & Quotations
              </h2>

              <p className="mt-4">
                Bulk quotations and private label proposals are provided
                without obligation and may be subject to minimum order
                quantities, production schedules, and final approval.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Intellectual Property
              </h2>

              <p className="mt-4">
                All website content, including logos, branding, product
                photography, graphics, and written materials, is the
                property of Veloura unless otherwise stated and may not
                be copied or reproduced without written permission.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Limitation of Liability
              </h2>

              <p className="mt-4">
                Veloura shall not be liable for indirect, incidental,
                or consequential damages arising from the use of this
                website or the purchase of our products, except where
                required by applicable law.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Contact
              </h2>

              <p className="mt-4">
                Questions regarding these Terms may be directed to:
                <br />
                <strong>therealveloura@gmail.com</strong>
                <br />
                +63 930 482 4079
              </p>

            </section>

          </div>

        </div>

      </FadeIn>
    </Section>
  );
}