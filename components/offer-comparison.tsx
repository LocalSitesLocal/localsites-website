'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, Globe2, LayoutDashboard, ShieldCheck } from 'lucide-react'
import { carePackages, operatingCenterPackages, websitePackages } from '@/lib/offers'
import { cn } from '@/lib/utils'

type ComparisonTab = 'websites' | 'operations' | 'care'

const tabs: { id: ComparisonTab; label: string; icon: typeof Globe2 }[] = [
  { id: 'websites', label: 'Websites', icon: Globe2 },
  { id: 'operations', label: 'Betriebszentrale', icon: LayoutDashboard },
  { id: 'care', label: 'Betreuung', icon: ShieldCheck },
]

function PackageCards({ tab }: { tab: ComparisonTab }) {
  const packages = tab === 'websites' ? websitePackages : tab === 'operations' ? operatingCenterPackages : carePackages

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {packages.map((item) => {
        const href = tab === 'websites' ? `/preise/${item.id}` : tab === 'operations' ? '/betriebszentrale#pakete' : '/#kontakt'
        return (
          <article
            key={item.id}
            className={cn(
              'motion-card group flex h-full flex-col rounded-[8px] border bg-white p-6 shadow-[0_18px_55px_rgba(15,55,100,0.06)]',
              item.recommended
                ? 'border-[#0b63ce] bg-[linear-gradient(150deg,#ffffff_0%,#f0f7ff_72%,#fff7f0_100%)] shadow-[0_24px_70px_rgba(11,99,206,0.13)]'
                : 'border-[#d7e7f7]'
            )}
          >
            <div className="min-h-7">
              {item.recommended && (
                <span className="inline-flex rounded-full bg-[#fff0e5] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#a94000]">
                  Empfohlen
                </span>
              )}
            </div>
            <h3 className="mt-4 text-xl font-black tracking-[-0.03em] text-[#061637]">{item.name}</h3>
            <p className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#0b63ce]">{item.price}</p>
            <p className="mt-4 text-sm leading-6 text-[#52647d]">{item.description}</p>
            <ul className="mt-6 grid flex-1 gap-3">
              {item.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm leading-6 text-[#263956]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[#0b63ce]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={href}
              className="mt-7 inline-flex min-h-12 items-center justify-between border-t border-[#d7e7f7] pt-4 text-sm font-black text-[#0b63ce] transition-colors hover:text-[#061637] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/35"
            >
              {tab === 'websites' ? 'Details ansehen' : tab === 'operations' ? 'Betriebszentrale verstehen' : 'Betreuung anfragen'}
              <ArrowRight className="motion-arrow h-4 w-4" />
            </Link>
          </article>
        )
      })}
    </div>
  )
}

export function OfferComparison({ initialTab = 'websites' }: { initialTab?: ComparisonTab }) {
  const [activeTab, setActiveTab] = useState<ComparisonTab>(initialTab)

  return (
    <div id="angebote-vergleichen">
      <div
        role="tablist"
        aria-label="Angebotsbereiche vergleichen"
        className="grid gap-2 rounded-[8px] border border-[#d7e7f7] bg-white p-2 sm:grid-cols-3"
      >
        {tabs.map((tab) => {
          const active = activeTab === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`comparison-tab-${tab.id}`}
              aria-selected={active}
              aria-controls={`comparison-panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'inline-flex min-h-12 items-center justify-center gap-2 rounded-[6px] px-4 text-sm font-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/40',
                active ? 'bg-[#061637] text-white shadow-[0_10px_30px_rgba(6,22,55,0.18)]' : 'text-[#52647d] hover:bg-[#eef6ff] hover:text-[#061637]'
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`comparison-panel-${activeTab}`}
        aria-labelledby={`comparison-tab-${activeTab}`}
        className="mt-6"
      >
        <PackageCards tab={activeTab} />
        {activeTab === 'care' && (
          <p className="mt-5 border-l-4 border-[#0b63ce] bg-white px-5 py-4 text-sm leading-6 text-[#52647d]">
            Keine Betreuung bleibt möglich. Spätere Änderungen werden dann einzeln angeboten und abgerechnet.
          </p>
        )}
      </div>
    </div>
  )
}
