import { ProductPhotoFrame } from "@/components/ui/ProductPhotoFrame";
import { IMAGES } from "@/lib/images";

export function HeroProductVisual() {
  return (
    <div className="relative mx-auto h-full w-full max-w-[540px] lg:max-w-none">
      <ProductPhotoFrame
        src={IMAGES.hero}
        alt="Custom printed tarot deck with tuck box, card stack, and spread cards"
        priority
        sizes="(max-width: 1024px) 90vw, 44vw"
        objectPosition="center center"
        overlay="dark"
        className="aspect-[4/5] w-full lg:aspect-auto lg:h-[min(68vh,620px)]"
      />
    </div>
  );
}
