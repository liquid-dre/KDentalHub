'use client'

import { type ReactNode } from 'react'

interface RoundedSlideButtonProps {
  children: ReactNode
  href?: string
  initialBg?: string
  initialText?: string
  hoverBg?: string
  hoverText?: string
  hoverScale?: number
  className?: string
}

export default function RoundedSlideButton({
  children,
  href,
  initialBg = 'var(--primary)',
  initialText = '#ffffff',
  hoverBg = 'var(--primary)',
  hoverText = '#ffffff',
  hoverScale = 1.5,
  className = '',
}: RoundedSlideButtonProps) {
  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      {...(href ? { href } : {})}
      className={`
        rounded-slide-btn
        relative z-0 inline-flex items-center gap-3 overflow-hidden
        rounded-full border-2 px-8 py-4 text-sm md:text-base font-semibold uppercase
        transition-all duration-500

        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%]
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95
        ${className}
      `}
      style={
        {
          '--rsb-initial-bg': initialBg,
          '--rsb-initial-text': initialText,
          '--rsb-hover-bg': hoverBg,
          '--rsb-hover-text': hoverText,
          '--rsb-hover-scale': hoverScale,
          borderColor: initialBg,
          backgroundColor: initialBg,
          color: initialText,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  )
}
