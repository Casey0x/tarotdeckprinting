import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-forest-deep py-8">
      <div className="site-container flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="font-lato text-xs text-text-light/45">
          © {new Date().getFullYear()} TarotDeckPrinting.com. Crafted with magic and precision.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link href="#quote" className="text-xs uppercase tracking-nav text-text-light/50 hover:text-gold">
            Get a Quote
          </Link>
          <Link href="#gallery" className="text-xs uppercase tracking-nav text-text-light/50 hover:text-gold">
            Gallery
          </Link>
          <Link href="#how-it-works" className="text-xs uppercase tracking-nav text-text-light/50 hover:text-gold">
            How It Works
          </Link>
        </div>
      </div>
    </footer>
  );
}
