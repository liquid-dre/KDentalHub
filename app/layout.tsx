import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'K Dental Hub — Bright Smiles, Gentle Care',
  description:
    'Premium dental care for children and families. Modern, child-friendly, and trusted. Book your appointment at K Dental Hub today.',
  keywords: ['dental', 'dentist', 'children dentist', 'family dental', 'dental care', 'K Dental Hub'],
  openGraph: {
    title: 'K Dental Hub — Bright Smiles, Gentle Care',
    description: 'Premium dental care for children and families.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body className="font-sans bg-white text-[#0F172A] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
