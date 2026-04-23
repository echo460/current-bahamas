import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Current Bahamas — Compliance Coordination for Bahamian SMEs',
    template: '%s | Current Bahamas',
  },
  description: 'Stay current on business licence renewals, VAT filing, TCC readiness, and NIB coordination. Administrative support for Bahamian businesses.',
  metadataBase: new URL('https://currentbahamas.com'),
  openGraph: {
    siteName: 'Current Bahamas',
    locale: 'en_BS',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
