'use client'

import { Bot, Check, Globe2, ShieldCheck } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

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
    title: 'Website-Pflege & lokale Sichtbarkeit',
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
    text: 'Ein digitaler Assistent, der häufige Fragen beantwortet, Kontaktdaten sammelt und bei Bedarf einen Terminlink ausgibt.',
    href: '/ki-empfang',
    highlighted: true,
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
              <article
                className={cn(
                  'group relative h-full overflow-hidden rounded-[10px] border bg-white p-7 shadow-[0_18px_55px_rgba(15,55,100,0.08)] transition-transform duration-300 hover:-translate-y-1',
                  service.highlighted
                    ? 'border-[#0b63ce]/45 bg-[linear-gradient(145deg,#ffffff_0%,#f0f7ff_54%,#fff3ea_100%)] shadow-[0_28px_90px_rgba(11,99,206,0.16)]'
                    : 'border-[#d7e7f7]'
                )}
              >
                {service.highlighted && (
                  <span className="mb-5 inline-flex rounded-full bg-[#ffefe5] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#ff6a00]">
                    Automatisierung
                  </span>
                )}
                <div
                  className={cn(
                    'mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#0b63ce] transition-transform duration-300 group-hover:-translate-y-1',
                    service.highlighted && 'bg-[#0b63ce] text-white shadow-[0_16px_35px_rgba(11,99,206,0.28)]'
                  )}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black tracking-[-0.035em] text-[#061637]">{service.title}</h3>
                <p className="mt-3 leading-7 text-[#52647d]">{service.text}</p>
                <ul className="mt-6 space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#263956]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0b63ce]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {service.href && (
                  <FlowButton
                    text="Mehr zum KI-Empfang"
                    href={service.href}
                    tone="blue"
                    className="mt-7 bg-white"
                  />
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
