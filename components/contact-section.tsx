'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CheckCircle, Lock, MousePointer2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/reveal'
import {
  OFFER_SELECTION_STORAGE_KEY,
  OFFER_SUMMARY_STORAGE_KEY,
  type StoredOfferSummary,
} from '@/lib/offers'

const CALENDLY_URL = 'https://calendly.com/ki-contentstudio/30min?hide_event_type_details=1&hide_gdpr_banner=1'

function parsePricingSummary(value: string | null): StoredOfferSummary | null {
  if (!value) return null

  try {
    const parsed = JSON.parse(value) as Partial<StoredOfferSummary>
    const legacyExtension = (parsed as Partial<StoredOfferSummary> & { extension?: string }).extension
    const extensions = Array.isArray(parsed.extensions)
      ? parsed.extensions.filter((item): item is string => typeof item === 'string')
      : legacyExtension
        ? [legacyExtension]
        : []

    const website = typeof parsed.website === 'string' ? parsed.website : null
    const operatingCenter = typeof parsed.operatingCenter === 'string' ? parsed.operatingCenter : null

    if ((!website && !operatingCenter) || !parsed.care || !parsed.setup || !parsed.monthly) {
      return null
    }

    return {
      website,
      operatingCenter,
      care: parsed.care,
      extensions: extensions.length > 0 ? extensions : ['Keine ausgewählt'],
      setup: parsed.setup,
      monthly: parsed.monthly,
      reason: typeof parsed.reason === 'string' ? parsed.reason : undefined,
    }
  } catch {
    return null
  }
}

