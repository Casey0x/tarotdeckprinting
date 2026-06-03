import Image from "next/image";
import { ProductPhotoFrame } from "@/components/ui/ProductPhotoFrame";
import { PRODUCT_IMAGES } from "@/lib/product-images";

export function HeroProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none lg:h-full">
      <ProductPhotoFrame
        src={PRODUCT_IMAGES.cardsSpread}
        alt="Full colour printed tarot cards with custom tuck box on dark velvet"
        priority
        sizes="(max-width: 1024px) 90vw, 44vw"
        objectPosition="center 55%"
        className="aspect-[4/5] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
      >
        {/* Upright tuck box — card stack placeholder until final box photography */}
        <div className="absolute left-[8%] top-[6%] z-10 h-[58%] w-[38%] overflow-hidden rounded-sm border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.65)] sm:left-[10%] sm:top-[8%]">
          <Image
            src={PRODUCT_IMAGES.cardsStack}
            alt=""
            fill
            className="object-cover object-center saturate-[0.92]"
            sizes="200px"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35" />
          <div className="absolute inset-x-0 bottom-0 bg-black/50 px-2 py-2 text-center">
            <span className="font-cinzel text-[9px] uppercase tracking-[0.2em] text-text-light/80 sm:text-[10px]">
              Custom Tuck Box
            </span>
          </div>
        </div>

        {/* Fanned card stack */}
        <div className="absolute bottom-[14%] right-[8%] z-10 h-[22%] w-[28%] rotate-6 overflow-hidden rounded-sm border border-white/15 shadow-[0_12px_32px_rgba(0,0,0,0.55)] sm:right-[12%]">
          <Image
            src={PRODUCT_IMAGES.cardsSpread}
            alt=""
            fill
            className="object-cover saturate-[0.92]"
            sizes="160px"
            aria-hidden="true"
          />
        </div>

        {/* Warm ambient light — UI mood only, not a product effect */}
        <div className="absolute right-[18%] top-[12%] h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.18),transparent_70%)] blur-md" />
      </ProductPhotoFrame>
    </div>
  );
}
