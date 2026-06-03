import Image from "next/image";

const checklist = [
  "Full colour CMYK printing on both sides",
  "Custom printed tuck box included with every order",
  "Sized precisely for your deck dimensions",
  "Ready for retail, gifting, and fulfilment",
];

export function TuckBoxes() {
  return (
    <section id="tuck-boxes" className="bg-midnight py-16 md:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-2 lg:order-1">
            <p className="section-eyebrow mb-4">Custom Printed</p>
            <h2 className="section-title">Tuck Boxes</h2>
            <p className="mt-5 max-w-lg font-lato text-sm leading-relaxed text-text-light/70 md:text-[15px] md:leading-7">
              Every deck is supplied in a fully printed custom tuck box — your artwork
              wrapped around a premium box sized exactly for your cards. No generic packaging,
              no compromises.
            </p>

            <ul className="mt-8 space-y-3.5">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" aria-hidden="true">
                      <path d="M2 6 L5 9 L10 3" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                  </span>
                  <span className="font-lato text-sm text-text-light/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative order-1 aspect-[4/5] w-full max-w-lg overflow-hidden rounded-sm border border-white/10 shadow-2xl lg:order-2 lg:max-w-none">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
              alt="The Wildwood Tarot custom printed tuck box"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/25" />
          </div>
        </div>
      </div>
    </section>
  );
}
