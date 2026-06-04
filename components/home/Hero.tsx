import Link from "next/link";
import { HeroProductVisual } from "@/components/home/HeroProductVisual";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[70vh] max-h-[820px] items-center overflow-hidden bg-[linear-gradient(135deg,#0a1628_0%,#0B2516_45%,#060e08_100%)] pt-[76px] lg:min-h-[72vh] lg:max-h-none lg:pt-[88px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_40%,rgba(212,175,55,0.05),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_85%_50%,rgba(106,158,114,0.06),transparent_55%)]" />

      <div className="site-container relative z-10 w-full py-10 md:py-12 lg:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* LEFT — copy & CTAs */}
          <div className="max-w-xl lg:max-w-none">
            <div className="section-eyebrow-lines mb-5 max-w-sm md:mb-6">
              <span className="section-eyebrow shrink-0 whitespace-nowrap">
                Premium Tarot Deck Printing
              </span>
            </div>

            <h1 className="font-cinzel-deco text-[2.2rem] font-normal leading-[1.06] text-text-light sm:text-[2.65rem] lg:text-[3.15rem] xl:text-[3.45rem]">
              Bring Your <span className="text-gold">Tarot Deck</span>
              <br />
              To Life.
            </h1>

            <p className="mt-5 max-w-md font-lato text-sm leading-[1.85] text-text-light/72 md:mt-6 md:text-[15px]">
              Premium custom tarot deck printing on 300gsm card stock — full colour, both sides,
              professionally finished. Every deck includes a custom printed tuck box, free digital
              proofs, and expert support from artwork to delivery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-9">
              <Link href="#quote" className="btn-primary">
                Get a Quote
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#quote" className="btn-outline">
                <BoxIcon />
                Order Sample Pack
              </Link>
            </div>
          </div>

          {/* RIGHT — product photography */}
          <div className="lg:h-[min(68vh,620px)]">
            <HeroProductVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden="true">
      <rect x="2" y="4" width="12" height="9" rx="0.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M2 7 H14" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}
