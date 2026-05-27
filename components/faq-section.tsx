'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'Für welche Unternehmen ist LocalSites geeignet?',
    answer: 'Für lokale Betriebe, die professioneller auftreten und online leichter gefunden werden wollen.',
  },
  {
    question: 'Muss schon eine Website vorhanden sein?',
    answer: 'Nein. LocalSites kann sowohl komplett neue Websites als auch moderne Überarbeitungen erstellen.',
  },
  {
    question: 'Gibt es zuerst eine Vorschau?',
    answer: 'Ja, eine Website-Vorschau kann zeigen, wie der neue Auftritt aussehen könnte.',
  },
  {
    question: 'Sind Preise direkt sichtbar?',
    answer: 'Nein. Der Umfang hängt vom Betrieb, den Seiten und den gewünschten Leistungen ab.',
  },
  {
    question: 'Übernimmt LocalSites auch Texte?',
    answer: 'Ja. Texte, Struktur und Leistungsdarstellung können komplett vorbereitet werden.',
  },
  {
    question: 'Kann auch Google Business optimiert werden?',
    answer: 'Ja. Das Profil kann passend zur Website und zur lokalen Suche verbessert werden.',
  },
  {
    question: 'Für welche Region arbeitet LocalSites?',
    answer: 'Der Fokus liegt auf Schweinfurt, Würzburg und Franken. Digitale Projekte sind aber auch darüber hinaus möglich.',
  },
  {
    question: 'Wie startet man?',
    answer: 'Am einfachsten über ein kurzes Erstgespräch oder eine Anfrage über das Formular.',
  },
]

export function FaqSection() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6 text-balance">
            Häufig gestellte Fragen
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#EEF4F8] rounded-xl border-0 px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-blue-500/5 transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left text-[#0B1220] font-medium hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#5B6B7D] pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
