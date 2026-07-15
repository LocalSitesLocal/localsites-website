import Link from 'next/link'
import { ArrowRight, Combine, Globe2, LayoutDashboard } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'
import { digitalBusinessPackage, operatingCenterPackages, websitePackages } from '@/lib/offers'
import { cn } from '@/lib/utils'

const solutionPaths = [
  {
    icon: Globe2,
    name: 'Website Business',
    price: websitePackages[1].price,
    href: '/preise/business',
  },
  {
    icon: LayoutDashboard,
    name: 'Anfrage-Zentrale',
    price: operatingCenterPackages[0].price,
    href: '/preise/vergleich?bereich=betriebszentrale',
  },
  {
    icon: Combine,
    name: 'Digitaler Betrieb',
    price: digitalBusinessPackage.price,
    href: '/preise/digitaler-betrieb',
    recommended: true,
  },
]

export function PackagePreviewSection() {
  return (
    <section className="border-b border-[#dfeaf5] bg-[#f8fbff] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Meistgewählte Angebote</p>
            <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-[#061637] sm:text-4xl">
              Drei klare Einstiege.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#52647d]">
              Der häufigste Website-Einstieg, die schlanke Anfrage-Zentrale oder beides als abgestimmte Gesamtlösung.
            </p>
            <FlowButton text="Angebote & Preise ansehen" href="/preise" tone="orange" className="mt-7 bg-white" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {solutionPaths.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'motion-card group relative rounded-[8px] border bg-white p-5 shadow-[0_18px_55px_rgba(15,55,100,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce] focus-visible:ring-offset-2',
                  item.recommended ? 'border-[#0b63ce] bg-[linear-gradient(150deg,#ffffff_0%,#eef6ff_72%,#fff7f0_100%)]' : 'border-[#d7e7f7]'
                )}
              >
                {item.recommended && (
                  <span className="mb-4 inline-flex rounded-full bg-[#ffefe5] px-2.5 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#a94000]">
                    Empfohlen
                  </span>
                )}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="motion-icon flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#eef6ff] text-[#0b63ce]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <ArrowRight className="motion-arrow h-5 w-5 text-[#0b63ce]" />
                </div>
                <h3 className="text-lg font-black leading-snug text-[#061637]">{item.name}</h3>
                <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#061637]">{item.price}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
