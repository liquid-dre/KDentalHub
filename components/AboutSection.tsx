'use client'

import { motion } from 'framer-motion'
import RoundedSlideButton from './RoundedSlideButton'

export default function AboutSection() {
  return (
    <section
      id="about-us"
      className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: '#FAF5F0' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Main layout: left image | center text | right image */}
        <div className="relative flex flex-col items-center">
          {/* Top row: left image, center content, right image */}
          <div className="relative w-full flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-0">
            {/* Left image - vertically centered with the text block */}
            <motion.div
              className="hidden lg:block flex-shrink-0 w-[280px] xl:w-[320px] self-center"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full h-[340px] xl:h-[400px] -rotate-2">
                <img
                  src="https://images.pexels.com/photos/6627578/pexels-photo-6627578.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Patient receiving dental checkup"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Center content */}
            <motion.div
              className="flex flex-col items-center text-center max-w-xl mx-auto lg:mx-12 xl:mx-16 flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
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
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-gray-900 leading-tight mb-6">
                A Simple Way to Save
                <br />
                on Dental Care
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 max-w-md">
                Our team of skilled and experienced dental professionals strives
                to create a comfortable and welcoming environment for each and
                every patient. We offer a wide range of services.
              </p>

              {/* CTA Button */}
              <div className="mb-0">
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
            </motion.div>

            {/* Right image - top aligned with the "(about us)" label */}
            <motion.div
              className="hidden lg:block flex-shrink-0 w-[260px] xl:w-[300px] self-start"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full h-[300px] xl:h-[340px] rotate-2">
                <img
                  src="https://images.pexels.com/photos/6812547/pexels-photo-6812547.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Black patient at dental checkup"
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom row: center image below the text + stat to the right */}
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-14 gap-8">
            {/* Bottom center image */}
            <motion.div
              className="w-[300px] md:w-[340px] xl:w-[360px] h-[240px] md:h-[260px] xl:h-[280px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Patient smiling at dental clinic"
                className="w-full h-full object-cover rounded-3xl shadow-lg"
                loading="lazy"
              />
            </motion.div>

            {/* 98% stat - positioned to the right on desktop */}
            <motion.div
              className="lg:absolute lg:right-0 lg:bottom-0 flex items-end gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-6xl md:text-7xl font-bold text-gray-900 leading-none">
                98%
              </span>
              <span className="text-sm md:text-base text-gray-500 pb-2 leading-snug">
                Client satisfaction
                <br />
                with our service
              </span>
            </motion.div>
          </div>

          {/* Mobile images - shown below on small screens */}
          <div className="flex gap-4 lg:hidden overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory mt-10">
            {[
              {
                src: 'https://images.pexels.com/photos/6627578/pexels-photo-6627578.jpeg?auto=compress&cs=tinysrgb&w=800',
                alt: 'Patient receiving dental checkup',
              },
              {
                src: 'https://images.pexels.com/photos/6812547/pexels-photo-6812547.jpeg?auto=compress&cs=tinysrgb&w=800',
                alt: 'Black patient at dental checkup',
              },
            ].map((img, i) => (
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
        </div>
      </div>
    </section>
  )
}
