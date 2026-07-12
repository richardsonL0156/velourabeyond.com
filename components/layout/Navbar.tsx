"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { BRAND } from "@/constants/brand";
import { NAVIGATION } from "@/constants/navigation";

import Button from "@/components/ui/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide transition hover:text-[#C5A572]"
        >
          {BRAND.name}
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          {NAVIGATION.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium transition
                  ${
                    active
                      ? "text-[#C5A572]"
                      : "text-[#1F1F1F] hover:text-[#C5A572]"
                  }`}
              >
                {item.label}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#C5A572]" />
                )}

              </Link>
            );
          })}

          <Button href="/bulk-quote">
            Request Quote
          </Button>

        </nav>

        {/* Mobile Menu Button */}

       <button
  onClick={() => setOpen(!open)}
  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8DED0] bg-white shadow-sm transition hover:border-[#C5A572] hover:text-[#C5A572] md:hidden"
  aria-label="Toggle navigation"
>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

      </div>

     {/* Mobile Menu */}

<div
  className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-500 md:hidden ${
    open ? "max-h-[700px]" : "max-h-0"
  }`}
>

  <nav className="px-8 py-8">

    {/* Mobile Brand */}

    <div className="mb-8">

      <p className="text-xs uppercase tracking-[0.35em] text-[#C5A572]">
        Luxury Handcrafted
      </p>

      <h2 className="mt-3 text-3xl font-light text-[#1F1F1F]">
        {BRAND.name}
      </h2>

    </div>

    <div className="mb-8 h-px bg-[#E8DED0]" />

    {/* Navigation */}

    <div className="space-y-6">

      {NAVIGATION.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`block text-xl font-light transition ${
              active
                ? "text-[#C5A572]"
                : "text-[#1F1F1F] hover:text-[#C5A572]"
            }`}
          >
            {item.label}
          </Link>
        );
      })}

    </div>

    {/* Button */}

    <div className="mt-10">

      <Button
        href="/bulk-quote"
        className="w-full"
      >
        Request Quote
      </Button>

    </div>

  </nav>

</div>

    </header>
  );
}