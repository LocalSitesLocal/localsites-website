'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Circle, MousePointer2, Square } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { cn } from '@/lib/utils'
import { websitePackages } from '@/lib/website-packages'

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

const websiteOptions: PackageOption[] = websitePackages.map((item) => ({
  id: item.id,
  name: item.name,
  price: item.price,
  setupPrice: item.setupPrice,
  description: item.description,
  summaryFeatures: item.highlights,
  recommended: item.recommended,
  detailsHref: `/preise/${item.slug}`,
}))

const careOptions: PackageOption[] = [
  {
    id: 'none',
    name: 'Keine Betreuung',
    price: '0 \u20ac/Monat',
    setupPrice: 0,
    monthlyPrice: 0,
    description: 'Geeignet, wenn Sie sp\u00e4tere Arbeiten einzeln beauftragen m\u00f6chten.',
  },
  {
    id: 'basic',
    name: 'Care Basis',
    price: '79 \u20ac/Monat',
    setupPrice: 0,
    monthlyPrice: 79,
    features: ['monatlicher Funktionstest', 'bis zu 20 Minuten \u00c4nderungen'],
  },
  {
    id: 'plus',
    name: 'Care Plus',
    price: '149 \u20ac/Monat',
    setupPrice: 0,
    monthlyPrice: 149,
    recommended: true,
    features: ['bis zu 60 Minuten \u00c4nderungen', 'kleine Optimierungen'],
  },
  {
    id: 'system',
    name: 'Care System',
    price: '249 \u20ac/Monat',
    setupPrice: 0,
    monthlyPrice: 249,
    features: ['bis zu 120 Minuten Betreuung', 'Airtable- und Automationspflege'],
  },
]

const extensionOptions: PackageOption[] = [
  {
    id: 'none',
    name: 'Keine weitere Erweiterung',
    price: '0 \u20ac',
    setupPrice: 0,
    description: 'Sie k\u00f6nnen Erweiterungen auch sp\u00e4ter erg\u00e4nzen.',
  },
  {
    id: 'calendly',
    name: 'Calendly-Einrichtung',
    price: 'ab 149 \u20ac',
    setupPrice: 149,
    description: 'Terminlink f\u00fcr Anfragen, R\u00fcckrufe oder Erstgespr\u00e4che.',
  },
  {
    id: 'board',
    name: 'Digitales Anfrage-Board',
    price: 'ab 499 \u20ac',
    setupPrice: 499,
    description: 'Anfragen automatisch speichern und nach Status, Leistung und n\u00e4chstem Schritt verwalten.',
  },
  {
    id: 'ki-basic',
    name: 'KI-Empfang Basic',
    price: 'ab 699 \u20ac',
    setupPrice: 699,
    recommended: true,
    description: 'Beantwortet Standardfragen und sammelt Leads. Externe Chatbase-Kosten kommen hinzu.',
  },
]

