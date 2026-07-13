import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { PricingWizard } from '@/components/pricing-wizard'
import { Footer } from '@/components/footer'
import { FlowButton } from '@/components/flow-button'
import { getWebsitePackageById } from '@/lib/website-packages'

export const metadata: Metadata = {
  title: 'Pakete vergleichen | LocalSites',
  description:
    'Vergleichen Sie Starter, Business und Anfrage-System sowie Betreuung und optionale Erweiterungen.',
}

export default async function PreisePage({
  searchParams,
}: {
  searchParams: Promise<{ paket?: string }>
}) {
  const { paket } = await searchParams
  const initialPackage = getWebsitePackageById(paket)

  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-28">
        <section className="border-b border-[#dfeaf5] bg-white pb-12 pt-8 lg:pb-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
              Pakete vergleichen
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#061637] sm:text-6xl">
              Pakete vergleichen
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#52647d]">
              Wählen Sie zuerst das passende Website-Paket. Danach können Betreuung und mehrere optionale
              Erweiterungen ergänzt werden.
            </p>
          </div>
        </section>

        <section id="konfigurator" className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <PricingWizard initialWebsiteId={initialPackage?.id} />
            <div className="mt-8 grid gap-4 text-sm leading-7 text-[#52647d] md:grid-cols-2">
              <div className="rounded-[10px] border border-[#d7e7f7] bg-white p-5">
                <h2 className="font-black text-[#061637]">Klare Betreuungspakete</h2>
                <p className="mt-2">
                  Enthaltene Änderungszeit gilt pro Monat. Reaktionszeit, Mindestlaufzeit, Kündigungsfrist,
                  Mehrstunden und nicht enthaltene Arbeiten werden im persönlichen Angebot verbindlich festgehalten.
                </p>
              </div>
              <div className="rounded-[10px] border border-[#d7e7f7] bg-white p-5">
                <h2 className="font-black text-[#061637]">Airtable nach benötigtem Umfang</h2>
                <p className="mt-2">
                  Einfaches Anfrage-Board ab 499 €, Formular mit Airtable-Anbindung ab 799 € und ein vollständiges
                  Anfrage-System mit Automationen als Teil des Anfrage-System-Pakets.
                </p>
              </div>
            </div>
            <p className="mt-8 rounded-[10px] border border-[#d7e7f7] bg-white p-5 text-sm leading-7 text-[#52647d]">
              Der genaue Preis hängt vom Umfang, den gewünschten Funktionen und vorhandenen Inhalten
              ab. Externe Toolkosten wie Airtable, Chatbase, Calendly, Cal.com, Domain, Hosting oder
              Formularanbieter sind nicht automatisch enthalten und werden vorher transparent besprochen.
            </p>
            <div className="mt-8 rounded-[12px] border border-[#d7e7f7] bg-white p-6 text-center shadow-[0_18px_60px_rgba(15,55,100,0.06)]">
              <h2 className="text-2xl font-black tracking-[-0.035em] text-[#061637]">
                Unsicher, welches Paket passt?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl leading-7 text-[#52647d]">
                Sie erhalten eine klare Paketempfehlung und einen groben Kostenrahmen, bevor Sie sich entscheiden.
              </p>
              <FlowButton
                text="Kostenlose Ersteinschätzung anfragen"
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
