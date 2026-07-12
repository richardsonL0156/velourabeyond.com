import Image from "next/image";

const packaging = [
  {
    title: "Luxury Gift Box",
    description:
      "Premium black rigid gift boxes with custom branding, perfect for luxury retail and corporate gifting.",
    image: "/images/private/packaging/luxury-box.png",
  },
  {
    title: "Kraft Soap Box",
    description:
      "Eco-friendly kraft packaging with custom labels for boutique brands and artisan collections.",
    image: "/images/private/packaging/kraft-box.png",
  },
  {
    title: "Hotel Amenities",
    description:
      "Guest-sized soaps individually wrapped for hotels, resorts, Airbnbs, and spas.",
    image: "/images/private/packaging/hotel-box.png",
  },
  {
    title: "Retail Collection",
    description:
      "Modern retail-ready packaging designed to stand out on store shelves.",
    image: "/images/private/packaging/retail-box.png",
  },
];

export default function PrivatePackaging() {
  return (
    <section
      id="packaging"
      className="bg-[#FCFAF7] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            Packaging Options
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            Packaging That
            <br />
            Elevates Your Brand
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Beautiful packaging creates memorable first impressions.
            Choose from premium retail, hotel, and luxury presentation
            options tailored to your business.
          </p>

        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">

          {packaging.map((item) => (

            <div
              key={item.title}
              className="overflow-hidden rounded-[36px] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="relative h-80">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-medium text-[#1F1F1F]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}