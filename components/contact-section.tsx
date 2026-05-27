'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react'

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitError('')

    const form = e.currentTarget
    const sourceData = new FormData(form)
    const formData = new FormData()
    const fields: Array<[string, string]> = [
      ['Name', 'name'],
      ['Firma', 'firma'],
      ['Telefon', 'telefon'],
      ['E-Mail', 'email'],
      ['Nachricht', 'nachricht'],
      ['Website', 'website'],
    ]

    for (const [targetKey, sourceKey] of fields) {
      formData.append(targetKey, String(sourceData.get(sourceKey) ?? ''))
    }

    try {
      const response = await fetch('https://formspree.io/f/xnjrlzbg', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Formspree request failed')
      }

      form.reset()
      setIsSubmitted(true)
    } catch {
      setSubmitError(
        'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt per E-Mail.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="kontakt" className="py-20 lg:py-32 bg-[#EEF4F8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6 text-balance">
              Bereit für einen besseren ersten Eindruck?
            </h2>
            <p className="text-lg text-[#5B6B7D] mb-10 text-pretty">
              Wenn Ihr Betrieb online moderner, klarer und vertrauenswürdiger wirken soll, 
              ist ein kurzes Erstgespräch der nächste Schritt.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Phone className="h-5 w-5 text-[#3B82F6]" />
                </div>
                <div>
                  <div className="text-sm text-[#5B6B7D]">Telefon</div>
                  <a 
                    href="tel:+49000000000" 
                    className="text-[#0B1220] font-medium hover:text-[#3B82F6] transition-colors"
                  >
                    +49 000 000000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <Mail className="h-5 w-5 text-[#3B82F6]" />
                </div>
                <div>
                  <div className="text-sm text-[#5B6B7D]">E-Mail</div>
                  <a 
                    href="mailto:kontakt@localsites.de" 
                    className="text-[#0B1220] font-medium hover:text-[#3B82F6] transition-colors"
                  >
                    kontakt@localsites.de
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                  <MapPin className="h-5 w-5 text-[#3B82F6]" />
                </div>
                <div>
                  <div className="text-sm text-[#5B6B7D]">Region</div>
                  <div className="text-[#0B1220] font-medium">Schweinfurt / Würzburg</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg shadow-blue-500/5 border border-[#D7E2EE]">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-[#0B1220] mb-2">
                  Danke für Ihre Anfrage!
                </h3>
                <p className="text-[#5B6B7D]">
                  Ihre Anfrage wurde vorbereitet. Wir melden uns zeitnah.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold text-[#0B1220] mb-6">
                  Erstgespräch vereinbaren
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#0B1220]">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Ihr Name"
                        required
                        className="border-[#D7E2EE] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="firma" className="text-[#0B1220]">Firma</Label>
                      <Input
                        id="firma"
                        name="firma"
                        placeholder="Ihr Unternehmen"
                        required
                        className="border-[#D7E2EE] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefon" className="text-[#0B1220]">Telefon</Label>
                      <Input
                        id="telefon"
                        name="telefon"
                        type="tel"
                        placeholder="Ihre Telefonnummer"
                        required
                        className="border-[#D7E2EE] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-[#0B1220]">E-Mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Ihre E-Mail-Adresse"
                        required
                        className="border-[#D7E2EE] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-[#0B1220]">
                      Aktuelle Website <span className="text-[#5B6B7D] font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://ihre-website.de"
                      className="border-[#D7E2EE] focus:border-[#3B82F6] focus:ring-[#3B82F6]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nachricht" className="text-[#0B1220]">Nachricht</Label>
                    <Textarea
                      id="nachricht"
                      name="nachricht"
                      placeholder="Erzählen Sie uns von Ihrem Projekt..."
                      rows={4}
                      className="border-[#D7E2EE] focus:border-[#3B82F6] focus:ring-[#3B82F6] resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox id="datenschutz" required className="mt-1" />
                    <Label 
                      htmlFor="datenschutz" 
                      className="text-sm text-[#5B6B7D] font-normal leading-relaxed cursor-pointer"
                    >
                      Ich habe die Datenschutzhinweise gelesen und stimme der Verarbeitung meiner Daten zu.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] hover:from-[#2563EB] hover:to-[#0EA5E9] text-white shadow-lg shadow-blue-500/25 group"
                  >
                    {isLoading ? (
                      'Wird gesendet...'
                    ) : (
                      <>
                        Anfrage senden
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  {submitError && (
                    <p role="alert" className="text-sm text-red-600">
                      {submitError}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
