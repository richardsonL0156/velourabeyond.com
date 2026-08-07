import Image from "next/image";
import { notFound } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { PRODUCTS } from "@/data/products";

type Props = {
  searchParams: Promise<{
    product?: string;
    qty?: string;
  }>;
};

export default async function OrderPage({
  searchParams,
}: Props) {
  const params = await searchParams;

  const slug = params.product;
  const qty = Number(params.qty ?? 1);

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const total = product.price * qty;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAF8F5] pt-32 pb-24">

        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}

          <div className="mb-16 text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
              Handmade Luxury
            </p>

            <h1 className="mt-4 text-5xl font-light text-[#1F1F1F]">
              Complete Your Order
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Every Veloura soap is handcrafted after your order has been
              confirmed. We will personally contact you to arrange payment
              and begin production.
            </p>

          </div>

          <div className="grid gap-12 lg:grid-cols-[1.3fr_420px]">

            {/* ================= LEFT ================= */}

            <div className="rounded-[32px] bg-white p-10 shadow-xl">

              <h2 className="mb-8 text-3xl font-light text-[#1F1F1F]">
                Customer Information
              </h2>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#C5A572]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#C5A572]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#C5A572]"
                />

                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#C5A572]"
                />

                <div className="grid gap-4 md:grid-cols-2">

                  <input
                    type="text"
                    placeholder="City"
                    className="rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#C5A572]"
                  />

                  <input
                    type="text"
                    placeholder="Province"
                    className="rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#C5A572]"
                  />

                </div>

                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#C5A572]"
                />

                <textarea
                  rows={5}
                  placeholder="Special instructions..."
                  className="w-full rounded-2xl border border-gray-200 px-6 py-4 outline-none focus:border-[#C5A572]"
                />

              </form>

            </div>

            {/* ================= RIGHT ================= */}

            <div className="rounded-[32px] bg-white p-10 shadow-xl">

              <h2 className="mb-8 text-3xl font-light text-[#1F1F1F]">
                Order Summary
              </h2>

              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="mx-auto mb-8 rounded-3xl"
              />

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span>Product</span>
                  <span className="font-semibold">{product.name}</span>
                </div>

                <div className="flex justify-between">
                  <span>Collection</span>
                  <span>{product.collection}</span>
                </div>

                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span>{qty}</span>
                </div>

                <div className="flex justify-between">
                  <span>Price</span>
                  <span>₱{product.price}</span>
                </div>

              </div>

              <div className="my-8 border-t border-gray-200" />

              <div className="flex items-center justify-between">

                <span className="text-3xl font-light">
                  Total
                </span>

                <span className="text-4xl font-light text-[#C5A572]">
                  ₱{total}
                </span>

              </div>

              {/* Production */}

              <div className="mt-10 rounded-3xl bg-[#F8F5EF] p-6">

                <h3 className="mb-4 text-lg font-medium">
                  Production Information
                </h3>

                <ul className="space-y-3 text-sm leading-7 text-gray-600">

                  <li>✓ Handmade after order confirmation</li>

                  <li>✓ Estimated production: 3–5 business days</li>

                  <li>✓ Shipping calculated after confirmation</li>

                  <li>✓ Payment instructions sent by email</li>

                  <li>✓ We will contact you within 24 hours</li>

                </ul>

              </div>

              {/* Payment */}

              <div className="mt-8 rounded-3xl border border-[#E8DED0] p-6">

                <h3 className="mb-3 font-medium">
                  Payment Methods
                </h3>

                <ul className="space-y-2 text-sm text-gray-600">

                  <li>✓ GCash</li>

                  <li>✓ Maya</li>

                  <li>✓ Bank Transfer</li>

                </ul>

              </div>

              <button
                className="
                  mt-10
                  w-full
                  rounded-full
                  bg-[#C5A572]
                  py-5
                  text-sm
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white
                  transition
                  hover:bg-[#B18E56]
                "
              >
                Submit Order
              </button>

              <p className="mt-6 text-center text-sm leading-7 text-gray-500">
                No payment is required today. After receiving your order,
                we'll contact you to confirm the details, arrange payment,
                and begin crafting your handmade soaps.
              </p>

            </div>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}