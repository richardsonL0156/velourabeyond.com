import Image from "next/image";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const categories = [
  {
    title: "Bath & Body Care",
    items: [
      "Luxury Hand Soap",
      "Body Wash",
      "Shampoo",
      "Conditioner",
      "Soap Bars",
    ],
  },
  {
    title: "Room & Linen Care",
    items: [
      "Room Spray",
      "Pillow Mist",
      "Linen Mist",
      "Fabric Refresher",
      "Bathroom Spray",
    ],
  },
  {
    title: "Home & Cleaning",
    items: [
      "Hand Soap Refill",
      "Dishwashing Liquid",
      "Bathroom Cleaner",
      "Multi-Purpose Cleaner",
      "Floor Cleaner",
    ],
  },
  {
    title: "Gift & Packaging",
    items: [
      "Luxury Gift Boxes",
      "Hotel Amenities",
      "Corporate Gifts",
      "Custom Packaging",
      "Private Label",
    ],
  },
];

export default function HotelCollection() {
  return (
    <Section background="bg-[#FAF8F5]">
      <SectionHeader
        eyebrow="HOSPITALITY SOLUTIONS"
        title="Complete Hospitality Amenities"
        description="Premium products designed for hotels, resorts, Airbnbs, spas, wellness centers, and corporate hospitality."
      />

      <div className="mt-20 grid gap-8 md:grid-cols-2">

        {categories.map((category) => (

          <FadeIn key={category.title}>

            <div className="overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

              <div className="relative h-64">

                <Image
                  src="/images/hotels/hotel-collection.png"
                  alt={category.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-light text-[#1F1F1F]">
                  {category.title}
                </h3>

                <div className="mt-6 space-y-3">

                  {category.items.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <div className="h-2 w-2 rounded-full bg-[#C5A572]" />

                      <span className="text-gray-600">
                        {item}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </FadeIn>

        ))}

      </div>

      <div className="mt-16 flex justify-center gap-5">

        <Button size="lg">
          Download Catalog
        </Button>

        <Button
          variant="outline"
          size="lg"
        >
          Explore Hospitality
        </Button>

      </div>
    </Section>
  );
}