'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const demos = [
  {
    title: 'Heß Haustechnik',
    category: 'Haustechnik / Sanitär / Heizung',
    description: 'Premium-Website-Vorschau für einen lokalen Haustechnikbetrieb mit Fokus auf Vertrauen, Leistungen und Kontakt.',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Isoliertechnik Niedermeyer',
    category: 'Isoliertechnik / Dämmtechnik',
    description: 'Technische Landingpage-Vorschau für Dämmtechnik, Industrie, Gewerbe und Anlagenbau.',
    gradient: 'from-slate-700 to-slate-500',
  },
  {
    title: 'Isoliermontage K+S GmbH',
    category: 'Technische Dämmung',
    description: 'Moderner Online-Auftritt für Isolierarbeiten, Brandschutz und industrielle Dämmleistungen.',
    gradient: 'from-emerald-600 to-teal-500',
  },
]

export function DemosSection() {
  return (
    <section id="demos" className="py-20 lg:py-32 bg-[#EEF4F8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6 text-balance">
            Website-Vorschauen für lokale Betriebe
          </h2>
          <p className="text-lg text-[#5B6B7D] text-pretty">
            Beispielhafte Demos, damit Unternehmen sofort sehen, wie ein moderner Auftritt aussehen könnte.
          </p>
        </div>

        {/* Demo Cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {demos.map((demo, index) => (
            <div
              key={demo.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-[#D7E2EE] hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Mockup Preview */}
              <div className={`relative h-56 bg-gradient-to-br ${demo.gradient} p-6`}>
                {/* Demo Badge */}
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 left-4 bg-white/20 text-white border-0 backdrop-blur-sm"
                >
                  Demo-Projekt
                </Badge>
                
                {/* Browser Mockup */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-white/10 border-b border-white/10">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="h-2 w-24 bg-white/30 rounded" />
                    <div className="h-1.5 w-full bg-white/20 rounded" />
                    <div className="h-1.5 w-4/5 bg-white/20 rounded" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs text-[#5B6B7D] uppercase tracking-wider font-medium mb-2">
                  {demo.category}
                </p>
                <h3 className="text-xl font-semibold text-[#0B1220] mb-3">
                  {demo.title}
                </h3>
                <p className="text-[#5B6B7D] text-sm leading-relaxed mb-4">
                  {demo.description}
                </p>
                <p className="text-xs text-[#5B6B7D]/70 italic mb-4">
                  Demo-Projekt / nicht offizielle Website
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-[#D7E2EE] hover:bg-[#EEF4F8] hover:border-[#3B82F6] group/btn"
                >
                  Vorschau ansehen
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
