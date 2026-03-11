'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#contact' },
]

function getLuminance(r: number, g: number, b: number) {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

function parseColor(color: string): [number, number, number] | null {
  if (color === 'transparent' || color === 'rgba(0, 0, 0, 0)') return null
  const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/)
  if (match) return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])]
  return null
}

function getEffectiveBgColor(el: Element | null): [number, number, number] {
  while (el && el !== document.documentElement) {
    const bg = getComputedStyle(el).backgroundColor
    const parsed = parseColor(bg)
    if (parsed) return parsed
    el = el.parentElement
  }
  return [255, 255, 255] // fallback to white
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [isDarkBg, setIsDarkBg] = useState(true) // assume dark hero initially
  const headerRef = useRef<HTMLDivElement>(null)

  const detectBackground = useCallback(() => {
    if (!headerRef.current) return
    const rect = headerRef.current.getBoundingClientRect()
    const sampleX = rect.left + rect.width / 2
    const sampleY = rect.top + rect.height / 2

    // Temporarily hide the navbar to sample what's behind it
    headerRef.current.style.pointerEvents = 'none'
    headerRef.current.style.visibility = 'hidden'

    const elBehind = document.elementFromPoint(sampleX, sampleY)

    headerRef.current.style.pointerEvents = ''
    headerRef.current.style.visibility = ''

    if (elBehind) {
      const [r, g, b] = getEffectiveBgColor(elBehind)
      const luminance = getLuminance(r, g, b)
      // luminance < 0.5 = dark background
      setIsDarkBg(luminance < 0.5)
    }
  }, [])

  useEffect(() => {
    detectBackground()
    const handleScroll = () => detectBackground()
    window.addEventListener('scroll', handleScroll, { passive: true })
    // Also check on load/resize since layout may shift
    window.addEventListener('resize', detectBackground)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', detectBackground)
    }
  }, [detectBackground])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // When over dark bg: light glass overlay, white text
  // When over light bg: dark glass overlay, black text
  const glassClass = isDarkBg ? 'liquid-glass-light' : 'liquid-glass-dark'
  const textMuted = isDarkBg ? 'text-white/80' : 'text-black/70'
  const textHover = isDarkBg ? 'hover:text-white' : 'hover:text-black'
  const hoverBg = isDarkBg ? 'hover:bg-white/10' : 'hover:bg-black/5'
  const activeTabBg = 'bg-[#4d9de0] text-white shadow-sm'
  const callBtnClass = isDarkBg
    ? 'bg-white/90 text-gray-900 hover:bg-white shadow-md hover:shadow-lg'
    : 'bg-gray-900/90 text-white hover:bg-gray-900 shadow-md hover:shadow-lg'
  const logoColor = isDarkBg ? 'text-white' : 'text-black'
  const mobileToggleColor = isDarkBg ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-black/70 hover:text-black hover:bg-black/5'

  return (
    <>
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 py-3 px-4 md:px-8 transition-colors duration-500"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo - Extreme Left */}
          <a href="#" className="flex-shrink-0 group">
            <span className={`font-extrabold text-2xl md:text-3xl tracking-tight drop-shadow-lg transition-colors duration-500 ${logoColor}`}>
              Dental Hub
            </span>
          </a>

          {/* Center - Liquid Glass Nav Pill */}
          <div className={`hidden md:flex items-center ${glassClass} rounded-full px-2 py-1.5 transition-all duration-500`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeLink === link.label
                    ? activeTabBg
                    : `${textMuted} ${textHover} ${hoverBg}`
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right - Book an Appointment Pill Button */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="tel:+1234567890"
              className={`inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full backdrop-blur-sm text-sm font-semibold active:scale-[0.97] transition-all duration-500 ${callBtnClass}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Book an Appointment
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-500 ${mobileToggleColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" strokeLinecap="round" />
                  <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
                  <line x1="3" y1="17" x2="21" y2="17" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className={`fixed top-[72px] left-4 right-4 z-40 md:hidden ${glassClass} rounded-2xl shadow-2xl transition-all duration-500`}
          >
            <ul className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                      activeLink === link.label
                        ? activeTabBg
                        : `${textMuted} ${textHover} ${hoverBg}`
                    }`}
                    onClick={() => {
                      setActiveLink(link.label)
                      setMobileOpen(false)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 pb-1">
                <a
                  href="tel:+1234567890"
                  className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-500 ${callBtnClass}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Book an Appointment
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
