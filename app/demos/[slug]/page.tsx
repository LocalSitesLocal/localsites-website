import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { FlowButton } from '@/components/flow-button'
import { websitePackages } from '@/lib/offers'

const businessPackage = websitePackages.find((item) => item.id === 'business') ?? websitePackages[1]

const demos = {
  restaurant: {
    label: 'Gastronomie',
    title: 'Restaurant & Bar',
    headline: 'Ein moderner Auftritt, der Reservierungen einfacher macht.',
    image: '/demo-previews/restaurant-mood.png',
    demoUrl: 'https://demo-restaurant-xi.vercel.app/',
    situation: 'Speisekarte, Atmosphäre, Öffnungszeiten und Reservierung sind auf vielen Restaurantseiten schwer zu erfassen.',
    solution: 'Eine bildstarke Website bündelt die wichtigsten Informationen und führt ohne Umwege zur Reservierung.',
    features: ['Speisekarte prominent sichtbar', 'Reservierung direkt im Blick', 'Öffnungszeiten und Kontakt klar'],
    package: businessPackage.name,
    price: businessPackage.price,
  },
  steuerberatung: {
    label: 'Kanzlei & Beratung',
    title: 'Kanzlei & Beratung',
    headline: 'Seriös, klar und auf Erstgespräche ausgerichtet.',
    image: '/demo-previews/steuerberatung-mood.png',
    demoUrl: 'https://demo-steuerberatung.vercel.app/',
    situation: 'Leistungsbereiche und Kontaktwege wirken häufig komplex, obwohl Interessenten vor allem schnelle Orientierung suchen.',
    solution: 'Eine ruhige, klar gegliederte Website schafft Vertrauen und führt gezielt zum passenden Erstkontakt.',
    features: ['Leistungen schnell erfassbar', 'ruhiges Kanzlei-Design', 'Kontakt ohne Umwege'],
    package: businessPackage.name,
    price: businessPackage.price,
  },
  haustechnik: {
    label: 'Sanitär & Heizung',
    title: 'Sanitär & Heizung',
    headline: 'Eine Website, die Kompetenz und schnelle Hilfe vermittelt.',
    image: '/demo-previews/haustechnik-mood.png',
    demoUrl: 'https://demo-haustechnik.vercel.app/',
    situation: 'Kunden müssen Leistungen, Einsatzgebiet und Kontaktmöglichkeit auch unterwegs sofort verstehen.',
    solution: 'Die Vorschau verbindet klare Leistungsbereiche, regionale Nähe und einen gut sichtbaren Anfrageweg.',
    features: ['Leistungen klar gegliedert', 'regionaler Vertrauensaufbau', 'mobil sauber nutzbar'],
    package: businessPackage.name,
    price: businessPackage.price,
  },
}

type DemoSlug = keyof typeof demos

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }))
}

export default async function DemoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const demo = demos[slug as DemoSlug]

  if (!demo) notFound()

  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-20 text-[#061637]">
        <section className="relative isolate flex min-h-[620px] items-end overflow-hidden pb-16 pt-24 text-white lg:min-h-[700px]">
          <Image src={demo.image} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,22,55,0.94)_0%,rgba(6,22,55,0.76)_48%,rgba(6,22,55,0.3)_100%)]" />
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            <Link href="/#demos" className="mb-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white/78 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> Zurück zu den Beispielen
            </Link>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7fb7ff]">Demo · {demo.label}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.045em] sm:text-6xl">{demo.headline}</h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#c94f00] px-6 font-black text-white transition-colors hover:bg-[#a94000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Demo öffnen <ArrowRight className="h-4 w-4" />
              </a>
              <FlowButton text="Passendes Paket ansehen" href="/preise/business" tone="blue" className="border-white/45 text-white" />
            </div>
          </div>
        </section>

        <section className="border-b border-[#dfeaf5] bg-white py-14 lg:py-18">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#52647d]">Ausgangslage</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">Was verbessert werden soll</h2>
              <p className="mt-5 text-lg leading-8 text-[#52647d]">{demo.situation}</p>
            </div>
            <div className="border-t border-[#d7e7f7] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Lösung</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">So löst die Vorschau das Problem</h2>
              <p className="mt-5 text-lg leading-8 text-[#52647d]">{demo.solution}</p>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Funktionen</p>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {demo.features.map((feature) => (
                <div key={feature} className="flex gap-3 border-t-2 border-[#0b63ce] pt-5 font-bold text-[#263956]">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#0b63ce]" /> {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#061637] py-14 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7fb7ff]">Geeignetes Paket</p>
              <h2 className="mt-3 text-3xl font-black">{demo.package} · {demo.price}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/70">Die gezeigte Vorschau ist ein Demo-Konzept und kein echtes Kundenprojekt.</p>
            </div>
            <FlowButton text="Website Business ansehen" href="/preise/business" tone="orange" className="shrink-0 bg-white" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
