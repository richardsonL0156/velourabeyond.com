import {
  Droplets,
  Palette,
  Package,
  Shapes,
  Stamp,
} from "lucide-react";

const options = [
  {
    icon: Shapes,
    title: "Soap Shapes",
    items: [
      "Rectangle",
      "Square",
      "Round",
      "Hotel Guest Bar",
      "Custom Mold",
    ],
  },
  {
    icon: Droplets,
    title: "Luxury Fragrances",
    items: [
      "White Tea",
      "French Pear",
      "Lavender",
      "Sandalwood",
      "Citrus",
      "Custom Blend",
    ],
  },
  {
    icon: Palette,
    title: "Colors & Design",
    items: [
      "Natural",
      "Cream White",
      "Marble Swirls",
      "Gold Accents",
      "Custom Colors",
    ],
  },
  {
    icon: Package,
    title: "Packaging",
    items: [
      "Soap Sleeves",
      "Kraft Boxes",
      "Luxury Gift Boxes",
      "Hotel Wrappers",
      "Retail Packaging",
    ],
  },
  {
    icon: Stamp,
    title: "Branding",
    items: [
      "Embossed Logo",
      "Debossed Logo",
      "Foil Stamping",
      "Printed Labels",
      "Custom Artwork",
    ],
  },
];

export default function PrivateCustomization() {
  return (
    <section
      id="customization"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            Customization
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            Make Every Detail
            <br />
            Your Own
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Every private label order is tailored to your brand.
            From fragrances to packaging, every detail reflects your
            unique identity.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {options.map((option) => {
            const Icon = option.icon;

            return (
              <div
                key={option.title}
                className="rounded-3xl border border-[#EEE6D8] bg-[#FCFAF7] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A572]/10">
                  <Icon className="h-8 w-8 text-[#C5A572]" />
                </div>

                <h3 className="mt-8 text-2xl font-medium text-[#1F1F1F]">
                  {option.title}
                </h3>

                <ul className="mt-6 space-y-3">

                  {option.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#C5A572]" />
                      {item}
                    </li>
                  ))}

                </ul>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}