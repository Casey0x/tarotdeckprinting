import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden bg-midnight lg:min-h-[88vh]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1615373884710-aaae09f83f83?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-black/20" />
      </div>

      <div className="site-container relative z-10 flex min-h-[92vh] items-center pb-16 pt-28 lg:min-h-[88vh] lg:pt-32">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="section-eyebrow mb-5 md:mb-6">Premium Tarot Deck Printing</p>

          <h1 className="font-cinzel-deco text-[2.35rem] font-normal leading-[1.08] text-text-light sm:text-5xl lg:text-[3.4rem] xl:text-[3.75rem]">
            Bring Your <span className="text-gold">Tarot Deck</span>
            <br />
            To Life.
          </h1>

          <p className="mt-5 max-w-lg font-lato text-sm leading-relaxed text-text-light/75 md:mt-6 md:text-[15px] md:leading-7">
            Premium custom tarot deck printing on 300gsm card stock, with custom printed tuck
            boxes included — crafted to honour your vision from first proof to final delivery.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
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
