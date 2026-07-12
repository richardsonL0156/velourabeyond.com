import { notFound } from "next/navigation";

import { PRODUCTS } from "@/data/products";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductBenefits from "@/components/product/ProductBenefits";
import ProductIngredients from "@/components/product/ProductIngredients";
import RelatedProducts from "@/components/product/RelatedProducts";
import HotelCTA from "@/components/product/HotelCTA";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({
  params,
}: Props) {
  const product = PRODUCTS.find(
    (item) => item.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[#FAF8F5]">

      {/* Product */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-20 lg:grid-cols-2">

          <ProductGallery
            name={product.name}
            gallery={product.gallery}
          />

          <ProductInfo
            product={product}
          />

        </div>

        <ProductBenefits
          benefits={product.benefits}
        />

        <ProductIngredients
          ingredients={product.ingredients}
        />

        <RelatedProducts
          currentProduct={product}
        />

      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <HotelCTA />

      </section>

    </main>
  );
}