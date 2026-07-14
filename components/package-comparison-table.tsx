import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { websitePackages } from '@/lib/offers'
import { cn } from '@/lib/utils'

const comparisonRows = [
  { label: 'Umfang', values: websitePackages.map((item) => item.pageScope) },
  { label: 'Schwerpunkte', values: websitePackages.map((item) => item.highlights) },
  { label: 'Ergebnis', values: websitePackages.map((item) => item.outcome) },
  { label: 'Korrekturen', values: websitePackages.map((item) => item.correctionRounds) },
  { label: 'Startpreis', values: websitePackages.map((item) => item.price) },
]

function ComparisonValue({ value }: { value: string | string[] }) {
  if (Array.isArray(value)) {
    return (
      <ul className="grid gap-2">
        {value.map((entry) => (
          <li key={entry} className="flex gap-2">
            <Check className="mt-1 h-4 w-4 shrink-0 text-[#0b63ce]" />
            <span>{entry}</span>
          </li>
        ))}
      </ul>
    )
  }

  return value
}

export function PackageComparisonTable({ activePackageId }: { activePackageId?: string }) {
  return (
    <div className="overflow-x-auto rounded-[8px] border border-[#d7e7f7] bg-white shadow-[0_18px_55px_rgba(15,55,100,0.06)]">
      <table className="w-full min-w-[900px] border-collapse text-left text-sm">
        <thead>
          <tr>
            <th className="w-44 border-b border-[#d7e7f7] p-5 text-[#52647d]">Vergleich</th>
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
              <th className="border-b border-[#e5eef7] p-5 align-top font-bold text-[#52647d]">{row.label}</th>
              {row.values.map((value, index) => (
                <td
                  key={websitePackages[index].id}
                  className={cn(
                    'border-b border-[#e5eef7] p-5 align-top leading-6 text-[#263956]',
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
                  href={`/preise?paket=${candidate.id}#paket-finder`}
                  className="inline-flex min-h-11 items-center gap-2 font-black text-[#0b63ce] transition-colors hover:text-[#061637] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63ce]/35"
                >
                  Im Finder prüfen <ArrowRight className="h-4 w-4" />
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
