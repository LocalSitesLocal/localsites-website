import type { Metadata } from 'next'
import { Bot, Check, Clock3, MailCheck, MessageCircle, ShieldCheck, UserCheck } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FlowButton } from '@/components/flow-button'
import { ChatTestButton } from '@/components/chat-test-button'

export const metadata: Metadata = {
  title: 'KI-Empfang für lokale Betriebe | LocalSites',
  description:
    'Erfahren Sie, wie ein KI-Empfang Standardfragen beantwortet, Anfragen sammelt und lokale Betriebe im Alltag entlastet.',
}

const reasons = [
  {
    icon: Clock3,
    title: 'Anfragen nach Feierabend',
    text: 'Viele Besucher entscheiden abends oder am Wochenende. Der KI-Empfang kann dann erste Fragen beantworten und Kontaktdaten aufnehmen.',
  },
  {
    icon: MessageCircle,
    title: 'Weniger Wiederholungen',
    text: 'Öffnungszeiten, Leistungen, Ablauf, Standort oder erste Preiseinschätzungen müssen nicht jedes Mal manuell erklärt werden.',
  },
  {
    icon: MailCheck,
    title: 'Strukturierte Übergabe',
    text: 'Aus losen Chat-Nachrichten werden verwertbare Anfragen mit Name, Kontaktmöglichkeit und Anliegen.',
  },
]

const tasks = [
  'häufige Fragen verständlich beantworten',
  'Kontaktdaten und Anliegen aufnehmen',
  'auf Leistungen, Ablauf und Kontaktwege verweisen',
  'optional Termine über Calendly oder Cal.com vorbereiten',
  'wichtige Fälle per E-Mail weitergeben',
]

const limits = [
  'ersetzt keine verbindliche Beratung',
  'trifft keine rechtlichen oder medizinischen Entscheidungen',
  'gibt keine Garantien für Umsatz, Ranking oder Anfragen',
  'leitet individuelle Fälle an den Betrieb weiter',
]

export default function KiEmpfangPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-28">
        <section className="border-b border-[#dfeaf5] bg-white pb-14 pt-8 lg:pb-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1fr] lg:items-center lg:px-8">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">
                KI-Empfang
              </p>
              <h1 className="max-w-3xl text-5xl font-black leading-none text-[#061637] sm:text-6xl">
                Ein digitaler Empfang für wiederkehrende Fragen.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52647d]">
                Der KI-Empfang hilft lokalen Betrieben, einfache Fragen schneller zu beantworten und
                mehr Anfragen sauber aufzunehmen. Er ist kein Ersatz für Menschen, sondern eine
                vorgeschaltete Hilfe für typische Erstkontakte.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ChatTestButton text="KI-Empfang live testen" tone="orange" className="bg-white" />
                <FlowButton text="Pakete vergleichen" href="/preise" tone="blue" className="bg-white" />
              </div>
            </div>

            <div className="motion-card group rounded-[14px] border border-[#cfe2f5] bg-[linear-gradient(145deg,#ffffff_0%,#f1f8ff_58%,#fff2e8_100%)] p-5 shadow-[0_30px_90px_rgba(11,99,206,0.14)]">
              <div className="mb-5 flex items-center gap-3 border-b border-[#d7e7f7] pb-4">
                <div className="motion-icon motion-icon-spin flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0b63ce] text-white">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#061637]">LocalSites KI-Empfang</p>
                  <p className="text-xs text-[#52647d]">fragt nach, sammelt, leitet weiter</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="max-w-[84%] rounded-[12px] bg-white p-4 text-sm leading-6 text-[#263956] shadow-sm">
                  Guten Tag, wobei kann ich helfen?
                </div>
                <div className="ml-auto max-w-[84%] rounded-[12px] bg-[#0b63ce] p-4 text-sm leading-6 text-white shadow-sm">
                  Ich brauche ein Angebot und möchte wissen, ob Termine frei sind.
                </div>
                <div className="max-w-[90%] rounded-[12px] bg-white p-4 text-sm leading-6 text-[#263956] shadow-sm">
                  Gerne. Ich nehme Ihre Kontaktdaten und Ihr Anliegen auf, damit sich der Betrieb
                  gezielt zurückmelden kann.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-3">
              {reasons.map((reason) => (
                <article
                  key={reason.title}
                  className="motion-card group rounded-[12px] border border-[#d7e7f7] bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.07)]"
                >
                  <div className="motion-icon motion-icon-spin mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#0b63ce]">
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-black text-[#061637]">{reason.title}</h2>
                  <p className="mt-3 leading-7 text-[#52647d]">{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dfeaf5] bg-white py-14 lg:py-18">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#0b63ce]">
                <Check className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-black text-[#061637]">Was er sinnvoll übernehmen kann</h2>
              <ul className="mt-6 space-y-3">
                {tasks.map((task) => (
                  <li key={task} className="flex gap-3 text-[#263956]">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#0b63ce]" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff2e8] text-[#ff6a00]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-black text-[#061637]">Wo klare Grenzen bleiben</h2>
              <ul className="mt-6 space-y-3">
                {limits.map((limit) => (
                  <li key={limit} className="flex gap-3 text-[#263956]">
                    <UserCheck className="mt-1 h-4 w-4 shrink-0 text-[#ff6a00]" />
                    <span>{limit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-18">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">
              Einfache Ergänzung
            </p>
            <h2 className="text-4xl font-black leading-tight text-[#061637]">
              Sinnvoll, wenn viele ähnliche Fragen immer wieder kommen.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#52647d]">
              Besonders nützlich ist der KI-Empfang für Betriebe, die oft dieselben Erstfragen
              bekommen, aber nicht jede Anfrage sofort telefonisch beantworten können.
            </p>
            <FlowButton
              text="Kostenlose Ersteinschätzung anfragen"
              href="/#kontakt"
              tone="orange"
              className="mt-8 bg-white"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
