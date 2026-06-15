import { NextResponse } from 'next/server'

type ContactPayload = {
  name?: string
  unternehmen?: string
  email?: string
  telefon?: string
  website?: string
  nachricht?: string
}

function clean(value: unknown) {
  return String(value ?? '').trim()
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null

  if (!payload) {
    return NextResponse.json({ error: 'Ungueltige Anfrage.' }, { status: 400 })
  }

  const name = clean(payload.name)
  const email = clean(payload.email)
  const unternehmen = clean(payload.unternehmen)
  const telefon = clean(payload.telefon)
  const website = clean(payload.website)
  const nachricht = clean(payload.nachricht)

  if (!name || !email || !email.includes('@')) {
    return NextResponse.json({ error: 'Name und E-Mail sind erforderlich.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    return NextResponse.json({ error: 'E-Mail Versand ist noch nicht konfiguriert.' }, { status: 500 })
  }

  const from = process.env.CONTACT_FROM_EMAIL || 'LocalSites <onboarding@resend.dev>'
  const subject = `Neue Website-Check Anfrage von ${name}`
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
      <h1 style="font-size:22px">Neue Website-Check Anfrage</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="font-weight:bold;border-bottom:1px solid #e5edf7">${escapeHtml(label)}</td>
                <td style="border-bottom:1px solid #e5edf7">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join('')}
      </table>
    </div>
  `

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject,
      html,
    }),
  })

  if (!response.ok) {
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
