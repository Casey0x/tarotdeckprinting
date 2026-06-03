import { ProductPhotoFrame } from "@/components/ui/ProductPhotoFrame";

const WHY_IMAGE =
  "https://images.unsplash.com/photo-1617024426306-6582a7757926?auto=format&fit=crop&w=1200&q=85";

const features = [
  {
    title: "Premium Quality",
    description:
      "300gsm premium card stock with full colour CMYK printing on both sides — substantial, professional, and built to shuffle.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M12 3 L15 9 L22 10 L17 15 L18 22 L12 19 L6 22 L7 15 L2 10 L9 9 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Expert Support",
    description:
      "From artwork review to free digital proofs, our team guides you at every step until your deck is perfect.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M3 20 C3 16 6 14 9 14 C12 14 13 16 13 16" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M13 16 C14 15 16 14 17 14 C20 14 21 16 21 20" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Creator Focused",
    description:
      "A 50-deck minimum and worldwide shipping make professional printing accessible for independent creators and publishers.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path d="M12 3 L14 9 L20 9 L15.5 13 L17 20 L12 16.5 L7 20 L8.5 13 L4 9 L10 9 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
];

export function WhyCreators() {
  return (
    <section id="why-creators" className="bg-forest-deep py-16 md:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <ProductPhotoFrame
            src={WHY_IMAGE}
            alt="Custom printed tarot tuck box with gold foil detailing"
            sizes="(max-width: 1024px) 100vw, 50vw"
            objectPosition="center 35%"
            className="aspect-[4/5] w-full max-w-lg lg:max-w-none"
          />

          <div>
            <div className="section-eyebrow-lines mb-5 max-w-xs">
              <span className="section-eyebrow shrink-0">Why Creators Choose Us</span>
            </div>

            <h2 className="section-title max-w-md">
              Quality You Can See.
              <br />
              Service You Can Trust.
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:mt-12">
              {features.map((feature) => (
                <div key={feature.title}>
                  <div className="mb-4 text-gold">{feature.icon}</div>
                  <h3 className="font-cinzel text-sm font-semibold uppercase tracking-wide text-gold">
                    {feature.title}
                  </h3>
                  <p className="mt-3 font-lato text-[13px] leading-relaxed text-text-light/65">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
