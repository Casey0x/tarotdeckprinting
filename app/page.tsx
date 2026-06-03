import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyCreators } from "@/components/home/WhyCreators";
import { TuckBoxes } from "@/components/home/TuckBoxes";
import { HowItWorks } from "@/components/home/HowItWorks";
import { RecentDecks } from "@/components/home/RecentDecks";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <WhyCreators />
      <TuckBoxes />
      <HowItWorks />
      <RecentDecks />
      <FinalCta />
    </main>
  );
}
