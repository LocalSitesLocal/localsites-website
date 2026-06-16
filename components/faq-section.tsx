'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Reveal } from '@/components/reveal'

const faqs = [
  ['Was ist der kostenlose Website-Check?', 'Eine kurze, verständliche Einschätzung Ihrer aktuellen Website: Eindruck, mobile Ansicht, Kontaktwege, CTAs, Standort, Technik und mögliche Verbesserungen.'],
  ['Muss ich danach eine Website kaufen?', 'Nein. Der Check ist kostenlos und unverbindlich. Danach entscheiden Sie in Ruhe, ob Sie weitermachen möchten.'],
  ['Was kostet eine Website?', 'Der Einstieg liegt bei ab 899 € für eine moderne Onepage-Website. Umfangreichere Websites starten bei ab 1.499 €.'],
  ['Was bedeutet „ab“-Preis?', 'Der finale Preis hängt von Seitenumfang, Funktionen, vorhandenen Inhalten, Bildern und gewünschten Zusatzleistungen ab.'],
  ['Was ist im Website-Preis enthalten?', 'Struktur, Design, mobile Optimierung, Kontaktführung, SEO-Basis, technische Umsetzung und Veröffentlichung auf Ihrer Domain.'],
  ['Was ist Website-Pflege & lokale Sichtbarkeit?', 'Monatliche Pflege für kleine Änderungen, technische Kontrolle, Google- und Bewertungsunterstützung sowie laufende Optimierung.'],
  ['Gibt es eine monatliche Betreuung?', 'Ja. Die Betreuung startet bei ab 79 € pro Monat und kann kleine Änderungen, technische Kontrolle und Optimierung abdecken.'],
  ['Was ist ein KI-Empfang?', 'Ein digitaler Assistent, der Standardfragen beantwortet, Kontaktdaten sammelt und Anfragen strukturiert an den Betrieb weitergibt.'],
  ['Ersetzt der KI-Empfang Mitarbeiter?', 'Nein. Er unterstützt bei Standardfragen, sammelt Anfragen und leitet wichtige oder individuelle Fälle an den Betrieb weiter.'],
  ['Kann der KI-Empfang Termine buchen?', 'Ja, optional über Dienste wie Calendly oder Cal.com. Kritische oder individuelle Fälle werden an den Betrieb weitergeleitet.'],
  ['Wird mehr Umsatz oder Platz 1 bei Google garantiert?', 'Nein. LocalSites schafft saubere Grundlagen und bessere Kontaktführung, aber keine unseriösen Ranking-, Umsatz- oder Anfragegarantien.'],
  ['Wer liefert Texte, Bilder, Impressum und Datenschutz?', 'Texte und Struktur können vorbereitet werden. Bilder, rechtliche Angaben, Impressum und Datenschutz müssen vom Betrieb geliefert oder rechtlich geprüft werden.'],
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
                className="rounded-[10px] border border-[#d7e7f7] bg-white px-5 shadow-sm transition-shadow data-[state=open]:shadow-[0_18px_55px_rgba(15,55,100,0.08)]"
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
