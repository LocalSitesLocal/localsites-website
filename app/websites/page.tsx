import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Globe2, MousePointerClick, Smartphone } from 'lucide-react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { FlowButton } from '@/components/flow-button'
import { PackageComparisonTable } from '@/components/package-comparison-table'
import { Reveal } from '@/components/reveal'
import { pricingDisclosure, websitePackages } from '@/lib/offers'

export const metadata: Metadata = {
  title: 'Websites für lokale Betriebe | LocalSites',
  description: 'Moderne Websites für lokale Betriebe in Mainfranken: Beispiele ansehen und drei klar abgegrenzte Website-Pakete vergleichen.',
}

const examples = [
  {
    title: 'Haustechnik & Handwerk',
    text: 'Klare Leistungen, regionale Vertrauenssignale und ein direkter Weg zur passenden Anfrage.',
    image: '/demo-previews/haustechnik-mood.png',
    href: '/demos/haustechnik',
  },
  {
    title: 'Kanzlei & Beratung',
    text: 'Ruhiger, professioneller Auftritt für erklärungsbedürftige Leistungen und persönliche Beratung.',
    image: '/demo-previews/steuerberatung-mood.png',
    href: '/demos/steuerberatung',
  },
]

const comparisonRows = [
  { label: 'Seitenumfang', values: ['Onepage, bis 6 Abschnitte', '4 bis 6 Inhaltsseiten', '7 bis 10 Inhaltsseiten'] },
  { label: 'Leistungsseiten', values: ['Bis zu 3 Leistungen', 'Bis zu 3 eigene Leistungsseiten', 'Bis zu 6 Leistungs- oder Standortseiten'] },
  { label: 'Kontaktformular', values: ['Kompaktes Formular', 'Individuelles Anfrageformular', 'Mehrstufiges Anfrageformular'] },
  { label: 'Mobiloptimierung', values: [true, true, true] },
  { label: 'Lokale SEO-Grundlage', values: [true, true, 'Erweiterte Struktur'] },
  { label: 'Textunterstützung', values: ['Optimierung gelieferter Texte', 'Stärkere Textoptimierung', 'Ausführlichere Textunterstützung'] },
  { label: 'Korrekturrunden', values: ['1 Runde', '2 Runden', '3 Runden'] },
  { label: 'Veröffentlichung', values: [true, true, true] },
  { label: 'Startunterstützung', values: ['14 Tage', '30 Tage', '45 Tage'] },
  { label: 'Typische Umsetzung', values: ['2 bis 4 Wochen', '4 bis 6 Wochen', '6 bis 9 Wochen'] },
]

export default function WebsitesPage() {
  const packages = websitePackages.map((item) => ({
    name: item.name,
    price: item.price,
    description: item.description,
    recommended: item.recommended,
    summary: {
      website: item.name,
      operatingCenter: null,
      care: 'Noch offen',
      extensions: ['Keine ausgewählt'],
      setup: item.price,
      monthly: 'Noch offen',
      reason: `Direktes Interesse an ${item.name}. Der genaue Umfang wird persönlich abgestimmt.`,
    },
  }))

  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-20">
        <section className="border-b border-[#dfeaf5] bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Websites</p>
              <h1 className="mt-4 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-[#061637] sm:text-6xl">
                Ein professioneller Auftritt, der zu klaren Anfragen führt.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52647d]">
                Ihre Leistungen werden verständlich erklärt, Kontaktwege sind sofort sichtbar und die Website funktioniert zuverlässig auf jedem Gerät.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <FlowButton text="Pakete vergleichen" href="#pakete" tone="orange" className="bg-white" />
                <FlowButton text="Kostenlose Ersteinschätzung" href="/#kontakt" tone="blue" className="bg-white" />
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="grid gap-px overflow-hidden rounded-[8px] border border-[#bfd5ea] bg-[#d7e7f7] sm:grid-cols-3 lg:grid-cols-1">
                {[
                  { icon: Globe2, title: 'Verständlich', text: 'Leistungen und Nutzen auf den Punkt gebracht.' },
                  { icon: Smartphone, title: 'Mobil', text: 'Sauber bedienbar auf Smartphone und Desktop.' },
                  { icon: MousePointerClick, title: 'Anfrageklar', text: 'Kontaktwege dort, wo Interessenten sie brauchen.' },
                ].map((item) => (
                  <div key={item.title} className="bg-[#f8fbff] p-5">
                    <item.icon className="h-5 w-5 text-[#0b63ce]" />
                    <h2 className="mt-3 font-black text-[#061637]">{item.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-[#52647d]">{item.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-[#dfeaf5] bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Zwei Beispiele</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">So kann Ihr Auftritt wirken.</h2>
              <p className="mt-4 leading-7 text-[#52647d]">Die Vorschauen sind unverbindliche Demo-Projekte und zeigen mögliche Stilrichtungen.</p>
            </Reveal>
            <div className="mt-9 grid gap-6 lg:grid-cols-2">
              {examples.map((example, index) => (
                <Reveal key={example.title} delay={index * 80}>
                  <Link href={example.href} className="motion-card group block overflow-hidden rounded-[8px] border border-[#d7e7f7] bg-white shadow-[0_18px_55px_rgba(15,55,100,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]">
                    <div className="relative aspect-[16/8.5] overflow-hidden">
                      <Image src={example.image} alt={`Demo-Website ${example.title}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="flex items-start justify-between gap-5 p-6">
                      <div>
                        <h3 className="text-xl font-black text-[#061637]">{example.title}</h3>
                        <p className="mt-2 max-w-xl text-sm leading-6 text-[#52647d]">{example.text}</p>
                      </div>
                      <ArrowRight className="motion-arrow mt-1 h-5 w-5 shrink-0 text-[#0b63ce]" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="pakete" className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Website-Pakete</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">Drei Größen im direkten Vergleich.</h2>
              <p className="mt-4 leading-7 text-[#52647d]">Wählen Sie den Umfang, der zu Ihren Leistungen und Ihren Anfragewegen passt.</p>
            </Reveal>
            <Reveal delay={80} className="mt-10">
              <PackageComparisonTable packages={packages} rows={comparisonRows} />
            </Reveal>
            <div className="mt-7 grid gap-4 border-l-4 border-[#0b63ce] bg-white p-6 text-sm leading-6 text-[#52647d] sm:grid-cols-[auto_1fr]">
              <CheckCircle2 className="h-6 w-6 text-[#0b63ce]" />
              <div>
                <p className="font-black text-[#061637]">Bei allen Paketen wird der genaue Umfang vor dem Auftrag schriftlich festgehalten.</p>
                <p className="mt-1">{pricingDisclosure} Domain, Hosting, Rechtstexte sowie externe Dienste werden transparent separat besprochen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#dfeaf5] bg-white py-12 lg:py-14">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Noch unsicher?</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#061637] sm:text-3xl">Wir prüfen gemeinsam, welcher Umfang wirklich sinnvoll ist.</h2>
            </div>
            <FlowButton text="Kostenlose Ersteinschätzung" href="/#kontakt" tone="orange" className="shrink-0 bg-white" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
