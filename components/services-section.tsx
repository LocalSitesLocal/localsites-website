import { Check, Globe2, LayoutDashboard } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Globe2,
    title: 'Websites',
    text: 'Professionelle Onepage- oder Firmenwebsites, die Leistungen verständlich erklären und zur Kontaktaufnahme führen.',
    items: ['mobile Optimierung', 'klare Kontaktwege', 'lokale SEO-Grundlage', 'Veröffentlichung auf Domain'],
    button: { text: 'Website-Pakete ansehen', href: '/preise/vergleich?bereich=websites' },
  },
  {
    icon: LayoutDashboard,
    title: 'Digitale Betriebszentrale',
    text: 'Anfragen, Kunden, Angebote, Projekte, Aufgaben und Termine zentral verwalten, statt Informationen verteilt zu suchen.',
    highlighted: true,
    items: ['Anfragen & Kunden', 'Angebote & Aufträge', 'Aufgaben & Termine', 'fertig eingerichtete Arbeitsoberfläche'],
    button: { text: 'Betriebszentrale verstehen', href: '/betriebszentrale' },
  },
]

export function ServicesSection() {
  return (
    <section id="leistungen" className="bg-[#fbfdff] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">Leistungen</p>
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#061637] sm:text-4xl">
            Vom ersten Eindruck bis zum klaren Betriebsablauf.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article
                className={cn(
                  'motion-card group relative h-full overflow-hidden rounded-[8px] border bg-white p-7 shadow-[0_18px_55px_rgba(15,55,100,0.08)]',
                  service.highlighted
                    ? 'border-[#0b63ce]/45 bg-[linear-gradient(145deg,#ffffff_0%,#f0f7ff_65%,#fff7f0_100%)] shadow-[0_28px_90px_rgba(11,99,206,0.14)]'
                    : 'border-[#d7e7f7]'
                )}
              >
                {service.highlighted && (
                  <span className="mb-5 inline-flex rounded-full bg-[#ffefe5] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#a94000]">
                    Alles an einem Ort
                  </span>
                )}
                <div
                  className={cn(
                    'motion-icon motion-icon-spin mb-6 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#eef6ff] text-[#0b63ce]',
                    service.highlighted && 'bg-[#0b63ce] text-white shadow-[0_16px_35px_rgba(11,99,206,0.28)]'
                  )}
                >
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-black tracking-[-0.035em] text-[#061637]">{service.title}</h3>
                <p className="mt-3 max-w-xl leading-7 text-[#52647d]">{service.text}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-[#263956]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0b63ce]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <FlowButton text={service.button.text} href={service.button.href} tone="blue" className="mt-7 bg-white" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
