'use client'

import { useEffect, useRef, useCallback } from 'react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'

// ─── Constants ─────────────────────────────────────────────────────────────────
const TOTAL_FRAMES = 240
const SCROLL_HEIGHT = '520vh'

function frameUrl(n: number) {
  return `/frames/ezgif-frame-${String(n).padStart(3, '0')}.jpg`
}

// ─── Story Beats ───────────────────────────────────────────────────────────────
interface Beat {
  id: string
  fadeIn: [number, number]
  fadeOut: [number, number]
  yIn: [number, number]
  yOut: [number, number]
  eyebrow: string
  heading: string
  body: string
  cta: string | null
}

const BEATS: Beat[] = [
  {
    id: 'hero',
    fadeIn: [0, 0.05],
    fadeOut: [0.16, 0.24],
    yIn: [18, 0],
    yOut: [0, -14],
    eyebrow: 'Your family dental partner',
    heading: 'Healthy smiles\nstart here.',
    body: 'A clean, welcoming environment designed for children and families. Premium dental care delivered with a gentle, trusted approach every visit.',
    cta: null,
  },
  {
    id: 'brushing',
    fadeIn: [0.22, 0.30],
    fadeOut: [0.50, 0.58],
    yIn: [18, 0],
    yOut: [0, -14],
    eyebrow: 'Our Approach',
    heading: 'Good habits build\nhealthy smiles.',
    body: 'We help children build healthy brushing habits early — with gentle guidance, a friendly environment, and a truly welcoming dental experience.',
    cta: null,
  },
  {
    id: 'trust',
    fadeIn: [0.55, 0.63],
    fadeOut: [0.78, 0.86],
    yIn: [18, 0],
    yOut: [0, -14],
    eyebrow: 'Trusted by Families',
    heading: 'Care parents\ncan trust.',
    body: 'From preventive care to regular check-ups, we make dental visits feel calm and reassuring. A patient-first practice at every step.',
    cta: null,
  },
  {
    id: 'cta',
    fadeIn: [0.83, 0.91],
    fadeOut: [1.0, 1.0],
    yIn: [18, 0],
    yOut: [0, 0],
    eyebrow: 'A Smile That Shines',
    heading: 'Sparkling care\nstarts here.',
    body: 'Professional dental care for brighter, healthier smiles. Gentle treatment, modern care, trusted results.',
    cta: 'Book Appointment',
  },
]

// ─── Beat overlay (left-column, stacked, one visible at a time) ────────────────
function BeatOverlay({
  beat,
  scrollYProgress,
}: {
  beat: Beat
  scrollYProgress: MotionValue<number>
}) {
  const opacity = useTransform(
    scrollYProgress,
    [beat.fadeIn[0], beat.fadeIn[1], beat.fadeOut[0], beat.fadeOut[1]],
    [0, 1, 1, beat.id === 'cta' ? 1 : 0]
  )

  const y = useTransform(
    scrollYProgress,
    [beat.fadeIn[0], beat.fadeIn[1], beat.fadeOut[0], beat.fadeOut[1]],
    [...beat.yIn, ...beat.yOut]
  )

  return (
    <motion.div
      style={{ opacity, y }}
      // All beats occupy the same absolute slot below the brand block
      className="absolute inset-0"
    >
      {/* Eyebrow */}
      <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0A6CFF] mb-3">
        {beat.eyebrow}
      </p>

      {/* Heading */}
      <h2 className="text-3xl lg:text-[2.25rem] xl:text-[2.6rem] font-extrabold text-[#0F172A] leading-[1.1] tracking-tight mb-4 whitespace-pre-line">
        {beat.heading}
      </h2>

      {/* Body */}
      <p className="text-[15px] leading-[1.75] text-[#475569] font-medium mb-7 max-w-sm">
        {beat.body}
      </p>

      {/* CTA */}
      {beat.cta && (
        <div className="flex gap-3 flex-wrap">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A6CFF] text-white text-sm font-bold shadow-[0_4px_20px_rgba(10,108,255,0.35)] hover:bg-[#0055D4] hover:shadow-[0_6px_28px_rgba(10,108,255,0.45)] active:scale-[0.98] transition-all duration-200"
          >
            {beat.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#DCEBFF] bg-[#F7FBFF] text-[#0A6CFF] text-sm font-bold hover:bg-[#EBF5FF] transition-colors duration-200"
          >
            Explore Services
          </a>
        </div>
      )}
    </motion.div>
  )
}

