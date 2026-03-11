'use client'

import { motion } from 'framer-motion'
import RoundedSlideButton from './RoundedSlideButton'

const images = [
  {
    src: 'https://images.pexels.com/photos/6627578/pexels-photo-6627578.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Patient receiving dental checkup',
    className: 'absolute top-0 left-0 w-[280px] h-[340px] md:w-[300px] md:h-[370px] lg:w-[320px] lg:h-[400px]',
    rotate: -3,
  },
  {
    src: 'https://images.pexels.com/photos/6528907/pexels-photo-6528907.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Dentist examining patient teeth',
    className: 'absolute top-0 right-0 w-[250px] h-[280px] md:w-[280px] md:h-[320px] lg:w-[300px] lg:h-[340px]',
    rotate: 3,
  },
  {
    src: 'https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Patient smiling at dental clinic',
    className: 'absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[260px] md:w-[320px] md:h-[280px] lg:w-[340px] lg:h-[300px]',
    rotate: 0,
  },
]

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#FAF5F0' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left side - Images */}
          <motion.div
            className="relative w-full h-[600px] md:h-[680px] lg:h-[720px] hidden md:block"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                className={img.className}
                initial={{ opacity: 0, y: 30, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: img.rotate }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile images - horizontal scroll */}
          <div className="flex gap-4 md:hidden overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
            {images.map((img, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 w-[260px] h-[300px] snap-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          {/* Right side - Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label with lines */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-amber-600" />
              <span className="text-sm font-medium text-amber-600 tracking-wide">
                (about us)
              </span>
              <div className="h-[1px] w-10 bg-amber-600" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight mb-6">
              A Simple Way to Save{' '}
              <br className="hidden sm:block" />
              on Dental Care
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-md">
              Our team of skilled and experienced dental professionals strives
              to create a comfortable and welcoming environment for each and
              every patient. We offer a wide range of services.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-8">
              <RoundedSlideButton
                href="#contact"
                initialBg="#1a1a1a"
                initialText="#ffffff"
                hoverBg="var(--brand-blue)"
                hoverText="#000000"
                hoverScale={1.08}
              >
                <span>Book Appointment</span>
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </RoundedSlideButton>
            </div>

            {/* Stat */}
            <div className="mt-14 flex items-end gap-2">
              <span className="text-6xl md:text-7xl font-bold text-gray-900 leading-none">
                98%
              </span>
              <span className="text-sm md:text-base text-gray-500 pb-2 leading-snug">
                Client satisfaction
                <br />
                with our service
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
