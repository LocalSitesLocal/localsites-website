'use client'

import { MailCheck, MessageCircle, PhoneCall } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'

const points = [
  { icon: MessageCircle, title: 'Standardfragen', text: 'Leistungen, Ablauf, Standort und Öffnungszeiten.' },
  { icon: PhoneCall, title: 'Leads sammeln', text: 'Name, Telefon, E-Mail und Anliegen strukturiert aufnehmen.' },
  { icon: MailCheck, title: 'Weitergabe', text: 'Wichtige Fälle landen beim Betrieb statt im Nirgendwo.' },
]

export function AiReceptionSection() {
  return (
    <section className="border-y border-[#dfeaf5] bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.82fr_1fr] lg:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            KI-Empfang
          </p>
          <h2 className="max-w-[21rem] text-[2rem] font-black leading-tight tracking-[-0.025em] text-[#061637] sm:max-w-xl sm:text-5xl sm:tracking-[-0.05em]">
            Ein digitaler Empfang für wiederkehrende Fragen.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-[#52647d]">
            Der KI-Empfang unterstützt bei Standardfragen und sammelt Anfragen. Individuelle
            oder kritische Fälle werden an den Betrieb weitergeleitet.
          </p>
          <FlowButton text="KI-Empfang anfragen" href="#kontakt" tone="blue" className="mt-8 bg-white" />
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3 lg:items-stretch">
          {points.map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <article className="h-full rounded-[10px] border border-[#d7e7f7] bg-[#fbfdff] p-5 shadow-[0_18px_55px_rgba(15,55,100,0.06)]">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#0b63ce]">
                  <point.icon className="h-6 w-6" />
                </div>
                <h3 className="font-black text-[#061637]">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#52647d]">{point.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
