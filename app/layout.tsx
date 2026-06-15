import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { ChatbaseWidget } from '@/components/chatbase-widget'
import './globals.css'

export const metadata: Metadata = {
  title: 'LocalSites | Websites & digitale Automationen für lokale Betriebe',
  description:
    'LocalSites erstellt moderne Websites, Wartung, Google-Bewertungs-Systeme und digitale Automationen für lokale Betriebe in Schweinfurt, Würzburg und Umgebung.',
  keywords: [
    'Website erstellen Schweinfurt',
    'Webdesign Schweinfurt',
    'Webdesign Würzburg',
    'Website für Handwerker',
    'Website für lokale Betriebe',
    'digitale Automationen',
    'AI Agency Schweinfurt',
    'Google Bewertungen',
    'Website Wartung',
    'Landingpage erstellen',
  ],
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'LocalSites | Websites für lokale Betriebe',
    description:
      'Moderne Websites, Wartung und einfache Automationen für Unternehmen in Schweinfurt, Würzburg und Umgebung.',
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
    <html lang="de" className="bg-[#f8fbff]">
      <body className="font-sans antialiased">
        {children}
        <ChatbaseWidget chatbotId={process.env.NEXT_PUBLIC_CHATBASE_BOT_ID || 'a-_SQBLEszgcO_S7su3pc'} />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
