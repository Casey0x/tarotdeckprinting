import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { termsContent } from "@/lib/legal/terms-content";

export const metadata: Metadata = {
  title: "Terms & Conditions — TarotDeckPrinting.com",
  description: termsContent.description,
};

export default function TermsPage() {
  return <LegalPageLayout content={termsContent} />;
}
