import type { Metadata } from 'next'
import { ArrowRight, Clock3, GitCompareArrows, Globe2, LayoutDashboard, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'
import { carePackages, operatingCenterPackages, websitePackages } from '@/lib/offers'

export const metadata: Metadata = {
  title: 'Angebote & Preise | LocalSites',
  description:
    'Finden Sie in 60 Sekunden eine passende Empfehlung oder vergleichen Sie Websites, digitale Betriebszentralen und Betreuung direkt miteinander.',
}

const areas = [
  {
    icon: Globe2,
    label: 'Websites',
    price: websitePackages[0].price,
    text: 'Professioneller Auftritt und klare Kontaktwege.',
    href: '/preise/vergleich?bereich=websites',
  },
  {
    icon: LayoutDashboard,
    label: 'Digitale Betriebszentrale',
    price: operatingCenterPackages[0].price,
    text: 'Anfragen und Aufträge zentral organisieren.',
    href: '/preise/vergleich?bereich=betriebszentrale',
  },
  {
    icon: ShieldCheck,
    label: 'Betreuung',
    price: carePackages[0].price,
    text: 'Pflege, Sichtbarkeit und System-Support.',
    href: '/preise/vergleich?bereich=betreuung',
  },
]

export default function PreisePage() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-5rem)] bg-white pt-20">
        <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_48%)] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Angebote & Preise</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#061637] sm:text-6xl lg:text-7xl">
                Die passende digitale Lösung für Ihren Betrieb.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#52647d]">
                Wählen Sie den schnellen Paket-Finder oder vergleichen Sie alle Angebote übersichtlich auf einer eigenen Seite.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <FlowButton text="Passendes Paket in 60 Sekunden finden" href="/preise/finder" tone="orange" className="bg-white" />
                <FlowButton text="Alle Angebote vergleichen" href="/preise/vergleich" tone="blue" className="bg-white" />
              </div>
            </Reveal>

            <div className="mt-12 grid border-y border-[#d7e7f7] md:grid-cols-3">
              {areas.map((area, index) => (
                <Reveal key={area.label} delay={index * 70} className="h-full">
                  <Link
                    href={area.href}
                    className="group flex h-full gap-4 border-b border-[#d7e7f7] py-6 transition-colors hover:bg-[#f8fbff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0b63ce]/40 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                  >
                    <span className="motion-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#eef6ff] text-[#0b63ce]">
                      <area.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center justify-between gap-3 font-black text-[#061637]">
                        {area.label}
                        <ArrowRight className="motion-arrow h-4 w-4 shrink-0 text-[#0b63ce]" />
                      </span>
                      <span className="mt-1 block font-black text-[#0b63ce]">{area.price}</span>
                      <span className="mt-2 block text-sm leading-6 text-[#52647d]">{area.text}</span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-[#52647d]">
              <span className="inline-flex items-center gap-2"><Clock3 className="h-4 w-4 text-[#0b63ce]" /> Kurze Empfehlung</span>
              <span className="inline-flex items-center gap-2"><GitCompareArrows className="h-4 w-4 text-[#0b63ce]" /> Transparenter Vergleich</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
