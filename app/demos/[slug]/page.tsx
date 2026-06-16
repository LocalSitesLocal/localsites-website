import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarCheck, CheckCircle, MapPin, Phone } from 'lucide-react'

const demos = {
  restaurant: {
    label: 'Gastronomie',
    title: 'Restaurant Demo',
    headline: 'Ein moderner Auftritt, der Reservierungen einfacher macht.',
    description:
      'Eine klare Landingpage für Restaurants mit Speisekarten-Fokus, starker Bildsprache und direkter Kontaktmöglichkeit.',
    image: '/demo-previews/restaurant-mood.png',
    gradient: 'from-orange-600 to-amber-500',
    primary: 'Tisch reservieren',
    features: ['Speisekarte prominent sichtbar', 'Reservierung direkt im Blick', 'Vertrauen durch klare Infos'],
  },
  steuerberatung: {
    label: 'Steuerberatung',
    title: 'Steuerberatung Demo',
    headline: 'Seriös, klar und auf Erstgespräche ausgerichtet.',
    description:
      'Eine professionelle Website-Vorschau für Kanzleien mit Leistungsübersicht, Vertrauenselementen und einfachem Kontaktweg.',
    image: '/demo-previews/steuerberatung-mood.png',
    gradient: 'from-slate-700 to-blue-500',
    primary: 'Termin anfragen',
    features: ['Leistungen schnell erfassbar', 'Ruhiges Kanzlei-Design', 'Kontakt ohne Umwege'],
  },
  haustechnik: {
    label: 'Haustechnik',
    title: 'Haustechnik Demo',
    headline: 'Eine Website, die Kompetenz und schnelle Hilfe vermittelt.',
    description:
      'Eine Premium-Vorschau für lokale Handwerksbetriebe mit Fokus auf Leistungen, regionale Nähe und Kontaktanfragen.',
    image: '/demo-previews/haustechnik-mood.png',
    gradient: 'from-emerald-600 to-teal-500',
    primary: 'Anfrage senden',
    features: ['Notdienst und Leistungen klar', 'Regionaler Vertrauensaufbau', 'Mobil sauber nutzbar'],
  },
}

type DemoSlug = keyof typeof demos

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }))
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const demo = demos[slug as DemoSlug]

  if (!demo) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#EEF4F8] text-[#0B1220]">
      <section className={`relative overflow-hidden bg-gradient-to-br ${demo.gradient} text-white`}>
        <div className="absolute inset-0 bg-[#0B1220]/30" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <Link
              href="/#demos"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zu den Demos
            </Link>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">{demo.label}</p>
            <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {demo.headline}
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">{demo.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-[#0B1220] shadow-lg transition hover:-translate-y-0.5 hover:bg-white/95"
              >
                {demo.primary}
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Leistungen ansehen
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
              <Image src={demo.image} alt={`${demo.title} Vorschau`} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {demo.features.map((feature) => (
              <div key={feature} className="rounded-xl border border-[#D7E2EE] bg-[#F8FBFD] p-6">
                <CheckCircle className="mb-4 h-6 w-6 text-[#3B82F6]" />
                <h2 className="text-lg font-semibold">{feature}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-[#0B1220] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#38BDF8]">Demo-Projekt</p>
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">So könnte eine fertige Website wirken.</h2>
              <p className="max-w-2xl text-white/70">
                Diese Seite ist eine stabile Demo-Vorschau. Sie ersetzt die bisherigen externen Preview-Links und bleibt innerhalb der LocalSites-Website erreichbar.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="space-y-4 text-sm text-white/80">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#38BDF8]" />
                  Region Schweinfurt & Würzburg
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#38BDF8]" />
                  Direkte Kontaktmöglichkeit
                </div>
                <div className="flex items-center gap-3">
                  <CalendarCheck className="h-5 w-5 text-[#38BDF8]" />
                  Auf Anfragen und Termine ausgelegt
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
