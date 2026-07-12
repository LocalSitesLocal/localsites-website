'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Circle, MousePointer2 } from 'lucide-react'
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
  recommended?: boolean
  summaryFeatures?: string[]
  detailsHref?: string
}

const websiteOptions: PackageOption[] = [
  {
    id: 'starter',
    name: 'Anfrage-Website Starter',
    price: 'ab 899 €',
    setupPrice: 899,
    description: 'Für kleine lokale Betriebe, die eine moderne Website-Basis brauchen.',
    summaryFeatures: ['Onepage-Website', 'mobil optimiert', 'Kontakt & SEO-Basis'],
    detailsHref: '/preise/starter',
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
    recommended: true,
    description: 'Für Handwerker, Gutachter, Dienstleister und Betriebe mit mehreren Leistungen.',
    summaryFeatures: ['mehrere Leistungsbereiche', 'FAQ & Google-Maps', 'starke Kontaktf\u00fchrung'],
    detailsHref: '/preise/business',
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
    id: 'request-system',
    name: 'Website + Anfrage-System',
    price: 'ab 2.199 €',
    setupPrice: 2199,
    description: 'Für Betriebe, die bessere Anfragen statt nur eine einfache Website-Basis brauchen.',
    summaryFeatures: ['Website Business inklusive', 'Anfrageformular', 'strukturierte Anfragen'],
    detailsHref: '/preise/anfrage-system',
    features: [
      'Website Business',
      'branchenspezifisches Anfrageformular',
      'strukturierte Anfragen per E-Mail',
      'stärkere Kontaktführung',
      'optional Terminlink',
      'Veröffentlichung',
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
    recommended: true,
    features: ['regelmäßige Änderungen', 'Google- und Bewertungsunterstützung', 'kleine Optimierungen'],
  },
  {
    id: 'growth',
    name: 'Growth Care',
    price: 'ab 199 €/Monat',
    setupPrice: 0,
    monthlyPrice: 199,
    features: ['laufende Website-Pflege', 'SEO-Basisoptimierung', 'Anfrage-System- und Automations-Support'],
  },
]

const extensionOptions: PackageOption[] = [
  {
    id: 'none',
    name: 'Keine Erweiterung',
    price: '0 €',
    setupPrice: 0,
  },
  {
    id: 'calendly',
    name: 'Calendly / Terminlink',
    price: 'ab 149 €',
    setupPrice: 149,
    description: 'Ein einfacher Terminlink für Anfragen, Rückrufe oder Erstgespräche.',
  },
  {
    id: 'lead-list',
    name: 'Lead-Liste',
    price: 'ab 399 €',
    setupPrice: 399,
    description: 'Eine übersichtliche Liste, damit eingehende Anfragen besser gesammelt werden.',
  },
  {
    id: 'ki-basic',
    name: 'KI-Empfang Basic',
    price: 'ab 699 €',
    setupPrice: 699,
    recommended: true,
    description: 'Premium-Upgrade: beantwortet Standardfragen und sammelt Leads. Externe Chatbase-Kosten kommen extra hinzu.',
  },
]

function formatCurrency(value: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

function jumpTo(ref: React.RefObject<HTMLDivElement | null>) {
  window.setTimeout(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 80)
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
  const displayFeatures = option.summaryFeatures ?? option.features
  return (
    <article
      className={cn(
        'motion-card group relative flex h-full w-full flex-col overflow-hidden rounded-[10px] border bg-white shadow-[0_18px_55px_rgba(15,55,100,0.06)] hover:border-[#0b63ce]/45',
        option.recommended && 'border-[#ff9a4d] shadow-[0_22px_70px_rgba(255,106,0,0.13)]',
        selected && 'border-[#0b63ce] ring-2 ring-[#0b63ce]/15'
      )}
    >
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        className="motion-press flex-1 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0b63ce]/35"
      >
      {option.recommended && (
        <span className="mb-4 inline-flex rounded-full bg-[#fff2e8] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#ff6a00]">
          Beliebt
        </span>
      )}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-black text-[#061637]">{option.name}</h3>
          <p className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#061637]">{option.price}</p>
        </div>
        <span
          className={cn(
            'motion-icon mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors',
            selected ? 'border-[#0b63ce] bg-[#0b63ce] text-white' : 'border-[#d7e7f7] text-[#9aa9bd]'
          )}
        >
          {selected ? <Check className="h-4 w-4" /> : <Circle className="h-3 w-3" />}
        </span>
      </div>
      {option.description && <p className="mt-4 text-sm leading-6 text-[#52647d]">{option.description}</p>}
      {displayFeatures && (
        <ul className="mt-5 grid gap-2">
          {displayFeatures.map((feature) => (
            <li key={feature} className="flex min-w-0 gap-2 text-sm leading-6 text-[#263956]">
              <Check className="mt-1 h-4 w-4 shrink-0 text-[#0b63ce]" />
              <span className="min-w-0">{feature}</span>
            </li>
          ))}
        </ul>
      )}
      </button>
      {option.detailsHref && (
        <Link
          href={option.detailsHref}
          className="flex min-h-12 items-center justify-between border-t border-[#d7e7f7] px-5 text-sm font-black text-[#0b63ce] transition-colors hover:bg-[#eef6ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0b63ce]/35"
        >
          Mehr erfahren
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </article>
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
  selectedId: string | null
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
      <div className={cn('grid gap-4', options.length === 4 ? 'md:grid-cols-2' : 'lg:grid-cols-3')}>
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

function SelectionSummary({
  website,
  care,
  extension,
}: {
  website: PackageOption
  care: PackageOption
  extension: PackageOption
}) {
  const setup = website.setupPrice + extension.setupPrice
  const monthly = care.monthlyPrice ?? 0
  const saveSelectionForContact = () => {
    try {
      window.sessionStorage.setItem(
        'localsites:pricing-selection',
        [
          'Ich interessiere mich für folgende Paketauswahl:',
          '',
          `Website-Basis: ${website.name}`,
          `Betreuung: ${care.name}`,
          `Optionale Erweiterung: ${extension.name}`,
          `Geschätzter Startpreis: ab ${formatCurrency(setup)}`,
          `Geschätzte monatliche Kosten: ${
            monthly === 0 ? '0 €/Monat' : `ab ${formatCurrency(monthly)}/Monat`
          }`,
        ].join('\n')
      )
      window.sessionStorage.setItem(
        'localsites:pricing-summary',
        JSON.stringify({
          website: website.name,
          care: care.name,
          extension: extension.name,
          setup: `ab ${formatCurrency(setup)}`,
          monthly: monthly === 0 ? '0 €/Monat' : `ab ${formatCurrency(monthly)}/Monat`,
        })
      )
    } catch {
      // The form still works if browser storage is unavailable.
    }
  }

  return (
    <div className="motion-card rounded-[12px] border border-[#d7e7f7] bg-white p-6 shadow-[0_24px_80px_rgba(15,55,100,0.12)]">
      <div className="mb-6 flex items-center gap-3">
        <div className="motion-icon motion-icon-spin flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6ff] text-[#0b63ce]">
          <MousePointer2 className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Ihre Auswahl</p>
          <h2 className="text-xl font-black text-[#061637]">Paketübersicht</h2>
        </div>
      </div>

      <dl className="grid gap-4 text-sm sm:grid-cols-3 lg:grid-cols-1">
        <div>
          <dt className="font-bold text-[#52647d]">Website-Basis</dt>
          <dd className="mt-1 font-black text-[#061637]">{website.name}</dd>
        </div>
        <div>
          <dt className="font-bold text-[#52647d]">Betreuung</dt>
          <dd className="mt-1 font-black text-[#061637]">{care.name}</dd>
        </div>
        <div>
          <dt className="font-bold text-[#52647d]">Erweiterung</dt>
          <dd className="mt-1 font-black text-[#061637]">{extension.name}</dd>
        </div>
      </dl>

      <div className="my-6 h-px bg-[#d7e7f7]" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">geschätzter Startpreis</p>
          <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-[#061637]">ab {formatCurrency(setup)}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">
            geschätzte monatliche Kosten
          </p>
          <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-[#061637]">
            {monthly === 0 ? '0 €/Monat' : `ab ${formatCurrency(monthly)}/Monat`}
          </p>
        </div>
      </div>

      <FlowButton
        text="Angebot anfragen"
        href="/#kontakt"
        tone="orange"
        onClick={saveSelectionForContact}
        className="mt-7 w-full bg-white"
      />
    </div>
  )
}

export function PricingWizard({ initialWebsiteId = null }: { initialWebsiteId?: string | null }) {
  const careRef = useRef<HTMLDivElement | null>(null)
  const extensionRef = useRef<HTMLDivElement | null>(null)
  const summaryRef = useRef<HTMLDivElement | null>(null)

  const [websiteId, setWebsiteId] = useState<string | null>(initialWebsiteId)
  const [careId, setCareId] = useState<string | null>(null)
  const [extensionId, setExtensionId] = useState<string | null>(null)

  const selection = useMemo(() => {
    const website = websiteOptions.find((option) => option.id === websiteId)
    const care = careOptions.find((option) => option.id === careId)
    const extension = extensionOptions.find((option) => option.id === extensionId)
    return { website, care, extension }
  }, [websiteId, careId, extensionId])

  const selectWebsite = (id: string) => {
    const isFirstWebsiteSelection = !websiteId
    setWebsiteId(id)
    if (isFirstWebsiteSelection) {
      jumpTo(careRef)
    }
  }

  const selectCare = (id: string) => {
    const isFirstCareSelection = !careId
    setCareId(id)
    if (isFirstCareSelection) {
      jumpTo(extensionRef)
    }
  }

  const selectExtension = (id: string) => {
    const isFirstExtensionSelection = !extensionId
    setExtensionId(id)
    if (isFirstExtensionSelection) {
      jumpTo(summaryRef)
    }
  }

  const isComplete = Boolean(selection.website && selection.care && selection.extension)

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
      <div className="space-y-6">
        <SelectionStep
          number="1"
          title="Website-Basis wählen"
          options={websiteOptions}
          selectedId={websiteId}
          onSelect={selectWebsite}
        />

        {websiteId && (
          <div ref={careRef}>
            <SelectionStep
              number="2"
              title="Monatliche Betreuung wählen"
              options={careOptions}
              selectedId={careId}
              onSelect={selectCare}
            />
          </div>
        )}

        {websiteId && careId && (
          <div ref={extensionRef}>
            <SelectionStep
              number="3"
              title="Optionale Erweiterungen"
              options={extensionOptions}
              selectedId={extensionId}
              onSelect={selectExtension}
            />
          </div>
        )}
      </div>

      <aside ref={summaryRef} className="lg:sticky lg:top-28">
        {isComplete && selection.website && selection.care && selection.extension ? (
          <SelectionSummary website={selection.website} care={selection.care} extension={selection.extension} />
        ) : (
          <div className="rounded-[12px] border border-dashed border-[#c6d9ec] bg-white/72 p-6 text-sm leading-6 text-[#52647d]">
            Wählen Sie Schritt für Schritt Ihr Paket aus. Die Zusammenfassung erscheint automatisch nach der Auswahl.
          </div>
        )}
      </aside>
    </div>
  )
}