const NO_INCLUDED_EXTENSIONS: string[] = []
const REQUEST_SYSTEM_EXTENSIONS = ['board']

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
  mode = 'radio',
  included = false,
}: {
  option: PackageOption
  selected: boolean
  onSelect: () => void
  mode?: 'radio' | 'checkbox'
  included?: boolean
}) {
  const displayFeatures = option.summaryFeatures ?? option.features

  return (
    <article
      className={cn(
        'motion-card group relative flex h-full w-full flex-col overflow-hidden rounded-[10px] border bg-white shadow-[0_18px_55px_rgba(15,55,100,0.06)] hover:border-[#0b63ce]/45',
        option.recommended && 'border-[#ff9a4d] shadow-[0_22px_70px_rgba(255,106,0,0.13)]',
        selected && 'border-[#0b63ce] ring-2 ring-[#0b63ce]/15',
        included && 'bg-[#eef6ff]'
      )}
    >
      <button
        type="button"
        onClick={onSelect}
        disabled={included}
        aria-pressed={selected}
        className="motion-press flex-1 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0b63ce]/35 disabled:cursor-default"
      >
        {(option.recommended || included) && (
          <div className="mb-4 flex min-h-7 flex-wrap gap-2">
            {option.recommended && (
              <span className="inline-flex rounded-full bg-[#fff2e8] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#ff6a00]">
                Beliebt
              </span>
            )}
            {included && (
              <span className="inline-flex rounded-full bg-[#0b63ce] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                Im Paket enthalten
              </span>
            )}
          </div>
        )}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-black text-[#061637]">{option.name}</h3>
            <p className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#061637]">
              {included ? 'inklusive' : option.price}
            </p>
          </div>
          <span
            className={cn(
              'motion-icon mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors',
              selected ? 'border-[#0b63ce] bg-[#0b63ce] text-white' : 'border-[#d7e7f7] text-[#9aa9bd]'
            )}
          >
            {selected ? <Check className="h-4 w-4" /> : mode === 'checkbox' ? <Square className="h-3.5 w-3.5" /> : <Circle className="h-3 w-3" />}
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
  selectedIds,
  onSelect,
  mode = 'radio',
  includedIds = [],
}: {
  number: string
  title: string
  options: PackageOption[]
  selectedIds: string[] | null
  onSelect: (id: string) => void
  mode?: 'radio' | 'checkbox'
  includedIds?: string[]
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
        {options.map((option) => {
          const included = includedIds.includes(option.id)
          const selected = included || (option.id === 'none'
            ? selectedIds !== null && selectedIds.length === 0
            : Boolean(selectedIds?.includes(option.id)))

          return (
            <OptionCard
              key={option.id}
              option={option}
              selected={selected}
              included={included}
              mode={mode}
              onSelect={() => onSelect(option.id)}
            />
          )
        })}
      </div>
      {mode === 'checkbox' && (
        <p className="mt-4 text-sm leading-6 text-[#52647d]">
          Mehrere Erweiterungen können gleichzeitig ausgewählt werden.
        </p>
      )}
    </section>
  )
}

function SelectionSummary({
  website,
  care,
  extensions,
  includedExtensions,
}: {
  website: PackageOption
  care: PackageOption
  extensions: PackageOption[]
  includedExtensions: PackageOption[]
}) {
  const setup = website.setupPrice + extensions.reduce((sum, option) => sum + option.setupPrice, 0)
  const monthly = care.monthlyPrice ?? 0
  const extensionNames = [
    ...includedExtensions.map((option) => `${option.name} (enthalten)`),
    ...extensions.map((option) => option.name),
  ]
  const extensionLabel = extensionNames.length > 0 ? extensionNames.join(', ') : 'Keine Erweiterung'

  const saveSelectionForContact = () => {
    try {
      window.sessionStorage.setItem(
        'localsites:pricing-selection',
        [
          'Ich interessiere mich f\u00fcr folgende Paketauswahl:',
          '',
          `Website-Paket: ${website.name}`,
          `Betreuung: ${care.name}`,
          `Erweiterungen: ${extensionLabel}`,
          `Gesch\u00e4tzter Startpreis: ab ${formatCurrency(setup)}`,
          `Gesch\u00e4tzte monatliche Kosten: ${monthly === 0 ? '0 \u20ac/Monat' : `${formatCurrency(monthly)}/Monat`}`,
        ].join('\n')
      )
      window.sessionStorage.setItem(
        'localsites:pricing-summary',
        JSON.stringify({
          website: website.name,
          care: care.name,
          extensions: extensionNames.length > 0 ? extensionNames : ['Keine Erweiterung'],
          setup: `ab ${formatCurrency(setup)}`,
          monthly: monthly === 0 ? '0 \u20ac/Monat' : `${formatCurrency(monthly)}/Monat`,
        })
      )
    } catch {
      // The form remains usable when browser storage is unavailable.
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
          <dt className="font-bold text-[#52647d]">Website-Paket</dt>
          <dd className="mt-1 font-black text-[#061637]">{website.name}</dd>
        </div>
        <div>
          <dt className="font-bold text-[#52647d]">Betreuung</dt>
          <dd className="mt-1 font-black text-[#061637]">{care.name}</dd>
        </div>
        <div>
          <dt className="font-bold text-[#52647d]">Erweiterungen</dt>
          <dd className="mt-1 font-black leading-6 text-[#061637]">{extensionLabel}</dd>
        </div>
      </dl>

      <div className="my-6 h-px bg-[#d7e7f7]" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">geschätzter Startpreis</p>
          <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-[#061637]">ab {formatCurrency(setup)}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">geschätzte monatliche Kosten</p>
          <p className="mt-1 text-3xl font-black tracking-[-0.04em] text-[#061637]">
            {monthly === 0 ? '0 \u20ac/Monat' : `${formatCurrency(monthly)}/Monat`}
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
  const [extensionIds, setExtensionIds] = useState<string[] | null>(null)

  const includedExtensionIds = websiteId === 'request-system' ? REQUEST_SYSTEM_EXTENSIONS : NO_INCLUDED_EXTENSIONS

  const selection = useMemo(() => {
    const website = websiteOptions.find((option) => option.id === websiteId)
    const care = careOptions.find((option) => option.id === careId)
    const extensions = extensionOptions.filter((option) => extensionIds?.includes(option.id))
    const includedExtensions = extensionOptions.filter((option) => includedExtensionIds.includes(option.id))
    return { website, care, extensions, includedExtensions }
  }, [websiteId, careId, extensionIds, includedExtensionIds])

  const selectWebsite = (id: string) => {
    const isFirstWebsiteSelection = !websiteId
    setWebsiteId(id)
    if (id === 'request-system') {
      setExtensionIds((current) => current?.filter((extensionId) => extensionId !== 'board') ?? current)
    }
    if (isFirstWebsiteSelection) jumpTo(careRef)
  }

  const selectCare = (id: string) => {
    const isFirstCareSelection = !careId
    setCareId(id)
    if (isFirstCareSelection) jumpTo(extensionRef)
  }

  const selectExtension = (id: string) => {
    const isFirstExtensionSelection = extensionIds === null

    setExtensionIds((current) => {
      if (id === 'none') return []
      const selected = current ?? []
      return selected.includes(id) ? selected.filter((item) => item !== id) : [...selected, id]
    })

    if (isFirstExtensionSelection) jumpTo(summaryRef)
  }

  const isComplete = Boolean(selection.website && selection.care && extensionIds !== null)

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
      <div className="space-y-6">
        <SelectionStep
          number="1"
          title="Website-Paket wählen"
          options={websiteOptions}
          selectedIds={websiteId ? [websiteId] : null}
          onSelect={selectWebsite}
        />

        {websiteId && (
          <div ref={careRef}>
            <SelectionStep
              number="2"
              title="Monatliche Betreuung wählen"
              options={careOptions}
              selectedIds={careId ? [careId] : null}
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
              selectedIds={extensionIds}
              includedIds={includedExtensionIds}
              onSelect={selectExtension}
              mode="checkbox"
            />
          </div>
        )}
      </div>

      <aside ref={summaryRef} className="lg:sticky lg:top-28">
        {isComplete && selection.website && selection.care ? (
          <SelectionSummary
            website={selection.website}
            care={selection.care}
            extensions={selection.extensions}
            includedExtensions={selection.includedExtensions}
          />
        ) : (
          <div className="rounded-[12px] border border-dashed border-[#c6d9ec] bg-white/72 p-6 text-sm leading-6 text-[#52647d]">
            Wählen Sie Schritt für Schritt Ihr Paket aus. Die Zusammenfassung erscheint automatisch nach der Auswahl.
          </div>
        )}
      </aside>
    </div>
  )
}
