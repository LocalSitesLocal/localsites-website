export type WebsitePackage = {
  id: 'start' | 'business' | 'pro'
  slug: 'start' | 'business' | 'pro'
  name: string
  shortName: string
  price: string
  setupPrice: number
  recommended?: boolean
  description: string
  outcome: string
  highlights: string[]
  features: string[]
  idealFor: string[]
  collaboration: string[]
  clientProvides: string[]
  exclusions: string[]
  additions: string[]
  timeline: string
  pageScope: string
  correctionRounds: string
  supportPeriod: string
  nextPackageHint: string
}

export type OperatingCenterPackage = {
  id: 'inquiry-center' | 'customer-center' | 'operations-pro'
  name: string
  price: string
  setupPrice: number
  recommended?: boolean
  description: string
  outcome: string
  features: string[]
  timeline: string
  supportPeriod: string
}

export type CarePackage = {
  id: 'none' | 'website-care' | 'visibility-care' | 'system-care'
  name: string
  price: string
  monthlyPrice: number
  recommended?: boolean
  description: string
  features: string[]
  responseTime: string
  conditions: string[]
}

export type AddOn = {
  id:
    | 'logo-refresh'
    | 'design-system'
    | 'copywriting'
    | 'google-profile'
    | 'review-qr'
    | 'calendly'
    | 'ai-reception'
    | 'extra-page'
    | 'landing-page'
    | 'copywriting-package'
    | 'extra-language'
    | 'data-import'
    | 'automation'
    | 'image-research'
  name: string
  price: string
  setupPrice: number
  description: string
}

export type FinderGoal = 'website' | 'operations' | 'both'
export type WebsiteStatus = 'none' | 'outdated' | 'modern'
export type WebsiteScope = 'compact' | 'business' | 'pro'
export type OperationsScope = 'inquiries' | 'full' | 'automation'

export type FinderAnswers = {
  goal?: FinderGoal
  websiteStatus?: WebsiteStatus
  websiteScope?: WebsiteScope
  operationsScope?: OperationsScope
  addOnInterests: AddOn['id'][]
}

export type OfferRecommendation = {
  website: WebsitePackage | null
  operatingCenter: OperatingCenterPackage | null
  care: CarePackage
  recommendedCare: CarePackage
  careRecommendationReason: string
  addOns: AddOn[]
  setupTotal: number
  monthlyTotal: number
  reason: string
  isDigitalBusinessBundle: boolean
  individualValue?: number
  packageAdvantage?: number
}

export type StoredOfferSummary = {
  website: string | null
  operatingCenter: string | null
  care: string
  extensions: string[]
  setup: string
  monthly: string
  reason?: string
  packageName?: string
  individualValue?: string
  packageAdvantage?: string
  includedSupport?: string
  externalCosts?: string
}

export const OFFER_SELECTION_STORAGE_KEY = 'localsites:pricing-selection'
export const OFFER_SUMMARY_STORAGE_KEY = 'localsites:pricing-summary'

const collaboration = [
  'Kurzes Erstgespräch und Klärung der Ziele',
  'Struktur und Inhalte gemeinsam festlegen',
  'Design und technische Umsetzung',
  'Korrekturrunde und abschließender Funktionstest',
  'Veröffentlichung auf Ihrer Domain',
]

const clientProvides = [
  'Logo, Kontaktdaten und vorhandene Gestaltungsrichtlinien',
  'Bilder und Texte, soweit bereits vorhanden',
  'Zugang zur Domain und zu benötigten Diensten',
  'Zeitnahe Rückmeldungen innerhalb der Korrekturrunden',
]

const commonExclusions = [
  'Laufende Hosting-, Domain- und externe Toolkosten',
  'Professionelle Foto-, Video- oder umfangreiche Texterstellung',
  'Rechtsberatung sowie Erstellung rechtlicher Pflichttexte',
  'Zusätzliche Leistungen außerhalb des vereinbarten Umfangs',
]

export const pricingDisclosure =
  'Alle Preise sind unverbindliche Ab-Preise. Die steuerliche Ausweisung wird im persönlichen Angebot transparent ausgewiesen.'

