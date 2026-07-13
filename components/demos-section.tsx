import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/reveal'

const demos = [
  {
    title: 'Sanitär & Heizung',
    href: '/demos/haustechnik',
    image: '/demo-previews/haustechnik-mood.png',
    package: 'Business',
    price: 'ab 1.499 €',
  },
  {
    title: 'Restaurant & Bar',
    href: '/demos/restaurant',
    image: '/demo-previews/restaurant-mood.png',
    package: 'Business',
    price: 'ab 1.499 €',
  },
  {
    title: 'Kanzlei & Beratung',
    href: '/demos/steuerberatung',
    image: '/demo-previews/steuerberatung-mood.png',
    package: 'Business',
    price: 'ab 1.499 €',
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
        </div>

        <p className="mt-7 text-center text-sm text-[#52647d]">
          Alle Vorschauen sind Demo-Websites und keine echten Kundenprojekte.
        </p>
      </div>
    </section>
  )
}
