'use client'

import { ListChecks } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'

export function ComparisonSection() {
  return (
    <section id="preise" className="border-y border-[#dfeaf5] bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef6ff] text-[#0b63ce]">
            <ListChecks className="h-6 w-6" />
          </div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            Preise & Pakete
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-[#061637] sm:text-4xl">
            Finden Sie das passende Paket Schritt für Schritt.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#52647d]">
            Die ausführliche Auswahl liegt auf einer eigenen Seite. Dort kombinieren Sie
            Website-Basis, Betreuung und optionalen KI-Empfang.
          </p>
          <div className="mt-8 flex justify-center">
            <FlowButton text="Preise & Pakete ansehen" href="/preise" tone="orange" className="bg-white" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
