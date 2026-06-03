import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Lato } from "next/font/google";
import "./globals.css";
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
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "TarotDeckPrinting.com — Premium Tarot Deck Printing",
  description:
    "Custom tarot deck printing — full colour CMYK on 300gsm premium card stock with custom printed tuck boxes. MOQ 50 decks. Free digital proofs. Worldwide shipping.",
  openGraph: {
    title: "TarotDeckPrinting.com — Bring Your Tarot Deck To Life",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