export const paymentPlan = [
  '40 % bei Auftragserteilung',
  '40 % nach Freigabe des Konzepts',
  '20 % vor Veröffentlichung und Übergabe',
]

export const ownershipNote =
  'Nach vollständiger Bezahlung erhalten Sie Zugriff auf Ihre Website, die Domain-Konfiguration und die für Sie eingerichteten Systeme. Externe Konten werden nach Möglichkeit direkt im Namen des Kunden angelegt.'

export const websitePackages: WebsitePackage[] = [
  {
    id: 'start',
    slug: 'start',
    name: 'Website Start',
    shortName: 'Start',
    price: 'ab 1.490 €',
    setupPrice: 1490,
    description: 'Der kompakte professionelle Auftritt für lokale Betriebe mit einem klaren Leistungsangebot.',
    outcome: 'Eine moderne, mobil optimierte Website, auf der Interessenten Ihr Angebot und den passenden Kontaktweg sofort verstehen.',
    highlights: ['Onepage mit bis zu 6 Abschnitten', 'bis zu 3 Leistungen', 'Kontaktformular & SEO-Basis'],
    features: [
      'Onepage mit bis zu sechs Abschnitten',
      'Darstellung von bis zu drei Leistungen',
      'kurzes Inhalts- und Strukturgespräch',
      'Optimierung der gelieferten Texte',
      'Kontaktformular',
      'klickbare Telefonnummer und E-Mail',
      'Mobiloptimierung',
      'technische und lokale SEO-Basis',
      'Einbindung gelieferter Rechtstexte',
      'eine Korrekturrunde',
      'Veröffentlichung auf Ihrer Domain',
      '14 Tage technische Unterstützung nach Veröffentlichung',
    ],
    idealFor: [
      'kleine Betriebe mit bis zu drei Kernleistungen',
      'Neugründungen und erste professionelle Auftritte',
      'Unternehmen, die vor allem telefonisch oder per Formular angefragt werden',
    ],
    collaboration,
    clientProvides,
    exclusions: commonExclusions,
    additions: ['Texterstellung', 'Google-Unternehmensprofil', 'Terminbuchung', 'monatliche Betreuung'],
    timeline: 'In der Regel 2 bis 4 Wochen ab vollständiger Bereitstellung der Inhalte.',
    pageScope: 'Eine Onepage-Website mit bis zu sechs Abschnitten und bis zu drei dargestellten Leistungen. Rechtliche Pflichtseiten werden separat eingebunden und nicht auf den Umfang angerechnet.',
    correctionRounds: 'Eine gebündelte Korrekturrunde ist enthalten.',
    supportPeriod: '14 Tage technische Unterstützung nach der Veröffentlichung.',
    nextPackageHint: 'Wenn Sie mehrere Leistungen auf eigenen Seiten erklären oder Ihre Firma umfangreicher darstellen möchten, passt Website Business besser.',
  },
  {
    id: 'business',
    slug: 'business',
    name: 'Website Business',
    shortName: 'Business',
    price: 'ab 2.490 €',
    setupPrice: 2490,
    recommended: true,
    description: 'Die vollständige Firmenwebsite für Handwerker, Gutachter und Dienstleister mit mehreren Leistungen.',
    outcome: 'Eine klar gegliederte Website, die Leistungen verständlich erklärt, Vertrauen aufbaut und gezielt zu passenden Anfragen führt.',
    highlights: ['4 bis 6 Seiten', 'bis zu 3 Leistungsseiten', 'individuelles Anfrageformular'],
    features: [
      'vier bis sechs Inhaltsseiten',
      'bis zu drei Leistungsseiten',
      'Startseite, Über uns, Leistungen und Kontakt',
      'FAQ-Bereich',
      'stärkere Textoptimierung',
      'individuelles Anfrageformular',
      'lokale SEO-Struktur',
      'Verknüpfung mit Google-Unternehmensprofil und Bewertungen',
      'Besucherstatistik-Grundeinrichtung',
      'zwei Korrekturrunden',
      'Veröffentlichung auf Ihrer Domain',
      '30 Tage technische Startunterstützung',
    ],
    idealFor: [
      'Handwerker und regionale Dienstleister',
      'Betriebe mit mehreren erklärungsbedürftigen Leistungen',
      'Unternehmen, die professioneller auftreten und gezielter Anfragen erhalten möchten',
    ],
    collaboration,
    clientProvides,
    exclusions: commonExclusions,
    additions: ['Betriebszentrale', 'Terminbuchung', 'KI-Empfang Basic', 'monatliche Betreuung'],
    timeline: 'In der Regel 4 bis 6 Wochen ab vollständiger Bereitstellung der Inhalte.',
    pageScope: 'Vier bis sechs Inhaltsseiten inklusive bis zu drei Leistungsseiten. Rechtliche Pflichtseiten werden nicht auf diesen Umfang angerechnet.',
    correctionRounds: 'Zwei gebündelte Korrekturrunden sind enthalten.',
    supportPeriod: '30 Tage technische Startunterstützung nach der Veröffentlichung.',
    nextPackageHint: 'Wenn viele Leistungen, Standorte oder unterschiedliche Anfragewege benötigt werden, bietet Website Pro den passenden Spielraum.',
  },
  {
    id: 'pro',
    slug: 'pro',
    name: 'Website Pro',
    shortName: 'Pro',
    price: 'ab 3.690 €',
    setupPrice: 3690,
    description: 'Der umfangreiche Auftritt für Betriebe mit vielen Leistungen, Standorten oder erklärungsbedürftigen Angeboten.',
    outcome: 'Ein ausführlicher, verkaufsstarker Firmenauftritt mit klaren Einstiegen für verschiedene Zielgruppen und Anfragewege.',
    highlights: ['7 bis 10 Inhaltsseiten', 'bis zu 6 Leistungs- oder Standortseiten', 'mehrstufiges Anfrageformular'],
    features: [
      'sieben bis zehn Inhaltsseiten',
      'bis zu sechs Leistungs- oder Standortseiten',
      'ausführlichere Textunterstützung',
      'mehrere klar getrennte Anfragewege',
      'mehrstufiges oder qualifizierendes Formular',
      'erweiterte lokale SEO-Struktur',
      'drei Korrekturrunden',
      'Veröffentlichung auf Ihrer Domain',
      '45 Tage technische Startunterstützung',
    ],
    idealFor: [
      'etablierte Betriebe mit vielen Leistungen oder Zielgruppen',
      'Unternehmen mit mehreren Standorten oder regionalen Schwerpunktseiten',
      'Anbieter, die verschiedene Anfragewege klar voneinander trennen möchten',
    ],
    collaboration,
    clientProvides,
    exclusions: commonExclusions,
    additions: ['Betriebszentrale', 'Logo & Mini-Designsystem', 'KI-Empfang Basic', 'Systembetreuung'],
    timeline: 'In der Regel 6 bis 9 Wochen ab vollständiger Bereitstellung der Inhalte.',
    pageScope: 'Sieben bis zehn Inhaltsseiten mit bis zu sechs Leistungs- oder Standortseiten und mehreren klar getrennten Anfragewegen. Rechtliche Pflichtseiten werden nicht auf diesen Umfang angerechnet.',
    correctionRounds: 'Drei gebündelte Korrekturrunden sind enthalten.',
    supportPeriod: '45 Tage technische Startunterstützung nach der Veröffentlichung.',
    nextPackageHint: 'Eine Betriebszentrale ergänzt die Website, wenn Anfragen, Kunden, Angebote und Projekte anschließend zentral organisiert werden sollen.',
  },
]

