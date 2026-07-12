import Image from "next/image";

import { PRODUCTS } from "@/data/products";

import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function FeaturedProducts() {
  return (
    <Section background="bg-[#FAF8F5]">
      <SectionHeader
        eyebrow="SIGNATURE COLLECTION"
        title="Crafted to Elevate Everyday Luxury"
        description="Discover our handcrafted artisan soaps, thoughtfully created with premium ingredients, elegant fragrances, and timeless craftsmanship."
      />

      <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {PRODUCTS.map((product) => (
          <FadeIn key={product.name}>
            <article className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              {/* Product Image */}
              <div className="relative h-[420px] overflow-hidden bg-[#F8F5EF]">
                {/* Gold Glow */}
                <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#C5A572]/15 blur-3xl" />

                <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-[#C5A572]/10 blur-3xl" />

                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                  className="object-contain p-10 transition-transform duration-700 group-hover:scale-110"
                />

                {/* Badge */}
                {product.badge && (
                  <div className="absolute left-6 top-6 rounded-full bg-[#C5A572] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="p-8">
                <h3 className="text-3xl font-light text-[#1F1F1F]">
                  {product.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {product.description}
                </p>

                {/* Price + Button */}
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-2xl font-semibold text-[#C5A572]">
                    {product.price}
                  </span>

                  <Button size="sm">
                    Shop Now
                  </Button>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}