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
}

export type CarePackage = {
  id: 'none' | 'website-care' | 'visibility-care' | 'system-care'
  name: string
  price: string
  monthlyPrice: number
  recommended?: boolean
  description: string
  features: string[]
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
  addOns: AddOn[]
  setupTotal: number
  monthlyTotal: number
  reason: string
}

export type StoredOfferSummary = {
  website: string | null
  operatingCenter: string | null
  care: string
  extensions: string[]
  setup: string
  monthly: string
  reason?: string
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
      'Kontaktformular',
      'klickbare Kontaktdaten',
      'Mobiloptimierung',
      'SEO-Basis',
      'eine Korrekturrunde',
      'Veröffentlichung auf Ihrer Domain',
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
    pageScope: 'Eine Onepage-Website mit bis zu sechs Abschnitten und bis zu drei dargestellten Leistungen.',
    correctionRounds: 'Eine gebündelte Korrekturrunde ist enthalten.',
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
      'vier bis sechs Seiten',
      'bis zu drei Leistungsseiten',
      'Textoptimierung',
      'individuelles Anfrageformular',
      'lokale SEO-Basis',
      'zwei Korrekturrunden',
      'Veröffentlichung auf Ihrer Domain',
    ],
    idealFor: [
      'Handwerker und regionale Dienstleister',
      'Betriebe mit mehreren erklärungsbedürftigen Leistungen',
      'Unternehmen, die professioneller auftreten und gezielter Anfragen erhalten möchten',
    ],
    collaboration,
    clientProvides,
    exclusions: commonExclusions,
    additions: ['Digitale Betriebszentrale', 'Terminbuchung', 'KI-Empfang Basic', 'monatliche Betreuung'],
    timeline: 'In der Regel 4 bis 6 Wochen ab vollständiger Bereitstellung der Inhalte.',
    pageScope: 'Vier bis sechs Seiten inklusive bis zu drei Leistungsseiten.',
    correctionRounds: 'Zwei gebündelte Korrekturrunden sind enthalten.',
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
    highlights: ['7 bis 10 Seiten', 'mehrere Leistungs- oder Standortseiten', 'erweiterte lokale SEO-Basis'],
    features: [
      'sieben bis zehn Seiten',
      'ausführlichere Textunterstützung',
      'mehrere Leistungs- oder Standortseiten',
      'stärkere Kontaktführung',
      'mehrere Anfragewege',
      'erweiterte lokale SEO-Grundlage',
      'drei Korrekturrunden',
      'Veröffentlichung auf Ihrer Domain',
    ],
    idealFor: [
      'etablierte Betriebe mit vielen Leistungen oder Zielgruppen',
      'Unternehmen mit mehreren Standorten oder regionalen Schwerpunktseiten',
      'Anbieter, die verschiedene Anfragewege klar voneinander trennen möchten',
    ],
    collaboration,
    clientProvides,
    exclusions: commonExclusions,
    additions: ['Digitale Betriebszentrale', 'Logo & Mini-Designsystem', 'KI-Empfang Basic', 'System-Betreuung'],
    timeline: 'In der Regel 6 bis 9 Wochen ab vollständiger Bereitstellung der Inhalte.',
    pageScope: 'Sieben bis zehn Seiten mit mehreren Leistungs-, Standort- oder Anfragewegen.',
    correctionRounds: 'Drei gebündelte Korrekturrunden sind enthalten.',
    nextPackageHint: 'Eine digitale Betriebszentrale ergänzt die Website, wenn Anfragen, Kunden, Angebote und Projekte anschließend zentral organisiert werden sollen.',
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
    features: ['Anfragen und Kontaktdaten', 'Bearbeitungsstatus', 'Notizen', 'Wiedervorlagen', 'Filter und Ansichten', 'kurze Einführung'],
  },
  {
    id: 'customer-center',
    name: 'Kunden- & Auftragszentrale',
    price: 'ab 2.490 €',
    setupPrice: 2490,
    recommended: true,
    description: 'Die zentrale Arbeitsoberfläche für Kunden, Angebote, Aufträge, Projekte und Termine.',
    outcome: 'Zusammengehörige Vorgänge bleiben verknüpft und der aktuelle Stand ist für das Team schnell sichtbar.',
    features: ['alles aus Anfrage-Zentrale', 'Kundenverwaltung', 'Angebote und Aufträge', 'Projekte', 'Aufgaben und Termine', 'verknüpfte Vorgänge', 'Übersichts-Dashboard'],
  },
  {
    id: 'operations-pro',
    name: 'Betriebszentrale Pro',
    price: 'ab 4.490 €',
    setupPrice: 4490,
    description: 'Die individuell automatisierte Lösung für wiederkehrende Abläufe und bessere Teamübersicht.',
    outcome: 'Erinnerungen, Folgeaufgaben und Dashboards unterstützen das Team bei wiederkehrenden Abläufen.',
    features: ['alles aus Kunden- & Auftragszentrale', 'individuelle Formulare', 'automatische E-Mails', 'Erinnerungen und Folgeaufgaben', 'individuelle Dashboards', 'einfache Automationen', 'Team-Einführung und Systemtest'],
  },
]

