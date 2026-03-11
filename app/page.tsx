import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import GetStartedCTA from '@/components/GetStartedCTA'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <GetStartedCTA />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
