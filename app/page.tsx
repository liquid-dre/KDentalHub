import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import GetStartedCTA from '@/components/GetStartedCTA'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import LocationSection from '@/components/LocationSection'
import Footer from '@/components/Footer'
import { FAQSchema } from '@/components/StructuredData'

const HOME_FAQS = [
  { question: 'How often should I brush my teeth?', answer: 'You should brush your teeth at least twice a day — once in the morning and once before bed. Each brushing session should last about two minutes, using a soft-bristled toothbrush and fluoride toothpaste.' },
  { question: 'Is flossing really necessary?', answer: 'Yes, flossing is essential for good oral health. Brushing alone only cleans about 60% of your tooth surfaces. Flossing removes food particles and plaque from between your teeth and along the gumline.' },
  { question: 'How often should I visit the dentist?', answer: 'Most dentists recommend a checkup and professional cleaning every six months. However, depending on your oral health, your dentist may suggest more frequent visits.' },
  { question: 'What causes bad breath and how can I prevent it?', answer: 'Bad breath is most commonly caused by bacteria on the tongue, gum disease, dry mouth, or food particles. Brush your teeth and tongue twice daily, floss regularly, stay hydrated, and visit your dentist for routine cleanings.' },
  { question: 'When should I replace my toothbrush?', answer: 'You should replace your toothbrush every three to four months, or sooner if the bristles become frayed. A worn toothbrush is less effective at removing plaque.' },
  { question: 'Are electric toothbrushes better than manual ones?', answer: 'Both can be effective when used properly. However, electric toothbrushes can make brushing easier and more consistent. Many studies show oscillating heads remove slightly more plaque than manual brushing.' },
]

export default function Home() {
  return (
    <main className="relative">
      <FAQSchema faqs={HOME_FAQS} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GetStartedCTA />
      <TestimonialsSection />
      <LocationSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
