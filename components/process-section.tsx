import { CheckCircle2, ClipboardList, Rocket, ScreenShare } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  { icon: ClipboardList, title: 'Verstehen', text: 'Ziele & Anforderungen klären.' },
  { icon: ScreenShare, title: 'Vorschau erhalten', text: 'Unverbindliche Website in 48-72 Std.' },
  { icon: CheckCircle2, title: 'Feinschliff', text: 'Gemeinsam anpassen.' },
  { icon: Rocket, title: 'Betreuung', text: 'Wir bleiben an Ihrer Seite.' },
]

export function ProcessSection() {
  return (
    <section id="ablauf" className="bg-[#fbfdff] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            So arbeiten wir
          </p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-4xl">
            In 4 einfachen Schritten.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-7 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80} className="group relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute left-[62%] top-10 hidden h-px w-[76%] bg-[#cfe0f2] lg:block">
                  <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-r border-t border-[#7d96b4]" />
                </div>
              )}
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center">
                <span className="absolute -right-1 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-[#0b63ce] text-xs font-black text-white">
                  {index + 1}
                </span>
                <div className="motion-icon motion-icon-spin flex h-14 w-14 items-center justify-center rounded-2xl border border-[#b8d0ec] bg-white text-[#061637] shadow-sm">
                  <step.icon className="h-7 w-7 stroke-[1.6]" />
                </div>
              </div>
              <h3 className="font-black text-[#061637]">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-[12rem] text-sm leading-6 text-[#52647d]">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
