"use client"

import { cn } from "@/lib/utils"
import {
  Baby,
  ShieldCheck,
  Users,
  Sparkles,
  Zap,
  GraduationCap,
  HeartPulse,
  Monitor,
  ArrowRight,
  CalendarCheck,
} from "lucide-react"
import React, { useState } from "react"

interface FeatureItem {
  title: string
  description: string
  icon: React.ReactNode
  highlights: string[]
  accent: string        // primary accent hex
  accentLight: string   // light tint hex
  accentGlow: string    // glow rgba
  number: string
  decorative: React.ReactNode
}

const features: FeatureItem[] = [
  {
    title: "Children's Dentistry",
    description:
      "Gentle, age-appropriate care designed to build real trust and comfort from the very first visit.",
    icon: <Baby className="h-7 w-7" />,
    highlights: ["Age-appropriate care", "Fun environment", "Gentle techniques", "First visit specialists"],
    accent: "#0A6CFF",
    accentLight: "#EBF5FF",
    accentGlow: "rgba(10,108,255,0.12)",
    number: "01",
    decorative: (
      <>
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#0A6CFF]/[0.04]" />
        <div className="absolute top-8 right-6 w-16 h-16 rounded-full bg-[#6FD3FF]/[0.08]" />
        <svg className="absolute bottom-6 right-6 opacity-[0.04]" width="80" height="90" viewBox="0 0 120 140" fill="none">
          <path d="M60 10C35 10 15 30 15 55C15 75 25 90 38 100L35 130H85L82 100C95 90 105 75 105 55C105 30 85 10 60 10Z" stroke="#0A6CFF" strokeWidth="8" strokeLinejoin="round"/>
        </svg>
      </>
    ),
  },
  {
    title: "Preventive Care",
    description:
      "Regular cleanings, fluoride treatments, and sealants that protect teeth for a lifetime of healthy smiles.",
    icon: <ShieldCheck className="h-7 w-7" />,
    highlights: ["Fluoride treatments", "Dental sealants", "Regular cleanings", "Early detection"],
    accent: "#059669",
    accentLight: "#ECFDF5",
    accentGlow: "rgba(5,150,105,0.12)",
    number: "02",
    decorative: (
      <>
        <svg className="absolute -top-4 -right-4 opacity-[0.05]" width="120" height="130" viewBox="0 0 180 200" fill="none">
          <path d="M90 10L20 40V100C20 145 55 180 90 190C125 180 160 145 160 100V40L90 10Z" fill="#059669"/>
        </svg>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #059669 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      </>
    ),
  },
  {
    title: "Family Check-Ups",
    description:
      "Comprehensive exams for every age. One trusted practice for every smile in your family.",
    icon: <Users className="h-7 w-7" />,
    highlights: ["All ages welcome", "Comprehensive exams", "Personalised plans", "Family scheduling"],
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    accentGlow: "rgba(124,58,237,0.12)",
    number: "03",
    decorative: (
      <>
        <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full border-[3px] border-[#7C3AED]/[0.06]" />
        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full border-[3px] border-[#7C3AED]/[0.04]" />
        <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full bg-[#7C3AED]/[0.03]" />
      </>
    ),
  },
  {
    title: "Teeth Cleaning",
    description:
      "Professional polish and plaque removal for a noticeably brighter, healthier smile.",
    icon: <Sparkles className="h-7 w-7" />,
    highlights: ["Professional polish", "Plaque removal", "Stain treatment", "Fresh breath care"],
    accent: "#0A6CFF",
    accentLight: "#EFF8FF",
    accentGlow: "rgba(10,108,255,0.12)",
    number: "04",
    decorative: (
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 200 200" fill="none">
        <path d="M40 60 L43 50 L46 60 L56 63 L46 66 L43 76 L40 66 L30 63 Z" fill="#0A6CFF"/>
        <path d="M150 40 L152 33 L154 40 L161 42 L154 44 L152 51 L150 44 L143 42 Z" fill="#6FD3FF"/>
        <path d="M130 150 L132 143 L134 150 L141 152 L134 154 L132 161 L130 154 L123 152 Z" fill="#0A6CFF"/>
        <path d="M60 140 L61.5 135 L63 140 L68 141.5 L63 143 L61.5 148 L60 143 L55 141.5 Z" fill="#6FD3FF"/>
        <circle cx="170" cy="100" r="3" fill="#0A6CFF"/>
        <circle cx="30" cy="110" r="2" fill="#6FD3FF"/>
      </svg>
    ),
  },
  {
    title: "Emergency Dental",
    description:
      "Fast, compassionate care when you need it most. Same-day appointments for urgent pain.",
    icon: <Zap className="h-7 w-7" />,
    highlights: ["Same-day visits", "Pain relief", "After-hours care", "Urgent treatment"],
    accent: "#DC2626",
    accentLight: "#FEF2F2",
    accentGlow: "rgba(220,38,38,0.12)",
    number: "05",
    decorative: (
      <>
        <div className="absolute top-1/2 right-8 -translate-y-1/2 opacity-[0.06]">
          <div className="w-20 h-20 rounded-full border-[3px] border-[#DC2626]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-[3px] border-[#DC2626]/80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#DC2626]/60" />
        </div>
        <svg className="absolute bottom-5 left-6 right-6 opacity-[0.06]" width="160" height="30" viewBox="0 0 240 40">
          <path d="M0 20 L40 20 L55 5 L70 35 L85 5 L100 20 L240 20" stroke="#DC2626" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </>
    ),
  },
  {
    title: "Dental Education",
    description:
      "Teaching children and parents the best brushing and flossing habits for lifelong oral health.",
    icon: <GraduationCap className="h-7 w-7" />,
    highlights: ["Brushing guidance", "Flossing techniques", "Nutrition advice", "Habit building"],
    accent: "#D97706",
    accentLight: "#FFFBEB",
    accentGlow: "rgba(217,119,6,0.12)",
    number: "06",
    decorative: (
      <>
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-3xl rotate-12 bg-[#D97706]/[0.04]" />
        <div className="absolute bottom-4 right-8 w-16 h-16 rounded-2xl -rotate-6 border-[3px] border-[#D97706]/[0.06]" />
      </>
    ),
  },
  {
    title: "Anxiety-Free Visits",
    description:
      "Child-friendly techniques and a calming environment that make every appointment fear-free.",
    icon: <HeartPulse className="h-7 w-7" />,
    highlights: ["Calming environment", "Gentle approach", "Child-friendly", "Sedation options"],
    accent: "#EC4899",
    accentLight: "#FDF2F8",
    accentGlow: "rgba(236,72,153,0.12)",
    number: "07",
    decorative: (
      <>
        <svg className="absolute top-6 right-6 opacity-[0.06]" width="70" height="60" viewBox="0 0 70 60" fill="none">
          <path d="M35 55C35 55 5 35 5 20C5 12 11 5 18 5C23 5 28 8 35 15C42 8 47 5 52 5C59 5 65 12 65 20C65 35 35 55 35 55Z" fill="#EC4899"/>
        </svg>
        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#EC4899]/[0.03]" />
        <div className="absolute bottom-8 left-10 w-10 h-10 rounded-full bg-[#EC4899]/[0.05]" />
      </>
    ),
  },
  {
    title: "Modern Equipment",
    description:
      "Digital X-rays, precision tools, and state-of-the-art technology for comfortable, accurate care.",
    icon: <Monitor className="h-7 w-7" />,
    highlights: ["Digital X-rays", "Precision tools", "Latest technology", "Minimal discomfort"],
    accent: "#0891B2",
    accentLight: "#ECFEFF",
    accentGlow: "rgba(8,145,178,0.12)",
    number: "08",
    decorative: (
      <>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(45deg, #0891B2 25%, transparent 25%, transparent 50%, #0891B2 50%, #0891B2 75%, transparent 75%)', backgroundSize: '16px 16px' }} />
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-[3px] border-[#0891B2]/[0.06]" />
        <div className="absolute top-2 right-2 w-12 h-12 rounded-full border-[3px] border-[#0891B2]/[0.04]" />
      </>
    ),
  },
]

export function FeaturesSectionWithHoverEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} feature={feature} index={index} />
      ))}
    </div>
  )
}

