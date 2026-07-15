import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/reveal'

const faqs = [
  [
    'Was ist die kostenlose Ersteinschätzung?',
    'Sie erhalten innerhalb von 48–72 Stunden eine kurze Website- und Anfrageanalyse mit konkreten Verbesserungsvorschlägen, einer ersten Paketempfehlung und einem groben Kostenrahmen per E-Mail oder als kurzes PDF.',
  ],
  [
    'Was kostet eine Website?',
    'Website Start beginnt bei 1.490 €, Website Business bei 2.490 € und Website Pro bei 3.690 €. Den endgültigen Preis erhalten Sie nach einer kurzen Prüfung des Umfangs.',
  ],
  [
    'Was ist eine Betriebszentrale?',
    'Eine individuell auf Airtable aufgebaute Arbeitsoberfläche, in der Anfragen, Kunden, Angebote, Aufträge, Projekte, Aufgaben und Termine zentral verwaltet werden können.',
  ],
  [
    'Gibt es eine monatliche Betreuung?',
    'Ja, immer optional: Website-Pflege kostet 79 € pro Monat und enthält den Funktionstest sowie bis zu 20 Minuten Änderungen. Pflege & Sichtbarkeit kostet 149 € mit bis zu 60 Minuten Änderungen. Systembetreuung kostet 249 € mit Systemprüfung und bis zu 90 Minuten Anpassungen. Nicht genutzte Zeit verfällt; zusätzliche Arbeiten werden vorher angeboten.',
  ],
  [
    'Was ist ein KI-Empfang?',
    'Ein digitaler Assistent, der Standardfragen beantwortet, Kontaktdaten sammelt und Anfragen strukturiert an den Betrieb weitergibt.',
  ],
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#fbfdff] py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">FAQ</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-4xl">Kurz beantwortet.</h2>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(([question, answer], index) => (
              <AccordionItem
                key={question}
                value={`item-${index}`}
                className="motion-card rounded-[8px] border border-[#d7e7f7] bg-white px-5 shadow-sm data-[state=open]:shadow-[0_18px_55px_rgba(15,55,100,0.08)]"
              >
                <AccordionTrigger className="text-left font-black text-[#061637] hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent className="leading-7 text-[#52647d]">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
