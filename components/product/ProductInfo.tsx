import Link from "next/link";

import { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductInfo({
  product,
}: Props) {
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
          Starting at
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

      {/* Buttons */}

      <div className="space-y-4">

        <Link
          href="/checkout"
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
          Buy Now
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