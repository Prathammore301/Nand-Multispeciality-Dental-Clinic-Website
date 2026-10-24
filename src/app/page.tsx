import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FaqSection } from "@/components/sections/faq-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { GuideSection } from "@/components/sections/guide-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GuideSection />
      <FaqSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
