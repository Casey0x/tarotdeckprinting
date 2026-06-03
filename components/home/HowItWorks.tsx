const steps = [
  {
    num: 1,
    title: "Quote",
    description: "Tell us about your deck and receive a personalised quote within one business day.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M8 8 H16 M8 12 H16 M8 16 H12" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: 2,
    title: "Artwork",
    description: "Submit your print-ready PDF, AI, or PSD files at 300dpi in CMYK with 3mm bleed.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M12 16 V8 M9 11 L12 8 L15 11" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M5 18 H19" stroke="currentColor" strokeWidth="1.2" />
        <rect x="5" y="4" width="14" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    num: 3,
    title: "Proof",
    description: "We review your files and send free digital proofs for your approval before printing.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M3 12 C3 7 7 3 12 3 C17 3 21 7 21 12 C21 17 17 21 12 21 C7 21 3 17 3 12 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    num: 4,
    title: "Print",
    description: "Your decks are printed on 300gsm premium stock, cut, and assembled in their tuck boxes.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect x="4" y="8" width="16" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M8 8 V5 H16 V8" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="12" cy="13" r="2" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    num: 5,
    title: "Delivered",
    description: "Your finished decks ship worldwide with tracked delivery straight to your door.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect x="2" y="8" width="13" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M15 11 H18 L21 14 V17 H15" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx="7" cy="18" r="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="18" cy="18" r="1.5" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-16 md:py-20 lg:py-24">
      <div className="site-container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-eyebrow-lines mb-5">
            <span className="section-eyebrow">From Artwork To Your Door</span>
          </div>
          <h2 className="section-title-dark">Our Simple 5 Step Process</h2>
        </div>

        <div className="relative mt-14 hidden lg:block">
          <div className="absolute left-[10%] right-[10%] top-[34px] h-px bg-gold/45" />
          <ol className="grid grid-cols-5 gap-4">
            {steps.map((step) => (
              <li key={step.num} className="relative text-center">
                <div className="mx-auto mb-4 flex h-[68px] w-[68px] items-center justify-center rounded-full border border-gold/40 bg-cream text-gold shadow-sm">
                  {step.icon}
                </div>
                <div className="mx-auto mb-3 flex h-7 w-7 items-center justify-center rounded-full bg-gold font-cinzel text-xs font-bold text-forest-deep">
                  {step.num}
                </div>
                <h3 className="font-cinzel text-xs font-semibold uppercase tracking-wide text-forest-deep">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[180px] font-lato text-[12px] leading-relaxed text-forest-deep/65">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-10 space-y-6 lg:hidden">
          {steps.map((step) => (
            <li
              key={step.num}
              className="flex gap-4 rounded-sm border border-forest-deep/10 bg-white/40 p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold font-cinzel text-sm font-bold text-forest-deep">
                {step.num}
              </div>
              <div>
                <div className="mb-2 flex items-center gap-2 text-gold">{step.icon}</div>
                <h3 className="font-cinzel text-sm font-semibold uppercase tracking-wide text-forest-deep">
                  {step.title}
                </h3>
                <p className="mt-2 font-lato text-sm leading-relaxed text-forest-deep/65">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
