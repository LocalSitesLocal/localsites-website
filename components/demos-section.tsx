'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

const demos = [
  {
    title: 'Restaurant Landing Page',
    category: 'Gastronomie / Restaurant',
    description: 'Moderne Landingpage-Vorschau für ein Restaurant mit appetitlicher Präsentation, klarer Struktur und direkter Kontaktmöglichkeit.',
    href: 'https://german-restaurant-landing-page.vercel.app/',
    image: '/demo-previews/restaurant.png',
    imageClass: 'scale-125 translate-y-5 object-center group-hover:scale-[1.32]',
    gradient: 'from-orange-600 to-amber-500',
  },
  {
    title: 'Steuerberatung Landing Page',
    category: 'Steuerberatung / Kanzlei',
    description: 'Professionelle Landingpage-Vorschau für eine Steuerkanzlei mit Fokus auf Vertrauen, Leistungen und Terminvereinbarung.',
    href: 'https://landing-page-for-tax-advisory-7tyff6rxb.vercel.app/',
    image: '/demo-previews/steuerberatung.png',
    imageClass: 'scale-[1.18] object-center group-hover:scale-125',
    gradient: 'from-slate-700 to-blue-500',
  },
  {
    title: 'Haustechnik Landing Page',
    category: 'Haustechnik / Sanitär / Heizung',
    description: 'Premium-Website-Vorschau für einen lokalen Haustechnikbetrieb mit Fokus auf Vertrauen, Leistungen und Kontakt.',
    href: 'https://landing-page-for-haustechnik-company-ojhfxewlc.vercel.app/',
    image: '/demo-previews/haustechnik.png',
    imageClass: 'scale-[1.22] translate-y-3 object-center group-hover:scale-[1.28]',
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
              {/* Preview */}
              <a
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${demo.title} ansehen`}
                className={`relative block h-64 overflow-hidden bg-gradient-to-br ${demo.gradient}`}
              >
                <Image
                  src={demo.image}
                  alt={`Vorschau der ${demo.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className={`h-full w-full object-cover transition-transform duration-500 ${demo.imageClass}`}
                />
                <div className="absolute inset-0 bg-[#0B1220]/0 transition-colors duration-300 group-hover:bg-[#0B1220]/10" />
                <Badge
                  variant="secondary"
                  className="absolute top-4 left-4 bg-white/90 text-[#0B1220] border-0 shadow-sm backdrop-blur-sm"
                >
                  Demo-Projekt
                </Badge>
                <div className="absolute bottom-4 right-4 rounded-full bg-white/90 p-2 text-[#0B1220] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-0.5">
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>

              {/* Content */}
              <div className="p-6 text-center">
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
                  asChild
                  variant="outline"
                  className="w-full border-[#D7E2EE] hover:bg-[#EEF4F8] hover:border-[#3B82F6] group/btn"
                >
                  <a href={demo.href} target="_blank" rel="noopener noreferrer">
                    Vorschau ansehen
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
