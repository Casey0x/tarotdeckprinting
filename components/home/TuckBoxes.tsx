import { ProductPhotoFrame } from "@/components/ui/ProductPhotoFrame";

const TUCK_BOX_IMAGE =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85";

const features = [
  "Full colour printing",
  "Premium finish",
  "Supplied assembled",
  "Designed to fit your deck",
];

export function TuckBoxes() {
  return (
    <section id="tuck-boxes" className="bg-midnight py-16 md:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Image left */}
          <ProductPhotoFrame
            src={TUCK_BOX_IMAGE}
            alt="Custom printed tarot tuck box on dark velvet"
            sizes="(max-width: 1024px) 100vw, 50vw"
            objectPosition="center 40%"
            className="aspect-[5/6] w-full lg:aspect-[4/5]"
          />

          {/* Content right */}
          <div>
            <h2 className="section-title">Custom Printed Tuck Boxes</h2>
            <p className="mt-5 max-w-lg font-lato text-sm leading-relaxed text-text-light/72 md:text-[15px] md:leading-7">
              Every tarot deck includes a custom printed tuck box designed using your artwork.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-center gap-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/45 bg-gold/10 text-gold">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                      <path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </span>
                  <span className="font-lato text-sm text-text-light/80 md:text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
