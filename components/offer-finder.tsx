'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Circle,
  MousePointer2,
  PencilLine,
} from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import {
  OFFER_SELECTION_STORAGE_KEY,
  OFFER_SUMMARY_STORAGE_KEY,
  allCareOptions,
  buildOfferRecommendation,
  createOfferSelectionMessage,
  formatEuro,
  pricingDisclosure,
  type AddOn,
  type CarePackage,
  type FinderAnswers,
  type FinderGoal,
  type OperationsScope,
  type StoredOfferSummary,
  type WebsiteScope,
  type WebsiteStatus,
} from '@/lib/offers'
import { cn } from '@/lib/utils'

type StepKey = 'goal' | 'website-status' | 'website-scope' | 'operations-scope' | 'add-ons'

type Choice<T extends string> = {
  value: T
  title: string
  description: string
}

const goalOptions: Choice<FinderGoal>[] = [
  { value: 'website', title: 'Eine neue oder bessere Website', description: 'Für einen professionellen Auftritt und klare Kontaktwege.' },
  { value: 'operations', title: 'Anfragen und Aufträge organisieren', description: 'Für mehr Übersicht nach dem ersten Kundenkontakt.' },
  { value: 'both', title: 'Beides miteinander verbinden', description: 'Von der Website bis zur zentralen Bearbeitung.' },
]

const websiteStatusOptions: Choice<WebsiteStatus>[] = [
  { value: 'none', title: 'Noch keine Website', description: 'Der Auftritt wird von Grund auf aufgebaut.' },
  { value: 'outdated', title: 'Vorhanden, aber veraltet oder zu einfach', description: 'Struktur, Wirkung und Kontaktführung sollen besser werden.' },
  { value: 'modern', title: 'Bereits modern und grundsätzlich passend', description: 'Es geht eher um Ergänzungen oder gezielte Weiterentwicklung.' },
]

const websiteScopeOptions: Choice<WebsiteScope>[] = [
  { value: 'compact', title: 'Kompakt', description: 'Bis zu 3 Leistungen auf einer übersichtlichen Seite.' },
  { value: 'business', title: 'Mehrere Seiten', description: 'Mehrere Seiten und bis zu 3 eigene Leistungsseiten.' },
  { value: 'pro', title: 'Umfangreicher Auftritt', description: 'Viele Leistungen, Inhalte, Standorte oder Anfragewege.' },
]

const operationsScopeOptions: Choice<OperationsScope>[] = [
  { value: 'inquiries', title: 'Anfragen im Blick behalten', description: 'Anfragen, Status und Wiedervorlagen zentral verwalten.' },
  { value: 'full', title: 'Kunden und Aufträge organisieren', description: 'Kunden, Angebote, Projekte, Aufgaben und Termine verbinden.' },
  { value: 'automation', title: 'Abläufe zusätzlich automatisieren', description: 'Mit Erinnerungen, Folgeaufgaben und individuellen Dashboards.' },
]

const addOnChoices: Choice<AddOn['id']>[] = [
  { value: 'logo-refresh', title: 'Logo oder Erscheinungsbild', description: 'Das visuelle Auftreten modernisieren.' },
  { value: 'copywriting', title: 'Unterstützung bei Texten', description: 'Leistungen klar und verständlich erklären.' },
  { value: 'google-profile', title: 'Google-Unternehmensprofil', description: 'Den lokalen Unternehmenseintrag sauber aufstellen.' },
  { value: 'review-qr', title: 'Bewertungslink und QR-Code', description: 'Bewertungen einfacher einsammeln.' },
  { value: 'calendly', title: 'Terminbuchung', description: 'Passende Termine online auswählbar machen.' },
  { value: 'ai-reception', title: 'KI-Empfang', description: 'Standardfragen beantworten und Kontaktdaten aufnehmen.' },
]

