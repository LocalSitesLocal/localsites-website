import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ChatbaseWidget } from '@/components/chatbase-widget'
import { RouteScrollReset } from '@/components/route-scroll-reset'
import './globals.css'

export const metadata: Metadata = {
  title: 'LocalSites | Websites & digitale Betriebszentralen',
  description:
    'LocalSites erstellt moderne Websites, digitale Betriebszentralen auf Airtable und klar definierte Betreuung für lokale Betriebe in Schweinfurt, Würzburg und Mainfranken.',
  keywords: [
    'Website erstellen Schweinfurt',
    'Webdesign Schweinfurt',
    'Webdesign Würzburg',
    'Website für Handwerker',
    'Website für lokale Betriebe',
    'digitale Betriebszentrale Airtable',
    'digitale Automationen',
    'Google Bewertungen',
    'Website Wartung',
    'Landingpage erstellen',
  ],
  generator: 'Next.js',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/localsites-favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/localsites-icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/localsites-icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/localsites-apple-icon.png',
  },
  openGraph: {
    title: 'LocalSites | Websites für lokale Betriebe',
    description:
      'Moderne Websites, digitale Betriebszentralen und Betreuung für Unternehmen in Schweinfurt, Würzburg und Mainfranken.',
    locale: 'de_DE',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#f8fbff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-[#f8fbff]" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <RouteScrollReset />
        {children}
        <ChatbaseWidget chatbotId={process.env.NEXT_PUBLIC_CHATBASE_BOT_ID || 'a-_SQBLEszgcO_S7su3pc'} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
