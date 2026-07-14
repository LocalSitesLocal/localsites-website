import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { OfferFinder } from '@/components/offer-finder'
import { Reveal } from '@/components/reveal'
import { getWebsitePackageById } from '@/lib/offers'

export const metadata: Metadata = {
  title: 'Paket-Finder | LocalSites',
  description: 'Beantworten Sie wenige kurze Fragen und erhalten Sie eine unverbindliche Empfehlung für die passende LocalSites-Lösung.',
}

export default async function OfferFinderPage({
  searchParams,
}: {
  searchParams: Promise<{ paket?: string }>
}) {
  const { paket } = await searchParams
  const initialPackage = getWebsitePackageById(paket)

  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-20">
        <section className="border-b border-[#dfeaf5] bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Paket-Finder</p>
              <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-[#061637] sm:text-5xl">
                In 60 Sekunden zur passenden Empfehlung.
              </h1>
              <p className="mt-4 max-w-3xl leading-7 text-[#52647d]">
                Beantworten Sie nur die Fragen, die für Ihren Bedarf relevant sind. Ihre Auswahl ist unverbindlich und noch keine Bestellung.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal>
              <OfferFinder initialWebsiteId={initialPackage?.id} />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
