import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { ProblemSection } from '@/components/problem-section'
import { WebsiteCheckSection } from '@/components/website-check-section'
import { ServicesSection } from '@/components/services-section'
import { AiReceptionSection } from '@/components/ai-reception-section'
import { DemosSection } from '@/components/demos-section'
import { ProcessSection } from '@/components/process-section'
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
        <WebsiteCheckSection />
        <ServicesSection />
        <AiReceptionSection />
        <DemosSection />
        <ProcessSection />
        <ComparisonSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
