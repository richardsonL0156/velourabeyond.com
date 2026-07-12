const industries = [
  {
    title: "Hotels",
    icon: "🏨",
    description:
      "Premium guest amenities designed to elevate every stay and create memorable first impressions.",
  },
  {
    title: "Resorts",
    icon: "🌴",
    description:
      "Luxury bath and body collections crafted for exceptional guest experiences.",
  },
  {
    title: "Airbnb & Vacation Rentals",
    icon: "🏡",
    description:
      "Welcome every guest with premium amenities that encourage five-star reviews.",
  },
  {
    title: "Spas & Wellness",
    icon: "🧖",
    description:
      "Elegant products inspired by relaxation, comfort, and self-care.",
  },
  {
    title: "Corporate & Offices",
    icon: "🏢",
    description:
      "Professional washroom products and executive gifting solutions.",
  },
  {
    title: "Corporate Gifts & Events",
    icon: "🎁",
    description:
      "Custom branded gift sets designed for events, holidays, and appreciation gifts.",
  },
];

export default function CatalogIndustries() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-[#C5A572]">
            WHO WE SERVE
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#1F1F1F]">
            Hospitality Solutions for Every Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you operate a boutique hotel, luxury resort,
            Airbnb, spa, office, or corporate business,
            Veloura provides premium amenities tailored to your needs.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry) => (

            <div
              key={industry.title}
              className="rounded-[30px] border border-[#E8DDCB] bg-[#FCFAF7] p-10 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl">
                {industry.icon}
              </div>

              <h3 className="mt-6 text-2xl font-light text-[#1F1F1F]">
                {industry.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {industry.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}