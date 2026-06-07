import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { shippingContent } from "@/lib/legal/shipping-content";

export const metadata: Metadata = {
  title: "Shipping Policy — TarotDeckPrinting.com",
  description: shippingContent.description,
};

export default function ShippingPage() {
  return <LegalPageLayout content={shippingContent} />;
}
