'use client'

import { Check } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'

const packages = [
  {
    name: 'Anfrage-Website Starter',
    price: 'ab 899 €',
    note: 'Für kleine lokale Betriebe mit modernem ersten Auftritt.',
    features: ['Onepage-Website', 'Mobile Optimierung', 'Kontaktformular', 'Klickbare Kontakte & Maps', 'SEO-Basis', 'Eine Korrekturrunde'],
  },
  {
    name: 'Website Business',
    price: 'ab 1.499 €',
    note: 'Für Handwerker, Gutachter und regionale Dienstleister.',
    featured: true,
    features: ['Umfangreichere Firmenwebsite', 'Mehrere Leistungsbereiche', 'FAQ-Bereich', 'Stärkere Kontaktführung', 'Google-Maps-Verknüpfung', 'Zwei Korrekturrunden'],
  },
  {
    name: 'Website + KI-Empfang',
    price: 'ab 2.499 €',
    note: 'Für Betriebe, die Anfragen besser aufnehmen wollen.',
    features: ['Moderne Website', 'KI-Empfang für Standardfragen', 'Lead-Erfassung', 'Terminbuchung optional', 'SEO-Basis', 'Technische Einrichtung'],
  },
]

const carePlans = [
  ['Basic Care', 'ab 79 €/Monat', 'Kleine Änderungen, technische Kontrolle, Formular prüfen.'],
  ['Standard Care', 'ab 129 €/Monat', 'Regelmäßige Änderungen, Google/Bewertungen, kleine Optimierungen.'],
  ['Growth Care', 'ab 199 €/Monat', 'Website-Pflege, SEO-Basis und KI-/Automations-Support.'],
]

export function ComparisonSection() {
  return (
    <section id="preise" className="border-y border-[#dfeaf5] bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            Leistungen & Preise
          </p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-4xl">
            Klare Einstiegspreise. Sauberer Umfang.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 80}>
              <article className="relative h-full rounded-[10px] border border-[#d7e7f7] bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.08)] transition-transform duration-300 hover:-translate-y-1">
                {pkg.featured && (
                  <div className="absolute inset-x-0 -top-px rounded-t-[10px] bg-[#0b63ce] py-2 text-center text-xs font-black uppercase tracking-[0.12em] text-white">
                    Beliebt
                  </div>
                )}
                <div className={pkg.featured ? 'pt-8' : ''}>
                  <h3 className="text-xl font-black text-[#061637]">{pkg.name}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#52647d]">{pkg.note}</p>
                  <div className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#061637]">{pkg.price}</div>
                  <ul className="mt-6 space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#263956]">
                        <Check className="h-4 w-4 text-[#0b63ce]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FlowButton text="Anfragen" href="#kontakt-form" tone={pkg.featured ? 'blue' : 'dark'} className="mt-7 w-full bg-white" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220} className="mt-10 rounded-[10px] bg-[#eef6ff] p-6">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1fr_1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Zusatz</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#061637]">Care & Sichtbarkeit</h3>
            </div>
            {carePlans.map(([name, price, text]) => (
              <div key={name} className="rounded-[10px] bg-white p-5 shadow-sm">
                <h4 className="font-black text-[#061637]">{name}</h4>
                <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-[#061637]">{price}</p>
                <p className="mt-3 text-sm leading-6 text-[#52647d]">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-[#52647d]">
            Der genaue Preis hängt vom Umfang, den gewünschten Funktionen und vorhandenen Inhalten ab.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
