'use client'

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { CountUp } from '@/components/ui/count-up'
import { ArrowRight, ShieldCheck, Syringe, Scissors, Sparkles } from 'lucide-react'

// ─── Outline cursor constants ───────────────────────────────────────────────────
const CURSOR_WIDTH = 32
const HOVER_PADDING = 24

// ─── Service card data ──────────────────────────────────────────────────────────
const SERVICES = [
  {
    title: 'Cavity Protection',
    description:
      'As we move into this new era of technology, we tend to look at the future with confidence and pride, which is why our theme.',
    bg: '#FFF0D4',
  },
  {
    title: 'Root Canal Treatment',
    description:
      "In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good.",
    bg: '#EDD8FF',
  },
  {
    title: 'Oral Surgery',
    description:
      "In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good.",
    bg: '#D4EEFF',
  },
  {
    title: 'Teeth Whitening',
    description:
      'Professional whitening treatments that brighten your smile safely and effectively, boosting your confidence.',
    bg: '#D4F5E9',
  },
]

// ─── Why / stat items ───────────────────────────────────────────────────────────
const STATS = [
  { value: 10, suffix: '+', label: 'Years of care' },
  { value: 5, suffix: 'K+', label: 'Happy patients' },
  { value: 98, suffix: '%', label: 'Satisfaction rate' },
  { value: 100, suffix: '%', label: 'Child-friendly' },
]

const TRUST_POINTS = [
  {
    icon: '🏆',
    title: 'Board-Certified Specialists',
    body: 'Advanced training in pediatric and family dental care, delivering the highest clinical standard every visit.',
  },
  {
    icon: '💙',
    title: 'Anxiety-Free Approach',
    body: 'Child-friendly techniques that make every appointment calm, positive, and genuinely fear-free.',
  },
  {
    icon: '✨',
    title: 'Modern Equipment',
    body: 'Digital X-rays, gentle precision tools, and state-of-the-art technology for comfortable, accurate care.',
  },
]

// ─── Sparkle SVG decoration ─────────────────────────────────────────────────────
function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 0L10.9 7.5L18 4L12.5 9.1L20 10L12.5 10.9L18 16L10.9 12.5L10 20L9.1 12.5L2 16L7.5 10.9L0 10L7.5 9.1L2 4L9.1 7.5L10 0Z"
        fill="currentColor"
        fillOpacity="0.35"
      />
    </svg>
  )
}


// ─── Outline Cursor component ───────────────────────────────────────────────────
function OutlineCursor({
  cursorRef,
}: {
  cursorRef: React.MutableRefObject<HTMLDivElement | null>
}) {
  return (
    <div
      ref={cursorRef}
      style={{
        width: 0,
        height: 0,
        borderRadius: CURSOR_WIDTH,
        top: 0,
        left: 0,
      }}
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 border border-neutral-900 z-[9999]"
    />
  )
}

