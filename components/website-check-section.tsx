import { FlowButton } from '@/components/flow-button'
import { Reveal } from '@/components/reveal'

export function WebsiteCheckSection() {
  return (
    <section id="website-check" className="border-y border-[#dfeaf5] bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.22em] text-[#0b63ce]">
            Kostenlose Ersteinschätzung
          </p>
          <h2 className="mx-auto max-w-[21rem] text-[2rem] font-black leading-tight tracking-[-0.025em] text-[#061637] sm:max-w-3xl sm:text-5xl sm:tracking-[-0.05em]">
            Unsicher, welches Paket passt?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#52647d]">
            Sie erhalten innerhalb von 48–72 Stunden eine kurze Website- und Anfrageanalyse mit fünf
            konkreten Verbesserungsvorschlägen zu Darstellung, Vertrauen, Kontaktwegen, lokaler
            Sichtbarkeit und Ihrem Anfrageprozess.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-[#334667]">
            Dazu kommen eine klare Paketempfehlung und ein grober Kostenrahmen per E-Mail oder als kurzes PDF – unverbindlich.
          </p>
          <div className="mt-8 flex justify-center">
            <FlowButton
              text="Kostenlose Ersteinschätzung anfragen"
              href="#kontakt"
              tone="orange"
              className="bg-white"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
