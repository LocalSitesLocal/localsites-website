import Link from 'next/link'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { websitePackages } from '@/lib/website-packages'

const comparisonRows = [
  { label: 'Aufbau', values: ['Onepage', '4 bis 6 Seiten', 'Business-Website plus System'] },
  { label: 'Leistungen', values: ['bis zu 3', 'bis zu 3 Unterseiten', 'bis zu 3 Unterseiten'] },
  { label: 'Kontaktformular', values: ['Standard', 'Standard', 'branchenspezifisch'] },
  { label: 'Airtable-Anfrage-Board', values: [false, false, true] },
  { label: 'Best\u00e4tigung und strukturierte E-Mail', values: [false, false, true] },
  { label: 'Einfache Automation', values: [false, false, true] },
  { label: 'Korrekturen', values: ['1 Runde', '2 Runden', '2 Runden + Systemtest'] },
  { label: 'Startpreis', values: websitePackages.map((item) => item.price) },
]

function ComparisonValue({ value }: { value: string | boolean }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="inline-flex items-center gap-2 font-bold text-[#061637]">
        <Check className="h-4 w-4 text-[#0b63ce]" /> Enthalten
      </span>
    ) : (
      <span className="inline-flex items-center gap-2 text-[#7b8ba1]">
        <Minus className="h-4 w-4" /> Nicht enthalten
      </span>
    )
  }

  return value
}

export function PackageComparisonTable({ activePackageId }: { activePackageId?: string }) {
  return (
    <div className="overflow-x-auto rounded-[10px] border border-[#d7e7f7] bg-white shadow-[0_18px_55px_rgba(15,55,100,0.06)]">
      <table className="w-full min-w-[860px] border-collapse text-left text-sm">
        <thead>
          <tr>
            <th className="w-52 border-b border-[#d7e7f7] p-5 text-[#52647d]">Vergleich</th>
            {websitePackages.map((candidate) => (
              <th
                key={candidate.id}
                className={cn(
                  'border-b border-[#d7e7f7] p-5 align-top',
                  candidate.id === activePackageId && 'bg-[#eef6ff]'
                )}
              >
                <Link href={`/preise/${candidate.slug}`} className="font-black text-[#061637] hover:text-[#0b63ce]">
                  {candidate.name}
                </Link>
                <p className="mt-2 text-base font-black text-[#0b63ce]">{candidate.price}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row) => (
            <tr key={row.label}>
              <th className="border-b border-[#e5eef7] p-5 font-bold text-[#52647d]">{row.label}</th>
              {row.values.map((value, index) => (
                <td
                  key={websitePackages[index].id}
                  className={cn(
                    'border-b border-[#e5eef7] p-5 text-[#263956]',
                    websitePackages[index].id === activePackageId && 'bg-[#f4f9ff] font-bold text-[#061637]'
                  )}
                >
                  <ComparisonValue value={value} />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th className="p-5" />
            {websitePackages.map((candidate) => (
              <td key={candidate.id} className={cn('p-5', candidate.id === activePackageId && 'bg-[#f4f9ff]')}>
                <Link
                  href={`/preise?paket=${candidate.id}#konfigurator`}
                  className="inline-flex min-h-11 items-center justify-center rounded-md border border-[#0b63ce] px-4 font-black text-[#0b63ce] transition-colors hover:bg-[#0b63ce] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/35"
                >
                  Paket auswählen
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
