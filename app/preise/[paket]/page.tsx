import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, CircleCheck, Clock3, FileText, Handshake, PackageOpen, ShieldCheck, Target } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FlowButton } from '@/components/flow-button'
import { PackageComparisonTable } from '@/components/package-comparison-table'
import { getWebsitePackageBySlug, websitePackages } from '@/lib/website-packages'

export function generateStaticParams() {
  return websitePackages.map((item) => ({ paket: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ paket: string }>
}): Promise<Metadata> {
  const { paket } = await params
  const item = getWebsitePackageBySlug(paket)

  if (!item) return {}

  return {
    title: `${item.name} | LocalSites`,
    description: item.description,
  }
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ paket: string }>
}) {
  const { paket } = await params
  const item = getWebsitePackageBySlug(paket)

  if (!item) notFound()

  return (
    <>
      <Header />
      <main className="bg-[#f8fbff] pt-28">
        <section className="border-b border-[#dfeaf5] bg-white pb-14 pt-6 lg:pb-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.75fr] lg:items-center lg:px-8">
            <div>
              <Link
                href="/preise/vergleich"
                className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#52647d] transition-colors hover:text-[#0b63ce]"
              >
                <ArrowLeft className="h-4 w-4" />
                Zur&uuml;ck zu allen Paketen
              </Link>
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0b63ce]">Website-Paket</p>
                {item.recommended && (
                  <span className="rounded-full bg-[#fff2e8] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#ff6a00]">
                    Beliebt
                  </span>
                )}
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#061637] sm:text-6xl">
                {item.name}
              </h1>
              <p className="mt-5 text-3xl font-black tracking-[-0.035em] text-[#0b63ce]">{item.price}</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#52647d]">{item.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <FlowButton text="Im Paket-Finder prüfen" href={`/preise/finder?paket=${item.id}`} tone="orange" className="bg-white" />
                <FlowButton text="Kostenlose Ersteinschätzung" href="/#kontakt" tone="blue" className="bg-white" />
              </div>
            </div>

            <div className="border-l-4 border-[#0b63ce] bg-[#eef6ff] p-6 sm:p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#0b63ce] text-white">
                <Target className="h-6 w-6" />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Das Ergebnis</p>
              <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-[#061637]">Was Sie am Ende haben</h2>
              <p className="mt-4 leading-7 text-[#415574]">{item.outcome}</p>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-18">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Passt besonders gut</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637]">F&uuml;r wen dieses Paket gedacht ist</h2>
              <ul className="mt-7 grid gap-4">
                {item.idealFor.map((reason) => (
                  <li key={reason} className="flex gap-3 leading-7 text-[#263956]">
                    <CircleCheck className="mt-1 h-5 w-5 shrink-0 text-[#0b63ce]" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-[#d7e7f7] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff6a00]">Gut zu wissen</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637]">Wann die n&auml;chste Stufe sinnvoll ist</h2>
              <p className="mt-6 text-lg leading-8 text-[#52647d]">{item.nextPackageHint}</p>
            </div>
          </div>
        </section>

        <section className="border-y border-[#dfeaf5] bg-white py-14 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Leistungsumfang</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637] sm:text-4xl">Das ist konkret enthalten</h2>
            <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {item.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 border-b border-[#e5eef7] pb-4 text-[#263956]">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[#0b63ce]" />
                  <span className="leading-7">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="border-l-4 border-[#0b63ce] bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)] sm:p-8">
                <FileText className="h-6 w-6 text-[#0b63ce]" />
                <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#061637]">Seitenumfang und Korrekturen</h2>
                <p className="mt-4 leading-7 text-[#52647d]">{item.pageScope}</p>
                <p className="mt-3 leading-7 text-[#52647d]">{item.correctionRounds}</p>
              </div>
              <div className="border-l-4 border-[#ff6a00] bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)] sm:p-8">
                <Clock3 className="h-6 w-6 text-[#ff6a00]" />
                <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-[#061637]">Dauer der Umsetzung</h2>
                <p className="mt-4 leading-7 text-[#52647d]">{item.timeline}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#dfeaf5] bg-white py-14 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <Handshake className="h-7 w-7 text-[#0b63ce]" />
                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Zusammenarbeit</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637]">So läuft das Projekt ab</h2>
                <ol className="mt-7 grid gap-4">
                  {item.collaboration.map((step, index) => (
                    <li key={step} className="flex gap-4 leading-7 text-[#263956]">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef6ff] text-sm font-black text-[#0b63ce]">{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <PackageOpen className="h-7 w-7 text-[#0b63ce]" />
                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Ihre Vorbereitung</p>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637]">Was Sie bereitstellen</h2>
                <ul className="mt-7 grid gap-4">
                  {item.clientProvides.map((entry) => (
                    <li key={entry} className="flex gap-3 leading-7 text-[#263956]">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-[#0b63ce]" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-18">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <ShieldCheck className="h-7 w-7 text-[#52647d]" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#52647d]">Klare Abgrenzung</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637]">Nicht automatisch enthalten</h2>
              <ul className="mt-7 grid gap-4">
                {item.exclusions.map((entry) => (
                  <li key={entry} className="flex gap-3 leading-7 text-[#52647d]">
                    <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8da0b8]" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Target className="h-7 w-7 text-[#ff6a00]" />
              <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#ff6a00]">Optional</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637]">Sinnvolle Zusatzleistungen</h2>
              <ul className="mt-7 grid gap-4">
                {item.additions.map((entry) => (
                  <li key={entry} className="flex gap-3 leading-7 text-[#263956]">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[#ff6a00]" />
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-[#dfeaf5] bg-white py-14 lg:py-18">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Direkter Vergleich</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637] sm:text-4xl">Welches Website-Paket passt?</h2>
              <p className="mt-4 leading-7 text-[#52647d]">Vergleichen Sie Umfang, Anfrageweg und enthaltene Systeme. Betreuung und Erweiterungen w&auml;hlen Sie anschlie&szlig;end separat.</p>
            </div>
            <div className="mt-8"><PackageComparisonTable activePackageId={item.id} /></div>
            <Link href="/preise/vergleich" className="mt-6 inline-flex min-h-11 items-center font-black text-[#0b63ce] hover:text-[#061637]">
              Vollständigen Paketvergleich öffnen
            </Link>
          </div>
        </section>

        <section className="bg-[#061637] py-14 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7fb7ff]">N&auml;chster Schritt</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">Passt {item.name} zu Ihrem Betrieb?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/70">Der Paket-Finder prüft Website, Betriebszentrale, Betreuung und sinnvolle Ergänzungen gemeinsam.</p>
            </div>
            <FlowButton text="Im Paket-Finder prüfen" href={`/preise/finder?paket=${item.id}`} tone="orange" className="shrink-0 bg-white" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