const stepMeta: Record<StepKey, { title: string; hint: string }> = {
  goal: { title: 'Was möchten Sie verbessern?', hint: 'Wählen Sie den Bereich, bei dem der größte Nutzen entstehen soll.' },
  'website-status': { title: 'Wie ist Ihre aktuelle Website aufgestellt?', hint: 'So können wir den tatsächlichen Ausgangspunkt besser einordnen.' },
  'website-scope': { title: 'Wie umfangreich soll die Website werden?', hint: 'Eine grobe Einschätzung reicht. Details klären wir später persönlich.' },
  'operations-scope': { title: 'Was möchten Sie zentral verwalten?', hint: 'Wählen Sie den Umfang, der Ihren Arbeitsalltag am besten beschreibt.' },
  'add-ons': { title: 'Welche Ergänzungen sind interessant?', hint: 'Mehrfachauswahl möglich. Sie können auch ohne Zusatz starten.' },
}

function getStepKeys(answers: FinderAnswers): StepKey[] {
  const keys: StepKey[] = ['goal']
  const websiteRelevant = answers.goal === 'website' || answers.goal === 'both'
  const operationsRelevant = answers.goal === 'operations' || answers.goal === 'both'

  if (websiteRelevant) keys.push('website-status', 'website-scope')
  if (operationsRelevant) keys.push('operations-scope')
  keys.push('add-ons')
  return keys
}

function OptionGrid<T extends string>({
  name,
  options,
  value,
  onChange,
}: {
  name: string
  options: Choice<T>[]
  value?: T
  onChange: (value: T) => void
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-3">
      {options.map((option) => {
        const selected = value === option.value
        return (
          <label
            key={option.value}
            className={cn(
              'motion-press group flex min-h-32 cursor-pointer items-start gap-4 rounded-[8px] border bg-white p-5 shadow-[0_12px_36px_rgba(15,55,100,0.05)] transition-colors focus-within:ring-2 focus-within:ring-[#0b63ce]/35',
              selected ? 'border-[#0b63ce] bg-[#f2f7ff]' : 'border-[#d7e7f7] hover:border-[#0b63ce]/45'
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selected}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border',
                selected ? 'border-[#0b63ce] bg-[#0b63ce] text-white' : 'border-[#b9cce1] text-transparent'
              )}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="min-w-0">
              <span className="block font-black leading-6 text-[#061637]">{option.title}</span>
              <span className="mt-2 block text-sm leading-6 text-[#52647d]">{option.description}</span>
            </span>
          </label>
        )
      })}
    </div>
  )
}

function AddOnGrid({
  values,
  onToggle,
  onClear,
}: {
  values: AddOn['id'][]
  onToggle: (value: AddOn['id']) => void
  onClear: () => void
}) {
  const isEmpty = values.length === 0

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {addOnChoices.map((option) => {
        const selected = values.includes(option.value)
        return (
          <label
            key={option.value}
            className={cn(
              'motion-press flex min-h-28 cursor-pointer items-start gap-3 rounded-[8px] border bg-white p-4 transition-colors focus-within:ring-2 focus-within:ring-[#0b63ce]/35',
              selected ? 'border-[#0b63ce] bg-[#f2f7ff]' : 'border-[#d7e7f7] hover:border-[#0b63ce]/45'
            )}
          >
            <input
              type="checkbox"
              checked={selected}
              onChange={() => onToggle(option.value)}
              className="sr-only"
            />
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] border',
                selected ? 'border-[#0b63ce] bg-[#0b63ce] text-white' : 'border-[#b9cce1] text-transparent'
              )}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            <span>
              <span className="block font-black leading-6 text-[#061637]">{option.title}</span>
              <span className="mt-1 block text-sm leading-5 text-[#52647d]">{option.description}</span>
            </span>
          </label>
        )
      })}
      <label
        className={cn(
          'motion-press flex min-h-28 cursor-pointer items-start gap-3 rounded-[8px] border bg-white p-4 transition-colors focus-within:ring-2 focus-within:ring-[#0b63ce]/35',
          isEmpty ? 'border-[#0b63ce] bg-[#f2f7ff]' : 'border-[#d7e7f7] hover:border-[#0b63ce]/45'
        )}
      >
        <input type="checkbox" checked={isEmpty} onChange={onClear} className="sr-only" />
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-[5px] border',
            isEmpty ? 'border-[#0b63ce] bg-[#0b63ce] text-white' : 'border-[#b9cce1] text-transparent'
          )}
        >
          <Check className="h-3.5 w-3.5" />
        </span>
        <span>
          <span className="block font-black leading-6 text-[#061637]">Keine oder noch unsicher</span>
          <span className="mt-1 block text-sm leading-5 text-[#52647d]">Zusatzmodule können später ergänzt werden.</span>
        </span>
      </label>
    </div>
  )
}

