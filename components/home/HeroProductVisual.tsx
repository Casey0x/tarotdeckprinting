import Image from "next/image";
import { ProductPhotoFrame } from "@/components/ui/ProductPhotoFrame";

/** Placeholder hero product scene — swap src paths when final photography is supplied. */
const HERO_BOX_IMAGE =
  "https://images.unsplash.com/photo-1617024426306-6582a7757926?auto=format&fit=crop&w=900&q=85";
const HERO_CARDS_IMAGE =
  "https://images.unsplash.com/photo-1615373884710-aaae09f83f83?auto=format&fit=crop&w=1200&q=85";

export function HeroProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none lg:h-full">
      <ProductPhotoFrame
        src={HERO_CARDS_IMAGE}
        alt="Premium custom tarot deck with tuck box and spread cards on velvet"
        priority
        sizes="(max-width: 1024px) 90vw, 44vw"
        objectPosition="center 55%"
        className="aspect-[4/5] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
      >
        {/* Upright tuck box overlay */}
        <div className="absolute left-[8%] top-[6%] z-10 h-[58%] w-[38%] overflow-hidden rounded-sm border border-gold/25 shadow-[0_20px_50px_rgba(0,0,0,0.65)] sm:left-[10%] sm:top-[8%]">
          <Image
            src={HERO_BOX_IMAGE}
            alt=""
            fill
            className="object-cover object-center"
            sizes="200px"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
          <div className="absolute inset-x-0 bottom-0 bg-black/40 px-2 py-2 text-center">
            <span className="font-cinzel text-[9px] uppercase tracking-[0.2em] text-gold/90 sm:text-[10px]">
              Lumina Tarot
            </span>
          </div>
        </div>

        {/* Card stack accent */}
        <div className="absolute bottom-[14%] right-[8%] z-10 h-[22%] w-[28%] rotate-6 overflow-hidden rounded-sm border border-gold/20 shadow-[0_12px_32px_rgba(0,0,0,0.55)] sm:right-[12%]">
          <Image
            src={HERO_CARDS_IMAGE}
            alt=""
            fill
            className="object-cover"
            sizes="160px"
            aria-hidden="true"
          />
        </div>

        {/* Warm candle glow */}
        <div className="absolute right-[18%] top-[12%] h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_70%)] blur-md" />
      </ProductPhotoFrame>
    </div>
  );
}
