import Link from "next/link";
import Image from "next/image";

import { Product, PRODUCTS } from "@/data/products";

type Props = {
  currentProduct: Product;
};

export default function RelatedProducts({
  currentProduct,
}: Props) {
  const related = PRODUCTS.filter(
    (product) =>
      product.slug !== currentProduct.slug &&
      product.collection === currentProduct.collection
  ).slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="mt-32">

      <div className="mb-12">

        <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
          You May Also Like
        </p>

        <h2 className="mt-3 text-4xl font-light text-[#1F1F1F]">
          Explore More
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-3">

        {related.map((product) => (

          <Link
            key={product.slug}
            href={`/shop/${product.slug}`}
            className="
              group
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-lg
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-2xl
            "
          >

            <div className="relative aspect-square bg-[#F8F6F2]">

              <Image
                src={product.image}
                alt={product.name}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

            </div>

            <div className="p-6">

              <p className="text-xs uppercase tracking-[0.2em] text-[#C5A572]">
                {product.collection}
              </p>

              <h3 className="mt-3 text-2xl font-light">
                {product.name}
              </h3>

              <p className="mt-3 text-gray-600">
                ₱{product.price}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}