// ─── Scroll progress bar (bottom of left column) ──────────────────────────────
function ScrollProgress({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DCEBFF]">
      <motion.div
        style={{ scaleX, transformOrigin: 'left' }}
        className="h-full bg-gradient-to-r from-[#0A6CFF] to-[#6FD3FF]"
      />
    </div>
  )
}

// ─── Scroll hint (left column, fades on first scroll) ─────────────────────────
function ScrollHint({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.07], [1, 0])
  return (
    <motion.div
      style={{ opacity }}
      className="absolute bottom-8 left-0 flex items-center gap-3 pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-5 h-8 rounded-full border-2 border-[#0A6CFF]/30 flex items-start justify-center pt-1.5"
      >
        <div className="w-1 h-2 rounded-full bg-[#0A6CFF]/50" />
      </motion.div>
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0A6CFF]/60">
        Scroll to explore
      </p>
    </motion.div>
  )
}

// ─── Single progress dot ───────────────────────────────────────────────────────
function ProgressDot({
  progress,
  scrollYProgress,
}: {
  progress: number
  scrollYProgress: MotionValue<number>
}) {
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, progress - 0.1), progress, Math.min(1, progress + 0.1)],
    [0.25, 1, 0.25]
  )
  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, progress - 0.08), progress, Math.min(1, progress + 0.08)],
    [0.8, 1.6, 0.8]
  )
  return <motion.div style={{ opacity, scale }} className="w-1.5 h-1.5 rounded-full bg-[#0A6CFF]" />
}

