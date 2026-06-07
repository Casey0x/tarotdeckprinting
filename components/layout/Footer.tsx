import Link from "next/link";
import { HashLink } from "@/components/ui/HashLink";

const legalLinks = [
  { href: "/shipping", label: "Shipping Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep py-10 md:py-12">
      <div className="site-container grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-cinzel text-sm font-semibold tracking-wide text-[#C9A84C]">Tarot Deck Printing</p>
          <p className="mt-3 max-w-sm font-lato text-sm leading-relaxed text-text-light/55">
            Premium custom tarot deck printing on 300gsm card stock with custom printed tuck boxes.
          </p>
          <p className="mt-5 font-lato text-xs text-text-light/45">
            © {new Date().getFullYear()} TarotDeckPrinting.com. Crafted with magic and precision.
          </p>
        </div>

        <div>
          <p className="font-cinzel text-[11px] font-semibold uppercase tracking-eyebrow text-[#C9A84C]">Explore</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <HashLink href="#quote" className="font-lato text-sm text-text-light/55 transition hover:text-gold">
                Get a Quote
              </HashLink>
            </li>
            <li>
              <HashLink href="#gallery" className="font-lato text-sm text-text-light/55 transition hover:text-gold">
                Gallery
              </HashLink>
            </li>
            <li>
              <HashLink href="#how-it-works" className="font-lato text-sm text-text-light/55 transition hover:text-gold">
                How It Works
              </HashLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-cinzel text-[11px] font-semibold uppercase tracking-eyebrow text-[#C9A84C]">Legal</p>
          <ul className="mt-4 space-y-2.5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-lato text-sm text-text-light/55 transition hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
