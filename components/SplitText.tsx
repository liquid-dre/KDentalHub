'use client'

import React, { useRef, useEffect, useState, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  ease?: string
  splitType?: 'chars' | 'words' | 'lines'
  from?: Record<string, number>
  to?: Record<string, number>
  threshold?: number
  rootMargin?: string
  textAlign?: 'left' | 'center' | 'right'
  tag?: keyof React.JSX.IntrinsicElements
  onLetterAnimationComplete?: () => void
  showCallback?: boolean
}

const EASE_MAP: Record<string, [number, number, number, number]> = {
  'power3.out': [0.22, 1, 0.36, 1],
  'power2.out': [0.33, 1, 0.68, 1],
  'power4.out': [0.16, 1, 0.3, 1],
  'bounce.out': [0.34, 1.56, 0.64, 1],
  'elastic.out': [0.68, -0.6, 0.32, 1.6],
}

export default function SplitText({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: rootMargin as `${number}px`,
  })
  const [completedCount, setCompletedCount] = useState(0)

  const units = useMemo(() => {
    if (splitType === 'words') return text.split(/(\s+)/)
    if (splitType === 'lines') return [text]
    // chars — split each word into chars, preserve spaces between words
    const words = text.split(/(\s+)/)
    const chars: string[] = []
    for (const segment of words) {
      if (/^\s+$/.test(segment)) {
        chars.push(segment)
      } else {
        for (const ch of segment) {
          chars.push(ch)
        }
      }
    }
    return chars
  }, [text, splitType])

  const animatableCount = useMemo(
    () => units.filter((u) => !/^\s+$/.test(u)).length,
    [units]
  )

  useEffect(() => {
    if (completedCount > 0 && completedCount >= animatableCount) {
      onLetterAnimationComplete?.()
    }
  }, [completedCount, animatableCount, onLetterAnimationComplete])

  const cubicBezier = EASE_MAP[ease] || EASE_MAP['power3.out']

  let animIndex = 0

  return (
    <span
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign,
        display: 'inline-block',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
        overflow: 'hidden',
      }}
    >
      {units.map((unit, i) => {
        if (/^\s+$/.test(unit)) {
          return (
            <span key={`space-${i}`} style={{ display: 'inline' }}>
              {unit}
            </span>
          )
        }

        const idx = animIndex++
        return (
          <motion.span
            key={`${unit}-${i}`}
            initial={from}
            animate={isInView ? to : from}
            transition={{
              duration,
              ease: cubicBezier,
              delay: (idx * delay) / 1000,
            }}
            onAnimationComplete={() => setCompletedCount((c) => c + 1)}
            style={{ display: 'inline-block', willChange: 'transform, opacity' }}
          >
            {unit}
          </motion.span>
        )
      })}
    </span>
  )
}
