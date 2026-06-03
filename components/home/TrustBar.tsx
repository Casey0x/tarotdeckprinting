const items = [
  {
    label: "50 Deck Minimum",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <rect x="5" y="3" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <rect x="9" y="6" width="10" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none" />
      </svg>
    ),
  },
  {
    label: "300gsm Premium Card Stock",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M4 8 L12 4 L20 8 V16 L12 20 L4 16 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M12 4 V20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <path d="M4 8 L20 8" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    label: "Free Digital Proofs",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M8 12 L11 15 L16 9" stroke="currentColor" strokeWidth="1.3" fill="none" />
      </svg>
    ),
  },
  {
    label: "Worldwide Shipping",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M3 12 H21" stroke="currentColor" strokeWidth="1" />
        <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
  {
    label: "Custom Printed Tuck Boxes",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path d="M4 8 L12 4 L20 8 V17 L12 21 L4 17 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <path d="M12 4 V21" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
];

export function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="border-y border-gold/25 bg-[rgba(0,0,0,0.45)] backdrop-blur-sm"
    >
      <div className="site-container">
        <ul className="grid grid-cols-1 divide-y divide-gold/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:divide-gold/10">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-3 px-3 py-4 text-gold sm:py-5 lg:flex-col lg:gap-2 lg:px-4 lg:py-6 xl:flex-row xl:gap-3"
            >
              <span className="shrink-0 text-gold">{item.icon}</span>
              <span className="text-center font-cinzel text-[10px] font-semibold uppercase leading-snug tracking-[0.1em] xl:text-[11px]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
