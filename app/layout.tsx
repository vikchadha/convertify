import './css/style.css'

import { Inter, Playfair_Display } from 'next/font/google'
import { Providers } from './providers'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  display: 'swap'
})

export const metadata = {
  title: 'Convertify | AI-Powered Lead Magnet Automation',
  description: 'Stop wasting time on manual lead magnet creation. Convertify uses AI to build high-converting ebooks, guides, and checklists in minutes. Start your free trial today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleAnalytics />
      {/* Ahrefs script */}
      <Script
        strategy="afterInteractive"
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="DWNc4im9UO0vNwU8ERP0Yw"
        async
      />
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased bg-white text-slate-800 tracking-tight`}>
        <Providers>
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
