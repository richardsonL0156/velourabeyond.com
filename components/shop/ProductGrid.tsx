import { PRODUCTS } from "@/data/products";

import ProductCard from "./ProductCard";

type Props = {
  products?: typeof PRODUCTS;
};

export default function ProductGrid({
  products = PRODUCTS,
}: Props) {
  if (products.length === 0) {
    return (
      <div className="rounded-[30px] border border-gray-200 bg-white py-20 text-center shadow-sm">
        <h2 className="text-2xl font-light text-[#1F1F1F]">
          No products found.
        </h2>

        <p className="mt-3 text-gray-500">
          Try another search or category.
        </p>
      </div>
    );
  }

  return (
    <section className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          product={product}
        />
      ))}
    </section>
  );
}