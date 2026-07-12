import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check, CircleCheck, Target } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FlowButton } from '@/components/flow-button'
import { cn } from '@/lib/utils'
import { getWebsitePackageBySlug, websitePackages } from '@/lib/website-packages'

const comparisonRows = [
  { label: 'Aufbau', values: ['Onepage', 'mehrere Bereiche', 'Business + Anfrageweg'] },
  { label: 'Ideal f\u00fcr', values: ['kleine Betriebe', 'mehrere Leistungen', 'bessere Vorqualifizierung'] },
  { label: 'Kontakt', values: ['Standardformular', 'starke Kontaktf\u00fchrung', 'branchenspezifisches Formular'] },
  { label: 'FAQ', values: ['optional', 'enthalten', 'enthalten'] },
  { label: 'Korrekturen', values: ['eine Runde', 'zwei Runden', 'zwei Runden'] },
  { label: 'Startpreis', values: websitePackages.map((item) => item.price) },
]

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
                href="/preise#konfigurator"
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
                <FlowButton text={'Paket ausw\u00e4hlen'} href={`/preise?paket=${item.id}#konfigurator`} tone="orange" className="bg-white" />
                <FlowButton text="Website-Check anfragen" href="/#kontakt" tone="blue" className="bg-white" />
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
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0b63ce]">Direkter Vergleich</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#061637] sm:text-4xl">Welches Website-Paket passt?</h2>
              <p className="mt-4 leading-7 text-[#52647d]">Vergleichen Sie die wichtigsten Unterschiede. Betreuung und Erweiterungen w&auml;hlen Sie anschlie&szlig;end separat.</p>
            </div>
            <div className="mt-8 overflow-x-auto rounded-[10px] border border-[#d7e7f7] bg-white shadow-[0_18px_55px_rgba(15,55,100,0.06)]">
              <table className="min-w-[820px] w-full border-collapse text-left text-sm">
                <thead>
                  <tr>
                    <th className="w-44 border-b border-[#d7e7f7] p-5 text-[#52647d]">Vergleich</th>
                    {websitePackages.map((candidate) => (
                      <th key={candidate.id} className={cn('border-b border-[#d7e7f7] p-5 align-top', candidate.id === item.id && 'bg-[#eef6ff]')}>
                        <Link href={`/preise/${candidate.slug}`} className="font-black text-[#061637] hover:text-[#0b63ce]">{candidate.name}</Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <th className="border-b border-[#e5eef7] p-5 font-bold text-[#52647d]">{row.label}</th>
                      {row.values.map((value, index) => (
                        <td key={websitePackages[index].id} className={cn('border-b border-[#e5eef7] p-5 text-[#263956]', websitePackages[index].id === item.id && 'bg-[#f4f9ff] font-bold text-[#061637]')}>
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="bg-[#061637] py-14 text-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7fb7ff]">N&auml;chster Schritt</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em]">{item.name} konfigurieren</h2>
              <p className="mt-3 max-w-2xl leading-7 text-white/70">W&auml;hlen Sie danach Betreuung und optionale Erweiterungen. Die Zusammenfassung wird automatisch berechnet.</p>
            </div>
            <FlowButton text={'Paket ausw\u00e4hlen'} href={`/preise?paket=${item.id}#konfigurator`} tone="orange" className="shrink-0 bg-white" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
