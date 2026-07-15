import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleCheck,
  Combine,
  Globe2,
  LayoutDashboard,
  RefreshCw,
  ShieldCheck,
  WalletCards,
} from 'lucide-react'
import { DirectOfferRequestButton } from '@/components/direct-offer-request-button'
import { FlowButton } from '@/components/flow-button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Reveal } from '@/components/reveal'
import { digitalBusinessPackage, formatEuro, ownershipNote, paymentPlan, pricingDisclosure, type StoredOfferSummary } from '@/lib/offers'

export const metadata: Metadata = {
  title: 'Digitaler Betrieb | LocalSites',
  description:
    'Website und Betriebszentrale als verbundene Gesamtlösung für lokale Betriebe in Mainfranken.',
}

const workflow = [
  { title: 'Interessent fragt an', text: 'Die Website führt verständlich zum passenden Anfrageweg.' },
  { title: 'Daten kommen strukturiert an', text: 'Kontaktdaten und Anliegen landen vollständig an einem Ort.' },
  { title: 'Der Vorgang erhält einen Status', text: 'Anfrage, Angebot, Auftrag und Projekt bleiben nachvollziehbar.' },
  { title: 'Der nächste Schritt ist sichtbar', text: 'Rückruf, Termin oder Aufgabe geht nicht im Tagesgeschäft unter.' },
]

const idealFor = [
  'Betriebe, die gleichzeitig ihren Außenauftritt und interne Abläufe verbessern möchten',
  'Unternehmen, deren Anfragen heute über E-Mail, Telefon, Notizen und Tabellen verteilt sind',
  'Teams, die Kunden, Angebote, Aufgaben und Termine zentral nachvollziehen möchten',
]

const directSummary: StoredOfferSummary = {
  website: digitalBusinessPackage.website.name,
  operatingCenter: digitalBusinessPackage.operatingCenter.name,
  care: 'Keine Betreuung',
  extensions: [
    'Verbundenes Anfrageformular',
    'einfache Status- oder E-Mail-Automation',
    'drei Monate Startbegleitung enthalten',
  ],
  setup: digitalBusinessPackage.price,
  monthly: '0 €/Monat; danach Systembetreuung optional 249 €/Monat',
  reason:
    'Website und Betriebszentrale werden als zusammenhängende Lösung eingerichtet – vom ersten Kundenkontakt bis zum sichtbaren nächsten Schritt.',
  packageName: digitalBusinessPackage.name,
  individualValue: `ab ${formatEuro(digitalBusinessPackage.individualValue)}`,
  packageAdvantage: formatEuro(digitalBusinessPackage.packageAdvantage),
  includedSupport: 'Drei Monate enthalten',
  externalCosts: 'Je nach eingesetzten Diensten separat',
}