const DOT_POSITIONS = [0.1, 0.35, 0.68, 0.9]

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<(HTMLImageElement | null)[]>([])
  const currentFrameRef = useRef(0)
  const loadedRef = useRef(new Set<number>())

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // ── Draw one frame to canvas using "cover" scaling to fill the right panel ──
  const drawFrameToCanvas = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.width / dpr
      const h = canvas.height / dpr

      ctx.fillStyle = '#FFFFFF'
      ctx.fillRect(0, 0, w, h)

      const iw = img.naturalWidth || 1280
      const ih = img.naturalHeight || 720

      // "cover" — fill the panel, crop sides equally (character stays centred)
      const scale = Math.max(w / iw, h / ih)
      const dw = iw * scale
      const dh = ih * scale
      const dx = (w - dw) / 2
      const dy = (h - dh) / 2

      ctx.drawImage(img, dx, dy, dw, dh)
    },
    []
  )

  const drawFrame = useCallback(
    (index: number) => {
      const canvas = canvasRef.current
      const img = imagesRef.current[index]
      if (!canvas || !img || !img.complete || img.naturalWidth === 0) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      drawFrameToCanvas(canvas, ctx, img)
    },
    [drawFrameToCanvas]
  )

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const w = canvas.offsetWidth
    const h = canvas.offsetHeight
    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr
      canvas.height = h * dpr
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.scale(dpr, dpr)
        drawFrame(currentFrameRef.current)
      }
    }
  }, [drawFrame])

  // ── Preload frames ────────────────────────────────────────────────────────
  useEffect(() => {
    const images = new Array<HTMLImageElement | null>(TOTAL_FRAMES).fill(null)
    imagesRef.current = images

    const loadFrame = (i: number) => {
      const img = new Image()
      img.onload = () => {
        images[i] = img
        loadedRef.current.add(i)
        if (i === 0) drawFrame(0)
        if (i === currentFrameRef.current) drawFrame(i)
      }
      img.src = frameUrl(i + 1)
    }

    for (let i = 0; i < 14; i++) loadFrame(i)

    const loadRest = () => {
      for (let i = 14; i < TOTAL_FRAMES; i++) loadFrame(i)
    }
    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadRest)
    } else {
      setTimeout(loadRest, 150)
    }

    return () => {
      images.forEach((img) => { if (img) img.src = '' })
    }
  }, [drawFrame])

  // ── Resize observer ───────────────────────────────────────────────────────
  useEffect(() => {
    setupCanvas()
    const observer = new ResizeObserver(setupCanvas)
    if (canvasRef.current) observer.observe(canvasRef.current)
    return () => observer.disconnect()
  }, [setupCanvas])

  // ── Scroll → frame index ──────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current
      if (!container) return

      const containerTop = container.getBoundingClientRect().top + window.scrollY
      const scrollRange = container.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, window.scrollY - containerTop)
      const progress = Math.min(1, scrolled / scrollRange)
      const target = Math.round(progress * (TOTAL_FRAMES - 1))

      if (target === currentFrameRef.current) return
      currentFrameRef.current = target

      if (loadedRef.current.has(target)) {
        drawFrame(target)
      } else {
        for (let offset = 1; offset < 20; offset++) {
          const lo = target - offset
          const hi = target + offset
          if (lo >= 0 && loadedRef.current.has(lo)) { drawFrame(lo); break }
          if (hi < TOTAL_FRAMES && loadedRef.current.has(hi)) { drawFrame(hi); break }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [drawFrame])

  return (
    <section
      ref={containerRef}
      style={{ height: SCROLL_HEIGHT }}
      className="relative w-full bg-white"
      id="story"
    >
      {/* ── Sticky viewport ──────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">

        {/* ════════════════════════════════════════════════════════════════
            LEFT COLUMN — brand identity + story beats
        ════════════════════════════════════════════════════════════════ */}
        <div className="relative z-20 flex flex-col justify-center w-[46%] xl:w-[44%] shrink-0 px-10 lg:px-14 xl:px-16 bg-white border-r border-[#DCEBFF]/70">

          {/* ── Brand identity block (always visible) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 lg:mb-10"
          >
            {/* Company name — hero headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.05] mb-4">
              K Dental<br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #0A6CFF 0%, #6FD3FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Hub
              </span>
            </h1>

            {/* Motto */}
            <p className="text-[15px] font-medium text-[#475569] leading-relaxed max-w-xs">
              Bright smiles.{' '}
              <span className="text-[#0A6CFF] font-semibold">Gentle care.</span>
              {' '}Premium dental care for children and families.
            </p>

            {/* Divider */}
            <div className="mt-7 flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-[#0A6CFF] to-[#6FD3FF]" />
              <div className="h-px flex-1 bg-[#DCEBFF]" />
            </div>
          </motion.div>

          {/* ── Story beats — one visible at a time ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
            style={{ minHeight: '280px' }}
          >
            {BEATS.map((beat) => (
              <BeatOverlay key={beat.id} beat={beat} scrollYProgress={scrollYProgress} />
            ))}
          </motion.div>

          {/* ── Bottom: progress + scroll hint ── */}
          <div className="absolute bottom-8 left-10 lg:left-14 xl:left-16 right-10 flex items-center justify-between">
            <ScrollHint scrollYProgress={scrollYProgress} />

            {/* Progress dots */}
            <div className="flex items-center gap-2.5">
              {DOT_POSITIONS.map((p, i) => (
                <ProgressDot key={i} progress={p} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>

          {/* Progress bar along the bottom */}
          <ScrollProgress scrollYProgress={scrollYProgress} />
        </div>

        {/* ════════════════════════════════════════════════════════════════
            RIGHT COLUMN — canvas (tooth character animation)
        ════════════════════════════════════════════════════════════════ */}
        <div className="relative flex-1 bg-white overflow-hidden">
          {/* Soft radial glow behind the character */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(111,211,255,0.10) 0%, rgba(10,108,255,0.04) 55%, transparent 100%)',
            }}
          />

          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-10"
            style={{ background: '#FFFFFF' }}
          />
        </div>
      </div>
    </section>
  )
}
