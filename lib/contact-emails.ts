type EmailRow = [label: string, value: string]

type InquiryEmailData = {
  name: string
  unternehmen: string
  email: string
  telefon: string
  website: string
  nachricht: string
  selection: EmailRow[]
}

const SITE_URL = 'https://localsites-mainfranken.de'
const CONTACT_EMAIL = 'kontakt@localsites-mainfranken.de'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function renderLogo() {
  return `
    <a href="${SITE_URL}" style="color:#061637;text-decoration:none;font-family:Arial,sans-serif;font-size:24px;font-weight:800;letter-spacing:0">
      LocalSites<span style="color:#0b63ce">.</span>
    </a>
  `
}

function renderEmailShell({
  preheader,
  eyebrow,
  title,
  content,
}: {
  preheader: string
  eyebrow: string
  title: string
  content: string
}) {
  return `<!doctype html>
  <html lang="de">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>${escapeHtml(title)}</title>
    </head>
    <body style="margin:0;background:#eef6ff;color:#061637;font-family:Arial,sans-serif">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(preheader)}</div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eef6ff">
        <tr>
          <td align="center" style="padding:28px 14px">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px">
              <tr>
                <td style="padding:0 4px 18px">${renderLogo()}</td>
              </tr>
              <tr>
                <td style="overflow:hidden;border:1px solid #d7e7f7;border-radius:10px;background:#ffffff;box-shadow:0 20px 60px rgba(15,55,100,.08)">
                  <div style="height:5px;background:#0b63ce"></div>
                  <div style="padding:34px 32px">
                    <p style="margin:0 0 10px;color:#0b63ce;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase">${escapeHtml(eyebrow)}</p>
                    <h1 style="margin:0;color:#061637;font-size:28px;line-height:1.2;font-weight:800;letter-spacing:0">${escapeHtml(title)}</h1>
                    ${content}
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:18px 8px 0;color:#52647d;font-size:12px;line-height:1.7;text-align:center">
                  LocalSites · Schweinfurt · Würzburg · Mainfranken<br />
                  <a href="mailto:${CONTACT_EMAIL}" style="color:#0b63ce;text-decoration:none">${CONTACT_EMAIL}</a>
                  &nbsp;·&nbsp;
                  <a href="${SITE_URL}/datenschutz" style="color:#0b63ce;text-decoration:none">Datenschutz</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`
}

function renderRows(rows: EmailRow[]) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:26px;border-collapse:collapse">
      ${rows
        .map(
          ([label, value]) => `
            <tr>
              <td width="145" valign="top" style="border-bottom:1px solid #e5edf7;padding:12px 12px 12px 0;color:#52647d;font-size:13px;font-weight:700">${escapeHtml(label)}</td>
              <td valign="top" style="border-bottom:1px solid #e5edf7;padding:12px 0;color:#061637;font-size:14px;line-height:1.6">${escapeHtml(value || '-').replaceAll('\n', '<br />')}</td>
            </tr>`
        )
        .join('')}
    </table>`
}

function renderButton(label: string, href: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:26px">
      <tr>
        <td style="border-radius:8px;background:#ff6a00">
          <a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 22px;color:#ffffff;font-size:14px;font-weight:800;text-decoration:none">${escapeHtml(label)} &nbsp;→</a>
        </td>
      </tr>
    </table>`
}

export function buildInternalInquiryEmail(data: InquiryEmailData) {
  const rows: EmailRow[] = [
    ['Name', data.name],
    ['Unternehmen', data.unternehmen || '-'],
    ['E-Mail', data.email],
    ['Telefon', data.telefon || '-'],
    ['Website', data.website || '-'],
    ['Nachricht', data.nachricht || '-'],
  ]

  const content = `
    <p style="margin:16px 0 0;color:#52647d;font-size:15px;line-height:1.7">Die Anfrage wurde im LocalSites-Formular erfasst und in Airtable gespeichert.</p>
    ${renderRows(rows)}
    ${renderButton('Direkt antworten', `mailto:${data.email}`)}
  `

  return {
    html: renderEmailShell({
      preheader: `Neue Anfrage von ${data.name}`,
      eyebrow: 'Neue Website-Anfrage',
      title: `Neue Anfrage von ${data.name}`,
      content,
    }),
    text: [
      `Neue LocalSites-Anfrage von ${data.name}`,
      '',
      ...rows.map(([label, value]) => `${label}: ${value || '-'}`),
    ].join('\n'),
  }
}

