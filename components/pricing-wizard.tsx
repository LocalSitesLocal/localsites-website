'use client'

import { useMemo, useState } from 'react'
import { Check, Circle, MousePointer2 } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { cn } from '@/lib/utils'

type PackageOption = {
  id: string
  name: string
  price: string
  setupPrice: number
  monthlyPrice?: number
  description?: string
  features?: string[]
}

const websiteOptions: PackageOption[] = [
  {
    id: 'starter',
    name: 'Anfrage-Website Starter',
    price: 'ab 899 €',
    setupPrice: 899,
    description: 'Für kleine lokale Betriebe, die einen modernen ersten Online-Auftritt brauchen.',
    features: [
      'moderne Onepage-Website',
      'mobile Optimierung',
      'Kontaktformular',
      'klickbare Telefonnummer',
      'klickbare E-Mail',
      'klickbare Google-Maps-Adresse',
      'SEO-Basis',
      'eine Korrekturrunde',
      'Veröffentlichung auf Domain',
    ],
  },
  {
    id: 'business',
    name: 'Website Business',
    price: 'ab 1.499 €',
    setupPrice: 1499,
    description: 'Für Handwerker, Gutachter, Dienstleister und Betriebe mit mehreren Leistungen.',
    features: [
      'umfangreichere Firmenwebsite',
      'mehrere Leistungsbereiche',
      'FAQ-Bereich',
      'stärkere Kontaktführung',
      'Google-Maps-Verknüpfung',
      'SEO-Basis',
      'zwei Korrekturrunden',
      'Veröffentlichung auf Domain',
    ],
  },
  {
    id: 'website-ai',
    name: 'Website + KI-Empfang',
    price: 'ab 2.499 €',
    setupPrice: 2499,
    description: 'Für Betriebe, die Standardfragen beantworten und Anfragen automatisch aufnehmen lassen wollen.',
    features: [
      'moderne Website',
      'KI-Empfang',
      'Lead-Erfassung',
      'optional Terminlink oder Terminbuchung über Calendly/Cal.com',
      'Bot-Einbau auf Website',
      'Test & Optimierung',
      'Veröffentlichung auf Domain',
    ],
  },
]

const careOptions: PackageOption[] = [
  {
    id: 'none',
    name: 'Keine Betreuung',
    price: '0 €/Monat',
    setupPrice: 0,
    monthlyPrice: 0,
    description: 'Geeignet, wenn Sie spätere Änderungen einzeln beauftragen möchten.',
  },
  {
    id: 'basic',
    name: 'Basic Care',
    price: 'ab 79 €/Monat',
    setupPrice: 0,
    monthlyPrice: 79,
    features: ['kleine Änderungen', 'technische Kontrolle', 'Kontaktformular prüfen'],
  },
  {
    id: 'standard',
    name: 'Standard Care',
    price: 'ab 129 €/Monat',
    setupPrice: 0,
    monthlyPrice: 129,
    features: ['regelmäßige Änderungen', 'Google-/Bewertungsunterstützung', 'kleine Optimierungen'],
  },
  {
    id: 'growth',
    name: 'Growth Care',
    price: 'ab 199 €/Monat',
    setupPrice: 0,
    monthlyPrice: 199,
    features: ['laufende Website-Pflege', 'SEO-Basis-Optimierung', 'KI-Empfang-/Automations-Support'],
  },
]

const aiOptions: PackageOption[] = [
  {
    id: 'no-ai',
    name: 'Kein KI-Empfang',
    price: '0 €',
    setupPrice: 0,
  },
  {
    id: 'faq-lead',
    name: 'FAQ- & Lead-Assistent',
    price: 'ab 699 € Einrichtung',
    setupPrice: 699,
    description: 'Der KI-Empfang beantwortet Standardfragen und sammelt Kontaktdaten.',
  },
  {
    id: 'appointment',
    name: 'Termin-Assistent',
    price: 'ab 1.499 € Einrichtung',
    setupPrice: 1499,
    description:
      'Der KI-Empfang sammelt Leads und kann zusätzlich Termine über Calendly oder Cal.com vorbereiten.',
  },
]

