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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-gray-900 text-sm md:text-base font-semibold hover:bg-white/90 active:scale-[0.97] transition-all duration-200 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Book Appointment
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