export const noCareOption: CarePackage = {
  id: 'none',
  name: 'Keine Betreuung',
  price: '0 €/Monat',
  monthlyPrice: 0,
  description: 'Spätere Änderungen und Unterstützung werden bei Bedarf einzeln beauftragt.',
  features: [],
}

export const carePackages: CarePackage[] = [
  {
    id: 'website-care',
    name: 'Website-Pflege',
    price: '79 €/Monat',
    monthlyPrice: 79,
    description: 'Für kleine Änderungen und die regelmäßige technische Kontrolle Ihrer Website.',
    features: ['Funktionstest', 'kleine Inhaltsänderungen', 'technische Kontrolle'],
  },
  {
    id: 'visibility-care',
    name: 'Pflege & Sichtbarkeit',
    price: '149 €/Monat',
    monthlyPrice: 149,
    recommended: true,
    description: 'Laufende Website-Pflege plus kleine Optimierungen für Ihren lokalen Auftritt.',
    features: ['regelmäßige Änderungen', 'Google- und Bewertungsunterstützung', 'kleine Optimierungen'],
  },
  {
    id: 'system-care',
    name: 'System-Betreuung',
    price: '249 €/Monat',
    monthlyPrice: 249,
    description: 'Für Betriebe mit digitaler Betriebszentrale, Automationen oder KI-Empfang.',
    features: ['Website- und Systempflege', 'Automations-Support', 'laufende Funktionskontrolle'],
  },
]

export const allCareOptions = [noCareOption, ...carePackages]

export const addOns: AddOn[] = [
  { id: 'logo-refresh', name: 'Logo-Modernisierung', price: 'ab 390 €', setupPrice: 390, description: 'Das vorhandene Logo wird zeitgemäß überarbeitet.' },
  { id: 'design-system', name: 'Logo & Mini-Designsystem', price: 'ab 790 €', setupPrice: 790, description: 'Logo, Farben, Schriften und grundlegende Gestaltungsregeln.' },
  { id: 'copywriting', name: 'Texterstellung', price: 'ab 490 €', setupPrice: 490, description: 'Verständliche und anfrageorientierte Texte für Ihren Auftritt.' },
  { id: 'google-profile', name: 'Google-Unternehmensprofil', price: 'ab 349 €', setupPrice: 349, description: 'Saubere Grundlage für Ihren sichtbaren lokalen Unternehmenseintrag.' },
  { id: 'review-qr', name: 'Bewertungslink und QR-Code', price: 'ab 249 €', setupPrice: 249, description: 'Ein einfacher Weg, zufriedene Kunden um Bewertungen zu bitten.' },
  { id: 'calendly', name: 'Calendly-Einrichtung', price: 'ab 249 €', setupPrice: 249, description: 'Ein passender Terminlink für Rückrufe oder Erstgespräche.' },
  { id: 'ai-reception', name: 'KI-Empfang Basic', price: 'ab 890 € plus Betreuung', setupPrice: 890, description: 'Beantwortet Standardfragen und nimmt Kontaktdaten auf. Externe Toolkosten kommen hinzu.' },
  { id: 'extra-page', name: 'Zusätzliche Seite', price: 'ab 249 €', setupPrice: 249, description: 'Eine zusätzliche Leistungs-, Standort- oder Informationsseite.' },
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
  const care = getCarePackageById(careOverride ?? recommendedCareId)

  const reason = answers.goal === 'both'
    ? `${website?.name} schafft einen professionellen Einstieg. Die ${operatingCenter?.name} führt passende Anfragen anschließend zentral bis zum nächsten Schritt weiter.`
    : answers.goal === 'operations'
      ? `Die ${operatingCenter?.name} bildet den gewünschten Umfang ab, ohne unnötig mit einem vollständigen ERP-System zu starten.`
      : `${website?.name} passt zum gewünschten Seitenumfang und schafft klare Kontaktwege für Interessenten.`

  return {
    website,
    operatingCenter,
    care,
    addOns: selectedAddOns,
    setupTotal: (website?.setupPrice ?? 0) + (operatingCenter?.setupPrice ?? 0) + selectedAddOns.reduce((sum, item) => sum + item.setupPrice, 0),
    monthlyTotal: care.monthlyPrice,
    reason,
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
    `Empfehlungsgrund: ${recommendation.reason}`,
  ].join('\n')
}
