'use client'

import { useState } from 'react'
import { CheckCircle, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Reveal } from '@/components/reveal'

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitError('')

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Contact request failed')
      form.reset()
      setIsSubmitted(true)
    } catch {
      setSubmitError('Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie direkt per E-Mail.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="kontakt" className="relative overflow-hidden bg-[#eef6ff] py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            Bereit für Ihre kostenlose Analyse?
          </p>
          <h2 className="max-w-[21rem] text-3xl font-black leading-tight tracking-[-0.025em] text-[#061637] sm:max-w-xl sm:text-5xl sm:tracking-[-0.05em]">
            Lassen Sie uns Ihr Projekt starten.
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
              <div className="py-16 text-center">
                <CheckCircle className="mx-auto mb-5 h-12 w-12 text-[#0b63ce]" />
                <h3 className="text-2xl font-black text-[#061637]">Danke für Ihre Anfrage.</h3>
                <p className="mt-2 text-[#52647d]">Ich melde mich zeitnah mit den nächsten Schritten.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="sr-only">Name</Label>
                  <Input id="name" name="name" required placeholder="Ihr Name" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                <div>
                  <Label htmlFor="unternehmen" className="sr-only">Unternehmen</Label>
                  <Input id="unternehmen" name="unternehmen" placeholder="Unternehmen optional" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                <div>
                  <Label htmlFor="email" className="sr-only">E-Mail</Label>
                  <Input id="email" name="email" type="email" required placeholder="E-Mail" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                <div>
                  <Label htmlFor="telefon" className="sr-only">Telefon</Label>
                  <Input id="telefon" name="telefon" type="tel" placeholder="Telefon optional" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="website" className="sr-only">Aktuelle Website</Label>
                  <Input id="website" name="website" type="url" placeholder="Aktuelle Website, falls vorhanden" className="h-12 rounded-md border-[#d7e7f7]" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="nachricht" className="sr-only">Nachricht</Label>
                  <Textarea
                    id="nachricht"
                    name="nachricht"
                    placeholder="Worum geht es?"
                    rows={4}
                    className="resize-none rounded-md border-[#d7e7f7]"
                  />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#52647d] sm:col-span-2">
                  <Lock className="h-3.5 w-3.5" />
                  Ihre Daten werden vertraulich behandelt.
                </div>
                <div className="sm:col-span-2">
                  <Button
                    disabled={isLoading}
                    className="h-12 w-full rounded-md bg-[#ff6a00] font-black text-white shadow-[0_16px_40px_rgba(255,106,0,0.22)] transition-transform active:scale-[0.98]"
                  >
                    {isLoading ? 'Wird gesendet...' : 'Kostenlosen Website-Check anfragen'}
                  </Button>
                </div>
                {submitError && <p className="text-sm text-red-600 sm:col-span-2">{submitError}</p>}
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