function FinderQuestion({
  step,
  answers,
  onSingleChange,
  onAddOnToggle,
  onAddOnsClear,
}: {
  step: StepKey
  answers: FinderAnswers
  onSingleChange: (step: Exclude<StepKey, 'add-ons'>, value: string) => void
  onAddOnToggle: (value: AddOn['id']) => void
  onAddOnsClear: () => void
}) {
  const meta = stepMeta[step]

  return (
    <fieldset className="min-w-0">
      <legend className="text-2xl font-black tracking-[-0.035em] text-[#061637] sm:text-3xl">{meta.title}</legend>
      <p className="mb-6 mt-2 text-sm leading-6 text-[#52647d]">{meta.hint}</p>
      {step === 'goal' && <OptionGrid name="finder-goal" options={goalOptions} value={answers.goal} onChange={(value) => onSingleChange(step, value)} />}
      {step === 'website-status' && <OptionGrid name="finder-website-status" options={websiteStatusOptions} value={answers.websiteStatus} onChange={(value) => onSingleChange(step, value)} />}
      {step === 'website-scope' && <OptionGrid name="finder-website-scope" options={websiteScopeOptions} value={answers.websiteScope} onChange={(value) => onSingleChange(step, value)} />}
      {step === 'operations-scope' && <OptionGrid name="finder-operations-scope" options={operationsScopeOptions} value={answers.operationsScope} onChange={(value) => onSingleChange(step, value)} />}
      {step === 'add-ons' && <AddOnGrid values={answers.addOnInterests} onToggle={onAddOnToggle} onClear={onAddOnsClear} />}
    </fieldset>
  )
}

