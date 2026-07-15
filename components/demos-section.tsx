import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, LayoutDashboard } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/reveal'
import { websitePackages } from '@/lib/offers'

const businessPackage = websitePackages.find((item) => item.id === 'business') ?? websitePackages[1]

const demos = [
  {
    title: 'Sanitär & Heizung',
    href: '/demos/haustechnik',
    image: '/demo-previews/haustechnik-mood.png',
    package: businessPackage.name,
    price: businessPackage.price,
  },
  {
    title: 'Restaurant & Bar',
    href: '/demos/restaurant',
    image: '/demo-previews/restaurant-mood.png',
    package: businessPackage.name,
    price: businessPackage.price,
  },
]

export function DemosSection() {
  return (
    <section id="demos" className="border-y border-[#dfeaf5] bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            Demo-Vorschauen
          </p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-4xl">
            Unverbindliche Beispiele.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {demos.map((demo, index) => (
            <Reveal key={demo.title} delay={index * 90}>
              <Link
                href={demo.href}
                className="motion-card group block overflow-hidden rounded-[10px] border border-[#d7e7f7] bg-white shadow-[0_18px_55px_rgba(15,55,100,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce] focus-visible:ring-offset-2"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={demo.image}
                    alt={`Demo-Vorschau ${demo.title}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105"
                  />
                  <Badge className="absolute left-5 top-5 border-0 bg-white text-[#061637] shadow-sm">
                    Demo-Vorschau
                  </Badge>
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-black text-[#061637]">{demo.title}</h3>
                    <p className="mt-1 text-sm text-[#52647d]">Geeignet: {demo.package} · {demo.price}</p>
                  </div>
                  <ArrowRight className="motion-arrow h-5 w-5 text-[#0b63ce]" />
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={180}>
            <Link
              href="#betriebszentrale-demo"
              className="motion-card group block h-full overflow-hidden rounded-[10px] border border-[#0b63ce]/45 bg-[linear-gradient(145deg,#f7fbff_0%,#eef6ff_66%,#fff7f0_100%)] shadow-[0_22px_65px_rgba(11,99,206,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce] focus-visible:ring-offset-2"
            >
              <div className="h-60 overflow-hidden bg-[#061637] p-4">
                <div className="flex items-center justify-between text-white">
                  <span className="flex items-center gap-2 text-xs font-black">
                    <LayoutDashboard className="h-4 w-4 text-[#73adff]" />
                    Auftragsübersicht
                  </span>
                  <Badge className="border-0 bg-white text-[#061637]">Interaktive Demo</Badge>
                </div>
                <div className="mt-4 grid h-[178px] grid-cols-2 gap-2 rounded-[7px] bg-[#d7e7f7] p-2 sm:grid-cols-4">
                  {[
                    ['Anfrage', 'Müller'],
                    ['Angebot', 'Mainblick'],
                    ['Auftrag', ''],
                    ['Projekt', 'Koch'],
                  ].map(([stage, customer]) => (
                    <div key={stage} className="min-w-0 rounded-[5px] bg-[#f8fbff] p-2">
                      <p className="truncate text-[10px] font-black text-[#061637]">{stage}</p>
                      {customer && (
                        <div className="mt-2 rounded-[5px] border border-[#bfd5ea] bg-white p-2 shadow-sm">
                          <p className="truncate text-[10px] font-bold text-[#061637]">{customer}</p>
                          <div className="mt-2 h-1.5 w-3/4 rounded-full bg-[#dbeafb]" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="font-black text-[#061637]">Betriebszentrale</h3>
                  <p className="mt-1 text-sm text-[#52647d]">Anfragen und Aufträge sichtbar organisieren</p>
                </div>
                <ArrowRight className="motion-arrow h-5 w-5 shrink-0 text-[#0b63ce]" />
              </div>
            </Link>
          </Reveal>
        </div>

        <p className="mt-7 text-center text-sm text-[#52647d]">
          Die Vorschauen zeigen Demo-Websites und eine beispielhafte Betriebszentrale, keine echten Kundendaten.
        </p>
      </div>
    </section>
  )
}
