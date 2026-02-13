import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nicolaspalavecino.com'),
  title: {
    default: 'Nicolás Palavecino | Technology Leader & Future CTO',
    template: '%s | Nicolás Palavecino'
  },
  description: 'Building reliable platforms, high-performing teams, and the future of technology leadership.',
  keywords: ['CTO', 'Technology Leadership', 'SRE', 'Platform Engineering', 'Observability', 'Nicolás Palavecino'],
  authors: [{ name: 'Nicolás Palavecino' }],
  creator: 'Nicolás Palavecino',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nicolaspalavecino.com',
    title: 'Nicolás Palavecino | Technology Leader & Future CTO',
    description: 'Building reliable platforms, high-performing teams, and the future of technology leadership.',
    siteName: 'Nicolás Palavecino',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nicolás Palavecino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicolás Palavecino | Technology Leader & Future CTO',
    description: 'Building reliable platforms, high-performing teams, and the future of technology leadership.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
