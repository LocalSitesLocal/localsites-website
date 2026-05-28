'use client'

import { Check } from 'lucide-react'

const values = [
  'Spezialisiert auf lokale Betriebe',
  'Klare Sprache statt Agentur-Blabla',
  'Modernes Design mit Anfragefokus',
  'Schneller Vorschau-Prozess',
  'Region Schweinfurt & Würzburg',
]

export function WhySection() {
  return (
    <section id="warum" className="py-20 lg:py-32 bg-[#0B1220] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[128px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8 text-balance">
              Warum LocalSites?
            </h2>

            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={value}
                  className="flex items-center gap-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg text-white/90">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0F2A43] to-[#0B1220] rounded-2xl border border-white/10 p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Stat Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                    <div className="text-xs text-white/60">Fokus auf lokale Betriebe</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 leading-tight break-words">Regional</div>
                    <div className="text-xs text-white/60">Schweinfurt & Würzburg</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-white/80 italic leading-relaxed">
                    &ldquo;Keine Agentur-Floskeln, keine komplizierten Prozesse. 
                    Nur moderne Websites, die für lokale Betriebe funktionieren.&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">LS</span>
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">LocalSites</div>
                      <div className="text-white/50 text-xs">Webdesign für Franken</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
