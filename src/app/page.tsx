import { ExpectationsSection } from "@/components/sections/expectations-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GuideSection } from "@/components/sections/guide-section";
import { HeroSection } from "@/components/sections/hero-section";
import { OverviewSection } from "@/components/sections/overview-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { pageDescriptions } from "@/content/site-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  description: pageDescriptions.home,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <ExpectationsSection />
      <GuideSection />
      <FaqSection />
      <ReviewsSection />
    </>
  );
}