function PricingSelectionCard({ summary }: { summary: StoredOfferSummary }) {
  return (
    <div className="rounded-[8px] border border-[#0b63ce]/30 bg-[linear-gradient(145deg,#ffffff_0%,#eef6ff_58%,#f8fbff_100%)] p-5 shadow-[0_18px_55px_rgba(11,99,206,0.12)]">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef6ff] text-[#0b63ce]">
          <MousePointer2 className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Ihre Auswahl</p>
          <h3 className="text-xl font-black text-[#061637]">Ihre Empfehlung</h3>
        </div>
      </div>

      <dl className="grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-bold text-[#52647d]">Website</dt>
          <dd className="mt-1 font-black text-[#061637]">{summary.website ?? 'Nicht benötigt'}</dd>
        </div>
        <div>
          <dt className="font-bold text-[#52647d]">Betriebszentrale</dt>
          <dd className="mt-1 font-black text-[#061637]">{summary.operatingCenter ?? 'Nicht benötigt'}</dd>
        </div>
        <div>
          <dt className="font-bold text-[#52647d]">Betreuung</dt>
          <dd className="mt-1 font-black text-[#061637]">{summary.care}</dd>
        </div>
        <div>
          <dt className="font-bold text-[#52647d]">Erweiterungen</dt>
          <dd className="mt-1 font-black leading-6 text-[#061637]">{summary.extensions.join(', ')}</dd>
        </div>
      </dl>

      {summary.reason && <p className="mt-5 border-l-2 border-[#0b63ce] pl-4 text-sm leading-6 text-[#52647d]">{summary.reason}</p>}

      <div className="my-5 h-px bg-[#cfe2f5]" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">geschätzter Startpreis</p>
          <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#061637]">{summary.setup}</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-[#52647d]">
            geschätzte monatliche Kosten
          </p>
          <p className="mt-1 text-2xl font-black tracking-[-0.04em] text-[#061637]">{summary.monthly}</p>
        </div>
      </div>
    </div>
  )
}

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [showCalendly, setShowCalendly] = useState(false)
  const [message, setMessage] = useState('')
  const [pricingSummary, setPricingSummary] = useState<StoredOfferSummary | null>(null)
  const isSubmittingRef = useRef(false)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedSelection = window.sessionStorage.getItem(OFFER_SELECTION_STORAGE_KEY)
      const savedSummary = window.sessionStorage.getItem(OFFER_SUMMARY_STORAGE_KEY)

      if (savedSelection) {
        setMessage(savedSelection)
        window.sessionStorage.removeItem(OFFER_SELECTION_STORAGE_KEY)
      }

      if (savedSummary) {
        setPricingSummary(parsePricingSummary(savedSummary))
        window.sessionStorage.removeItem(OFFER_SUMMARY_STORAGE_KEY)
      }
    })

    return () => window.cancelAnimationFrame(frame)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmittingRef.current) return

    isSubmittingRef.current = true
    setIsLoading(true)
    setSubmitError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 15_000)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      if (!response.ok) {
        const result = await response.json().catch(() => null)
        throw new Error(result?.error || 'Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie direkt per E-Mail.')
      }
      form.reset()
      setMessage('')
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError(
        error instanceof DOMException && error.name === 'AbortError'
          ? 'Die Anfrage dauert zu lange. Bitte versuchen Sie es erneut oder schreiben Sie direkt per E-Mail.'
          : error instanceof Error
            ? error.message
            : 'Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie direkt per E-Mail.'
      )
    } finally {
      window.clearTimeout(timeout)
      isSubmittingRef.current = false
      setIsLoading(false)
    }
  }

  return (
    <section id="kontakt" className="relative overflow-hidden bg-[#eef6ff] py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            {pricingSummary ? 'Bereit für Ihre unverbindliche Paketanfrage?' : 'Bereit für Ihre kostenlose Ersteinschätzung?'}
          </p>
          <h2 className="max-w-[21rem] text-3xl font-black leading-tight tracking-[-0.025em] text-[#061637] sm:max-w-xl sm:text-5xl sm:tracking-[-0.05em]">
            {pricingSummary ? 'Lassen Sie uns Ihre Auswahl konkretisieren.' : 'Lassen Sie uns Ihr Projekt starten.'}
          </h2>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-[#415574]">
            {['Unverbindlich', 'Schnell', 'Persönlich'].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-[#0b63ce]" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            id="kontakt-form"
            className="rounded-[10px] border border-[#d7e7f7] bg-white/86 p-5 shadow-[0_24px_80px_rgba(15,55,100,0.1)] backdrop-blur"
          >
            {isSubmitted ? (
              <div className="text-center" role="status" aria-live="polite">
                <div className="mx-auto max-w-xl py-8">
                  <CheckCircle className="mx-auto mb-5 h-12 w-12 text-[#0b63ce]" />
                  <h3 className="text-2xl font-black text-[#061637]">Danke für Ihre Anfrage.</h3>
                  <p className="mt-2 text-[#52647d]">
                    Ihre Anfrage wurde gesendet. Optional können Sie jetzt einen passenden Termin auswählen.
                  </p>
                </div>
                {showCalendly ? (
                  <div className="overflow-hidden rounded-md border border-[#d7e7f7] bg-white">
                    <iframe
                      src={CALENDLY_URL}
                      title="Termin über Calendly auswählen"
                      className="h-[720px] w-full border-0"
                    />
                  </div>
                ) : (
                  <div className="mx-auto max-w-xl pb-8">
                    <Button
                      type="button"
                      onClick={() => setShowCalendly(true)}
                      className="h-12 bg-[#0b63ce] px-6 font-black text-white hover:bg-[#061637]"
                    >
                      Terminplanung öffnen
                    </Button>
                    <p className="mt-3 text-xs leading-5 text-[#52647d]">
                      Erst mit dem Öffnen wird Calendly geladen. Es gelten unsere{' '}
                      <Link href="/datenschutz" className="font-bold text-[#0b63ce] underline-offset-4 hover:underline">
                        Datenschutzhinweise
                      </Link>.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="sr-only">Name</Label>
                  <Input id="name" name="name" autoComplete="name" required placeholder="Ihr Name" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                <div>
                  <Label htmlFor="unternehmen" className="sr-only">Unternehmen</Label>
                  <Input id="unternehmen" name="unternehmen" autoComplete="organization" placeholder="Unternehmen optional" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                <div>
                  <Label htmlFor="email" className="sr-only">E-Mail</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" required placeholder="E-Mail" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                <div>
                  <Label htmlFor="telefon" className="sr-only">Telefon</Label>
                  <Input id="telefon" name="telefon" type="tel" autoComplete="tel" placeholder="Telefon optional" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="website" className="sr-only">Aktuelle Website</Label>
                  <Input id="website" name="website" type="url" placeholder="Aktuelle Website, falls vorhanden" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                {pricingSummary && (
                  <div className="sm:col-span-2">
                    <PricingSelectionCard summary={pricingSummary} />
                  </div>
                )}
                <div className="sm:col-span-2">
                  <Label htmlFor="nachricht" className="sr-only">Nachricht</Label>
                  <Textarea
                    id="nachricht"
                    name="nachricht"
                    placeholder="Worum geht es?"
                    rows={pricingSummary ? 3 : 4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className={pricingSummary ? 'sr-only' : 'resize-none rounded-md border-[#d7e7f7]'}
                  />
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#52647d] sm:col-span-2">
                  <Lock className="h-3.5 w-3.5" />
                  <span>Ihre Daten werden vertraulich behandelt.</span>
                  <Link href="/datenschutz" className="font-bold text-[#0b63ce] underline-offset-4 hover:underline">
                    Hinweise zum Datenschutz
                  </Link>
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    aria-busy={isLoading}
                    className="h-12 w-full rounded-md bg-[#c94f00] font-black text-white shadow-[0_16px_40px_rgba(201,79,0,0.22)] transition-colors hover:bg-[#a94000] active:scale-[0.98]"
                  >
                    {isLoading
                      ? 'Wird gesendet...'
                      : pricingSummary
                        ? 'Paketauswahl unverbindlich anfragen'
                        : 'Kostenlose Ersteinschätzung anfragen'}
                  </Button>
                </div>
                {submitError && <p role="alert" aria-live="assertive" className="text-sm text-red-600 sm:col-span-2">{submitError}</p>}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
