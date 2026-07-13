import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { FlowButton } from '@/components/flow-button'
import { PackageComparisonTable } from '@/components/package-comparison-table'

export const metadata: Metadata = {
  title: 'Website-Pakete vergleichen | LocalSites',
  description: 'Starter, Business und Anfrage-System von LocalSites direkt miteinander vergleichen.',
}

export default function PackageComparisonPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-28">
        <section className="border-b border-[#dfeaf5] bg-white pb-14 pt-8 lg:pb-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Paketvergleich</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#061637] sm:text-6xl">
              Drei klare Wege zur passenden Website.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#52647d]">
              Starter ist die kompakte Basis, Business bietet mehrere Seiten und das Anfrage-System ergänzt Airtable sowie Automationen.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <PackageComparisonTable />
            <div className="mt-10 border-l-4 border-[#ff6a00] bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)] sm:p-8">
              <h2 className="text-2xl font-black tracking-[-0.03em] text-[#061637]">Noch unsicher?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#52647d]">
                Mit der kostenlosen Ersteinschätzung erhalten Sie eine klare Paketempfehlung und einen groben Kostenrahmen.
              </p>
              <FlowButton text="Kostenlose Ersteinschätzung anfragen" href="/#kontakt" tone="orange" className="mt-6 bg-white" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
