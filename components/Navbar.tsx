'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Kids Care', href: '#kids' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-[#DCEBFF]/80 shadow-[0_1px_20px_rgba(10,108,255,0.06)]'
            : 'bg-transparent'
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[68px] flex items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0A6CFF] to-[#6FD3FF] flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200">
              <span className="text-white text-sm font-extrabold tracking-tight">K</span>
            </div>
            <span className="font-bold text-[#0F172A] tracking-tight text-[15px]">
              K Dental Hub
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#0A6CFF] transition-colors duration-200 rounded-lg hover:bg-[#F7FBFF] group"
                >
                  {link.label}
                  <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#0A6CFF] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A6CFF] text-white text-sm font-semibold hover:bg-[#0055D4] active:scale-[0.98] transition-all duration-200 shadow-[0_2px_12px_rgba(10,108,255,0.25)] hover:shadow-[0_4px_20px_rgba(10,108,255,0.35)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <path d="M7 1C4.24 1 2 3.24 2 6C2 7.93 3.07 9.62 4.65 10.5L4 13L6.5 11.95C6.67 11.98 6.83 12 7 12C9.76 12 12 9.76 12 7C12 4.24 9.76 2 7 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="5" cy="6" r="0.7" fill="white"/>
                <circle cx="7" cy="6" r="0.7" fill="white"/>
                <circle cx="9" cy="6" r="0.7" fill="white"/>
              </svg>
              Book Appointment
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-[#475569] hover:text-[#0A6CFF] hover:bg-[#F7FBFF] transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
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
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-xl border-b border-[#DCEBFF] shadow-lg"
          >
            <ul className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block px-4 py-3 text-sm font-medium text-[#475569] hover:text-[#0A6CFF] hover:bg-[#F7FBFF] rounded-lg transition-colors duration-150"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 pb-1">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#0A6CFF] text-white text-sm font-semibold shadow-[0_2px_12px_rgba(10,108,255,0.25)]"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
