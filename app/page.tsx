import { HeroSection } from "@/components/landing/hero-section"
import { GallerySection } from "@/components/landing/gallery-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ProcessSection } from "@/components/landing/process-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GallerySection />
      <FeaturesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}
