"use client";

import { useMemo, useState } from "react";

import { PRODUCTS } from "@/data/products";

import ShopHero from "@/components/shop/ShopHero";
import SearchBar from "@/components/shop/SearchBar";
import CategoryFilter from "@/components/shop/CategoryFilter";
import SortDropdown from "@/components/shop/SortDropdown";
import ProductGrid from "@/components/shop/ProductGrid";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filteredProducts = useMemo(() => {
    let products = [...PRODUCTS];

    // Search
    if (search.trim()) {
      const term = search.toLowerCase();

      products = products.filter((product) =>
        product.name.toLowerCase().includes(term)
      );
    }

    // Category
    if (category !== "All") {
      products = products.filter(
        (product) => product.collection === category
      );
    }

    // Sorting
    switch (sort) {
      case "price-low":
        products.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        products.sort((a, b) => b.price - a.price);
        break;

      case "name":
        products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        products.sort((a, b) =>
          Number(b.featured) - Number(a.featured)
        );
    }

    return products;
  }, [search, category, sort]);

  return (
    <>
      <ShopHero />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_auto]">

            <SearchBar
              value={search}
              onChange={setSearch}
            />

            <SortDropdown
              value={sort}
              onChange={setSort}
            />

          </div>

          <div className="mb-14">

            <CategoryFilter
              selected={category}
              onChange={setCategory}
            />

          </div>

          <ProductGrid products={filteredProducts} />

        </div>
      </section>
    </>
  );
}