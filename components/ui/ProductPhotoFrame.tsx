import Image from "next/image";
import { type ReactNode } from "react";

type ProductPhotoFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  overlay?: "velvet" | "dark" | "none";
  className?: string;
  children?: ReactNode;
};

export function ProductPhotoFrame({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  objectPosition = "center",
  overlay = "velvet",
  className = "",
  children,
}: ProductPhotoFrameProps) {
  return (
    <div
      className={`product-photo-frame ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(106,158,114,0.12),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(0,0,0,0.5),transparent_50%),linear-gradient(145deg,#0B2516_0%,#060e08_100%)]" />

      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover saturate-[0.92]"
        style={{ objectPosition }}
        sizes={sizes}
      />

      {overlay === "velvet" && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(11,37,22,0.55),transparent_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/45 via-transparent to-black/15" />
        </>
      )}
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/25" />
      )}

      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-gold/15" />
      {children}
    </div>
  );
}
