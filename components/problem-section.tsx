'use client'

import { BarChart3, Clock3, HelpCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const problems = [
  {
    icon: Clock3,
    title: 'Zeitfresser',
    text: 'Manuelle Aufgaben kosten wertvolle Zeit.',
  },
  {
    icon: HelpCircle,
    title: 'Unklare Anfragen',
    text: 'Zu wenig oder unpassende Anfragen.',
  },
  {
    icon: BarChart3,
    title: 'Wenig Sichtbarkeit',
    text: 'Website und Profil nutzen ihr Potenzial nicht.',
  },
]

export function ProblemSection() {
  return (
    <section className="border-y border-[#dfeaf5] bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            Die Herausforderung
          </p>
          <h2 className="mx-auto max-w-[21rem] text-3xl font-black leading-tight tracking-[-0.025em] text-[#061637] sm:max-w-none sm:text-4xl sm:tracking-[-0.04em]">
            Zu viel Aufwand. Zu wenig Ergebnisse.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-0 md:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal
              key={problem.title}
              delay={index * 80}
              className="group flex gap-5 border-[#dfeaf5] py-7 md:border-r md:px-10 last:md:border-r-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#0b63ce] text-[#0b63ce] transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1">
                <problem.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-[#061637]">{problem.title}</h3>
                <p className="mt-1 max-w-[15rem] text-sm leading-6 text-[#52647d]">{problem.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
