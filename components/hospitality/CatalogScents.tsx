import Image from "next/image";

const scents = [
  {
    name: "Pure Luxe",
    image: "/images/products/pure-luxe.png",
    description: "A clean, fragrance-free luxury crafted for a fresh and refined guest experience.",
  },
  {
    name: "Tea Blossom",
    image: "/images/products/tea-blossom.png",
    description: "Elegant botanical freshness inspired by peaceful tea gardens.",
  },
  {
    name: "Citrus Linen",
    image: "/images/products/citrus-linen.png",
    description: "Bright citrus balanced with crisp linen for a clean, refreshing atmosphere.",
  },
  {
    name: "Golden Rose",
    image: "/images/products/golden-rose.png",
    description: "A sophisticated floral collection created for premium hospitality.",
  },
  {
    name: "Velvet Berry",
    image: "/images/products/velvet-berry.png",
    description: "Rich berry notes with a luxurious finish guests will remember.",
  },
  {
    name: "Island Berry",
    image: "/images/products/island-berry.png",
    description: "A vibrant tropical-inspired fragrance that creates a warm welcome.",
  },
];

export default function CatalogScents() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            SIGNATURE COLLECTION
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            Choose Your Signature Guest Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Six carefully crafted fragrances designed to leave a lasting impression
            while complementing hotels, resorts, Airbnbs, spas, and boutique accommodations.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {scents.map((scent) => (

            <div
              key={scent.name}
              className="group overflow-hidden rounded-[30px] border border-[#E8DDCB] bg-[#FCFAF7] transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="relative h-72">

                <Image
                  src={scent.image}
                  alt={scent.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-contain p-8 transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-8 text-center">

                <h3 className="text-2xl font-light text-[#1F1F1F]">
                  {scent.name}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {scent.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}