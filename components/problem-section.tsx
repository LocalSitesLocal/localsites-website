'use client'

import { Globe, ShieldX, PhoneOff } from 'lucide-react'

const problems = [
  {
    icon: Globe,
    title: 'Keine moderne Website',
    text: 'Interessenten finden keine überzeugende digitale Visitenkarte.',
  },
  {
    icon: ShieldX,
    title: 'Zu wenig Vertrauen',
    text: 'Leistungen, Bilder und Kontaktwege sind nicht klar genug dargestellt.',
  },
  {
    icon: PhoneOff,
    title: 'Zu wenig Anfragen',
    text: 'Besucher wissen nicht sofort, warum sie anrufen oder schreiben sollten.',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-32 bg-[#EEF4F8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1220] mb-6 text-balance">
            Viele gute Betriebe wirken online schlechter, als sie wirklich sind.
          </h2>
          <p className="text-lg text-[#5B6B7D] text-pretty">
            Wenn eine Website veraltet ist, fehlt oder auf dem Handy schlecht aussieht, 
            verliert ein Unternehmen Vertrauen, bevor überhaupt ein Gespräch entsteht.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-[#D7E2EE] hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="h-7 w-7 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B1220] mb-3">
                {problem.title}
              </h3>
              <p className="text-[#5B6B7D] leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
