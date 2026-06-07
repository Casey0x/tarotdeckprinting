import Image from "next/image";
import { CelestialEye } from "@/components/ui/BrandIcons";
import { QuoteForm } from "@/components/home/QuoteForm";
import { IMAGES } from "@/lib/images";

export function FinalCta() {
  return (
    <section id="quote" className="relative overflow-hidden bg-forest-deep py-20 md:py-24 lg:py-28">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.ctaBanner}
          alt=""
          fill
          className="object-cover object-center opacity-25"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,37,22,0.92)_0%,rgba(11,37,22,0.88)_50%,rgba(6,14,8,0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,175,55,0.08),transparent_65%)]" />
      </div>

      <div className="site-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mb-4">Get a Quote</p>
          <h2 className="font-cinzel-deco text-[2rem] font-normal leading-tight text-text-light sm:text-4xl lg:text-[2.75rem]">
            Ready To Print Your Deck?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-lato text-sm text-text-light/65 md:text-[15px]">
            Tell us about your project and we&apos;ll return a personalised quote within one business day.
          </p>
        </div>

        <div className="quote-form-wrapper mx-auto mt-10 max-w-2xl md:mt-12">
          <QuoteForm />
        </div>
      </div>

      <div className="site-container relative z-10 mt-14 flex justify-center opacity-40 md:mt-16">
        <CelestialEye className="max-w-sm md:max-w-md" />
      </div>
    </section>
  );
}
