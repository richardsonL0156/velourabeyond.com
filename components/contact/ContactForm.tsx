import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  return (
    <Section background="bg-white">
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

        {/* Left */}

        <FadeIn>

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
              GET IN TOUCH
            </p>

            <h2 className="mt-5 text-5xl font-light text-[#1F1F1F]">
              We'd Love
              <br />
              to Hear From You
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              Whether you're interested in hospitality amenities,
              private label manufacturing, wholesale pricing, or
              simply have a question about our products, we're here
              to help.
            </p>

            <div className="mt-10 space-y-8">

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C5A572]">
                  Email
                </p>

                <p className="mt-2 text-xl text-[#1F1F1F]">
                  therealveloura@gmail.com
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#C5A572]">
                  Phone
                </p>

                <p className="mt-2 text-xl text-[#1F1F1F]">
                  +63 930 482 4079
                </p>
              </div>

            </div>

          </div>

        </FadeIn>

        {/* Right */}

        <FadeIn>

          <form className="rounded-[36px] bg-[#FAF8F5] p-10 shadow-xl">

            <div className="grid gap-6 md:grid-cols-2">

              <input
                type="text"
                placeholder="First Name"
                className="rounded-2xl border border-[#E7DDCF] bg-white px-6 py-4 outline-none focus:border-[#C5A572]"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="rounded-2xl border border-[#E7DDCF] bg-white px-6 py-4 outline-none focus:border-[#C5A572]"
              />

            </div>

            <div className="mt-6">

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-2xl border border-[#E7DDCF] bg-white px-6 py-4 outline-none focus:border-[#C5A572]"
              />

            </div>

            <div className="mt-6">

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-2xl border border-[#E7DDCF] bg-white px-6 py-4 outline-none focus:border-[#C5A572]"
              />

            </div>

            <div className="mt-6">

              <input
                type="text"
                placeholder="Business Name (Optional)"
                className="w-full rounded-2xl border border-[#E7DDCF] bg-white px-6 py-4 outline-none focus:border-[#C5A572]"
              />

            </div>

            <div className="mt-6">

              <select className="w-full rounded-2xl border border-[#E7DDCF] bg-white px-6 py-4 outline-none focus:border-[#C5A572]">

                <option>How can we help?</option>

                <option>General Inquiry</option>

                <option>Hospitality Products</option>

                <option>Private Label</option>

                <option>Bulk Orders</option>

                <option>Wholesale</option>

              </select>

            </div>

            <div className="mt-6">

              <textarea
                rows={6}
                placeholder="Tell us about your project..."
                className="w-full rounded-2xl border border-[#E7DDCF] bg-white px-6 py-4 outline-none focus:border-[#C5A572]"
              />

            </div>

            <div className="mt-8">

              <Button size="lg">
                Send Message
              </Button>

            </div>

          </form>

        </FadeIn>

      </div>
    </Section>
  );
}