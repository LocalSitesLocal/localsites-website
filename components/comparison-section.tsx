'use client'

import { X, Check } from 'lucide-react'

const oldItems = [
  'Nicht mobil optimiert',
  'Unklare Leistungen',
  'Keine starken Kontaktwege',
  'Wirkt veraltet',
  'Kaum Vertrauen auf den ersten Blick',
]

const newItems = [
  'Modernes Design',
  'Klare Leistungen',
  'Anfrage- und Telefonfokus',
  'Seriöse Außenwirkung',
  'Für lokale Suche vorbereitet',
]

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#EEF4F8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6 text-balance">
            Alte Website vs. moderner Auftritt
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Old */}
          <div className="bg-white rounded-2xl p-8 border border-[#D7E2EE] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                <X className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B1220]">
                Typischer alter Auftritt
              </h3>
            </div>
            <ul className="space-y-4">
              {oldItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="h-3.5 w-3.5 text-red-500" />
                  </div>
                  <span className="text-[#5B6B7D]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* New */}
          <div className="bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-2xl p-8 shadow-lg shadow-blue-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                LocalSites-Auftritt
              </h3>
            </div>
            <ul className="space-y-4">
              {newItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