// ─── Main component ─────────────────────────────────────────────────────────────
export default function ServicesSection() {
  const cursorRef = useRef<HTMLDivElement | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const el = e.target as HTMLElement
    const card = el.closest('.outline-card') as HTMLElement | null
    const cursorEl = cursorRef.current
    if (!cursorEl) return

    if (card) {
      const { width, height, top, left } = card.getBoundingClientRect()
      cursorEl.style.transition = '0.25s all'
      cursorEl.style.width = `${width + HOVER_PADDING}px`
      cursorEl.style.height = `${height + HOVER_PADDING}px`
      cursorEl.style.borderRadius = `${HOVER_PADDING / 2}px`
      cursorEl.style.top = `${top + height / 2}px`
      cursorEl.style.left = `${left + width / 2}px`
    } else {
      cursorEl.style.transition = '0s all'
      cursorEl.style.width = `${CURSOR_WIDTH}px`
      cursorEl.style.height = `${CURSOR_WIDTH}px`
      cursorEl.style.borderRadius = `${CURSOR_WIDTH}px`
      cursorEl.style.top = `${e.clientY}px`
      cursorEl.style.left = `${e.clientX}px`
    }
  }

  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          SERVICES SECTION — Redesigned Card Layout
      ════════════════════════════════════════════════════════════════ */}
      {/* Outline cursor — rendered outside section to avoid overflow clipping */}
      <OutlineCursor cursorRef={cursorRef} />

      <section
        id="services"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          const cursorEl = cursorRef.current
          if (cursorEl) {
            cursorEl.style.width = '0px'
            cursorEl.style.height = '0px'
          }
        }}
        className="relative bg-[#FAFAFA] py-24 lg:py-32 overflow-clip"
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
          {/* ── Section header — left-aligned ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 lg:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
              Services We Provide
              <br />
              Are Listed Below
            </h2>
          </motion.div>

          {/* ── Grid with vertical label ── */}
          <div className="relative flex gap-6 lg:gap-8">
            {/* Left column — 2 cards stacked */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-8">
              {/* Card 1: Cavity Protection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="outline-card group/card relative rounded-[2rem] p-8 lg:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden"
                style={{ backgroundColor: SERVICES[0].bg }}
              >
                {/* Icon + sparkle */}
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <ShieldCheck className="w-7 h-7 text-[#2D2D2D]" strokeWidth={1.5} />
                  </div>
                  <Sparkle className="text-[#2D2D2D] mt-2" />
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    {SERVICES[0].title}
                  </h3>
                  <p className="text-[15px] text-[#555] leading-relaxed mb-6 max-w-sm">
                    {SERVICES[0].description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group/link"
                  >
                    <span className="border-b border-[#1a1a1a] pb-0.5">Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-2" />
                  </a>
                </div>
              </motion.div>

              {/* Card 3: Oral Surgery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="outline-card group/card relative rounded-[2rem] p-8 lg:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden"
                style={{ backgroundColor: SERVICES[2].bg }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <Scissors className="w-7 h-7 text-[#2D2D2D]" strokeWidth={1.5} />
                  </div>
                  <Sparkle className="text-[#2D2D2D] mt-2" />
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    {SERVICES[2].title}
                  </h3>
                  <p className="text-[15px] text-[#555] leading-relaxed mb-6 max-w-sm">
                    {SERVICES[2].description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group/link"
                  >
                    <span className="border-b border-[#1a1a1a] pb-0.5">Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-2" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* ── Vertical "our services" label ── */}
            <div className="hidden lg:flex flex-col items-center justify-center w-12 flex-shrink-0">
              <div className="flex-1 w-px bg-[#D1D5DB]" />
              <div
                className="py-6"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9CA3AF]">
                  our services
                </span>
              </div>
              <div className="flex-1 w-px bg-[#D1D5DB]" />
            </div>

            {/* Right column — 2 cards stacked */}
            <div className="flex-1 flex flex-col gap-6 lg:gap-8">
              {/* Card 2: Root Canal Treatment */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="outline-card group/card relative rounded-[2rem] p-8 lg:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden"
                style={{ backgroundColor: SERVICES[1].bg }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <Syringe className="w-7 h-7 text-[#2D2D2D]" strokeWidth={1.5} />
                  </div>
                  <Sparkle className="text-[#2D2D2D] mt-2" />
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    {SERVICES[1].title}
                  </h3>
                  <p className="text-[15px] text-[#555] leading-relaxed mb-6 max-w-sm">
                    {SERVICES[1].description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group/link"
                  >
                    <span className="border-b border-[#1a1a1a] pb-0.5">Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-2" />
                  </a>
                </div>
              </motion.div>

              {/* Card 4: Teeth Whitening */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="outline-card group/card relative rounded-[2rem] p-8 lg:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden"
                style={{ backgroundColor: SERVICES[3].bg }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-[#2D2D2D]" strokeWidth={1.5} />
                  </div>
                  <Sparkle className="text-[#2D2D2D] mt-2" />
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#1a1a1a] mb-3 tracking-tight">
                    {SERVICES[3].title}
                  </h3>
                  <p className="text-[15px] text-[#555] leading-relaxed mb-6 max-w-sm">
                    {SERVICES[3].description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group/link"
                  >
                    <span className="border-b border-[#1a1a1a] pb-0.5">Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-2" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* ════════════════════════════════════════════════════════════════
          SERVICES CONTINUATION — Our Works
      ════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#D6E9D7] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Left column — text + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="flex items-center gap-3 text-[13px] text-[#555] mb-8">
                <span className="font-medium">(our works)</span>
                <span className="block w-16 h-px bg-[#555]" />
              </p>
              <p className="text-[15px] text-[#444] leading-relaxed mb-8 max-w-sm">
                Our team of skilled and experienced dental professionals strives to create a comfortable and welcoming environment for each patient.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1a1a1a] text-white text-sm font-semibold hover:bg-[#333] active:scale-[0.98] transition-all duration-200"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Member avatars */}
              <div className="flex items-center gap-4 mt-12">
                <div className="flex -space-x-3">
                  <div className="w-11 h-11 rounded-full border-2 border-[#D6E9D7] bg-white/60 overflow-hidden">
                    <svg className="w-full h-full text-[#bbb]" viewBox="0 0 44 44" fill="none">
                      <circle cx="22" cy="18" r="8" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6 40c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="w-11 h-11 rounded-full border-2 border-[#D6E9D7] bg-white/60 overflow-hidden">
                    <svg className="w-full h-full text-[#bbb]" viewBox="0 0 44 44" fill="none">
                      <circle cx="22" cy="18" r="8" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6 40c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="w-11 h-11 rounded-full border-2 border-[#D6E9D7] bg-[#8B6E5B] overflow-hidden flex items-center justify-center">
                    <svg className="w-full h-full text-white/70" viewBox="0 0 44 44" fill="none">
                      <circle cx="22" cy="18" r="8" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M6 40c0-8.84 7.16-16 16-16s16 7.16 16 16" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1a1a]">10K+ happy</p>
                  <p className="text-sm font-bold text-[#1a1a1a]">members</p>
                </div>
              </div>
            </motion.div>

            {/* Right column — service image cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden mb-4 aspect-[4/5]">
                  <img
                    src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Teeth Straightening"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">Teeth Straightening</h3>
                <p className="text-sm text-[#666]">Improve your smile with cleaning.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="rounded-3xl overflow-hidden mb-4 aspect-[4/5]">
                  <img
                    src="https://images.pexels.com/photos/6627573/pexels-photo-6627573.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Dental Implant"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">Dental Implant</h3>
                <p className="text-sm text-[#666]">Improve your smile with cleaning.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════════════════════════════ */}
      <section id="why" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl bg-[#F7FBFF] border border-[#E8F1FF] px-6 py-7 text-center"
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={2.2}
                  className="text-3xl xl:text-4xl font-extrabold mb-1"
                  numberClassName="bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(135deg, #0A6CFF 0%, #6FD3FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                />
                <p className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Split: headline left, trust cards right */}
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A6CFF] mb-4">
                <span className="text-[#0A6CFF]/40 font-light">/</span>
                Why Choose Us
              </p>
              <h2 className="text-4xl xl:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.07] mb-6">
                Designed for<br />comfort. Built<br />on trust.
              </h2>
              <p className="text-[15px] text-[#475569] leading-relaxed mb-8 max-w-sm">
                At K Dental Hub, we believe every child deserves a dental experience that is positive, gentle, and genuinely caring — from the very first visit to a lifetime of healthy smiles.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A6CFF] text-white text-sm font-bold shadow-[0_4px_20px_rgba(10,108,255,0.25)] hover:bg-[#0055D4] hover:shadow-[0_6px_28px_rgba(10,108,255,0.35)] active:scale-[0.98] transition-all duration-200"
              >
                Book a Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>

            <div className="space-y-4">
              {TRUST_POINTS.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex gap-5 p-6 rounded-2xl bg-[#F7FBFF] border border-[#E8F1FF] hover:border-[#6FD3FF]/60 hover:shadow-[0_6px_24px_rgba(10,108,255,0.07)] transition-all duration-250"
                >
                  <div className="w-11 h-11 rounded-2xl bg-white border border-[#E8F1FF] flex items-center justify-center text-[22px] flex-shrink-0 group-hover:shadow-[0_2px_10px_rgba(10,108,255,0.10)] transition-shadow duration-200">
                    {point.icon}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-[15px] font-bold text-[#0F172A] mb-1.5">{point.title}</h3>
                    <p className="text-[13.5px] text-[#64748B] leading-[1.7]">{point.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative overflow-hidden">
        <div className="relative bg-[#0A6CFF] py-20 lg:py-28 px-6 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-white/[0.07] pointer-events-none" />
          <div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/[0.06] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full border border-white/[0.07] pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(135deg, #0A6CFF 0%, #1a7fff 50%, #6FD3FF 100%)' }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-5">
                / Get Started Today
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.07] mb-5">
                A brighter smile is just<br />one visit away
              </h2>
              <p className="text-[15px] text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
                Book your appointment at K Dental Hub and experience dental care that&apos;s gentle, modern, and designed around your family&apos;s needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#0A6CFF] text-sm font-bold hover:bg-[#F0F8FF] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 2H5.5L6.75 5L5.25 5.88C6 7.5 8.5 10 10.12 10.75L11 9.25L14 10.5V13C14 13.55 13.55 14 13 14C6.37 14 2 9.63 2 3C2 2.45 2.45 2 3 2Z" fill="#0A6CFF"/>
                  </svg>
                  Call Us Today
                </a>
                <a
                  href="mailto:hello@kdentalhub.com"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/25 text-white text-sm font-bold hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="white" strokeWidth="1.3"/>
                    <path d="M2 6l6 4 6-4" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                  Send a Message
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
