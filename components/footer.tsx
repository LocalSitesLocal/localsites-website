import Link from 'next/link'

const footerLinks = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Demos', href: '#demos' },
  { label: 'Ablauf', href: '#ablauf' },
  { label: 'Kontakt', href: '#kontakt' },
]

const legalLinks = [
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutz', href: '/datenschutz' },
]

export function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center">
                <span className="text-white font-bold text-sm">LS</span>
              </div>
              <span className="text-white font-semibold text-lg">LocalSites</span>
            </div>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Websites für lokale Betriebe in Schweinfurt & Würzburg. 
              Modern, klar und auf Anfragen ausgelegt.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} LocalSites. Alle Rechte vorbehalten.
            </p>
            <p className="text-white/40 text-xs italic">
              Impressum und Datenschutz vor Veröffentlichung ergänzen.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
