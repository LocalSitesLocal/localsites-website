import Link from 'next/link'
import { legalLinks, navItems } from '@/lib/navigation'

export function Footer() {
  return (
    <footer className="bg-[#061637] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="text-2xl font-black tracking-[-0.04em]">
              LocalSites<span aria-hidden="true" className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#4ea0ff]" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/58">
              Websites, Wartung und einfache Automationen für lokale Betriebe in Schweinfurt,
              Würzburg und Umgebung.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black">Navigation</h4>
            <ul className="space-y-3">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/58 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-black">Kontakt & Rechtliches</h4>
            <ul className="space-y-3 text-sm text-white/58">
              <li>kontakt@localsites.de</li>
              <li>Schweinfurt / Würzburg</li>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LocalSites. Alle Rechte vorbehalten.</p>
          <p>Demo-Projekte sind inoffizielle Website-Vorschauen.</p>
        </div>
      </div>
    </footer>
  )
}
