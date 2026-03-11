"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { cn } from "@/lib/utils"

const formatValue = (val: number, precision: number, sep: string): string => {
  return val.toFixed(precision).replace(/\B(?=(\d{3})+(?!\d))/g, sep)
}

export interface CountUpProps {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
  numberClassName?: string
  style?: React.CSSProperties
}

export function CountUp({
  value,
  duration = 2,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  numberClassName,
  style,
}: CountUpProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) =>
    formatValue(latest, decimals, ",")
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animate(0, value, {
            duration,
            ease: [0, 0, 0.58, 1],
            onUpdate: (latest) => count.set(latest),
            onComplete: () => setHasAnimated(true),
          })
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [value, duration, hasAnimated, count])

  return (
    <div
      ref={containerRef}
      className={cn("inline-flex items-center justify-center", className)}
    >
      <div className={cn("flex items-center", numberClassName)} style={style}>
        {prefix && <span>{prefix}</span>}
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
    </div>
  )
}
