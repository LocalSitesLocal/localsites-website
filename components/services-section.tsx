'use client'

import { 
  FileText, 
  Layers, 
  MapPin, 
  PenTool, 
  Phone, 
  Settings 
} from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Landingpages',
    text: 'Eine moderne Seite, die Leistungen, Vertrauen und Kontakt klar zusammenführt.',
  },
  {
    icon: Layers,
    title: 'Komplette Websites',
    text: 'Mehrere Seiten für Unternehmen, die professionell und vollständig auftreten wollen.',
  },
  {
    icon: MapPin,
    title: 'Google Business Optimierung',
    text: 'Profil, Leistungen, Bilder und lokale Suchbegriffe sauber aufbereitet.',
  },
  {
    icon: PenTool,
    title: 'Texte & Struktur',
    text: 'Klare Texte, die Unternehmer verstehen und Kunden überzeugen.',
  },
  {
    icon: Phone,
    title: 'Kontakt & Anfragen',
    text: 'Telefon-Buttons, Formulare und klare CTAs für mehr direkte Kontaktaufnahmen.',
  },
  {
    icon: Settings,
    title: 'Laufende Betreuung',
    text: 'Änderungen, neue Inhalte und technische Pflege nach dem Livegang.',
  },
]

export function ServicesSection() {
  return (
    <section id="leistungen" className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6 text-balance">
            Was LocalSites für Betriebe übernimmt
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-[#EEF4F8] rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[#3B82F6] hover:to-[#38BDF8] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                <service.icon className="h-6 w-6 text-[#3B82F6]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B1220] group-hover:text-white mb-3 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#5B6B7D] group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