export function buildCustomerConfirmationEmail(data: InquiryEmailData) {
  const selectionBlock = data.selection.length > 0
    ? `
      <div style="margin-top:26px;border-left:4px solid #0b63ce;background:#f2f7ff;padding:18px 20px">
        <p style="margin:0 0 8px;color:#061637;font-size:15px;font-weight:800">Ihre vorausgewählte Lösung</p>
        ${data.selection
          .map(
            ([label, value]) => `<p style="margin:5px 0;color:#415574;font-size:13px;line-height:1.5"><strong style="color:#061637">${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`
          )
          .join('')}
      </div>`
    : ''

  const content = `
    <p style="margin:18px 0 0;color:#263956;font-size:16px;line-height:1.75">Guten Tag ${escapeHtml(data.name)},</p>
    <p style="margin:12px 0 0;color:#52647d;font-size:15px;line-height:1.75">vielen Dank für Ihre Anfrage. Ihre Angaben sind sicher angekommen und werden persönlich geprüft. Sie erhalten in der Regel innerhalb von 48–72 Stunden eine erste Rückmeldung.</p>
    ${selectionBlock}
    <div style="margin-top:28px">
      <p style="margin:0 0 14px;color:#061637;font-size:16px;font-weight:800">So geht es weiter</p>
      <p style="margin:8px 0;color:#52647d;font-size:14px;line-height:1.6"><strong style="color:#0b63ce">1.</strong> Wir prüfen Ihre Angaben und den gewünschten Umfang.</p>
      <p style="margin:8px 0;color:#52647d;font-size:14px;line-height:1.6"><strong style="color:#0b63ce">2.</strong> Sie erhalten eine ehrliche Einschätzung mit passendem nächsten Schritt.</p>
      <p style="margin:8px 0;color:#52647d;font-size:14px;line-height:1.6"><strong style="color:#0b63ce">3.</strong> Falls sinnvoll, klären wir offene Fragen in einem kurzen Gespräch.</p>
    </div>
    ${renderButton('Angebote & Preise ansehen', `${SITE_URL}/preise`)}
    <p style="margin:24px 0 0;color:#52647d;font-size:13px;line-height:1.7">Sie möchten noch etwas ergänzen? Antworten Sie einfach direkt auf diese E-Mail.</p>
  `

  return {
    html: renderEmailShell({
      preheader: 'Ihre Anfrage bei LocalSites ist angekommen.',
      eyebrow: 'Anfrage erfolgreich eingegangen',
      title: 'Vielen Dank für Ihre Anfrage.',
      content,
    }),
    text: [
      `Guten Tag ${data.name},`,
      '',
      'vielen Dank für Ihre Anfrage. Ihre Angaben sind sicher angekommen und werden persönlich geprüft.',
      'Sie erhalten in der Regel innerhalb von 48–72 Stunden eine erste Rückmeldung.',
      '',
      ...(data.selection.length > 0
        ? ['Ihre vorausgewählte Lösung:', ...data.selection.map(([label, value]) => `${label}: ${value}`), '']
        : []),
      'So geht es weiter:',
      '1. Wir prüfen Ihre Angaben und den gewünschten Umfang.',
      '2. Sie erhalten eine ehrliche Einschätzung mit passendem nächsten Schritt.',
      '3. Falls sinnvoll, klären wir offene Fragen in einem kurzen Gespräch.',
      '',
      `Angebote & Preise: ${SITE_URL}/preise`,
      `Kontakt: ${CONTACT_EMAIL}`,
    ].join('\n'),
  }
}
