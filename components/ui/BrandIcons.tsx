export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" stroke="#D4AF37" strokeWidth="1" opacity="0.85" />
      <circle cx="20" cy="20" r="12" stroke="#D4AF37" strokeWidth="0.6" opacity="0.45" />
      <path
        d="M20 8 L22 20 L20 17 L18 20 Z"
        fill="#D4AF37"
        opacity="0.9"
      />
      <path
        d="M20 32 L22 20 L20 23 L18 20 Z"
        fill="#6A9E72"
        opacity="0.7"
      />
      <circle cx="20" cy="20" r="3.5" fill="#D4AF37" />
      <path
        d="M8 20 Q20 14 32 20 Q20 26 8 20"
        stroke="#D4AF37"
        strokeWidth="0.6"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

export function CelestialEye({ className = "w-full max-w-md" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="100" cy="70" rx="70" ry="28" stroke="#D4AF37" strokeWidth="0.8" opacity="0.35" />
      <path
        d="M30 70 Q100 20 170 70 Q100 120 30 70 Z"
        stroke="#D4AF37"
        strokeWidth="0.8"
        fill="none"
        opacity="0.25"
      />
      <circle cx="100" cy="68" r="14" stroke="#D4AF37" strokeWidth="0.8" opacity="0.3" />
      <circle cx="100" cy="68" r="6" fill="#D4AF37" opacity="0.2" />
      <path d="M55 70 L145 70" stroke="#D4AF37" strokeWidth="0.5" opacity="0.2" />
      <path d="M100 42 L100 98" stroke="#D4AF37" strokeWidth="0.5" opacity="0.15" />
    </svg>
  );
}

export function GoldStar({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden="true">
      <path
        d="M6 0 L7.2 4.2 L12 4.2 L8.1 6.8 L9.6 11 L6 8.4 L2.4 11 L3.9 6.8 L0 4.2 L4.8 4.2 Z"
        fill="currentColor"
      />
    </svg>
  );
}
