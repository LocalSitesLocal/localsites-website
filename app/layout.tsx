import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'LocalSites | Moderne Websites für lokale Betriebe in Schweinfurt & Würzburg',
  description: 'LocalSites erstellt moderne Websites, Landingpages und Google-optimierte Online-Auftritte für lokale Betriebe in Schweinfurt, Würzburg und Franken.',
  keywords: [
    'Webdesign Schweinfurt',
    'Website erstellen lassen Würzburg',
    'Landingpage für Handwerker',
    'Website für lokale Betriebe',
    'Google Business Optimierung',
    'Webdesign Franken',
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
    title: 'LocalSites | Moderne Websites für lokale Betriebe',
    description: 'Professionelle Websites, Landingpages und Google-optimierte Online-Auftritte für lokale Unternehmen in Schweinfurt, Würzburg und Franken.',
    locale: 'de_DE',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0B1220',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-[#EEF4F8]">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
