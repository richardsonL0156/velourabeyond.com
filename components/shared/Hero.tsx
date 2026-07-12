import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  eyebrow: string;
  title: string;
  description: string;

  image: string;
  imageAlt: string;

  primaryText: string;
  primaryHref: string;

  secondaryText?: string;
  secondaryHref?: string;

  stats?: {
    value: string;
    label: string;
  }[];
}

export default function Hero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,

  primaryText,
  primaryHref,

  secondaryText,
  secondaryHref,

  stats = [],
}: HeroProps) {
  return (
    <section className="bg-[#FDFBF7] py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}

        <div className="flex flex-col justify-center">

          <span className="inline-flex w-fit rounded-full border border-[#C5A572]/30 bg-white px-6 py-2 text-xs uppercase tracking-[0.35em] text-[#C5A572] shadow-sm">
            {eyebrow}
          </span>

          <h1 className="mt-8 text-6xl font-light leading-none text-[#1F1F1F]">
            {title}
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-600">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              href={primaryHref}
              className="rounded-full bg-[#C5A572] px-9 py-4 font-medium text-white transition hover:bg-[#b8945f]"
            >
              {primaryText}
            </Link>

            {secondaryText && secondaryHref && (
              <Link
                href={secondaryHref}
                className="rounded-full border border-[#C5A572] px-9 py-4 font-medium text-[#C5A572] transition hover:bg-[#C5A572] hover:text-white"
              >
                {secondaryText}
              </Link>
            )}

          </div>

          {stats.length > 0 && (
            <div className="mt-16 grid grid-cols-4 gap-8">

              {stats.map((item) => (

                <div key={item.label}>
                  <h3 className="text-5xl font-light text-[#C5A572]">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>
          )}

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="overflow-hidden rounded-[40px] shadow-2xl">

            <Image
              src={image}
              alt={imageAlt}
              width={1400}
              height={1400}
              className="h-full w-full object-cover"
              priority
            />

          </div>

        </div>

      </div>
    </section>
  );
}