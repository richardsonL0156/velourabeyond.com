"use client";

import { useState } from "react";
import Link from "next/link";

import { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductInfo({
  product,
}: Props) {
  const [quantity, setQuantity] = useState(1);

  const subtotal = product.price * quantity;

  return (
    <div className="space-y-10">

      {/* Collection */}

      <span className="inline-flex rounded-full bg-[#C5A572]/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-[#C5A572]">
        {product.collection}
      </span>

      {/* Title */}

      <div>

        <h1 className="text-6xl font-light leading-tight text-[#1F1F1F]">
          {product.name}
        </h1>

        <p className="mt-6 text-xl leading-9 text-gray-600">
          {product.description}
        </p>

      </div>

      {/* Price */}

      <div className="border-y border-[#E8E0D5] py-8">

        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          Price Per Bar
        </p>

        <p className="mt-3 text-5xl font-light text-[#C5A572]">
          ₱{product.price}
        </p>

      </div>

      {/* Details */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Fragrance
          </p>

          <p className="mt-2 text-lg text-[#1F1F1F]">
            {product.fragrance}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Weight
          </p>

          <p className="mt-2 text-lg text-[#1F1F1F]">
            {product.weight}
          </p>

        </div>

      </div>

      {/* Quantity */}

      <div>

        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
          Quantity
        </p>

        <div className="mt-5 flex items-center gap-5">

          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full border border-[#C5A572]
              text-2xl text-[#C5A572]
              transition hover:bg-[#C5A572] hover:text-white
            "
          >
            −
          </button>

          <span className="min-w-[60px] text-center text-3xl font-light">
            {quantity}
          </span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="
              flex h-12 w-12 items-center justify-center
              rounded-full border border-[#C5A572]
              text-2xl text-[#C5A572]
              transition hover:bg-[#C5A572] hover:text-white
            "
          >
            +
          </button>

        </div>

      </div>

      {/* Order Summary */}

      <div className="rounded-[28px] border border-[#E8E0D5] bg-[#FAF8F5] p-8">

        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
          Order Summary
        </p>

        <div className="mt-6 flex justify-between text-lg">
          <span>Price per Bar</span>
          <span>₱{product.price}</span>
        </div>

        <div className="mt-3 flex justify-between text-lg">
          <span>Quantity</span>
          <span>{quantity}</span>
        </div>

        <div className="my-6 h-px bg-[#E8E0D5]" />

        <div className="flex justify-between items-center">

          <span className="text-xl font-medium">
            Total
          </span>

          <span className="text-5xl font-light text-[#C5A572]">
            ₱{subtotal.toLocaleString()}
          </span>

        </div>

        <div className="mt-8 space-y-2 text-sm text-gray-600">

          <p>✓ Handmade to order</p>

          <p>✓ Freshly crafted after confirmation</p>

          <p>✓ Estimated production: 3–5 business days</p>

        </div>

      </div>

      {/* Buttons */}

      <div className="space-y-4">

        <Link
          href={`/order?product=${product.slug}&qty=${quantity}`}
          className="
            block
            rounded-full
            bg-[#C5A572]
            py-5
            text-center
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            text-white
            transition
            hover:bg-[#B18E56]
          "
        >
          Place Order
        </Link>

        <Link
          href={`/bulk-quote?product=${product.slug}`}
          className="
            block
            rounded-full
            border
            border-[#C5A572]
            py-5
            text-center
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            text-[#C5A572]
            transition
            hover:bg-[#C5A572]
            hover:text-white
          "
        >
          Request Bulk Quote
        </Link>

      </div>

    </div>
  );
}