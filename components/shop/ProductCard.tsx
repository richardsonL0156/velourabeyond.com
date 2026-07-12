import Image from "next/image";
import Link from "next/link";

import { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[32px]
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Product Image */}

      <Link href={`/shop/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden bg-[#F8F6F2]">

          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Collection Badge */}

          <div
            className="
              absolute
              left-5
              top-5
              rounded-full
              bg-white/95
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#C5A572]
              shadow-lg
            "
          >
            {product.collection}
          </div>

        </div>
      </Link>

      {/* Card Content */}

      <div className="space-y-6 p-8">

        <div>

          <Link href={`/shop/${product.slug}`}>
            <h3
              className="
                text-3xl
                font-light
                text-[#1F1F1F]
                transition-colors
                group-hover:text-[#C5A572]
              "
            >
              {product.name}
            </h3>
          </Link>

          <p className="mt-4 leading-7 text-gray-600">
            {product.shortDescription}
          </p>

        </div>
                {/* Price */}

        <div className="border-t border-gray-100 pt-6">

          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
            Starting at
          </p>

          <p className="mt-2 text-4xl font-light text-[#C5A572]">
            ₱{product.price}
          </p>

        </div>

        {/* Actions */}

        <div className="space-y-3">

          <Link
            href={`/shop/${product.slug}`}
            className="
              block
              w-full
              rounded-full
              bg-[#C5A572]
              py-4
              text-center
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#B18E56]
              hover:shadow-lg
            "
          >
            Buy Now
          </Link>

          <Link
            href={`/bulk-quote?product=${product.slug}`}
            className="
              block
              w-full
              rounded-full
              border
              border-[#C5A572]
              py-4
              text-center
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-[#C5A572]
              transition-all
              duration-300
              hover:bg-[#C5A572]
              hover:text-white
            "
          >
            Request Bulk Quote
          </Link>

        </div>
              </div>

    </div>
  );
}