import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { PricingWizard } from '@/components/pricing-wizard'
import { Footer } from '@/components/footer'
import { FlowButton } from '@/components/flow-button'

export const metadata: Metadata = {
  title: 'Preise & Pakete | LocalSites',
  description:
    'Wählen Sie Website-Basis, monatliche Betreuung und optionale Erweiterungen für Ihr LocalSites-Projekt.',
}

export default function PreisePage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-28">
        <section className="border-b border-[#dfeaf5] bg-white pb-12 pt-8 lg:pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
              Preise & Pakete
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#061637] sm:text-6xl">
              Preise & Pakete
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#52647d]">
              Wählen Sie zuerst die passende Website-Basis. Danach können Betreuung und optionale
              Erweiterungen ergänzt werden.
            </p>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <PricingWizard />
            <p className="mt-8 rounded-[10px] border border-[#d7e7f7] bg-white p-5 text-sm leading-7 text-[#52647d]">
              Der genaue Preis hängt vom Umfang, den gewünschten Funktionen und vorhandenen Inhalten
              ab. Externe Toolkosten wie Chatbase, Calendly, Cal.com, Domain, Hosting oder
              Formularanbieter sind nicht automatisch enthalten und werden vorher transparent besprochen.
            </p>
            <div className="mt-8 rounded-[12px] border border-[#d7e7f7] bg-white p-6 text-center shadow-[0_18px_60px_rgba(15,55,100,0.06)]">
              <h2 className="text-2xl font-black tracking-[-0.035em] text-[#061637]">
                Unsicher, welches Paket passt?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#52647d]">
                Fragen Sie eine kostenlose Einschätzung an. Danach wissen Sie klarer, welche Website-Basis,
                Betreuung oder Erweiterung sinnvoll ist.
              </p>
              <FlowButton
                text="Kostenlosen Website-Check anfragen"
                href="/#kontakt"
                tone="orange"
                className="mt-6 bg-white"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