export const operatingCenterPackages: OperatingCenterPackage[] = [
  {
    id: 'inquiry-center',
    name: 'Anfrage-Zentrale',
    price: 'ab 990 €',
    setupPrice: 990,
    description: 'Der übersichtliche Einstieg, damit keine Anfrage und keine Wiedervorlage verloren geht.',
    outcome: 'Anfragen werden zentral erfasst, nach Status sortiert und mit dem nächsten Schritt versehen.',
    features: [
      'individuell eingerichtete Airtable-Base',
      'Anfrage- und Kontaktdaten',
      'automatische Übernahme aus einem Formular',
      'Statussystem und Wiedervorlage',
      'fünf sinnvolle Ansichten',
      'Kanban-Übersicht',
      'eine Benachrichtigungsautomation',
      '60 Minuten Einführung und gemeinsamer Systemtest',
    ],
    timeline: 'In der Regel 2 bis 4 Wochen nach Freigabe des Ablaufs und der benötigten Zugänge.',
    supportPeriod: '30 Tage Startunterstützung nach der Übergabe.',
  },
  {
    id: 'customer-center',
    name: 'Kunden- & Auftragszentrale',
    price: 'ab 2.490 €',
    setupPrice: 2490,
    recommended: true,
    description: 'Die zentrale Arbeitsoberfläche für Kunden, Angebote, Aufträge, Projekte und Termine.',
    outcome: 'Zusammengehörige Vorgänge bleiben verknüpft und der aktuelle Stand ist für das Team schnell sichtbar.',
    features: [
      'alles aus Anfrage-Zentrale',
      'Kundenverwaltung',
      'Angebote und Aufträge',
      'Projekte, Aufgaben und Termine',
      'verknüpfte Datensätze',
      'Übersichts-Dashboard',
      'bis zu zwei einfache Automationen',
      'begrenzter Import vorhandener Kontakte',
      '90 Minuten Einführung',
    ],
    timeline: 'In der Regel 4 bis 7 Wochen nach Prozessklärung und Bereitstellung der Daten.',
    supportPeriod: '30 Tage Startunterstützung nach der Übergabe.',
  },
  {
    id: 'operations-pro',
    name: 'Betriebszentrale Pro',
    price: 'ab 4.490 €',
    setupPrice: 4490,
    description: 'Die individuell automatisierte Lösung für wiederkehrende Abläufe und bessere Teamübersicht.',
    outcome: 'Erinnerungen, Folgeaufgaben und Dashboards unterstützen das Team bei wiederkehrenden Abläufen.',
    features: [
      'alles aus Kunden- & Auftragszentrale',
      'ausführlicher Prozess-Workshop',
      'zusätzliche individuelle Module',
      'bis zu fünf einfache Automationen',
      'individuelle Formulare',
      'zwei Dashboards',
      'Rollen und Ansichten für Mitarbeiter',
      'Team-Einführung und vollständiger Systemtest',
    ],
    timeline: 'In der Regel 6 bis 10 Wochen, abhängig von Modulen, Daten und Abstimmungen.',
    supportPeriod: '60 Tage Startunterstützung nach der Übergabe.',
  },
]

