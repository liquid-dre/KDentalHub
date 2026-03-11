"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { getServiceBySlug, SERVICES_DATA } from "@/lib/services-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import useMeasure from "react-use-measure";

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            Service Not Found
          </h1>
          <p className="text-brand-slate mb-8">
            The service you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A6CFF] text-white rounded-full font-semibold hover:bg-[#0856cc] transition-colors"
          >
            View All Services
          </Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug).slice(
    0,
    3
  );

  return (
    <main className="relative">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative w-full min-h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        <div className="relative z-10 flex flex-col justify-end h-full min-h-[70vh] px-6 md:px-16 lg:px-24 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <Link
                href="/#services"
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                Services
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white/90 text-sm">{service.name}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-4 mb-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-4"
            >
              {service.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/80 max-w-xl mb-8"
            >
              {service.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Link
                href={`/booking?service=${encodeURIComponent(service.name)}`}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#0A6CFF] text-sm font-bold hover:bg-[#F0F8FF] active:scale-[0.97] transition-all duration-200 shadow-lg"
              >
                Book This Service
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="flex items-center gap-6 text-white/70 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {service.duration}
                </span>
                <span className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  {service.priceRange}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight mb-6">
                About This Service
              </h2>
              <p className="text-[16px] text-[#475569] leading-[1.8] mb-8">
                {service.longDescription}
              </p>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div
                className="rounded-3xl p-8 lg:p-10"
                style={{ backgroundColor: service.bg }}
              >
                <h3 className="text-xl font-bold text-[#0F172A] mb-6">
                  Key Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0A6CFF] flex-shrink-0 mt-0.5" />
                      <span className="text-[15px] text-[#334155]">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex gap-4">
                <div className="flex-1 rounded-2xl bg-[#F8FAFC] p-6 text-center">
                  <Clock className="w-6 h-6 text-[#0A6CFF] mx-auto mb-2" />
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                    Duration
                  </p>
                  <p className="text-sm font-bold text-[#0F172A]">
                    {service.duration}
                  </p>
                </div>
                <div className="flex-1 rounded-2xl bg-[#F8FAFC] p-6 text-center">
                  <DollarSign className="w-6 h-6 text-[#0A6CFF] mx-auto mb-2" />
                  <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                    Price Range
                  </p>
                  <p className="text-sm font-bold text-[#0F172A]">
                    {service.priceRange}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              Treatment Process
            </h2>
            <p className="text-[15px] text-[#475569] max-w-lg mx-auto">
              Here&apos;s what to expect when you visit us for{" "}
              {service.name.toLowerCase()}.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white rounded-2xl p-8 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A6CFF] flex items-center justify-center mb-5">
                  <span className="text-sm font-bold text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                  {step.step}
                </h3>
                <p className="text-[14px] text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs for this service */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              Common Questions
            </h2>
            <p className="text-[15px] text-[#475569]">
              Everything you need to know about {service.name.toLowerCase()}.
            </p>
          </motion.div>

          <div>
            {service.faqs.map((faq, i) => (
              <ServiceFAQ
                key={i}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div
          className="py-20 lg:py-28 px-6"
          style={{
            background:
              "linear-gradient(135deg, #0A6CFF 0%, #1a7fff 50%, #6FD3FF 100%)",
          }}
        >
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-white/[0.07] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full border border-white/[0.07] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.07] mb-5">
                Ready to Get Started?
              </h2>
              <p className="text-[15px] text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
                Book your {service.name.toLowerCase()} appointment today and
                take the first step toward a healthier smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href={`/booking?service=${encodeURIComponent(service.name)}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#0A6CFF] text-sm font-bold hover:bg-[#F0F8FF] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border-2 border-white/30 text-white text-sm font-bold hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M3 2H5.5L6.75 5L5.25 5.88C6 7.5 8.5 10 10.12 10.75L11 9.25L14 10.5V13C14 13.55 13.55 14 13 14C6.37 14 2 9.63 2 3C2 2.45 2.45 2 3 2Z"
                      fill="white"
                    />
                  </svg>
                  Call Us Instead
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Explore Other Services
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((other, i) => {
              const OtherIcon = other.icon;
              return (
                <motion.div
                  key={other.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link
                    href={`/services/${other.slug}`}
                    className="block group rounded-2xl overflow-hidden bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${other.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: other.bg }}
                        >
                          <OtherIcon
                            className="w-5 h-5 text-[#2D2D2D]"
                            strokeWidth={1.5}
                          />
                        </div>
                        <h3 className="text-lg font-bold text-[#0F172A]">
                          {other.name}
                        </h3>
                      </div>
                      <p className="text-[14px] text-[#64748B] leading-relaxed mb-4">
                        {other.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A6CFF] group-hover:gap-3 transition-all">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ServiceFAQ({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b border-slate-200"
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: { color: "rgba(3, 6, 23, 0)" },
            closed: { color: "rgba(3, 6, 23, 1)" },
          }}
          className="bg-gradient-to-r from-[#0A6CFF] to-[#6FD3FF] bg-clip-text text-left text-lg font-medium"
        >
          {question}
        </motion.span>
        <motion.span
          variants={{
            open: { rotate: "180deg", color: "rgb(10 108 255)" },
            closed: { rotate: "0deg", color: "#0F172A" },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-[#475569]"
      >
        <p ref={ref} className="text-[15px] leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}
