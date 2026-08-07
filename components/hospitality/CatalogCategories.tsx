import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Bath & Body Care",
    image: "/images/hospitality/categories/bath-body.png",
    description:
      "Premium guest amenities designed to create a memorable bathing experience.",
    products: [
      "Hand Wash",
      "Body Wash",
      "Shampoo",
      "Conditioner",
      "Bar Soap",
    ],
  },
  {
    title: "Room & Linen Care",
    image: "/images/hospitality/categories/room-linen.png",
    description:
      "Luxury fragrances that keep every guest room fresh and inviting.",
    products: [
      "Room Spray",
      "Linen Mist",
      "Fabric Refresher",
      "Bathroom Spray",
    ],
  },
  {
    title: "Home & Cleaning Essentials",
    image: "/images/hospitality/categories/cleaning.png",
    description:
      "Professional cleaning products for hospitality businesses.",
    products: [
      "Hand Soap Refill",
      "Dishwashing Liquid",
      "Bathroom Cleaner",
      "Floor Cleaner",
    ],
  },
  {
    title: "Gift & Packaging",
    image: "/images/hospitality/categories/gift-packaging.png",
    description:
      "Elegant presentation for hotels, resorts and corporate gifting.",
    products: [
      "Luxury Gift Boxes",
      "Kraft Boxes",
      "Hotel Gift Sets",
      "Custom Branding",
    ],
  },
];

export default function CatalogCategories() {
  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            COMPLETE HOSPITALITY SOLUTIONS
          </p>

          <h2 className="mt-5 text-5xl font-light text-[#1F1F1F]">
            Everything Your Property Needs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            From guest amenities to premium cleaning solutions,
            Veloura supplies beautifully crafted hospitality products
            designed to elevate every guest experience.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">

          {categories.map((category) => (

            <div
              key={category.title}
              className="group overflow-hidden rounded-[32px] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F5EF]">

                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-contain p-6 transition duration-500 group-hover:scale-105"
               />

             </div>

              <div className="p-8">

                <h3 className="text-3xl font-light text-[#1F1F1F]">
                  {category.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {category.description}
                </p>

                <ul className="mt-8 space-y-3">

                  {category.products.map((product) => (

                    <li
                      key={product}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-[#C5A572]">✓</span>

                      {product}
                    </li>

                  ))}

                </ul>

                <Link
                  href="/bulk-quote"
                  className="mt-8 inline-flex text-[#C5A572] font-medium hover:gap-3 transition-all"
                >
                  Request Quote →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}