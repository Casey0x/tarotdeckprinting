"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GoldStar } from "@/components/ui/BrandIcons";

/** Matches header bar height — keep in sync with Hero top padding */
export const HEADER_HEIGHT_CLASS = "h-[76px] lg:h-[88px]";

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

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[rgba(10,18,14,0.96)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div
        className={`site-container grid ${HEADER_HEIGHT_CLASS} grid-cols-[1fr_auto] items-center gap-x-3 lg:grid-cols-[auto_1fr_auto] lg:gap-x-10 xl:gap-x-14`}
      >
        {/* Logo — primary anchor, left-aligned with minimal padding */}
        <Link
          href="#top"
          className="col-start-1 row-start-1 flex shrink-0 items-center justify-self-start transition-opacity duration-300 hover:opacity-90 lg:pr-2"
          onClick={() => setOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 280 56"
            role="img"
            aria-label="Tarot Deck Printing"
            className="h-12 w-auto lg:h-[60px]"
          >
            <g transform="translate(30,28) rotate(-20)">
              <rect
                x="-11"
                y="-18"
                width="22"
                height="36"
                rx="3"
                fill="#0a1a0e"
                stroke="#C9A84C"
                strokeWidth="1.8"
              />
            </g>
            <g transform="translate(30,28) rotate(-9)">
              <rect
                x="-11"
                y="-18"
                width="22"
                height="36"
                rx="3"
                fill="#0a1a0e"
                stroke="#C9A84C"
                strokeWidth="1.8"
              />
            </g>
            <g transform="translate(30,26)">
              <rect
                x="-13"
                y="-20"
                width="26"
                height="40"
                rx="3"
                fill="#0a1a0e"
                stroke="#C9A84C"
                strokeWidth="2.2"
              />
              <rect
                x="-9"
                y="-16"
                width="18"
                height="32"
                rx="2"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <g style={{ fontFamily: "Georgia, serif" }}>
                <text x="0" y="-5" textAnchor="middle" fontSize="8" fill="#C9A84C">
                  T
                </text>
                <line x1="-6" y1="-1" x2="6" y2="-1" stroke="#C9A84C" strokeWidth="0.4" opacity="0.5" />
                <text x="0" y="7" textAnchor="middle" fontSize="8" fill="#C9A84C" opacity="0.85">
                  D
                </text>
                <line x1="-6" y1="11" x2="6" y2="11" stroke="#C9A84C" strokeWidth="0.4" opacity="0.5" />
                <text x="0" y="19" textAnchor="middle" fontSize="8" fill="#C9A84C" opacity="0.7">
                  P
                </text>
              </g>
            </g>
            <g style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              <text x="56" y="21" fontSize="14" fontWeight="400" fill="#F2F4F3" letterSpacing="4">
                TAROT DECK
              </text>
              <text x="144" y="41" textAnchor="middle" fontSize="13" fontWeight="700" fill="#C9A84C" letterSpacing="7">
                PRINTING
              </text>
            </g>
            <line x1="56" y1="30" x2="78" y2="30" stroke="#C9A84C" strokeWidth="1" />
            <line x1="210" y1="30" x2="232" y2="30" stroke="#C9A84C" strokeWidth="1" />
          </svg>
        </Link>

        {/* Desktop nav — centred, secondary to logo */}
        <nav
          className="col-start-2 row-start-1 hidden min-w-0 items-center justify-center gap-5 lg:flex xl:gap-7"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap font-lato text-[10px] font-medium uppercase tracking-[0.14em] text-text-light/75 transition-colors hover:text-gold xl:text-[11px]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile menu */}
        <div className="col-start-2 row-start-1 flex items-center justify-end gap-2 lg:col-start-3 lg:gap-3">
          <Link href="#quote" className="btn-outline-nav hidden lg:inline-flex">
            <GoldStar className="h-2.5 w-2.5 text-gold" />
            Get a Quote
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-gold/40 lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`h-0.5 w-5 bg-gold transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-gold transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-gold transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[rgba(10,18,14,0.98)] backdrop-blur-md lg:hidden">
          <nav className="site-container flex flex-col gap-0.5 py-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-1 py-2.5 font-lato text-sm uppercase tracking-nav text-text-light/85 hover:bg-white/5 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#quote" className="btn-outline-nav mt-2 w-full" onClick={() => setOpen(false)}>
              <GoldStar className="h-2.5 w-2.5 text-gold" />
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
