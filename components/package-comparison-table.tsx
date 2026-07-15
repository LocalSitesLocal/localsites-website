import { Check, Minus } from 'lucide-react'
import { DirectOfferRequestButton } from '@/components/direct-offer-request-button'
import { websitePackages, type StoredOfferSummary, type WebsitePackage } from '@/lib/offers'
import { cn } from '@/lib/utils'

type ComparisonValue = string | boolean

type ComparisonPackage = {
  name: string
  price: string
  description: string
  recommended?: boolean
  summary: StoredOfferSummary
}

type ComparisonRow = {
  label: string
  values: ComparisonValue[]
}

const defaultWebsiteRows: ComparisonRow[] = [
  { label: 'Seitenumfang', values: ['Onepage, bis 6 Abschnitte', '4 bis 6 Inhaltsseiten', '7 bis 10 Inhaltsseiten'] },
  { label: 'Leistungsseiten', values: ['Bis zu 3 Leistungen', 'Bis zu 3 eigene Leistungsseiten', 'Bis zu 6 Leistungs- oder Standortseiten'] },
  { label: 'Kontaktformular', values: ['Kompaktes Formular', 'Individuelles Anfrageformular', 'Mehrstufiges Anfrageformular'] },
  { label: 'Mobiloptimierung', values: [true, true, true] },
  { label: 'Lokale SEO-Grundlage', values: [true, true, 'Erweiterte Struktur'] },
  { label: 'Korrekturrunden', values: ['1 Runde', '2 Runden', '3 Runden'] },
]

export function PackageComparisonTable({
  packages,
  rows,
  activePackageId,
}: {
  packages?: ComparisonPackage[]
  rows?: ComparisonRow[]
  activePackageId?: WebsitePackage['id']
}) {
  const resolvedPackages = packages ?? websitePackages.map((item) => ({
    name: item.name,
    price: item.price,
    description: item.description,
    recommended: activePackageId ? item.id === activePackageId : item.recommended,
    summary: {
      website: item.name,
      operatingCenter: null,
      care: 'Noch offen',
      extensions: ['Keine ausgewählt'],
      setup: item.price,
      monthly: 'Noch offen',
      reason: `Direktes Interesse an ${item.name}. Der genaue Umfang wird persönlich abgestimmt.`,
    },
  }))
  const resolvedRows = rows ?? defaultWebsiteRows

  return (
    <div>
      <p className="mb-3 text-sm font-bold text-[#52647d] lg:hidden">Zum vollständigen Vergleich seitlich wischen.</p>
      <div className="overflow-x-auto rounded-[8px] border border-[#bfd5ea] bg-white shadow-[0_22px_70px_rgba(15,55,100,0.08)]">
        <table className="w-full min-w-[920px] table-fixed border-collapse text-left">
          <thead>
            <tr>
              <th className="w-[22%] border-b border-r border-[#d7e7f7] bg-[#f8fbff] p-5 align-bottom text-sm font-black text-[#52647d]">
                Leistungen
              </th>
              {resolvedPackages.map((item) => (
                <th
                  key={item.name}
                  className={cn(
                    'border-b border-r border-[#d7e7f7] p-5 align-top last:border-r-0',
                    item.recommended && 'bg-[#eef6ff]'
                  )}
                >
                  <div className="min-h-7">
                    {item.recommended && (
                      <span className="inline-flex rounded-full bg-[#fff0e5] px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-[#a94000]">
                        Empfohlen
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-xl font-black text-[#061637]">{item.name}</h3>
                  <p className="mt-2 text-2xl font-black text-[#0b63ce]">{item.price}</p>
                  <p className="mt-3 text-sm font-normal leading-6 text-[#52647d]">{item.description}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {resolvedRows.map((row) => (
              <tr key={row.label}>
                <th className="border-b border-r border-[#d7e7f7] bg-[#f8fbff] px-5 py-4 text-sm font-black text-[#061637]">
                  {row.label}
                </th>
                {row.values.map((value, index) => (
                  <td
                    key={`${row.label}-${resolvedPackages[index].name}`}
                    className={cn(
                      'border-b border-r border-[#d7e7f7] px-5 py-4 text-sm leading-6 text-[#263956] last:border-r-0',
                      resolvedPackages[index].recommended && 'bg-[#f7fbff]'
                    )}
                  >
                    {value === true ? (
                      <Check aria-label="Enthalten" className="h-5 w-5 text-[#0b63ce]" />
                    ) : value === false ? (
                      <Minus aria-label="Nicht enthalten" className="h-5 w-5 text-[#9aabc0]" />
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <th className="border-r border-[#d7e7f7] bg-[#f8fbff] p-5 text-sm font-black text-[#061637]">Nächster Schritt</th>
              {resolvedPackages.map((item) => (
                <td
                  key={`${item.name}-request`}
                  className={cn('border-r border-[#d7e7f7] p-5 last:border-r-0', item.recommended && 'bg-[#f7fbff]')}
                >
                  <DirectOfferRequestButton
                    text="Unverbindlich anfragen"
                    summary={item.summary}
                    tone={item.recommended ? 'orange' : 'blue'}
                    className="w-full justify-center bg-white"
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
