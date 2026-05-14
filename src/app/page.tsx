import { Hero } from "@/components/home/Hero";
import { ShopByPurpose } from "@/components/home/ShopByPurpose";
import { CorporateAwardsSection } from "@/components/home/CorporateAwardsSection";
import { RealtorSection } from "@/components/home/RealtorSection";
import { BaptismSection } from "@/components/home/BaptismSection";
import { BestSellers } from "@/components/home/BestSellers";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyModernTimez } from "@/components/home/WhyModernTimez";
import { QuoteCTA } from "@/components/home/QuoteCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ShopByPurpose />
      <CorporateAwardsSection />
      <RealtorSection />
      <BaptismSection />
      <BestSellers />
      <HowItWorks />
      <WhyModernTimez />
      <QuoteCTA />
    </>
  );
}
