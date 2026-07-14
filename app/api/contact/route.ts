import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  unternehmen?: string
  email?: string
  telefon?: string
  website?: string
  nachricht?: string
}

const MAX_FIELD_LENGTH = 5_000
const REQUEST_TIMEOUT = 10_000

const AIRTABLE_FIELDS = {
  name: 'Name',
  unternehmen: 'Unternehmen',
  email: 'E-Mail',
  telefon: 'Telefon',
  website: 'Website',
  nachricht: 'Nachricht',
  status: 'Status',
  quelle: 'Quelle',
  paket: 'Paketinteresse',
  betreuung: 'Betreuung',
  erweiterungen: 'Erweiterungen',
  prioritaet: 'Priorit\u00e4t',
  angebotssumme: 'Angebotssumme',
  monatlicherWert: 'Monatlicher Wert',
} as const

const AIRTABLE_PACKAGE_ALIASES: Record<string, string> = {
  'Anfrage-Website Starter': 'Anfrage-Website Starter',
  Starter: 'Anfrage-Website Starter',
  'Website Start': 'Anfrage-Website Starter',
  'Website Business': 'Website Business',
  Business: 'Website Business',
  'Website + Anfrage-System': 'Website + Anfrage-System',
  'Anfrage-System': 'Website + Anfrage-System',
}

const AIRTABLE_CARE_ALIASES: Record<string, string> = {
  'Keine Betreuung': 'Keine Betreuung',
  'Care Basis': 'Care Basis',
  'Care Plus': 'Care Plus',
  'Care System': 'Care System',
  'Website-Pflege': 'Care Basis',
  'Pflege & Sichtbarkeit': 'Care Plus',
  'System-Betreuung': 'Care System',
}

const AIRTABLE_EXTENSION_ALIASES: Record<string, string> = {
  'Calendly / Terminlink': 'Calendly / Terminlink',
  'Calendly-Einrichtung': 'Calendly / Terminlink',
  Terminbuchung: 'Calendly / Terminlink',
  'Digitales Anfrage-Board': 'Digitales Anfrage-Board',
  'KI-Empfang Basic': 'KI-Empfang Basic',
}

function clean(value: unknown) {
  return String(value ?? '').trim().slice(0, MAX_FIELD_LENGTH)
}

