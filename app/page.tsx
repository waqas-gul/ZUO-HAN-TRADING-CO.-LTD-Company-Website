import HeroSection from '@/components/home/hero-section'
import ServicesOverview from '@/components/home/services-overview'
import CapabilitiesSection from '@/components/home/capabilities-section'
import ProcessSection from '@/components/home/process-section'
import TestimonialsSection from '@/components/home/testimonials-section'
import CTASection from '@/components/home/cta-section'
import Whatsappme from '@/components/contact/whatsapp-me'
import TrustedBySection from '@/components/home/trusted-by'
import ProductCategories from '@/components/home/Categories'
import CategoriesPage from './categories/page'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <CapabilitiesSection />
      <ProcessSection />
      <TrustedBySection/>
      <TestimonialsSection />
      <CTASection />
      <Whatsappme/>
    </div>
  )
}
