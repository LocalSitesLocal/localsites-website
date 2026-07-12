import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'nodejs'

export async function POST() {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse(null, { status: 404 })
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey || apiKey === 're_xxxxxxxxx') {
    return NextResponse.json(
      { success: false, error: 'RESEND_API_KEY is not configured.' },
      { status: 500 }
    )
  }

  try {
    const resend = new Resend(apiKey)

    const { data, error } = await resend.emails.send({
      from: 'LocalSites <kontakt@send.localsites-mainfranken.de>',
      to: 'kontakt@localsites-mainfranken.de',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>',
    })

    if (error) {
      return NextResponse.json({ success: false, error }, { status: 502 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error while sending email.'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
