import { MapPin, MessageCircle, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const points = [
  {
    icon: UserRound,
    title: 'Fester Ansprechpartner',
    text: 'Von der ersten Einsch\u00e4tzung bis zur Ver\u00f6ffentlichung bleibt der Kontakt direkt und pers\u00f6nlich.',
  },
  {
    icon: MapPin,
    title: 'In Mainfranken zuhause',
    text: 'Der Fokus liegt auf Handwerkern, Dienstleistern und regionalen Betrieben aus Schweinfurt, W\u00fcrzburg und Umgebung.',
  },
  {
    icon: MessageCircle,
    title: 'Verst\u00e4ndlicher Ablauf',
    text: 'Sie erhalten klare Schritte, feste Leistungsumf\u00e4nge und eine ehrliche Empfehlung statt unn\u00f6tiger Technikbegriffe.',
  },
]

export function AboutSection() {
  return (
    <section id="ueber-uns" className="border-y border-[#dfeaf5] bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Persönliche Zusammenarbeit</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-[#061637] sm:text-4xl">
              Persönlich betreut. Regional gedacht.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-[#52647d]">
              Sie sprechen vom Erstgespräch bis zur Veröffentlichung direkt mit der Person, die Ihr Projekt plant und umsetzt. So bleiben Entscheidungen, Rückfragen und nächste Schritte klar.
            </p>
          </div>
          <div className="grid gap-7 sm:grid-cols-3">
            {points.map((point) => (
              <div key={point.title} className="border-t-2 border-[#0b63ce] pt-5">
                <point.icon className="h-6 w-6 text-[#0b63ce]" />
                <h3 className="mt-4 font-black text-[#061637]">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#52647d]">{point.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
