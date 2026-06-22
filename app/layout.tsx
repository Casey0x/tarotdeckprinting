import type { Metadata } from "next";
import Script from "next/script";
import { Cinzel, Cinzel_Decorative, Lato } from "next/font/google";
import "./globals.css";
import { MicrosoftClarity } from "@/components/analytics/MicrosoftClarity";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const cinzel = Cinzel({
    subsets: ["latin"],
    variable: "--font-cinzel",
    weight: ["400", "600", "700"],
});

const cinzelDeco = Cinzel_Decorative({
    subsets: ["latin"],
    variable: "--font-cinzel-deco",
    weight: ["400", "700"],
});

const lato = Lato({
    subsets: ["latin"],
    variable: "--font-lato",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "TarotDeckPrinting.com – Bring Your Tarot Deck To Life",
    description:
          "Full colour CMYK tarot deck printing on 300gsm premium card stock with custom printed tuck boxes. Minimum 50 decks.",
    openGraph: {
          title: "TarotDeckPrinting.com – Bring Your Tarot Deck To Life",
          description:
                  "Full colour CMYK tarot deck printing on 300gsm premium card stock with custom printed tuck boxes. Minimum 50 decks.",
          type: "website",
          url: "https://tarotdeckprinting.com",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en" className={`${cinzel.variable} ${cinzelDeco.variable} ${lato.variable}`}>
                  <body>
                          <MicrosoftClarity />
                          <Header />
                    {children}
                          <Footer />
                          <Script
                                      id="tawk-to"
                                      strategy="afterInteractive"
                                      dangerouslySetInnerHTML={{
                                                    __html: `
                                                                  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                                                                                (function(){
                                                                                                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                                                                                                                s1.async=true;
                                                                                                                                s1.src='https://embed.tawk.to/6a0c03ff5683b91c39785f8c/1jovev7sv';
                                                                                                                                                s1.charset='UTF-8';
                                                                                                                                                                s1.setAttribute('crossorigin','*');
                                                                                                                                                                                s0.parentNode.insertBefore(s1,s0);
                                                                                                                                                                                              })()
                                                                                                                                                                                                          `,
                                      }}
                                    />
                  </body>
          </html>
        );
}