export const noCareOption: CarePackage = {
  id: 'none',
  name: 'Keine Betreuung',
  price: '0 €/Monat',
  monthlyPrice: 0,
  description: 'Spätere Änderungen und Unterstützung werden bei Bedarf einzeln beauftragt.',
  features: [],
  responseTime: 'Nach individueller Terminvereinbarung',
  conditions: ['Arbeiten werden vorab angeboten und nach Aufwand abgerechnet.'],
}

export const carePackages: CarePackage[] = [
  {
    id: 'website-care',
    name: 'Website-Pflege',
    price: '79 €/Monat',
    monthlyPrice: 79,
    description: 'Für den monatlichen Funktionstest und klar begrenzte kleine Änderungen.',
    features: ['monatlicher Funktionstest', 'bis zu 20 Minuten Änderungen pro Monat', 'technische Kontrolle'],
    responseTime: 'Rückmeldung innerhalb von fünf Werktagen',
    conditions: ['Nicht genutzte Zeit verfällt.', 'Keine neuen Seiten oder großen Redesigns enthalten.', 'Zusätzliche Arbeiten werden mit 129 €/Stunde abgerechnet.'],
  },
  {
    id: 'visibility-care',
    name: 'Pflege & Sichtbarkeit',
    price: '149 €/Monat',
    monthlyPrice: 149,
    recommended: true,
    description: 'Laufende Website-Pflege mit regelmäßiger Optimierung für den lokalen Auftritt.',
    features: ['bis zu 60 Minuten Änderungen pro Monat', 'Google- und Bewertungsunterstützung', 'regelmäßige kleine Optimierungen'],
    responseTime: 'Rückmeldung innerhalb von drei Werktagen',
    conditions: ['Nicht genutzte Zeit verfällt.', 'Keine neuen Seiten oder großen Redesigns enthalten.', 'Zusätzliche Arbeiten werden mit 129 €/Stunde abgerechnet.'],
  },
  {
    id: 'system-care',
    name: 'Systembetreuung',
    price: '249 €/Monat',
    monthlyPrice: 249,
    description: 'Für Betriebe mit Betriebszentrale, Automationen oder KI-Empfang.',
    features: ['monatliche Systemprüfung', 'bis zu 90 Minuten Anpassungen pro Monat', 'Automations-Support'],
    responseTime: 'Rückmeldung innerhalb von zwei Werktagen',
    conditions: ['Mindestlaufzeit drei Monate, danach monatlich kündbar.', 'Nicht genutzte Zeit verfällt.', 'Externe Toolkosten sind nicht enthalten.', 'Zusätzliche Arbeiten werden mit 129 €/Stunde abgerechnet.'],
  },
]

