import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { privacyContent } from "@/lib/legal/privacy-content";

export const metadata: Metadata = {
  title: "Privacy Policy — TarotDeckPrinting.com",
  description: privacyContent.description,
};

export default function PrivacyPage() {
  return <LegalPageLayout content={privacyContent} />;
}
