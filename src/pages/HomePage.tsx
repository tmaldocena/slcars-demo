import { HeroSection } from '../components/HeroSection'
import { FeaturedCarsSection } from '../components/FeaturedCarsSection'
import { ServicesSection } from '../components/ServicesSection'
import { WhyUsSection } from '../components/WhyUsSection'
import { ContactSection } from '../components/ContactSection'

export function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <HeroSection />
      <FeaturedCarsSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
    </main>
  )
}
