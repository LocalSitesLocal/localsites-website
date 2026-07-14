import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { FlowButton } from '@/components/flow-button'
import { OfferComparison } from '@/components/offer-comparison'

export const metadata: Metadata = {
  title: 'Angebote vergleichen | LocalSites',
  description: 'Websites, digitale Betriebszentralen und Betreuung von LocalSites übersichtlich vergleichen.',
}

export default async function PackageComparisonPage({
  searchParams,
}: {
  searchParams: Promise<{ bereich?: string }>
}) {
  const { bereich } = await searchParams
  const initialTab = bereich === 'betriebszentrale' ? 'operations' : bereich === 'betreuung' ? 'care' : 'websites'

  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-20">
        <section className="border-b border-[#dfeaf5] bg-white pb-14 pt-14 lg:pb-18 lg:pt-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Angebotsvergleich</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#061637] sm:text-6xl">
              Nur den Bereich vergleichen, der gerade wichtig ist.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#52647d]">
              Wechseln Sie zwischen Websites, Betriebszentrale und Betreuung. Das empfohlene mittlere Paket ist jeweils hervorgehoben.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <OfferComparison initialTab={initialTab} />
            <div className="mt-10 border-l-4 border-[#ff6a00] bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)] sm:p-8">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-[#061637]">Noch unsicher?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#52647d]">
                Der Paket-Finder verbindet Website, Betriebszentrale, Betreuung und passende Zusatzmodule zu einer ersten Empfehlung.
              </p>
              <FlowButton text="Paket-Finder starten" href="/preise/finder" tone="orange" className="mt-6 bg-white" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
