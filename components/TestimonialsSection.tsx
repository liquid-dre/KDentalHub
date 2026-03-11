'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    title: 'Schedules that work for you',
    quote:
      'K Dental Hub made booking so easy. We got an appointment that fit our busy schedule perfectly, and the care was exceptional from start to finish.',
    name: 'Kevin Martin',
    rating: 5,
    avatar: 'KM',
  },
  {
    title: 'Health screenings for seniors',
    quote:
      'The thorough dental check-up gave me peace of mind. The team was gentle, professional, and took the time to explain every step clearly.',
    name: 'Sarah Johnson',
    rating: 5,
    avatar: 'SJ',
  },
  {
    title: 'Seniors stay independent',
    quote:
      'Thanks to the preventive care program, my dental health has improved tremendously. The staff is warm, welcoming, and truly cares about their patients.',
    name: 'Michael Chen',
    rating: 5,
    avatar: 'MC',
  },
  {
    title: 'Amazing kids dentistry',
    quote:
      'My children actually look forward to their dental visits now! The child-friendly approach and gentle techniques make all the difference.',
    name: 'Emily Roberts',
    rating: 5,
    avatar: 'ER',
  },
  {
    title: 'Pain-free root canal',
    quote:
      'I was terrified of my root canal, but the team made it completely painless. Modern equipment and a caring approach — highly recommend!',
    name: 'David Park',
    rating: 5,
    avatar: 'DP',
  },
  {
    title: 'Best whitening results',
    quote:
      'The teeth whitening treatment exceeded my expectations. Professional results in just one session, and the staff was incredibly friendly.',
    name: 'Lisa Thompson',
    rating: 5,
    avatar: 'LT',
  },
]

const CARDS_PER_VIEW = 3

export default function TestimonialsSection() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(TESTIMONIALS.length / CARDS_PER_VIEW)

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages)
  const next = () => setPage((p) => (p + 1) % totalPages)

  const visibleTestimonials = TESTIMONIALS.slice(
    page * CARDS_PER_VIEW,
    page * CARDS_PER_VIEW + CARDS_PER_VIEW
  )

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#F3E8FF' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        {/* Header row */}
        <div className="flex items-start justify-between mb-14 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.08] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-[15px] text-[#475569] leading-relaxed max-w-md">
              Team carefully evaluates your results to provide actionable
              insights for improving your health &amp; lifespan.
            </p>
          </motion.div>

          {/* Navigation arrows */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mt-2"
          >
            <button
              onClick={prev}
              aria-label="Previous testimonials"
              className="w-12 h-12 rounded-full border border-[#1a1a1a] flex items-center justify-center hover:bg-white/60 active:scale-95 transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5 text-[#1a1a1a]" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonials"
              className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[#333] active:scale-95 transition-all duration-200"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </motion.div>
        </div>

        {/* Testimonial cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleTestimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl p-8 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                {/* Avatar */}
                <div className="mb-8">
                  <div className="w-14 h-14 rounded-full bg-[#E8D5F5] flex items-center justify-center text-sm font-bold text-[#6B21A8]">
                    {testimonial.avatar}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                    {testimonial.title}
                  </h3>
                  <p className="text-[14px] text-[#64748B] leading-[1.75] mb-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Footer: name + stars */}
                <div className="flex items-center justify-between pt-4 border-t border-[#F1F5F9]">
                  <span className="text-[15px] font-semibold text-[#0F172A]">
                    {testimonial.name}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
