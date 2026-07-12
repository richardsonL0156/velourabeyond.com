export default function CatalogAdvantage() {
  const veloura = [
    "Proudly Made in the Philippines",
    "Fast Turnaround Times",
    "Low Minimum Order Quantities",
    "Private Label Available",
    "Flexible Ordering",
    "Consistent Product Quality",
    "Reliable Inventory",
    "Dedicated Customer Support",
  ];

  const imported = [
    "Long Shipping Times",
    "Higher Minimum Orders",
    "Import Delays",
    "Limited Customization",
    "Higher Freight Costs",
    "Longer Lead Times",
    "Stock Availability Issues",
    "Limited Local Support",
  ];

  return (
    <section className="bg-[#FAF8F5] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            WHY CHOOSE VELOURA
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            The Veloura Advantage
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Choosing a local hospitality supplier means faster service,
            greater flexibility, and products crafted specifically for
            Philippine hotels, resorts, Airbnbs, and businesses.
          </p>

        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Veloura */}

          <div className="rounded-[32px] bg-[#071C34] p-10 text-white shadow-xl">

            <h3 className="text-3xl font-light text-[#E6C48F]">
              Veloura Soaps
            </h3>

            <ul className="mt-8 space-y-5">

              {veloura.map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl text-green-400">
                    ✓
                  </span>

                  {item}
                </li>

              ))}

            </ul>

          </div>

          {/* Imported */}

          <div className="rounded-[32px] border border-[#E8DDCB] bg-white p-10 shadow-xl">

            <h3 className="text-3xl font-light text-[#1F1F1F]">
              Imported Alternatives
            </h3>

            <ul className="mt-8 space-y-5">

              {imported.map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-4"
                >
                  <span className="text-2xl text-red-500">
                    ✕
                  </span>

                  {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}