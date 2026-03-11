import Navbar from '@/components/Navbar'
import ScrollStory from '@/components/ScrollStory'
import ServicesSection from '@/components/ServicesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <ScrollStory />
      <ServicesSection />
      <Footer />
    </main>
  )
}
