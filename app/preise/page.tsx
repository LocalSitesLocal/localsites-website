import type { Metadata } from 'next'
import { Bot, Check, Globe2, LayoutDashboard, ShieldCheck } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FlowButton } from '@/components/flow-button'
import { OfferComparison } from '@/components/offer-comparison'
import { OfferFinder } from '@/components/offer-finder'
import { Reveal } from '@/components/reveal'
import {
  addOns,
  carePackages,
  getWebsitePackageById,
  operatingCenterPackages,
  websitePackages,
} from '@/lib/offers'

export const metadata: Metadata = {
  title: 'Angebote & Preise | LocalSites',
  description:
    'Transparente Pakete für Websites, digitale Betriebszentralen und Betreuung. Mit dem Paket-Finder erhalten Sie in wenigen Schritten eine unverbindliche Empfehlung.',
}

const areas = [
  {
    icon: Globe2,
    label: 'Websites',
    price: websitePackages[0].price,
    text: 'Professioneller Auftritt und klare Kontaktwege.',
  },
  {
    icon: LayoutDashboard,
    label: 'Digitale Betriebszentrale',
    price: operatingCenterPackages[0].price,
    text: 'Anfragen und Aufträge zentral organisieren.',
  },
  {
    icon: ShieldCheck,
    label: 'Betreuung',
    price: carePackages[0].price,
    text: 'Pflege, Sichtbarkeit und System-Support.',
  },
]

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
      <main className="bg-[#f8fbff] pt-20">
        <section className="border-b border-[#dfeaf5] bg-white pb-14 pt-14 lg:pb-18 lg:pt-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Angebote & Preise</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#061637] sm:text-6xl lg:text-7xl">
                Die passende digitale Lösung für Ihren Betrieb.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#52647d]">
                Wählen Sie direkt ein Paket oder beantworten Sie wenige kurze Fragen und erhalten Sie eine unverbindliche Empfehlung.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <FlowButton text="Passendes Paket in 60 Sekunden finden" href="#paket-finder" tone="orange" className="bg-white" />
                <FlowButton text="Alle Angebote vergleichen" href="#angebote-vergleichen" tone="blue" className="bg-white" />
              </div>
            </Reveal>

            <div className="mt-12 grid border-y border-[#d7e7f7] md:grid-cols-3">
              {areas.map((area, index) => (
                <Reveal key={area.label} delay={index * 70} className="h-full">
                  <div className="flex h-full gap-4 border-b border-[#d7e7f7] py-6 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                    <span className="motion-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-[#eef6ff] text-[#0b63ce]">
                      <area.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="font-black text-[#061637]">{area.label}</h2>
                      <p className="mt-1 font-black text-[#0b63ce]">{area.price}</p>
                      <p className="mt-2 text-sm leading-6 text-[#52647d]">{area.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="mb-8 max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Kurze Orientierung</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                Nicht lange suchen. Passend einordnen.
              </h2>
              <p className="mt-4 leading-7 text-[#52647d]">
                Der Finder fragt nur Informationen ab, die für eine sinnvolle erste Empfehlung nötig sind. Ihre Angaben sind noch keine Bestellung.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <OfferFinder initialWebsiteId={initialPackage?.id} />
            </Reveal>
          </div>
        </section>

        <section className="border-y border-[#dfeaf5] bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Ihre digitale Betriebszentrale</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                Vom ersten Kontakt bis zum Abschluss den Überblick behalten.
              </h2>
              <p className="mt-5 leading-7 text-[#52647d]">
                Anfragen, Kunden, Angebote, Projekte, Aufgaben und Termine zentral verwalten, statt Informationen in E-Mails, Notizen und Tabellen zu suchen.
              </p>
              <p className="mt-4 text-sm leading-6 text-[#52647d]">
                Die Lösung wird auf Airtable aufgebaut und individuell an Ihren Betrieb angepasst.
              </p>
              <FlowButton text="Betriebszentrale verstehen" href="/betriebszentrale" tone="blue" className="mt-7 bg-white" />
            </Reveal>

            <Reveal delay={100}>
              <div className="border-l-4 border-[#0b63ce] bg-[#eef6ff] p-6 sm:p-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  {['Anfrage', 'Kunde', 'Angebot', 'Auftrag', 'Projekt', 'Aufgabe', 'Abschluss'].map((step, index) => (
                    <div key={step} className="flex min-h-12 items-center gap-3 border-b border-[#cfe2f5] py-2 text-sm font-black text-[#061637]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-xs text-[#0b63ce]">{index + 1}</span>
                      {step}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-6 text-[#52647d]">
                  Klar abgegrenzt: Buchhaltung, Lohnabrechnung, Warenwirtschaft und vollständige ERP-Funktionen sind nicht automatisch enthalten.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="mx-auto mb-9 max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Direkter Vergleich</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                Angebote ohne Paket-Chaos vergleichen.
              </h2>
              <p className="mt-4 leading-7 text-[#52647d]">
                Wechseln Sie zwischen Websites, Betriebszentrale und Betreuung. So bleibt immer nur der relevante Bereich sichtbar.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <OfferComparison />
            </Reveal>
          </div>
        </section>

        <section className="border-y border-[#dfeaf5] bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#ff6a00]">Optionale Erweiterungen</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                Ergänzen, was wirklich gebraucht wird.
              </h2>
              <p className="mt-4 leading-7 text-[#52647d]">
                Zusatzmodule bleiben bewusst getrennt vom Grundpaket. Dadurch zahlen Sie nicht automatisch für Leistungen, die Ihr Betrieb nicht benötigt.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {addOns.map((item, index) => (
                <Reveal key={item.id} delay={(index % 3) * 50}>
                  <article className="group flex min-h-36 gap-4 border-b border-[#d7e7f7] py-5">
                    <span className="motion-icon mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#eef6ff] text-[#0b63ce]">
                      {item.id === 'ai-reception' ? <Bot className="h-5 w-5" /> : <Check className="h-5 w-5" />}
                    </span>
                    <div>
                      <h3 className="font-black text-[#061637]">{item.name}</h3>
                      <p className="mt-1 font-black text-[#0b63ce]">{item.price}</p>
                      <p className="mt-2 text-sm leading-6 text-[#52647d]">{item.description}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#061637] py-14 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7fb7ff]">Noch nicht sicher?</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">Wir prüfen kurz, was wirklich sinnvoll ist.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/70">
                Der genaue Preis hängt von Umfang, Funktionen und vorhandenen Inhalten ab. Externe Kosten für Airtable, Chatbase, Calendly, Domain oder Hosting werden vorher transparent besprochen.
              </p>
            </div>
            <FlowButton text="Persönliche Einschätzung anfragen" href="/#kontakt" tone="orange" className="shrink-0 bg-white" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
