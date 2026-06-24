import type { Metadata } from "next";
import Link from "next/link";
import { CelestialEye } from "@/components/ui/BrandIcons";

export const metadata: Metadata = {
  title: "Thank You — TarotDeckPrinting.com",
  description: "Your quote request has been received. We'll be in touch within one business day.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-[calc(100vh-76px)] overflow-hidden bg-forest-deep lg:min-h-[calc(100vh-88px)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,37,22,0.95)_0%,rgba(6,14,8,0.98)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.1),transparent_65%)]" />

      <div className="site-container relative z-10 flex min-h-[calc(100vh-76px)] flex-col items-center justify-center py-20 text-center lg:min-h-[calc(100vh-88px)]">
        <div className="quote-form-wrapper mx-auto max-w-lg px-6 py-12 md:px-10 md:py-14">
          <p className="section-eyebrow mb-4">Quote Request Received</p>
          <h1 className="font-cinzel-deco text-[2rem] font-normal leading-tight text-gold sm:text-4xl">
            Thank You
          </h1>
          <p className="mx-auto mt-5 max-w-md font-lato text-sm leading-relaxed text-text-light/75 md:text-[15px]">
            We&apos;ve received your project details and will send a personalised quote to your inbox
            within one business day.
          </p>
          <p className="mx-auto mt-3 max-w-md font-lato text-sm text-text-light/55">
            Check your spam folder if you don&apos;t hear from us — and feel free to reply to our email
            with any extra artwork or timeline details.
          </p>
          <Link href="/" className="btn-primary mt-8 inline-flex">
            Back to Home
          </Link>
        </div>

        <div className="mt-10 flex justify-center opacity-40">
          <CelestialEye className="max-w-xs md:max-w-sm" />
        </div>
      </div>
    </main>
  );
}
