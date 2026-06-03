import Image from "next/image";
import Link from "next/link";

const decks = [
  {
    title: "Mystic Arcana",
    image: "https://images.unsplash.com/photo-1615373884710-aaae09f83f83?auto=format&fit=crop&w=600&q=80",
    tone: "from-purple-900/30",
  },
  {
    title: "Celestial Night",
    image: "https://images.unsplash.com/photo-1617024426306-6582a7757926?auto=format&fit=crop&w=600&q=80",
    tone: "from-black/40",
  },
  {
    title: "Wildwood",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    tone: "from-green-900/30",
  },
  {
    title: "Solar Path",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=600&q=80",
    tone: "from-amber-900/20",
  },
  {
    title: "Monochrome Oracle",
    image: "https://images.unsplash.com/photo-1528715471570-976553768d98?auto=format&fit=crop&w=600&q=80",
    tone: "from-gray-900/30",
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
                alt={`${deck.title} tarot deck box`}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 20vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${deck.tone} to-transparent opacity-80`} />
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
