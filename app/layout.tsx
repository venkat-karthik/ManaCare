import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, Inter, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { Chatbot } from '@/components/Chatbot'

const playfair = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const dmSerif = DM_Serif_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400'],
})

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ManaCare - NRI Family Care Services in India',
  description: 'Professional care services for NRI families. Trusted by thousands of Non-Resident Indians for parent care, relative care, property management, and household assistance across India.',
  generator: 'v0.app',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSerif.variable} ${inter.variable} bg-white`}>
      <body className="font-sans antialiased bg-white text-[#1F2937]">
        {children}
        <Chatbot />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