function cleanSingleLine(value: unknown) {
  return clean(value).replace(/[\r\n]+/g, ' ')
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function getSelectionValue(message: string, label: string) {
  const prefix = `${label}:`
  const line = message.split(/\r?\n/).find((item) => item.trim().startsWith(prefix))

  return line?.trim().slice(prefix.length).trim() || ''
}

function parseEuroAmount(value: string) {
  const match = value.match(/\d[\d.]*(?:,\d{1,2})?/)
  if (!match) return undefined

  const amount = Number(match[0].replaceAll('.', '').replace(',', '.'))
  return Number.isFinite(amount) ? amount : undefined
}

function parsePricingSelection(message: string) {
  const rawPackage = getSelectionValue(message, 'Website-Paket')
  const rawCare = getSelectionValue(message, 'Betreuung')
  const rawOperatingCenter = getSelectionValue(message, 'Betriebszentrale')
  const rawExtensions = getSelectionValue(message, 'Zusatzleistungen') || getSelectionValue(message, 'Erweiterungen')
  const mappedExtensions = rawExtensions
    .split(',')
    .map((item) => item.replace(/\s*\(enthalten\)\s*$/i, '').trim())
    .map((item) => AIRTABLE_EXTENSION_ALIASES[item])
    .filter((item): item is string => Boolean(item))
  const hasOperatingCenter = rawOperatingCenter && !rawOperatingCenter.toLowerCase().startsWith('keine')
  const erweiterungen = Array.from(new Set([
    ...(hasOperatingCenter ? ['Digitales Anfrage-Board'] : []),
    ...mappedExtensions,
  ]))

  return {
    paket: AIRTABLE_PACKAGE_ALIASES[rawPackage] || 'Noch offen',
    betreuung: AIRTABLE_CARE_ALIASES[rawCare] || 'Noch offen',
    erweiterungen,
    angebotssumme: parseEuroAmount(getSelectionValue(message, 'Gesch\u00e4tzter Startpreis')),
    monatlicherWert: parseEuroAmount(getSelectionValue(message, 'Gesch\u00e4tzte monatliche Kosten')),
  }
}

async function createAirtableRecord({
  airtableToken,
  airtableBaseId,
  airtableTableId,
  fields,
}: {
  airtableToken: string
  airtableBaseId: string
  airtableTableId: string
  fields: Record<string, string | string[] | number>
}) {
  return fetch(
    `https://api.airtable.com/v0/${encodeURIComponent(airtableBaseId)}/${encodeURIComponent(airtableTableId)}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${airtableToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ records: [{ fields }] }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT),
    }
  )
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return NextResponse.json({ error: 'Ungueltige Anfrage.' }, { status: 400 })
  }

  const name = cleanSingleLine(payload.name)
  const email = cleanSingleLine(payload.email)
  const unternehmen = cleanSingleLine(payload.unternehmen)
  const telefon = cleanSingleLine(payload.telefon)
  const website = cleanSingleLine(payload.website)
  const nachricht = clean(payload.nachricht)

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Name und E-Mail sind erforderlich.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_xxxxxxxxx') {
    return NextResponse.json({ error: 'E-Mail Versand ist noch nicht konfiguriert.' }, { status: 500 })
  }

  const airtableToken = process.env.AIRTABLE_TOKEN
  const airtableBaseId = process.env.AIRTABLE_BASE_ID
  const airtableTableId = process.env.AIRTABLE_TABLE_ID

  if (!airtableToken || !airtableBaseId || !airtableTableId) {
    return NextResponse.json({ error: 'Anfragespeicherung ist noch nicht konfiguriert.' }, { status: 500 })
  }

  const selection = parsePricingSelection(nachricht)
  const airtableFields: Record<string, string | string[] | number> = {
    [AIRTABLE_FIELDS.name]: name,
    [AIRTABLE_FIELDS.email]: email,
    [AIRTABLE_FIELDS.status]: 'Neu',
    [AIRTABLE_FIELDS.quelle]: 'Website',
    [AIRTABLE_FIELDS.paket]: selection.paket || 'Noch offen',
    [AIRTABLE_FIELDS.betreuung]: selection.betreuung || 'Noch offen',
    [AIRTABLE_FIELDS.prioritaet]: 'Mittel',
  }

  if (unternehmen) airtableFields[AIRTABLE_FIELDS.unternehmen] = unternehmen
  if (telefon) airtableFields[AIRTABLE_FIELDS.telefon] = telefon
  if (website && isHttpUrl(website)) airtableFields[AIRTABLE_FIELDS.website] = website
  if (nachricht) airtableFields[AIRTABLE_FIELDS.nachricht] = nachricht
  if (selection.erweiterungen.length > 0) {
    airtableFields[AIRTABLE_FIELDS.erweiterungen] = selection.erweiterungen
  }
  if (selection.angebotssumme !== undefined) {
    airtableFields[AIRTABLE_FIELDS.angebotssumme] = selection.angebotssumme
  }
  if (selection.monatlicherWert !== undefined) {
    airtableFields[AIRTABLE_FIELDS.monatlicherWert] = selection.monatlicherWert
  }

  let airtableResponse: Response

  try {
    airtableResponse = await createAirtableRecord({
      airtableToken,
      airtableBaseId,
      airtableTableId,
      fields: airtableFields,
    })
  } catch (error) {
    console.error('Airtable request failed', error)
    return NextResponse.json({ error: 'Anfrage konnte nicht gespeichert werden.' }, { status: 502 })
  }

  if (!airtableResponse.ok) {
    const firstStatus = airtableResponse.status
    const firstError = await airtableResponse.text()
    let finalError = firstError
    console.error('Airtable rejected inquiry', firstStatus, firstError)

    if (firstStatus === 400 || firstStatus === 422) {
      const safeFields: Record<string, string | number> = {
        [AIRTABLE_FIELDS.name]: name,
        [AIRTABLE_FIELDS.email]: email,
        [AIRTABLE_FIELDS.status]: 'Neu',
        [AIRTABLE_FIELDS.quelle]: 'Website',
        [AIRTABLE_FIELDS.prioritaet]: 'Mittel',
      }
      if (unternehmen) safeFields[AIRTABLE_FIELDS.unternehmen] = unternehmen
      if (telefon) safeFields[AIRTABLE_FIELDS.telefon] = telefon
      if (website && isHttpUrl(website)) safeFields[AIRTABLE_FIELDS.website] = website
      if (nachricht) safeFields[AIRTABLE_FIELDS.nachricht] = nachricht

      try {
        airtableResponse = await createAirtableRecord({
          airtableToken,
          airtableBaseId,
          airtableTableId,
          fields: safeFields,
        })
        if (!airtableResponse.ok) finalError = await airtableResponse.text()
      } catch (error) {
        console.error('Airtable safe retry failed', error)
        return NextResponse.json({ error: 'Anfrage konnte nicht gespeichert werden.' }, { status: 502 })
      }
    }

    if (!airtableResponse.ok) {
      console.error('Airtable rejected safe inquiry', airtableResponse.status, finalError)
      return NextResponse.json({ error: 'Anfrage konnte nicht gespeichert werden.' }, { status: 502 })
    }
  }

  const from = process.env.CONTACT_FROM_EMAIL || 'LocalSites <kontakt@send.localsites-mainfranken.de>'
  const to = process.env.CONTACT_TO_EMAIL || 'kontakt@localsites-mainfranken.de'
  const subject = `Neue LocalSites-Anfrage von ${name}`
  const rows = [
    ['Name', name],
    ['Unternehmen', unternehmen || '-'],
    ['E-Mail', email],
    ['Telefon', telefon || '-'],
    ['Website', website || '-'],
    ['Nachricht', nachricht || '-'],
  ]

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0b1637">
      <h1 style="font-size:22px">Neue LocalSites-Anfrage</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="font-weight:bold;border-bottom:1px solid #e5edf7">${escapeHtml(label)}</td>
                <td style="border-bottom:1px solid #e5edf7">${escapeHtml(value).replaceAll('\n', '<br />')}</td>
              </tr>
            `
          )
          .join('')}
      </table>
    </div>
  `

  let response: Response

  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject,
        html,
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT),
    })
  } catch (error) {
    console.error('Resend request failed after Airtable save', error)
    return NextResponse.json({ ok: true, stored: true, emailSent: false })
  }

  if (!response.ok) {
    console.error('Resend rejected inquiry email', response.status, await response.text())
    return NextResponse.json({ ok: true, stored: true, emailSent: false })
  }

  return NextResponse.json({ ok: true, stored: true, emailSent: true })
}