export default function DigitalerBetriebPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-28">
        <section className="border-b border-[#dfeaf5] bg-white pb-14 pt-6 lg:pb-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.8fr] lg:items-center lg:px-8">
            <Reveal>
              <Link
                href="/preise"
                className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#52647d] transition-colors hover:text-[#0b63ce]"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück zu Angebote & Preise
              </Link>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Komplettlösung</p>
                <span className="rounded-full bg-[#fff2e8] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#a94000]">
                  Empfohlen
                </span>
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#061637] sm:text-6xl">
                Digitaler Betrieb
              </h1>
              <p className="mt-5 text-3xl font-black tracking-[-0.035em] text-[#0b63ce]">
                {digitalBusinessPackage.price}
              </p>
              <p className="mt-2 text-xs font-bold leading-5 text-[#52647d]">{pricingDisclosure}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52647d]">
                Eine professionelle Website gewinnt und strukturiert Anfragen. Die Betriebszentrale führt Kunden, Angebote, Aufgaben und Projekte anschließend bis zum nächsten Schritt weiter.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DirectOfferRequestButton
                  text="Digitalen Betrieb unverbindlich anfragen"
                  summary={directSummary}
                  className="bg-white"
                />
                <FlowButton text="Im Paket-Finder prüfen" href="/preise/finder" tone="blue" className="bg-white" />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border-l-4 border-[#0b63ce] bg-[#eef6ff] p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#0b63ce] text-white">
                  <Combine className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Das Ergebnis</p>
                <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#061637]">
                  Ein durchgängiger Weg statt zwei einzelner Lösungen.
                </h2>
                <p className="mt-4 leading-7 text-[#415574]">
                  Interessenten finden den richtigen Kontaktweg. Neue Anfragen landen strukturiert in Ihrer Arbeitsoberfläche und bleiben dort mit Status, Aufgaben und Wiedervorlagen sichtbar.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Vom ersten Klick bis zum Auftrag</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                So greifen Website und Betriebszentrale ineinander.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {workflow.map((step, index) => (
                <Reveal key={step.title} delay={index * 70}>
                  <article className="h-full border-t-4 border-[#0b63ce] bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eef6ff] text-sm font-black text-[#0b63ce]">
                      {index + 1}
                    </span>
                    <h3 className="mt-5 text-lg font-black text-[#061637]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#52647d]">{step.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dfeaf5] bg-white py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Enthaltene Basis</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                Zwei starke Bausteine. Sauber verbunden.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {[
                {
                  icon: Globe2,
                  title: digitalBusinessPackage.website.name,
                  text: digitalBusinessPackage.website.outcome,
                  features: digitalBusinessPackage.website.features,
                },
                {
                  icon: LayoutDashboard,
                  title: digitalBusinessPackage.operatingCenter.name,
                  text: digitalBusinessPackage.operatingCenter.outcome,
                  features: digitalBusinessPackage.operatingCenter.features,
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <article className="h-full rounded-[8px] border border-[#d7e7f7] bg-[#f8fbff] p-7">
                    <item.icon className="h-7 w-7 text-[#0b63ce]" />
                    <h3 className="mt-5 text-2xl font-black text-[#061637]">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#52647d]">{item.text}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm leading-6 text-[#263956]">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-[#0b63ce]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a94000]">Paketvorteil</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                Der Mehrwert liegt in der Verbindung.
              </h2>
              <p className="mt-5 leading-7 text-[#52647d]">
                Einzelwert ab {formatEuro(digitalBusinessPackage.individualValue)} – als abgestimmte Gesamtlösung ab {formatEuro(digitalBusinessPackage.setupPrice)}. Die technische Verbindung, eine erste Automation und drei Monate Startbegleitung sind bereits eingeplant.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="border-t-2 border-[#0b63ce] pt-4">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[#52647d]">Einzelwert</p>
                  <p className="mt-1 text-xl font-black text-[#061637]">ab {formatEuro(digitalBusinessPackage.individualValue)}</p>
                </div>
                <div className="border-t-2 border-[#0b63ce] pt-4">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[#52647d]">Paketpreis</p>
                  <p className="mt-1 text-xl font-black text-[#061637]">ab {formatEuro(digitalBusinessPackage.setupPrice)}</p>
                </div>
                <div className="border-t-2 border-[#ff6a00] pt-4">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[#52647d]">Paketvorteil</p>
                  <p className="mt-1 text-xl font-black text-[#a94000]">{formatEuro(digitalBusinessPackage.packageAdvantage)}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4 sm:grid-cols-2">
                {digitalBusinessPackage.includedBenefits.map((benefit) => (
                  <div key={benefit} className="flex gap-3 border-b border-[#d7e7f7] bg-white p-5">
                    <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0b63ce]" />
                    <span className="font-bold leading-6 text-[#263956]">{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-[#dfeaf5] bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal>
              <ShieldCheck className="h-7 w-7 text-[#0b63ce]" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Passt besonders gut</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637]">Für wen die Komplettlösung gedacht ist</h2>
              <ul className="mt-7 grid gap-4">
                {idealFor.map((entry) => (
                  <li key={entry} className="flex gap-3 leading-7 text-[#263956]">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[#0b63ce]" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={90}>
              <RefreshCw className="h-7 w-7 text-[#a94000]" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#a94000]">Startbegleitung</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637]">Drei Monate gemeinsam stabilisieren</h2>
              <p className="mt-6 text-lg leading-8 text-[#52647d]">
                In den ersten drei Monaten prüfen wir die Betriebszentrale im Alltag, beantworten Rückfragen und nehmen kleine Korrekturen an den eingerichteten Abläufen vor. Danach ist die laufende Systembetreuung für 249 €/Monat optional.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-[#dfeaf5] bg-[#f8fbff] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <WalletCards className="h-7 w-7 text-[#0b63ce]" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Klar vereinbart</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637] sm:text-4xl">Umfang, Übergabe und laufende Kosten bleiben transparent.</h2>
            </Reveal>
            <div className="mt-9 grid gap-6 lg:grid-cols-3">
              <div className="bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)]">
                <h3 className="font-black text-[#061637]">Umsetzung</h3>
                <p className="mt-3 text-sm leading-6 text-[#52647d]">In der Regel 6 bis 10 Wochen nach Bereitstellung der Inhalte, Daten und Zugänge. Enthalten sind zwei Korrekturrunden für die Website und ein gemeinsamer Systemtest.</p>
              </div>
              <div className="bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)]">
                <h3 className="font-black text-[#061637]">Zahlungsplan</h3>
                <ul className="mt-3 grid gap-2">
                  {paymentPlan.map((step) => <li key={step} className="text-sm leading-6 text-[#52647d]">{step}</li>)}
                </ul>
              </div>
              <div className="bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)]">
                <h3 className="font-black text-[#061637]">Externe Dienste</h3>
                <p className="mt-3 text-sm leading-6 text-[#52647d]">Airtable, Resend, Calendly, Vercel, Domain und weitere Tools laufen nach Möglichkeit im Kundenkonto und werden separat ausgewiesen.</p>
              </div>
            </div>
            <p className="mt-7 border-l-2 border-[#0b63ce] pl-4 text-sm leading-6 text-[#52647d]">{ownershipNote}</p>
          </div>
        </section>

        <section className="bg-[#061637] py-14 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7fb7ff]">Nächster Schritt</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">Passt der Digitale Betrieb zu Ihrem Unternehmen?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/70">
                Ihre Paketauswahl wird direkt ins Formular übernommen. Offene Details klären wir anschließend persönlich und unverbindlich.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <DirectOfferRequestButton text="Digitalen Betrieb anfragen" summary={directSummary} className="bg-white" />
              <Link
                href="/preise/finder"
                className="inline-flex min-h-12 items-center justify-center gap-2 px-4 font-black text-white transition-colors hover:text-[#7fb7ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Im Finder prüfen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
