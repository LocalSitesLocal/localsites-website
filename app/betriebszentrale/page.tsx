import type { Metadata } from 'next'
import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  LayoutDashboard,
  MailCheck,
  Users,
} from 'lucide-react'
import { Footer } from '@/components/footer'
import { FlowButton } from '@/components/flow-button'
import { Header } from '@/components/header'
import { Reveal } from '@/components/reveal'
import { operatingCenterPackages } from '@/lib/offers'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Digitale Betriebszentrale | LocalSites',
  description:
    'Anfragen, Kunden, Angebote, Projekte, Aufgaben und Termine in einer individuell angepassten Airtable-Betriebszentrale verwalten.',
}

const processSteps = ['Anfrage', 'Kunde', 'Angebot', 'Auftrag', 'Projekt', 'Aufgabe', 'Abschluss']

const benefits = [
  { icon: MailCheck, title: 'Anfragen bleiben sichtbar', text: 'Neue Kontakte erhalten einen klaren Status und eine Wiedervorlage.' },
  { icon: Users, title: 'Zusammenhänge bleiben erhalten', text: 'Kunden, Angebote, Aufträge und Projekte werden miteinander verknüpft.' },
  { icon: ClipboardCheck, title: 'Nächste Schritte sind klar', text: 'Aufgaben und Termine stehen dort, wo der Vorgang bearbeitet wird.' },
]

const dashboardRows = [
  { customer: 'Müller Haustechnik', request: 'Badsanierung', status: 'Angebot offen', date: 'Heute' },
  { customer: 'Schreinerei Koch', request: 'Website-Anfrage', status: 'Rückruf', date: 'Morgen' },
  { customer: 'Mainblick Gutachten', request: 'Projektstart', status: 'In Arbeit', date: '18.07.' },
]

