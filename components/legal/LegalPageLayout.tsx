import type { LegalPageContent } from "@/lib/legal/types";

type LegalPageLayoutProps = {
  content: LegalPageContent;
};

export function LegalPageLayout({ content }: LegalPageLayoutProps) {
  return (
    <main className="bg-[linear-gradient(180deg,#0D1B2A_0%,#0B2516_45%,#0B2516_100%)]">
      <section className="relative border-b border-[#C9A84C]/20 bg-[linear-gradient(135deg,#0a1628_0%,#0B2516_55%,#060e08_100%)] pt-[76px] lg:pt-[88px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(201,168,76,0.07),transparent_65%)]" />
        <div className="site-container relative py-14 md:py-16 lg:py-20">
          <p className="font-cinzel text-[11px] font-semibold uppercase tracking-eyebrow text-[#C9A84C] md:text-xs">
            Legal
          </p>
          <h1 className="mt-3 font-cinzel text-3xl font-semibold tracking-wide text-text-light md:text-4xl lg:text-[2.75rem]">
            {content.title}
          </h1>
          <p className="mt-4 max-w-2xl font-lato text-sm leading-relaxed text-text-light/65 md:text-[15px]">
            {content.description}
          </p>
          <p className="mt-3 font-lato text-xs text-text-light/45">Last updated: {content.lastUpdated}</p>
        </div>
      </section>

      <div className="site-container max-w-3xl py-12 md:py-16 lg:py-20">
        {content.sections.map((section, index) => (
          <article key={section.title}>
            {index > 0 && <hr className="legal-divider my-10 md:my-12" aria-hidden="true" />}
            <h2 className="font-cinzel text-xl font-semibold tracking-wide text-[#C9A84C] md:text-2xl">
              {section.title}
            </h2>
            <div className="mt-5 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="whitespace-pre-line font-lato text-sm leading-[1.85] text-text-light/80 md:text-[15px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
