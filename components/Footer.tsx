'use client'

import { useState } from 'react'
import { analytics } from '@/lib/analytics'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#why' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '/booking' },
]

const COMPANY_LINKS = [
  { label: 'Our Mission', href: '#why' },
  { label: 'Our Team', href: '#why' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book Appointment', href: '/booking' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-[#111111] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 lg:pt-20 pb-0">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Newsletter */}
          <div>
            <h2 className="text-2xl md:text-3xl font-medium leading-snug mb-8 text-white">
              Offerings From K Dental Hub
              <br />
              News &amp; Social
            </h2>

            <div className="relative max-w-md">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/30 pb-3 text-sm text-white/80 placeholder:text-white/50 focus:outline-none focus:border-white/60 transition-colors pr-10"
              />
              <button
                aria-label="Subscribe"
                onClick={() => analytics.newsletterSubscribed()}
                className="absolute right-0 bottom-3 text-white/70 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right: Link columns */}
          <div className="grid grid-cols-3 gap-8">
            {/* Navigation */}
            <div>
              <ul className="space-y-3.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <ul className="space-y-3.5">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <ul className="space-y-3.5">
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Large brand text at bottom, clipped */}
        <div className="mt-12 lg:mt-16 overflow-hidden">
          <svg
            viewBox="0 0 900 120"
            className="w-full select-none"
            preserveAspectRatio="xMidYMin meet"
            aria-hidden="true"
          >
            <text
              x="450"
              y="105"
              textAnchor="middle"
              className="fill-white/[0.07]"
              style={{ fontSize: '140px', fontWeight: 700, fontFamily: 'inherit' }}
            >
              K Dental Hub
            </text>
          </svg>
        </div>
      </div>
    </footer>
  )
}
