import Image from "next/image";
import Link from "next/link";
import { PRODUCT_IMAGES } from "@/lib/product-images";

const decks = [
  {
    title: "Mystic Arcana",
    image: PRODUCT_IMAGES.cardsSpread,
    objectPosition: "center 50%",
  },
  {
    title: "Celestial Night",
    image: PRODUCT_IMAGES.cardsStack,
    objectPosition: "center 40%",
  },
  {
    title: "Wildwood",
    image: PRODUCT_IMAGES.cardsAlt,
    objectPosition: "center 45%",
  },
  {
    title: "Solar Path",
    image: PRODUCT_IMAGES.cardsSpread,
    objectPosition: "center 30%",
  },
  {
    title: "Monochrome Oracle",
    image: PRODUCT_IMAGES.cardsStack,
    objectPosition: "center 55%",
  },
];

export function RecentDecks() {
  return (
    <section id="gallery" className="bg-forest-deep py-16 md:py-20 lg:py-24">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div>
            <p className="section-eyebrow mb-3">Portfolio</p>
            <h2 className="section-title">Recent Decks</h2>
            <p className="mt-2 max-w-md font-lato text-sm text-text-light/55">
              Full colour CMYK printing on 300gsm premium card stock with custom printed tuck boxes.
            </p>
          </div>
          <Link
            href="#gallery"
            className="btn-outline self-start border-gold/50 px-6 py-2.5 text-[10px] sm:self-auto"
          >
            View Full Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {decks.map((deck) => (
            <figure
              key={deck.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-white/10 bg-midnight"
            >
              <Image
                src={deck.image}
                alt={`${deck.title} — full colour printed tarot deck`}
                fill
                className="object-cover saturate-[0.92] transition duration-500 group-hover:scale-105"
                style={{ objectPosition: deck.objectPosition }}
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3">
                <span className="font-cinzel text-[10px] uppercase tracking-wide text-text-light/80">
                  {deck.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
