'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle, Globe, MessageSquare, Search } from 'lucide-react'

export function HeroSection() {
  const mockupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mockupRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 10
      const y = (clientY / innerHeight - 0.5) * 10
      mockupRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#0B1220] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#38BDF8]/15 rounded-full blur-[128px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Chip */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
              <span className="text-sm text-white/80">
                Websites für lokale Betriebe in Schweinfurt & Würzburg
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 text-balance">
              Moderne Websites, die lokale Betriebe{' '}
              <span className="gradient-text">professioneller wirken lassen.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 text-pretty">
              LocalSites erstellt hochwertige Websites, Landingpages und Google-optimierte 
              Online-Auftritte für lokale Unternehmen – klar, modern und auf Anfragen ausgelegt.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] hover:from-[#2563EB] hover:to-[#0EA5E9] text-white border-0 shadow-lg shadow-blue-500/25 group text-base px-8"
              >
                <a href="#kontakt">
                  Erstgespräch vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/5 hover:text-white text-base px-8"
              >
                <a href="#demos">
                  Demo-Websites ansehen
                </a>
              </Button>
            </div>

            {/* Trust Bullets */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start text-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="h-4 w-4 text-[#38BDF8]" />
                <span>Kostenlose Website-Vorschau möglich</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="h-4 w-4 text-[#38BDF8]" />
                <span>Für lokale Betriebe</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="h-4 w-4 text-[#38BDF8]" />
                <span>Fokus auf Anfragen & Vertrauen</span>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative lg:pl-8 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div
              ref={mockupRef}
              className="relative transition-transform duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Main Mockup Card */}
              <div className="relative bg-gradient-to-br from-[#0F2A43] to-[#0B1220] rounded-2xl border border-white/10 p-6 shadow-2xl glow-blue">
                {/* Before/After Header */}
                <div className="flex gap-4 mb-6">
                  <div className="flex-1 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="text-xs text-red-400 font-medium">Vorher</span>
                    </div>
                    <p className="text-xs text-white/60">Kein moderner Online-Auftritt</p>
                  </div>
                  <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-emerald-400 font-medium">Nachher</span>
                    </div>
                    <p className="text-xs text-white/60">Klare Website mit Kontaktfokus</p>
                  </div>
                </div>

                {/* Browser Mockup */}
                <div className="bg-[#0B1220] rounded-xl border border-white/10 overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-white/10 rounded-md px-3 py-1.5 text-xs text-white/40 text-center">
                        ihr-betrieb.de
                      </div>
                    </div>
                  </div>
                  
                  {/* Website Content Preview */}
                  <div className="p-4 space-y-4">
                    <div className="h-3 w-32 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded" />
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-white/10 rounded" />
                      <div className="h-2 w-4/5 bg-white/10 rounded" />
                      <div className="h-2 w-3/5 bg-white/10 rounded" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-24 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-md" />
                      <div className="h-8 w-20 bg-white/10 rounded-md" />
                    </div>
                  </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                    <Globe className="h-5 w-5 text-[#3B82F6] mx-auto mb-2" />
                    <span className="text-xs text-white/70">Leistungen</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                    <MessageSquare className="h-5 w-5 text-[#38BDF8] mx-auto mb-2" />
                    <span className="text-xs text-white/70">Anfrage</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                    <Search className="h-5 w-5 text-[#3B82F6] mx-auto mb-2" />
                    <span className="text-xs text-white/70">Google Sichtbarkeit</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg animate-bounce">
                Neu gestaltet
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#EEF4F8] to-transparent" />
    </section>
  )
}
