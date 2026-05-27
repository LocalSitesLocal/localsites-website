import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ProblemSection } from '@/components/problem-section'
import { ServicesSection } from '@/components/services-section'
import { DemosSection } from '@/components/demos-section'
import { ProcessSection } from '@/components/process-section'
import { WhySection } from '@/components/why-section'
import { ComparisonSection } from '@/components/comparison-section'
import { FaqSection } from '@/components/faq-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <DemosSection />
        <ProcessSection />
        <WhySection />
        <ComparisonSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