export default function BetriebszentralePage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-20">
        <section className="border-b border-[#dfeaf5] bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Ihre digitale Betriebszentrale</p>
              <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#061637] sm:text-6xl">
                Weniger suchen. Klarer weiterarbeiten.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#52647d]">
                Anfragen, Kunden, Angebote, Projekte, Aufgaben und Termine zentral verwalten, statt Informationen in E-Mails, Notizen und Tabellen zu suchen.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <FlowButton text="Pakete ansehen" href="#pakete" tone="orange" className="bg-white" />
                <FlowButton text="Im Paket-Finder prüfen" href="/preise/finder" tone="blue" className="bg-white" />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border-l-4 border-[#0b63ce] bg-[#eef6ff] p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <LayoutDashboard className="h-6 w-6 text-[#0b63ce]" />
                  <h2 className="text-xl font-black text-[#061637]">Individuell auf Airtable aufgebaut</h2>
                </div>
                <p className="mt-4 leading-7 text-[#52647d]">
                  Airtable ist die technische Grundlage. Ansichten, Felder, Statuswerte und Abläufe werden an Ihren Betrieb angepasst, damit daraus eine verständliche Arbeitsoberfläche entsteht.
                </p>
                <p className="mt-4 text-sm font-bold leading-6 text-[#263956]">
                  Sie kaufen kein leeres Tool, sondern eine eingerichtete Lösung mit Einführung und gemeinsamem Funktionstest.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Ein klarer Ablauf</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                Jeder Vorgang bekommt einen sichtbaren nächsten Schritt.
              </h2>
            </Reveal>
            <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
              {processSteps.map((step, index) => (
                <Reveal key={step} delay={index * 45} className="h-full">
                  <div className="flex h-full min-h-20 items-center gap-3 border-b border-[#d7e7f7] bg-white px-4 py-3 lg:flex-col lg:items-start lg:justify-center">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef6ff] text-xs font-black text-[#0b63ce]">{index + 1}</span>
                    <span className="font-black text-[#061637]">{step}</span>
                    {index < processSteps.length - 1 && <ArrowRight className="ml-auto hidden h-4 w-4 text-[#9aabc0] lg:block" />}
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 70}>
                  <article className="h-full border-t-4 border-[#0b63ce] bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)]">
                    <benefit.icon className="h-6 w-6 text-[#0b63ce]" />
                    <h3 className="mt-5 text-xl font-black text-[#061637]">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#52647d]">{benefit.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dfeaf5] bg-white py-14 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-8">
            <Reveal>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a94000]">Realistisches Beispiel</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                Ein Dashboard für den täglichen Überblick.
              </h2>
              <p className="mt-5 leading-7 text-[#52647d]">
                Statt jedes Detail gleichzeitig zu zeigen, bündelt die Startansicht offene Anfragen, nächste Termine und wichtige Vorgänge. Von dort gelangen Sie in die zugehörigen Datensätze.
              </p>
            </Reveal>

            <Reveal delay={100} className="min-w-0">
              <div className="min-w-0 overflow-hidden rounded-[8px] border border-[#bfd5ea] bg-[#f8fbff] shadow-[0_28px_90px_rgba(15,55,100,0.16)]">
                <div className="flex items-center justify-between border-b border-[#d7e7f7] bg-[#061637] px-5 py-4 text-white">
                  <div>
                    <p className="text-xs font-bold text-white/60">LocalSites Beispiel</p>
                    <h3 className="font-black">Betriebsübersicht</h3>
                  </div>
                  <LayoutDashboard className="h-5 w-5 text-[#7fb7ff]" />
                </div>
                <div className="grid gap-px bg-[#d7e7f7] sm:grid-cols-3">
                  {[
                    { icon: MailCheck, label: 'Neue Anfragen', value: '7' },
                    { icon: CircleDollarSign, label: 'Offene Angebote', value: '4' },
                    { icon: CalendarDays, label: 'Termine diese Woche', value: '9' },
                  ].map((metric) => (
                    <div key={metric.label} className="bg-white p-5">
                      <metric.icon className="h-5 w-5 text-[#0b63ce]" />
                      <p className="mt-4 text-2xl font-black text-[#061637]">{metric.value}</p>
                      <p className="mt-1 text-xs font-bold text-[#52647d]">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <h4 className="font-black text-[#061637]">Nächste Schritte</h4>
                    <span className="text-xs font-bold text-[#0b63ce]">Alle Vorgänge</span>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                      <thead>
                        <tr className="text-xs text-[#52647d]">
                          <th className="border-b border-[#d7e7f7] py-3 pr-4">Kunde</th>
                          <th className="border-b border-[#d7e7f7] py-3 pr-4">Vorgang</th>
                          <th className="border-b border-[#d7e7f7] py-3 pr-4">Status</th>
                          <th className="border-b border-[#d7e7f7] py-3">Nächster Schritt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dashboardRows.map((row) => (
                          <tr key={row.customer} className="text-[#263956]">
                            <td className="border-b border-[#e5eef7] py-3 pr-4 font-bold text-[#061637]">{row.customer}</td>
                            <td className="border-b border-[#e5eef7] py-3 pr-4">{row.request}</td>
                            <td className="border-b border-[#e5eef7] py-3 pr-4"><span className="rounded-full bg-[#eef6ff] px-2.5 py-1 text-xs font-bold text-[#0b63ce]">{row.status}</span></td>
                            <td className="border-b border-[#e5eef7] py-3 font-bold">{row.date}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="pakete" className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <Reveal className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Drei sinnvolle Ausbaustufen</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-5xl">
                So viel System wie Ihr Betrieb wirklich braucht.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {operatingCenterPackages.map((item, index) => (
                <Reveal key={item.id} delay={index * 70}>
                  <article
                    className={cn(
                      'motion-card flex h-full flex-col rounded-[8px] border bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)]',
                      item.recommended ? 'border-[#0b63ce] bg-[linear-gradient(150deg,#ffffff_0%,#f0f7ff_72%,#fff7f0_100%)] shadow-[0_24px_70px_rgba(11,99,206,0.13)]' : 'border-[#d7e7f7]'
                    )}
                  >
                    <div className="min-h-7">
                      {item.recommended && <span className="rounded-full bg-[#fff0e5] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#a94000]">Empfohlen</span>}
                    </div>
                    <h3 className="mt-4 text-xl font-black text-[#061637]">{item.name}</h3>
                    <p className="mt-2 text-2xl font-black text-[#0b63ce]">{item.price}</p>
                    <p className="mt-4 text-sm leading-6 text-[#52647d]">{item.description}</p>
                    <ul className="mt-6 grid flex-1 gap-3">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex gap-2 text-sm leading-6 text-[#263956]">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-[#0b63ce]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <FlowButton text="Im Finder prüfen" href="/preise/finder" tone={item.recommended ? 'orange' : 'blue'} className="mt-7 bg-white" />
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#dfeaf5] bg-white py-14 lg:py-18">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#52647d]">Klare Abgrenzung</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#061637] sm:text-3xl">Organisation statt vollständigem ERP.</h2>
              <p className="mt-4 max-w-3xl leading-7 text-[#52647d]">
                Die Betriebszentrale organisiert den Kunden-, Anfrage- und Auftragsprozess. Buchhaltung, Lohnabrechnung, Warenwirtschaft und vollständige ERP-Funktionen sind nicht automatisch enthalten.
              </p>
            </div>
            <FlowButton text="Persönliches Angebot anfordern" href="/#kontakt" tone="orange" className="bg-white" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
