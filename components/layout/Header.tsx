"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoldStar } from "@/components/ui/BrandIcons";
import { IMAGES } from "@/lib/images";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#tuck-boxes", label: "Packaging" },
  { href: "#gallery", label: "Gallery" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#quote", label: "FAQ" },
  { href: "#why-creators", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[rgba(10,18,14,0.96)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="site-container flex h-[72px] items-center justify-between gap-3 lg:h-[80px] lg:gap-4">
        <Link
          href="#top"
          className="flex shrink-0 items-center py-1 transition-opacity duration-300 hover:opacity-90"
          onClick={() => setOpen(false)}
        >
          <Image
            src={IMAGES.logo}
            alt="Tarot Deck Printing"
            width={1024}
            height={682}
            priority
            className="h-11 w-auto md:h-12 lg:h-[58px]"
            sizes="(max-width: 768px) 120px, (max-width: 1024px) 130px, 150px"
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-lato text-[11px] font-medium uppercase tracking-nav text-text-light/80 transition hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="#quote" className="btn-outline-nav">
            <GoldStar className="h-2.5 w-2.5 text-gold" />
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded border border-gold/40 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-5 bg-gold transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-gold transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-gold transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[rgba(10,18,14,0.98)] backdrop-blur-md lg:hidden">
          <nav className="site-container flex flex-col gap-1 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-3 font-lato text-sm uppercase tracking-nav text-text-light/85 hover:bg-white/5 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#quote" className="btn-outline-nav mt-3 w-full" onClick={() => setOpen(false)}>
              <GoldStar className="h-2.5 w-2.5 text-gold" />
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
