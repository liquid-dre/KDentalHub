'use client'

import { motion } from 'framer-motion'
import SplitText from './SplitText'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="hero">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=2000&q=80)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-16 lg:px-24 pb-20 md:pb-28">
        <div className="max-w-3xl">
          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            <SplitText
              text="Seamless"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
            <br />
            <SplitText
              text="Dental"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-tight"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />{' '}
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              🦷
            </motion.span>{' '}
            <SplitText
              text="Care"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[var(--brand-blue)] leading-[1.05] tracking-tight"
              delay={50}
              duration={1.25}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </h1>

          {/* Subtitle */}
          <div className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-lg mb-10 leading-relaxed">
            <SplitText
              text="Whether it's a routine check-up or a dental emergency, our experienced professionals are just a call away"
              className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed"
              delay={20}
              duration={0.8}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className={`
              relative z-0 inline-flex items-center gap-3 overflow-hidden
              rounded-full border-2 border-[var(--brand-blue)]
              px-8 py-4 text-sm md:text-base font-semibold uppercase
              text-[var(--brand-blue)] transition-all duration-500

              before:absolute before:inset-0
              before:-z-10 before:translate-x-[150%]
              before:translate-y-[150%] before:scale-[2.5]
              before:rounded-[100%] before:bg-[var(--brand-blue)]
              before:transition-transform before:duration-1000
              before:content-[""]

              hover:scale-105 hover:text-neutral-900
              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-95
            `}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
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
            <span>Book Appointment</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