export const allCareOptions = [noCareOption, ...carePackages]

export const digitalBusinessPackage = {
  name: 'Digitaler Betrieb',
  price: 'ab 4.980 €',
  setupPrice: 4980,
  individualValue: 5570,
  packageAdvantage: 590,
  website: websitePackages[1],
  operatingCenter: operatingCenterPackages[1],
  care: carePackages[2],
  includedBenefits: [
    'Website Business und Kunden- & Auftragszentrale',
    'verbundenes Anfrageformular mit strukturierter Übergabe',
    'eine einfache Status- oder E-Mail-Automation',
    'gemeinsame Einführung und Systemübergabe',
    'drei Monate Startbegleitung für die Betriebszentrale',
  ],
} as const

export const addOns: AddOn[] = [
  { id: 'logo-refresh', name: 'Logo-Modernisierung', price: 'ab 390 €', setupPrice: 390, description: 'Das vorhandene Logo wird behutsam zeitgemäß überarbeitet.' },
  { id: 'design-system', name: 'Logo & Mini-Designsystem', price: 'ab 790 €', setupPrice: 790, description: 'Logo, Farben, Schriften und grundlegende Gestaltungsregeln.' },
  { id: 'copywriting', name: 'Text aus Kundenstichpunkten', price: 'ab 190 € pro Seite', setupPrice: 190, description: 'Verständlicher und anfrageorientierter Seitentext aus Ihren Stichpunkten.' },
  { id: 'copywriting-package', name: 'Textpaket für mehrere Seiten', price: 'ab 690 €', setupPrice: 690, description: 'Abgestimmte Texte für mehrere zusammengehörige Inhaltsseiten.' },
  { id: 'google-profile', name: 'Google-Unternehmensprofil', price: 'ab 390 €', setupPrice: 390, description: 'Saubere Grundlage für Ihren sichtbaren lokalen Unternehmenseintrag.' },
  { id: 'review-qr', name: 'Bewertungslink und QR-Code', price: 'ab 149 €', setupPrice: 149, description: 'Ein einfacher Weg, zufriedene Kunden um Bewertungen zu bitten.' },
  { id: 'calendly', name: 'Terminbuchung', price: 'ab 190 €', setupPrice: 190, description: 'Ein passender Terminlink für Rückrufe oder Erstgespräche.' },
  { id: 'ai-reception', name: 'KI-Empfang-Einrichtung', price: 'ab 990 €', setupPrice: 990, description: 'Beantwortet Standardfragen und nimmt Kontaktdaten auf. Externe Toolkosten und Betreuung kommen hinzu.' },
  { id: 'extra-page', name: 'Zusätzliche Standardseite', price: 'ab 290 €', setupPrice: 290, description: 'Eine zusätzliche Informations- oder einfache Inhaltsseite.' },
  { id: 'landing-page', name: 'Komplexe Leistungsseite oder Landingpage', price: 'ab 390 €', setupPrice: 390, description: 'Eine umfangreichere Seite für eine Leistung, Zielgruppe oder Kampagne.' },
  { id: 'extra-language', name: 'Zusätzliche Sprache', price: 'ab 790 €', setupPrice: 790, description: 'Technische und inhaltliche Ergänzung einer weiteren Sprache.' },
  { id: 'data-import', name: 'Zusätzlicher Datenimport', price: 'ab 390 €', setupPrice: 390, description: 'Bereinigung und Übernahme zusätzlicher vorhandener Datensätze.' },
  { id: 'automation', name: 'Zusätzliche Automation', price: 'ab 390 €', setupPrice: 390, description: 'Eine weitere klar abgegrenzte einfache Automation.' },
  { id: 'image-research', name: 'Bildrecherche', price: 'ab 149 €', setupPrice: 149, description: 'Auswahl passender lizenzierbarer Bilder für den Webauftritt.' },
]

