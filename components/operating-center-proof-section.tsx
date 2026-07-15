'use client'

import { useMemo, useState } from 'react'
import {
  ArrowRight,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  GripVertical,
  LayoutDashboard,
  RotateCcw,
  UserRoundCheck,
} from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'

type StageId = 'request' | 'offer' | 'order' | 'project'

type DemoCard = {
  id: string
  title: string
  detail: string
  stage: StageId
}

const stages: Array<{ id: StageId; label: string }> = [
  { id: 'request', label: 'Anfrage' },
  { id: 'offer', label: 'Angebot' },
  { id: 'order', label: 'Auftrag' },
  { id: 'project', label: 'Projekt' },
]

const initialCards: DemoCard[] = [
  { id: 'mueller', title: 'Müller Haustechnik', detail: 'Badsanierung', stage: 'request' },
  { id: 'mainblick', title: 'Mainblick Gutachten', detail: 'Website Business', stage: 'offer' },
  { id: 'koch', title: 'Schreinerei Koch', detail: 'Projektstart', stage: 'project' },
]

const benefits = [
  { icon: UserRoundCheck, text: 'keine Anfrage vergessen' },
  { icon: CircleDollarSign, text: 'offene Angebote nachverfolgen' },
  { icon: LayoutDashboard, text: 'Kunden und Aufträge zentral verwalten' },
  { icon: ClipboardCheck, text: 'nächste Aufgaben sofort erkennen' },
]

function nextStage(stage: StageId) {
  const index = stages.findIndex((item) => item.id === stage)
  return stages[(index + 1) % stages.length].id
}

export function OperatingCenterProofSection() {
  const [cards, setCards] = useState(initialCards)
  const [announcement, setAnnouncement] = useState('')

  const cardsByStage = useMemo(
    () => Object.fromEntries(stages.map((stage) => [stage.id, cards.filter((card) => card.stage === stage.id)])) as Record<StageId, DemoCard[]>,
    [cards]
  )

  const moveCard = (cardId: string, stage: StageId) => {
    const card = cards.find((item) => item.id === cardId)
    if (!card || card.stage === stage) return

    setCards((current) => current.map((item) => (item.id === cardId ? { ...item, stage } : item)))
    setAnnouncement(`${card.title} wurde zu ${stages.find((item) => item.id === stage)?.label} verschoben.`)
  }

  const advanceCard = (cardId: string) => {
    const card = cards.find((item) => item.id === cardId)
    if (card) moveCard(cardId, nextStage(card.stage))
  }

  return (
    <section id="betriebszentrale-demo" className="border-y border-[#dfeaf5] bg-white py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-8">
        <Reveal>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Digitale Betriebszentrale</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-[#061637] sm:text-4xl">
            Vom Website-Kontakt bis zum erledigten Auftrag.
          </h2>

          <ol className="mt-7 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
            {stages.map((stage, index) => (
              <li key={stage.id} className="flex min-h-14 items-center gap-3 border-b border-[#d7e7f7] py-3 text-sm font-black text-[#061637]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef6ff] text-xs text-[#0b63ce]">
                  {index + 1}
                </span>
                {stage.label}
                {index < stages.length - 1 && <ArrowRight className="ml-auto h-4 w-4 text-[#8ba1bb]" />}
              </li>
            ))}
          </ol>

          <p className="mt-8 text-xl font-black leading-8 text-[#061637]">
            Sie erhalten kein leeres Tool, sondern eine fertig eingerichtete Arbeitsoberfläche.
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit.text} className="flex items-center gap-3 text-sm font-bold text-[#263956]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-[#eef6ff] text-[#0b63ce]">
                  <benefit.icon className="h-4 w-4" />
                </span>
                {benefit.text}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <FlowButton text="Betriebszentrale ansehen" href="/betriebszentrale" tone="blue" className="bg-white" />
            <span className="text-xs font-bold text-[#52647d]">Technische Grundlage: Airtable</span>
          </div>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <div className="overflow-hidden rounded-[8px] border border-[#bfd5ea] bg-[#f5f9fe] shadow-[0_28px_90px_rgba(15,55,100,0.15)]">
            <div className="flex min-h-14 items-center justify-between border-b border-white/10 bg-[#061637] px-4 text-white sm:px-5">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-[#0b63ce]">
                  <LayoutDashboard className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-bold text-white/65">LocalSites Beispiel</p>
                  <h3 className="text-sm font-black">Auftragsübersicht</h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setCards(initialCards)
                  setAnnouncement('Die Demo wurde zurückgesetzt.')
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                aria-label="Demo zurücksetzen"
                title="Demo zurücksetzen"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>

            <div className="grid min-h-[360px] grid-cols-2 gap-px bg-[#cadced] sm:grid-cols-4">
              {stages.map((stage) => (
                <div
                  key={stage.id}
                  className="min-w-0 bg-[#f8fbff] p-3 sm:p-3.5"
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    event.preventDefault()
                    moveCard(event.dataTransfer.getData('text/plain'), stage.id)
                  }}
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h4 className="truncate text-xs font-black text-[#061637]">{stage.label}</h4>
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#e7f1fc] px-1.5 text-[11px] font-black text-[#0b63ce]">
                      {cardsByStage[stage.id].length}
                    </span>
                  </div>

                  <div className="grid gap-2.5">
                    {cardsByStage[stage.id].map((card) => (
                      <button
                        key={card.id}
                        type="button"
                        draggable
                        onDragStart={(event) => {
                          event.dataTransfer.effectAllowed = 'move'
                          event.dataTransfer.setData('text/plain', card.id)
                        }}
                        onClick={() => advanceCard(card.id)}
                        className="group w-full cursor-grab rounded-[7px] border border-[#c8dcef] bg-white p-3 text-left shadow-[0_8px_24px_rgba(15,55,100,0.08)] transition-[transform,border-color,box-shadow] hover:-translate-y-0.5 hover:border-[#0b63ce]/45 hover:shadow-[0_12px_30px_rgba(15,55,100,0.12)] active:cursor-grabbing focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]"
                        aria-label={`${card.title}: zum nächsten Schritt verschieben`}
                        title="Zum nächsten Schritt verschieben"
                      >
                        <span className="flex items-start gap-2">
                          <span className="min-w-0 flex-1">
                            <span className="block text-xs font-black leading-5 text-[#061637]">{card.title}</span>
                            <span className="mt-1 block text-[11px] leading-4 text-[#52647d]">{card.detail}</span>
                          </span>
                          <GripVertical className="mt-0.5 h-4 w-4 shrink-0 text-[#8ba1bb] transition-colors group-hover:text-[#0b63ce]" />
                        </span>
                      </button>
                    ))}

                    {cardsByStage[stage.id].length === 0 && (
                      <div className="flex min-h-16 items-center justify-center rounded-[7px] border border-dashed border-[#bfd5ea] text-[#8ba1bb]">
                        <Check className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="sr-only" aria-live="polite">{announcement}</p>
        </Reveal>
      </div>
    </section>
  )
}
