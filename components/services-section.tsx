'use client'

import { Bot, Check, Globe2, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const services = [
  {
    icon: Globe2,
    title: 'Anfrage-Websites',
    text: 'Moderne Websites und Redesigns, die Vertrauen schaffen und zur Kontaktaufnahme führen.',
    items: [
      'Firmenwebsite oder Landingpage',
      'Mobile Optimierung',
      'Kontaktformular & klickbare Kontakte',
      'Google-Maps-Adresse',
      'FAQ & SEO-Basis',
      'Veröffentlichung auf Domain',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Care & lokale Sichtbarkeit',
    text: 'Monatliche Pflege, Google-Basis und kleine Optimierungen für einen aktuellen Auftritt.',
    items: [
      'Texte, Bilder, Öffnungszeiten',
      'Kontaktformular prüfen',
      'Technische Kontrolle',
      'Google-Unternehmensprofil-Basis',
      'Bewertungslink / QR-Code',
      'Monatliche Vorschläge',
    ],
  },
  {
    icon: Bot,
    title: 'KI-Empfang',
    text: 'Ein digitaler Empfang für Standardfragen, Leads und optional vorbereitete Termine.',
    items: [
      'Häufige Fragen beantworten',
      'Kontaktdaten sammeln',
      'Anfragen nach Feierabend',
      'Mehrsprachige Antworten',
      'Calendly / Cal.com optional',
      'Übergabe per E-Mail',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="leistungen" className="bg-[#fbfdff] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            Leistungen
          </p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-4xl">
            Drei Bausteine für bessere Anfragen.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <article className="group h-full rounded-[10px] border border-[#d7e7f7] bg-white p-7 shadow-[0_18px_55px_rgba(15,55,100,0.08)] transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#0b63ce] transition-transform duration-300 group-hover:-translate-y-1">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black tracking-[-0.035em] text-[#061637]">{service.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-[#52647d]">{service.text}</p>
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#263956]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0b63ce]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-[#52647d]">
            Der KI-Empfang unterstützt bei Standardfragen und sammelt Anfragen. Individuelle
            oder kritische Fälle werden an den Betrieb weitergeleitet.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
