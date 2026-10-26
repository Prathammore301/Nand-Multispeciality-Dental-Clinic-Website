import { FaqSection } from "@/components/sections/faq-section";
import { GuideSection } from "@/components/sections/guide-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ReviewsSection } from "@/components/sections/reviews-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GuideSection />
      <FaqSection />
      <ReviewsSection />
    </>
  );
}
