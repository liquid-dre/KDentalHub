import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { LocalBusinessSchema } from '@/components/StructuredData'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'K Dental Hub — Bright Smiles, Gentle Care',
    template: '%s | K Dental Hub',
  },
  description:
    'Premium dental care for children and families in Harare, Zimbabwe. Modern, child-friendly dental clinic offering cavity protection, root canals, teeth whitening, implants, and more. Book your appointment today.',
  keywords: [
    'dentist Zimbabwe',
    'dentist Harare',
    'dental care Zimbabwe',
    'family dentist Zimbabwe',
    'children dentist Harare',
    'pediatric dentistry Zimbabwe',
    'teeth whitening Zimbabwe',
    'dental implants Harare',
    'root canal Zimbabwe',
    'dental checkup Harare',
    'best dentist in Zimbabwe',
    'K Dental Hub',
  ],
  authors: [{ name: 'K Dental Hub' }],
  creator: 'K Dental Hub',
  metadataBase: new URL('https://kdentalhub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'K Dental Hub — Bright Smiles, Gentle Care',
    description:
      'Premium dental care for children and families. Modern, child-friendly, and trusted. Book your appointment today.',
    type: 'website',
    locale: 'en_US',
    url: 'https://kdentalhub.com',
    siteName: 'K Dental Hub',
    images: [
      {
        url: 'https://images.pexels.com/photos/6502552/pexels-photo-6502552.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'K Dental Hub — Modern Dental Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'K Dental Hub — Bright Smiles, Gentle Care',
    description:
      'Premium dental care for children and families. Book your appointment today.',
    images: [
      'https://images.pexels.com/photos/6502552/pexels-photo-6502552.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={font.variable}>
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="font-sans bg-white text-[#0F172A] antialiased overflow-x-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