export function OfferFinder({ initialWebsiteId }: { initialWebsiteId?: WebsitePackageId | null }) {
  const initialScope: WebsiteScope | undefined = initialWebsiteId === 'start' ? 'compact' : initialWebsiteId === 'pro' ? 'pro' : initialWebsiteId === 'business' ? 'business' : undefined
  const [answers, setAnswers] = useState<FinderAnswers>({
    goal: initialScope ? 'website' : undefined,
    websiteStatus: initialScope ? 'outdated' : undefined,
    websiteScope: initialScope,
    addOnInterests: [],
  })
  const [currentStep, setCurrentStep] = useState<StepKey>(initialScope ? 'add-ons' : 'goal')
  const [showResult, setShowResult] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [careOverride, setCareOverride] = useState<CarePackage['id'] | undefined>()
  const advanceTimerRef = useRef<number | null>(null)
  const questionRef = useRef<HTMLDivElement | null>(null)
  const resultRef = useRef<HTMLDivElement | null>(null)

  const steps = useMemo(() => getStepKeys(answers), [answers])
  const currentIndex = Math.max(steps.indexOf(currentStep), 0)
  const progressTotal = answers.goal ? steps.length : 5
  const progressCurrent = answers.goal ? currentIndex + 1 : 1
  const recommendation = useMemo(() => buildOfferRecommendation(answers, careOverride), [answers, careOverride])

  useEffect(() => () => {
    if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current)
  }, [])

  const moveToStep = (step: StepKey) => {
    setCurrentStep(step)
    window.requestAnimationFrame(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      questionRef.current?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
    })
  }

  const handleSingleChange = (step: Exclude<StepKey, 'add-ons'>, rawValue: string) => {
    const nextAnswers: FinderAnswers = {
      ...answers,
      goal: step === 'goal' ? rawValue as FinderGoal : answers.goal,
      websiteStatus: step === 'website-status' ? rawValue as WebsiteStatus : answers.websiteStatus,
      websiteScope: step === 'website-scope' ? rawValue as WebsiteScope : answers.websiteScope,
      operationsScope: step === 'operations-scope' ? rawValue as OperationsScope : answers.operationsScope,
    }
    setAnswers(nextAnswers)

    if (isEditing || showResult) return
    if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current)

    const nextSteps = getStepKeys(nextAnswers)
    const nextStep = nextSteps[nextSteps.indexOf(step) + 1]
    if (nextStep) {
      advanceTimerRef.current = window.setTimeout(() => moveToStep(nextStep), 160)
    }
  }

  const handleAddOnToggle = (value: AddOn['id']) => {
    setAnswers((current) => ({
      ...current,
      addOnInterests: current.addOnInterests.includes(value)
        ? current.addOnInterests.filter((item) => item !== value)
        : [...current.addOnInterests, value],
    }))
  }

  const showRecommendation = () => {
    setShowResult(true)
    setIsEditing(false)
    window.requestAnimationFrame(() => {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      resultRef.current?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
    })
  }

  const saveRecommendation = () => {
    const summary: StoredOfferSummary = {
      website: recommendation.website?.name ?? null,
      operatingCenter: recommendation.operatingCenter?.name ?? null,
      care: recommendation.care.name,
      extensions: recommendation.addOns.length > 0 ? recommendation.addOns.map((item) => item.name) : ['Keine ausgewählt'],
      setup: `ab ${formatEuro(recommendation.setupTotal)}`,
      monthly: recommendation.monthlyTotal === 0 ? '0 €/Monat' : `${formatEuro(recommendation.monthlyTotal)}/Monat`,
      reason: recommendation.reason,
      packageName: recommendation.isDigitalBusinessBundle ? 'Digitaler Betrieb' : undefined,
      individualValue: recommendation.individualValue ? `ab ${formatEuro(recommendation.individualValue)}` : undefined,
      packageAdvantage: recommendation.packageAdvantage ? formatEuro(recommendation.packageAdvantage) : undefined,
      includedSupport: recommendation.isDigitalBusinessBundle ? 'Drei Monate enthalten' : undefined,
      externalCosts: 'Je nach eingesetzten Diensten separat',
    }

    try {
      window.sessionStorage.setItem(OFFER_SELECTION_STORAGE_KEY, createOfferSelectionMessage(recommendation))
      window.sessionStorage.setItem(OFFER_SUMMARY_STORAGE_KEY, JSON.stringify(summary))
    } catch {
      // Das Kontaktformular bleibt auch ohne Browser-Speicher nutzbar.
    }

    window.location.assign('/#kontakt')
  }

  return (
    <div id="paket-finder" className="border-y border-[#d7e7f7] bg-white">
      <div className="border-b border-[#e5eef7] px-5 py-5 sm:px-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6ff] text-[#0b63ce]">
              <MousePointer2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Paket-Finder</p>
              <p className="font-black text-[#061637]">In wenigen Schritten zur passenden Lösung</p>
            </div>
          </div>
          {!isEditing && !showResult && (
            <p className="text-sm font-bold text-[#52647d]">
              {answers.goal ? `Frage ${currentIndex + 1} von ${steps.length}` : 'Start'}
            </p>
          )}
        </div>
        {!isEditing && !showResult && (
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[#e7eff8]" aria-hidden="true">
            <div
              className="h-full rounded-full bg-[#0b63ce] transition-[width] duration-300"
              style={{ width: `${(progressCurrent / progressTotal) * 100}%` }}
            />
          </div>
        )}
      </div>

      {!showResult && (
        <div ref={questionRef} className="px-5 py-8 sm:px-7 sm:py-10">
          {isEditing ? (
            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step} className="border-b border-[#e5eef7] pb-10 last:border-0 last:pb-0">
                  <FinderQuestion
                    step={step}
                    answers={answers}
                    onSingleChange={handleSingleChange}
                    onAddOnToggle={handleAddOnToggle}
                    onAddOnsClear={() => setAnswers((current) => ({ ...current, addOnInterests: [] }))}
                  />
                </div>
              ))}
              <FlowButton text="Empfehlung aktualisieren" tone="orange" onClick={showRecommendation} className="bg-white" />
            </div>
          ) : (
            <>
              <FinderQuestion
                step={currentStep}
                answers={answers}
                onSingleChange={handleSingleChange}
                onAddOnToggle={handleAddOnToggle}
                onAddOnsClear={() => setAnswers((current) => ({ ...current, addOnInterests: [] }))}
              />
              <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
                {currentIndex > 0 ? (
                  <button
                    type="button"
                    onClick={() => moveToStep(steps[currentIndex - 1])}
                    className="inline-flex min-h-11 items-center gap-2 px-1 text-sm font-black text-[#52647d] hover:text-[#061637] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/35"
                  >
                    <ArrowLeft className="h-4 w-4" /> Zurück
                  </button>
                ) : <span />}
                {currentStep === 'add-ons' && (
                  <FlowButton text="Empfehlung anzeigen" tone="orange" onClick={showRecommendation} className="bg-white" />
                )}
              </div>
            </>
          )}
        </div>
      )}

      {showResult && (
        <div ref={resultRef} aria-live="polite" className="px-5 py-8 sm:px-7 sm:py-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-7 w-7 text-[#0b63ce]" />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Unsere Empfehlung</p>
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-4xl">
                {recommendation.isDigitalBusinessBundle ? 'Empfohlenes Gesamtpaket: Digitaler Betrieb' : 'Eine Lösung, die zu Ihrem Bedarf passt.'}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#52647d]">{recommendation.reason}</p>

              <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                <div className="border-t border-[#d7e7f7] pt-4">
                  <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#52647d]">Website</dt>
                  <dd className="mt-2 font-black text-[#061637]">{recommendation.website?.name ?? 'Nicht benötigt'}</dd>
                </div>
                <div className="border-t border-[#d7e7f7] pt-4">
                  <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#52647d]">Betriebszentrale</dt>
                  <dd className="mt-2 font-black text-[#061637]">{recommendation.operatingCenter?.name ?? 'Nicht benötigt'}</dd>
                </div>
                <div className="border-t border-[#d7e7f7] pt-4">
                  <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#52647d]">Betreuung</dt>
                  <dd className="mt-2 font-black text-[#061637]">{recommendation.care.name}</dd>
                </div>
                <div className="border-t border-[#d7e7f7] pt-4">
                  <dt className="text-xs font-black uppercase tracking-[0.14em] text-[#52647d]">Erweiterungen</dt>
                  <dd className="mt-2 font-black leading-6 text-[#061637]">
                    {recommendation.addOns.length > 0 ? recommendation.addOns.map((item) => item.name).join(', ') : 'Keine ausgewählt'}
                  </dd>
                </div>
              </dl>

              <fieldset className="mt-8">
                <legend className="text-sm font-black text-[#061637]">Optionale Betreuung auswählen</legend>
                <p className="mt-3 rounded-[8px] border border-[#cfe2f5] bg-[#f2f7ff] px-4 py-3 text-sm leading-6 text-[#415574]">
                  <span className="font-black text-[#061637]">Empfehlung: {recommendation.recommendedCare.name}.</span>{' '}
                  {recommendation.careRecommendationReason} Betreuung ist optional und wird nur bei Auswahl berechnet.
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {allCareOptions.map((care) => {
                    const selected = recommendation.care.id === care.id
                    return (
                      <label
                        key={care.id}
                        className={cn(
                          'flex min-h-12 cursor-pointer items-center gap-3 rounded-[8px] border px-4 py-3 text-sm focus-within:ring-2 focus-within:ring-[#0b63ce]/35',
                          selected ? 'border-[#0b63ce] bg-[#f2f7ff]' : 'border-[#d7e7f7] bg-white'
                        )}
                      >
                        <input
                          type="radio"
                          name="finder-care"
                          checked={selected}
                          onChange={() => setCareOverride(care.id)}
                          className="sr-only"
                        />
                        {selected ? <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0b63ce]" /> : <Circle className="h-4 w-4 shrink-0 text-[#9aabc0]" />}
                        <span className="font-bold text-[#061637]">{care.name}</span>
                        <span className="ml-auto text-[#52647d]">{care.price}</span>
                      </label>
                    )
                  })}
                </div>
                {recommendation.addOns.some((item) => item.id === 'ai-reception') && recommendation.care.id === 'none' && (
                  <p className="mt-3 text-sm leading-6 text-[#9a4e00]">Für den KI-Empfang wird im persönlichen Angebot eine passende Betreuung ergänzt.</p>
                )}
              </fieldset>
            </div>

            <aside className="border-l-4 border-[#0b63ce] bg-[#eef6ff] p-6 sm:p-8">
              {recommendation.isDigitalBusinessBundle && (
                <div className="mb-7 border-b border-[#cfe2f5] pb-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">Einzelwert</p>
                  <p className="mt-1 text-xl font-black text-[#061637]">ab {formatEuro(recommendation.individualValue ?? 0)}</p>
                  <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">Paketvorteil</p>
                  <p className="mt-1 text-xl font-black text-[#a94000]">{formatEuro(recommendation.packageAdvantage ?? 0)}</p>
                  <p className="mt-4 text-sm font-bold leading-6 text-[#263956]">Drei Monate Startbegleitung sind enthalten.</p>
                </div>
              )}
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">Geschätzter Startpreis</p>
              <p className="mt-2 text-4xl font-black tracking-[-0.04em] text-[#061637]">ab {formatEuro(recommendation.setupTotal)}</p>
              <p className="mt-7 text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">Geschätzte monatliche Kosten</p>
              <p className="mt-2 text-3xl font-black tracking-[-0.04em] text-[#061637]">
                {recommendation.monthlyTotal === 0 ? '0 €/Monat' : `${formatEuro(recommendation.monthlyTotal)}/Monat`}
              </p>
              <p className="mt-2 text-xs font-bold leading-5 text-[#52647d]">Betreuung optional. Airtable, Hosting, Domain, Chatbase und weitere externe Dienste werden separat ausgewiesen.</p>
              <p className="mt-6 text-sm leading-6 text-[#52647d]">
                Diese Empfehlung und die dargestellte Kostenspanne sind unverbindlich. Das endgültige Angebot erhalten Sie nach einer kurzen persönlichen Prüfung.
              </p>
              <p className="mt-3 text-xs font-bold leading-5 text-[#52647d]">{pricingDisclosure}</p>
              <FlowButton text="Persönliches Angebot anfordern" tone="orange" onClick={saveRecommendation} className="mt-6 w-full bg-white" />
              <div className="mt-5 flex flex-col gap-2 text-sm font-black">
                <button
                  type="button"
                  onClick={() => { setShowResult(false); setIsEditing(true) }}
                  className="inline-flex min-h-11 items-center gap-2 text-[#0b63ce] hover:text-[#061637] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/35"
                >
                  <PencilLine className="h-4 w-4" /> Auswahl ändern
                </button>
                <Link
                  href="/preise/vergleich"
                  className="inline-flex min-h-11 items-center gap-2 text-[#0b63ce] hover:text-[#061637] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/35"
                >
                  <ArrowRight className="h-4 w-4" /> Alle Pakete vergleichen
                </Link>
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  )
}

type WebsitePackageId = 'start' | 'business' | 'pro'