function formatCurrency(value: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

function OptionCard({
  option,
  selected,
  onSelect,
}: {
  option: PackageOption
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'group h-full w-full rounded-[10px] border bg-white p-5 text-left shadow-[0_18px_55px_rgba(15,55,100,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0b63ce]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/35',
        selected ? 'border-[#0b63ce] ring-2 ring-[#0b63ce]/15' : 'border-[#d7e7f7]'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-black text-[#061637]">{option.name}</h3>
          <p className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#061637]">{option.price}</p>
        </div>
        <span
          className={cn(
            'mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors',
            selected ? 'border-[#0b63ce] bg-[#0b63ce] text-white' : 'border-[#d7e7f7] text-[#9aa9bd]'
          )}
        >
          {selected ? <Check className="h-4 w-4" /> : <Circle className="h-3 w-3" />}
        </span>
      </div>
      {option.description && <p className="mt-4 text-sm leading-6 text-[#52647d]">{option.description}</p>}
      {option.features && (
        <ul className="mt-5 grid gap-2">
          {option.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-sm leading-6 text-[#263956]">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[#0b63ce]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </button>
  )
}

function SelectionStep({
  number,
  title,
  options,
  selectedId,
  onSelect,
}: {
  number: string
  title: string
  options: PackageOption[]
  selectedId: string
  onSelect: (id: string) => void
}) {
  return (
    <section className="rounded-[12px] border border-[#d7e7f7] bg-[#fbfdff] p-5 shadow-[0_18px_60px_rgba(15,55,100,0.05)]">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b63ce] text-sm font-black text-white">
          {number}
        </span>
        <h2 className="text-2xl font-black tracking-[-0.035em] text-[#061637]">{title}</h2>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            option={option}
            selected={selectedId === option.id}
            onSelect={() => onSelect(option.id)}
          />
        ))}
      </div>
    </section>
  )
}

export function PricingWizard() {
  const [websiteId, setWebsiteId] = useState('business')
  const [careId, setCareId] = useState('standard')
  const [aiId, setAiId] = useState('no-ai')

  const selection = useMemo(() => {
    const website = websiteOptions.find((option) => option.id === websiteId) ?? websiteOptions[0]
    const care = careOptions.find((option) => option.id === careId) ?? careOptions[0]
    const ai = aiOptions.find((option) => option.id === aiId) ?? aiOptions[0]
    const setup = website.setupPrice + ai.setupPrice
    const monthly = care.monthlyPrice ?? 0
    return { website, care, ai, setup, monthly }
  }, [websiteId, careId, aiId])

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
      <div className="space-y-6">
        <SelectionStep
          number="1"
          title="Website-Basis wählen"
          options={websiteOptions}
          selectedId={websiteId}
          onSelect={setWebsiteId}
        />
        <SelectionStep
          number="2"
          title="Monatliche Betreuung wählen"
          options={careOptions}
          selectedId={careId}
          onSelect={setCareId}
        />
        <SelectionStep
          number="3"
          title="KI-Empfang optional hinzufügen"
          options={aiOptions}
          selectedId={aiId}
          onSelect={setAiId}
        />
      </div>

      <aside className="lg:sticky lg:top-28">
        <div className="rounded-[12px] border border-[#d7e7f7] bg-white p-6 shadow-[0_24px_80px_rgba(15,55,100,0.12)]">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6ff] text-[#0b63ce]">
              <MousePointer2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Ihre Auswahl</p>
              <h2 className="text-xl font-black text-[#061637]">Paketübersicht</h2>
            </div>
          </div>

          <dl className="space-y-4 text-sm">
            <div>
              <dt className="font-bold text-[#52647d]">Website-Paket</dt>
              <dd className="mt-1 font-black text-[#061637]">{selection.website.name}</dd>
            </div>
            <div>
              <dt className="font-bold text-[#52647d]">Betreuung</dt>
              <dd className="mt-1 font-black text-[#061637]">{selection.care.name}</dd>
            </div>
            <div>
              <dt className="font-bold text-[#52647d]">KI-Modul</dt>
              <dd className="mt-1 font-black text-[#061637]">{selection.ai.name}</dd>
            </div>
          </dl>

          <div className="my-6 h-px bg-[#d7e7f7]" />

          <div className="grid gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">
                geschätzter Startpreis
              </p>
              <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-[#061637]">
                ab {formatCurrency(selection.setup)}
              </p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">
                geschätzte monatliche Kosten
              </p>
              <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-[#061637]">
                {selection.monthly === 0 ? '0 €/Monat' : `ab ${formatCurrency(selection.monthly)}/Monat`}
              </p>
            </div>
          </div>

          <FlowButton
            text="Angebot anfragen"
            href="/#kontakt-form"
            tone="orange"
            className="mt-7 w-full bg-white"
          />

          <p className="mt-5 text-xs leading-5 text-[#52647d]">
            Der genaue Preis hängt vom Umfang, den gewünschten Funktionen und vorhandenen Inhalten ab.
          </p>
        </div>
      </aside>
    </div>
  )
}
