"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  name: string;
  gallery: string[];
};

export default function ProductGallery({
  name,
  gallery,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(gallery[0]);

  return (
    <div>

      <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">

        <Image
          src={selectedImage}
          alt={name}
          width={900}
          height={900}
          className="w-full object-cover transition duration-500 hover:scale-105"
        />

      </div>

      <div className="mt-6 grid grid-cols-4 gap-4">

        {gallery.map((image) => (

          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border-2 transition ${
              selectedImage === image
                ? "border-[#C5A572]"
                : "border-transparent"
            }`}
          >

            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              className="aspect-square object-cover"
            />

          </button>

        ))}

      </div>

    </div>
  );
}