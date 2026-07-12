import Link from "next/link";

import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";

export default function PrivacyPage() {
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
              Privacy Policy
            </span>

          </div>

          <span className="inline-flex rounded-full border border-[#C5A572]/30 bg-white px-6 py-2 text-xs uppercase tracking-[0.35em] text-[#C5A572] shadow-sm">
            Legal
          </span>

          <h1 className="mt-8 text-6xl font-light leading-tight text-[#1F1F1F]">
            Privacy Policy
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Effective Date: July 2026
          </p>

          <div className="mt-16 space-y-12 text-gray-700 leading-8">

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Information We Collect
              </h2>

              <p className="mt-4">
                We collect information you voluntarily provide when you
                contact us, request a quotation, place an order, or
                subscribe to updates. This may include your name,
                company name, email address, phone number, shipping
                information, and other details needed to provide our
                products and services.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                How We Use Your Information
              </h2>

              <p className="mt-4">
                Your information is used to respond to inquiries,
                process orders, provide customer support, improve our
                services, and communicate with you regarding products,
                quotations, or business opportunities.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Data Protection
              </h2>

              <p className="mt-4">
                We take reasonable administrative and technical
                measures to protect your personal information against
                unauthorized access, disclosure, alteration, or
                destruction.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Third-Party Services
              </h2>

              <p className="mt-4">
                We may use trusted third-party providers for payment
                processing, website hosting, analytics, and email
                communication. These providers only receive information
                necessary to perform their services.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-light text-[#1F1F1F]">
                Contact Us
              </h2>

              <p className="mt-4">
                If you have any questions regarding this Privacy
                Policy, please contact us at
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