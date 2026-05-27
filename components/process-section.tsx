'use client'

import { Search, Eye, Palette, Rocket, HeartHandshake } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Kurzer Website-Check',
    text: 'Wir prüfen, wie der aktuelle Online-Auftritt wirkt und wo Vertrauen verloren geht.',
  },
  {
    number: '02',
    icon: Eye,
    title: 'Kostenlose Vorschau',
    text: 'Sie sehen eine erste moderne Version, bevor Sie sich entscheiden.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Anpassung',
    text: 'Logo, Farben, Texte, Bilder und Leistungen werden auf Ihren Betrieb abgestimmt.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Livegang',
    text: 'Die Website wird veröffentlicht, getestet und für Anfragen vorbereitet.',
  },
  {
    number: '05',
    icon: HeartHandshake,
    title: 'Betreuung',
    text: 'Auf Wunsch kümmern wir uns weiter um Änderungen, Inhalte und lokale Sichtbarkeit.',
  },
]

export function ProcessSection() {
  return (
    <section id="ablauf" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6 text-balance">
            So läuft die Zusammenarbeit ab
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#D7E2EE] to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Card */}
                <div className="text-center">
                  {/* Number & Icon */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <span className="text-xs font-semibold text-[#3B82F6] mb-2">
                      {step.number}
                    </span>
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-[#0B1220] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#5B6B7D] leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
