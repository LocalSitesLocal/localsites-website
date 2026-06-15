'use client'

import Image from 'next/image'
import { Clock3, MapPin, ShieldCheck } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'

const trustItems = [
  { icon: MapPin, label: 'Regional & persönlich' },
  { icon: ShieldCheck, label: 'Unverbindlich' },
  { icon: Clock3, label: 'Check in 48-72 Std.' },
]

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8fbff] pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/localsites/wuerzburg-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8fbff_0%,rgba(248,251,255,0.96)_33%,rgba(248,251,255,0.72)_58%,rgba(248,251,255,0.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[690px] max-w-7xl items-center px-5 pb-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex rounded-full border border-[#0b63ce]/15 bg-white/72 px-4 py-2 text-sm font-semibold text-[#0b63ce] shadow-[0_12px_40px_rgba(15,70,130,0.08)] backdrop-blur">
            Schweinfurt · Würzburg · Mainfranken
          </p>
          <h1 className="max-w-[680px] text-5xl font-black leading-[0.98] tracking-[-0.055em] text-[#061637] sm:text-6xl lg:text-7xl">
            Websites.
            <br />
            Klare Abläufe.
            <br />
            Für <span className="text-[#0b63ce]">lokale Unternehmen.</span>
          </h1>
          <p className="mt-7 max-w-[21rem] text-base leading-8 text-[#334667] sm:max-w-lg sm:text-lg">
            Anfrage-Websites, Wartung und KI-Empfang für lokale Betriebe in Mainfranken.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <FlowButton text="Kostenlosen Website-Check" href="#kontakt-form" tone="orange" className="bg-white/85" />
            <FlowButton text="Beispiele" href="#demos" tone="blue" className="bg-white/70" />
          </div>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-[#415574]">
                <item.icon className="h-4 w-4 text-[#0b63ce]" />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
