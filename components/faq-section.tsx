import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/reveal'

const faqs = [
  [
    'Was ist die kostenlose Website- und Anfrageanalyse?',
    'Sie erhalten innerhalb von 48-72 Stunden fünf konkrete Verbesserungsvorschläge, eine klare Paketempfehlung und einen groben Kostenrahmen per E-Mail oder als kurzes PDF.',
  ],
  [
    'Was kostet eine Website?',
    'Starter beginnt bei 899 €, Business bei 1.499 € und das Anfrage-System mit Airtable und Automationen bei 2.499 €.',
  ],
  [
    'Was ist im Website-Preis enthalten?',
    'Struktur, Design, mobile Optimierung, Kontaktführung, SEO-Basis, technische Umsetzung und Veröffentlichung auf Ihrer Domain.',
  ],
  [
    'Gibt es eine monatliche Betreuung?',
    'Ja. Care Basis startet bei 79 € pro Monat mit Funktionstest und bis zu 20 Minuten Änderungen. Größere Pakete enthalten mehr Zeit und Systempflege.',
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
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            FAQ
          </p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-4xl">
            Kurz beantwortet.
          </h2>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(([question, answer], index) => (
              <AccordionItem
                key={question}
                value={`item-${index}`}
                className="motion-card rounded-[10px] border border-[#d7e7f7] bg-white px-5 shadow-sm data-[state=open]:shadow-[0_18px_55px_rgba(15,55,100,0.08)]"
              >
                <AccordionTrigger className="text-left font-black text-[#061637] hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="leading-7 text-[#52647d]">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
