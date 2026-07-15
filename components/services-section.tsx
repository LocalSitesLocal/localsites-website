import { Check, Combine, Globe2, LayoutDashboard } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Globe2,
    title: 'Websites',
    text: 'Professionelle Onepage- oder Firmenwebsites, die Leistungen verständlich erklären und zur Kontaktaufnahme führen.',
    items: ['mobile Optimierung', 'klare Kontaktwege', 'lokale SEO-Grundlage', 'Veröffentlichung auf Domain'],
    button: { text: 'Websites kennenlernen', href: '/websites' },
  },
  {
    icon: LayoutDashboard,
    title: 'Betriebszentrale',
    text: 'Anfragen, Kunden, Angebote, Projekte, Aufgaben und Termine zentral verwalten, statt Informationen verteilt zu suchen.',
    items: ['Anfragen & Kunden', 'Angebote & Aufträge', 'Aufgaben & Termine', 'fertig eingerichtete Arbeitsoberfläche'],
    button: { text: 'Betriebszentrale verstehen', href: '/betriebszentrale' },
  },
  {
    icon: Combine,
    title: 'Digitaler Betrieb',
    text: 'Website und Betriebszentrale greifen ineinander – vom ersten Kundenkontakt bis zum nächsten klaren Arbeitsschritt.',
    highlighted: true,
    items: ['Website Business', 'Kunden- & Auftragszentrale', 'verbundenes Anfrageformular', 'drei Monate Startbegleitung'],
    button: { text: 'Komplettlösung ansehen', href: '/preise/digitaler-betrieb' },
  },
]

type Service = (typeof services)[number]

function ServiceCard({ service, combined = false }: { service: Service; combined?: boolean }) {
  return (
    <article
      className={cn(
        'motion-card group relative h-full overflow-hidden rounded-[8px] border bg-white p-7 shadow-[0_18px_55px_rgba(15,55,100,0.08)]',
        combined
          ? 'border-[#0b63ce] bg-[linear-gradient(145deg,#ffffff_0%,#eef6ff_62%,#fff7f0_100%)] shadow-[0_28px_90px_rgba(11,99,206,0.16)]'
          : 'border-[#d7e7f7]'
      )}
    >
      {combined && (
        <span className="mb-5 inline-flex rounded-full bg-[#ffefe5] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#a94000]">
          Website + Betriebszentrale
        </span>
      )}
      <div
        className={cn(
          'motion-icon motion-icon-spin mb-6 flex h-14 w-14 items-center justify-center rounded-[8px] bg-[#eef6ff] text-[#0b63ce]',
          combined && 'bg-[#0b63ce] text-white shadow-[0_16px_35px_rgba(11,99,206,0.28)]'
        )}
      >
        <service.icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-black tracking-[-0.035em] text-[#061637]">{service.title}</h3>
      <p className="mt-3 max-w-xl leading-7 text-[#52647d]">{service.text}</p>
      <ul className={cn('mt-6 grid gap-3', combined && 'sm:grid-cols-2')}>
        {service.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-[#263956]">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0b63ce]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <FlowButton
        text={service.button.text}
        href={service.button.href}
        tone={combined ? 'orange' : 'blue'}
        filled
        className="mt-7"
      />
    </article>
  )
}

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
          {services.slice(0, 2).map((service, index) => (
            <Reveal key={service.title} delay={index * 80} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div aria-hidden="true" className="relative mx-auto hidden h-20 max-w-5xl lg:block">
          <span className="absolute inset-x-[25%] top-0 h-10 border-x-2 border-b-2 border-[#8fb9e6]" />
          <span className="absolute left-1/2 top-10 h-10 border-l-2 border-[#8fb9e6]" />
          <span className="absolute left-1/2 top-[34px] h-3 w-3 -translate-x-[5px] rounded-full border-2 border-[#0b63ce] bg-white" />
        </div>

        <div className="my-6 flex items-center justify-center gap-3 lg:hidden" aria-hidden="true">
          <span className="h-8 border-l-2 border-[#8fb9e6]" />
          <span className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#0b63ce]">
            <Combine className="h-4 w-4" /> Gemeinsam verbunden
          </span>
          <span className="h-8 border-l-2 border-[#8fb9e6]" />
        </div>

        <Reveal delay={160} className="mx-auto max-w-3xl">
          <ServiceCard service={services[2]} combined />
        </Reveal>
      </div>
    </section>
  )
}