export function formatEuro(value: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function getWebsitePackageBySlug(slug: string) {
  return websitePackages.find((item) => item.slug === slug)
}

export function getWebsitePackageById(id: string | undefined) {
  return websitePackages.find((item) => item.id === id)
}

export function getCarePackageById(id: CarePackage['id']) {
  return allCareOptions.find((item) => item.id === id) ?? noCareOption
}

export function buildOfferRecommendation(
  answers: FinderAnswers,
  careOverride?: CarePackage['id']
): OfferRecommendation {
  const website = answers.goal === 'website' || answers.goal === 'both'
    ? websitePackages.find((item) => item.id === (answers.websiteScope === 'compact' ? 'start' : answers.websiteScope === 'pro' ? 'pro' : 'business')) ?? null
    : null

  const operatingCenter = answers.goal === 'operations' || answers.goal === 'both'
    ? operatingCenterPackages.find((item) => item.id === (answers.operationsScope === 'inquiries' ? 'inquiry-center' : answers.operationsScope === 'automation' ? 'operations-pro' : 'customer-center')) ?? null
    : null

  const selectedAddOns = addOns.filter((item) => answers.addOnInterests.includes(item.id))
  const hasSystemNeeds = Boolean(operatingCenter) || selectedAddOns.some((item) => item.id === 'ai-reception')
  const recommendedCareId: CarePackage['id'] = hasSystemNeeds
    ? 'system-care'
    : website?.id === 'start'
      ? 'website-care'
      : 'visibility-care'
  const recommendedCare = getCarePackageById(recommendedCareId)
  const care = getCarePackageById(careOverride ?? 'none')
  const careRecommendationReason = hasSystemNeeds
    ? 'Die Betriebszentrale und verbundene Abläufe sollten regelmäßig technisch geprüft werden.'
    : website?.id === 'start'
      ? 'Für eine kompakte Website genügt in der Regel die schlanke Website-Pflege.'
      : 'Bei umfangreicheren Websites sind regelmäßige Pflege und kleine lokale Optimierungen sinnvoll.'

  const isDigitalBusinessBundle = website?.id === 'business' && operatingCenter?.id === 'customer-center'
  const reason = isDigitalBusinessBundle
    ? 'Empfohlenes Gesamtpaket: Digitaler Betrieb. Website Business und Kunden- & Auftragszentrale werden verbunden, damit Anfragen vom ersten Kontakt bis zum nächsten Arbeitsschritt nachvollziehbar bleiben.'
    : answers.goal === 'both'
    ? `${website?.name} schafft einen professionellen Einstieg. Die ${operatingCenter?.name} führt passende Anfragen anschließend zentral bis zum nächsten Schritt weiter.`
    : answers.goal === 'operations'
      ? `Die ${operatingCenter?.name} bildet den gewünschten Umfang ab, ohne unnötig mit einem vollständigen ERP-System zu starten.`
      : `${website?.name} passt zum gewünschten Seitenumfang und schafft klare Kontaktwege für Interessenten.`

  return {
    website,
    operatingCenter,
    care,
    recommendedCare,
    careRecommendationReason,
    addOns: selectedAddOns,
    setupTotal: (isDigitalBusinessBundle ? digitalBusinessPackage.setupPrice : (website?.setupPrice ?? 0) + (operatingCenter?.setupPrice ?? 0)) + selectedAddOns.reduce((sum, item) => sum + item.setupPrice, 0),
    monthlyTotal: care.monthlyPrice,
    reason,
    isDigitalBusinessBundle,
    individualValue: isDigitalBusinessBundle ? digitalBusinessPackage.individualValue + selectedAddOns.reduce((sum, item) => sum + item.setupPrice, 0) : undefined,
    packageAdvantage: isDigitalBusinessBundle ? digitalBusinessPackage.packageAdvantage : undefined,
  }
}

export function createOfferSelectionMessage(recommendation: OfferRecommendation) {
  const extensions = recommendation.addOns.length > 0
    ? recommendation.addOns.map((item) => item.name).join(', ')
    : 'Keine ausgewählt'

  return [
    'Ich interessiere mich für folgende Paketempfehlung:',
    '',
    `Website-Paket: ${recommendation.website?.name ?? 'Keine Website ausgewählt'}`,
    `Betriebszentrale: ${recommendation.operatingCenter?.name ?? 'Keine Betriebszentrale ausgewählt'}`,
    `Betreuung: ${recommendation.care.name}`,
    `Zusatzleistungen: ${extensions}`,
    `Erweiterungen: ${extensions}`,
    `Geschätzter Startpreis: ab ${formatEuro(recommendation.setupTotal)}`,
    `Geschätzte monatliche Kosten: ${recommendation.monthlyTotal === 0 ? '0 €/Monat' : `${formatEuro(recommendation.monthlyTotal)}/Monat`}`,
    ...(recommendation.isDigitalBusinessBundle ? [
      `Empfohlenes Gesamtpaket: ${digitalBusinessPackage.name}`,
      `Einzelwert: ab ${formatEuro(recommendation.individualValue ?? digitalBusinessPackage.individualValue)}`,
      `Paketvorteil: ${formatEuro(recommendation.packageAdvantage ?? digitalBusinessPackage.packageAdvantage)}`,
      'Startbegleitung: drei Monate enthalten',
    ] : []),
    `Empfehlungsgrund: ${recommendation.reason}`,
  ].join('\n')
}

export function createStoredOfferSelectionMessage(summary: StoredOfferSummary) {
  const extensions = summary.extensions.length > 0 ? summary.extensions.join(', ') : 'Keine ausgewählt'

  return [
    'Ich interessiere mich für folgende Paketauswahl:',
    '',
    `Website-Paket: ${summary.website ?? 'Keine Website ausgewählt'}`,
    `Betriebszentrale: ${summary.operatingCenter ?? 'Keine Betriebszentrale ausgewählt'}`,
    `Betreuung: ${summary.care}`,
    `Zusatzleistungen: ${extensions}`,
    `Erweiterungen: ${extensions}`,
    `Geschätzter Startpreis: ${summary.setup}`,
    `Geschätzte monatliche Kosten: ${summary.monthly}`,
    ...(summary.packageName ? [`Empfohlenes Gesamtpaket: ${summary.packageName}`] : []),
    ...(summary.individualValue ? [`Einzelwert: ${summary.individualValue}`] : []),
    ...(summary.packageAdvantage ? [`Paketvorteil: ${summary.packageAdvantage}`] : []),
    ...(summary.includedSupport ? [`Startbegleitung: ${summary.includedSupport}`] : []),
    ...(summary.externalCosts ? [`Externe Toolkosten: ${summary.externalCosts}`] : []),
    ...(summary.reason ? [`Empfehlungsgrund: ${summary.reason}`] : []),
  ].join('\n')
}
