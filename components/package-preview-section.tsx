import { ArrowRight } from 'lucide-react'
import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'

const packages = [
  {
    name: 'Anfrage-Website Starter',
    price: 'ab 899 €',
  },
  {
    name: 'Website Business',
    price: 'ab 1.499 €',
  },
  {
    name: 'Website + KI-Empfang',
    price: 'ab 2.499 €',
  },
]

export function PackagePreviewSection() {
  return (
    <section className="border-b border-[#dfeaf5] bg-[#f8fbff] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
              Pakete
            </p>
            <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-[#061637] sm:text-4xl">
              Angebote schneller einordnen.
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-[#52647d]">
              Eine kurze Orientierung. Die ausführliche Auswahl bleibt auf der Preise-Seite.
            </p>
            <FlowButton text="Alle Pakete ansehen" href="/preise" tone="orange" className="mt-7 bg-white" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className="motion-card group rounded-[10px] border border-[#d7e7f7] bg-white p-5 shadow-[0_18px_55px_rgba(15,55,100,0.07)]"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eef6ff] text-[#0b63ce]">
                  <ArrowRight className="motion-arrow h-5 w-5" />
                </div>
                <h3 className="text-lg font-black leading-snug text-[#061637]">{item.name}</h3>
                <p className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#061637]">{item.price}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
