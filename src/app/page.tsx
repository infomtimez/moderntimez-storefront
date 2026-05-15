import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { BestSellers } from "@/components/home/BestSellers";
import { ShopByPurpose } from "@/components/home/ShopByPurpose";
import { CorporateAwardsSection } from "@/components/home/CorporateAwardsSection";
import { RealtorSection } from "@/components/home/RealtorSection";
import { BaptismSection } from "@/components/home/BaptismSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyModernTimez } from "@/components/home/WhyModernTimez";
import { QuoteCTA } from "@/components/home/QuoteCTA";

export const revalidate = 3600;

export const metadata: Metadata = {
  openGraph: {
    title: "ModernTimez | Personalized Gifts & Recognition Awards",
    description:
      "Custom engraved personalized gifts, corporate awards, realtor closing gifts, and baptism keepsakes. Premium precision engraving crafted in Texas.",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <BestSellers />
      <ShopByPurpose />
      <CorporateAwardsSection />
      <RealtorSection />
      <BaptismSection />
      <HowItWorks />
      <WhyModernTimez />
      <QuoteCTA />
    </>
  );
}