const FeatureCard = ({
  feature,
  index,
}: {
  feature: FeatureItem
  index: number
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const { title, description, icon, highlights, accent, accentLight, accentGlow, number, decorative } = feature

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Glow effect behind card on hover */}
      <div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ background: accentGlow }}
      />

      {/* Card shell */}
      <div
        className={cn(
          "relative h-[360px] [perspective:2000px] overflow-hidden rounded-2xl",
          "border border-[#E8F1FF]/80",
          "shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
          "group-hover:border-transparent",
          "group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]",
          "transition-all duration-500"
        )}
      >
        <div
          className={cn(
            "relative h-full w-full",
            "[transform-style:preserve-3d]",
            "transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
            isFlipped
              ? "[transform:rotateY(180deg)]"
              : "[transform:rotateY(0deg)]"
          )}
        >
          {/* ── FRONT ── */}
          <div
            className={cn(
              "absolute inset-0 h-full w-full rounded-2xl",
              "[backface-visibility:hidden] [transform:rotateY(0deg)]",
              "flex flex-col bg-white overflow-hidden",
              "transition-opacity duration-700",
              isFlipped ? "opacity-0" : "opacity-100"
            )}
          >
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              {decorative}
            </div>

            {/* Subtle top accent bar */}
            <div
              className="h-[3px] w-full shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(90deg, ${accent}, ${accent}00)` }}
            />

            {/* Main content */}
            <div className="relative z-10 flex-1 flex flex-col p-7 pt-6">
              {/* Number + Icon row */}
              <div className="flex items-start justify-between mb-5">
                {/* Icon container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                  style={{
                    background: accentLight,
                    color: accent,
                    boxShadow: `0 2px 8px ${accentGlow}`,
                  }}
                >
                  {icon}
                </div>
                {/* Service number */}
                <span
                  className="text-[42px] font-black leading-none tracking-tighter opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 select-none"
                  style={{ color: accent }}
                >
                  {number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[1.05rem] font-bold text-[#0F172A] mb-2 tracking-tight leading-snug">
                {title}
              </h3>

              {/* Description */}
              <p className="text-[13.5px] text-[#64748B] leading-[1.7] mb-auto">
                {description}
              </p>

              {/* Front CTA */}
              <div className="mt-5">
                <a
                  href="/contact"
                  className="group/cta relative flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  style={{
                    backgroundColor: accentLight,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = accent
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = accentLight
                  }}
                >
                  <span className="flex items-center gap-2 font-semibold text-sm transition-colors duration-300" style={{ color: accent }}>
                    <CalendarCheck className="h-4 w-4" />
                    <span className="group-hover/cta:text-white transition-colors duration-300">Book Appointment</span>
                  </span>
                  <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover/cta:translate-x-0.5" style={{ color: accent }} />
                </a>
              </div>
            </div>
          </div>

          {/* ── BACK ── */}
          <div
            className={cn(
              "absolute inset-0 h-full w-full rounded-2xl",
              "[backface-visibility:hidden] [transform:rotateY(180deg)]",
              "flex flex-col overflow-hidden",
              "transition-opacity duration-700",
              isFlipped ? "opacity-100" : "opacity-0"
            )}
            style={{ background: `linear-gradient(160deg, ${accentLight} 0%, white 50%, white 100%)` }}
          >
            {/* Top accent bar */}
            <div
              className="h-[3px] w-full shrink-0"
              style={{ background: `linear-gradient(90deg, ${accent}, ${accent}40)` }}
            />

            <div className="relative z-10 flex-1 flex flex-col p-7 pt-6">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: accentLight, color: accent }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-[1rem] text-[#0F172A] tracking-tight leading-tight">
                    {title}
                  </h3>
                </div>
              </div>

              <p className="text-[13px] text-[#64748B] leading-relaxed mb-5 line-clamp-2">
                {description}
              </p>

              {/* Highlights */}
              <div className="space-y-2.5 flex-1">
                {highlights.map((highlight, i) => (
                  <div
                    className="flex items-center gap-2.5 text-[13.5px] text-[#334155] transition-all duration-500"
                    key={highlight}
                    style={{
                      transform: isFlipped ? "translateX(0)" : "translateX(-12px)",
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${i * 80 + 200}ms`,
                    }}
                  >
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ background: accentLight }}
                    >
                      <ArrowRight className="h-3 w-3" style={{ color: accent }} />
                    </div>
                    <span className="font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Back CTA */}
              <div className="mt-5 pt-4" style={{ borderTop: `1px solid ${accent}15` }}>
                <a
                  href="/contact"
                  className="group/cta relative flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                  style={{
                    backgroundColor: accent,
                    boxShadow: `0 4px 16px ${accentGlow}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 6px 24px ${accentGlow.replace(/[\d.]+\)$/, '0.3)')}`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 16px ${accentGlow}`
                  }}
                >
                  <span className="flex items-center gap-2 font-semibold text-sm text-white">
                    <CalendarCheck className="h-4 w-4" />
                    Book Appointment
                  </span>
                  <ArrowRight className="h-4 w-4 text-white transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
