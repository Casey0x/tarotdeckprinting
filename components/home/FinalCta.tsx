import Link from "next/link";
import { CelestialEye } from "@/components/ui/BrandIcons";

export function FinalCta() {
  return (
    <section id="quote" className="relative overflow-hidden bg-forest-deep py-20 md:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.06),transparent_65%)]" />

      <div className="site-container relative z-10 text-center">
        <h2 className="font-cinzel-deco text-[2rem] font-normal leading-tight text-text-light sm:text-4xl lg:text-[2.75rem]">
          Ready To Print Your Deck?
        </h2>
        <p className="mx-auto mt-4 max-w-md font-lato text-sm text-text-light/65 md:text-[15px]">
          Let&apos;s bring your vision to life.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10">
          <Link href="mailto:hello@tarotdeckprinting.com" className="btn-primary min-w-[200px]">
            Get a Quote
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="mailto:hello@tarotdeckprinting.com" className="btn-outline min-w-[200px]">
            <BoxIcon />
            Order Sample Pack
          </Link>
        </div>
      </div>

      <div className="site-container relative z-10 mt-14 flex justify-center opacity-40 md:mt-16">
        <CelestialEye className="max-w-sm md:max-w-md" />
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
