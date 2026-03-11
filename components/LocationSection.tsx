"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const OFFICE_HOURS = [
  { day: "Monday", hours: "9:00 AM – 6:00 PM" },
  { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
  { day: "Wednesday", hours: "9:00 AM – 7:00 PM" },
  { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
  { day: "Friday", hours: "9:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 3:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

function getCurrentDay(): string {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    new Date()
  );
}

export default function LocationSection() {
  const today = getCurrentDay();

  return (
    <section id="location" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.08] mb-4">
            Visit Our Office
          </h2>
          <p className="text-[15px] text-[#475569] leading-relaxed max-w-md">
            Conveniently located with ample parking. Walk-ins welcome during
            office hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="K Dental Hub Location"
              className="w-full h-full"
            />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Address Card */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0A6CFF] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Our Address
                </h3>
              </div>
              <p className="text-[15px] text-[#475569] leading-relaxed mb-4">
                123 Dental Care Boulevard
                <br />
                Suite 200, Medical District
                <br />
                New York, NY 10001
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0A6CFF] hover:text-[#0856cc] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (123) 456-7890
                </a>
                <a
                  href="mailto:hello@kdentalhub.com"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0A6CFF] hover:text-[#0856cc] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  hello@kdentalhub.com
                </a>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="bg-[#F8FAFC] rounded-2xl p-6 lg:p-8 flex-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#0A6CFF] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  Office Hours
                </h3>
              </div>
              <ul className="space-y-3">
                {OFFICE_HOURS.map(({ day, hours }) => (
                  <li
                    key={day}
                    className={`flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                      day === today ? "bg-[#0A6CFF]/5 ring-1 ring-[#0A6CFF]/20" : ""
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        day === today ? "text-[#0A6CFF]" : "text-[#334155]"
                      }`}
                    >
                      {day}
                      {day === today && (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wider bg-[#0A6CFF] text-white px-1.5 py-0.5 rounded-full">
                          Today
                        </span>
                      )}
                    </span>
                    <span
                      className={`text-sm ${
                        hours === "Closed"
                          ? "text-red-400 font-medium"
                          : day === today
                            ? "text-[#0A6CFF] font-semibold"
                            : "text-[#64748B]"
                      }`}
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency banner */}
            <div className="bg-gradient-to-r from-[#0A6CFF] to-[#6FD3FF] rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-1">Dental Emergency?</h4>
              <p className="text-sm text-white/80 mb-3">
                Call our emergency line for immediate assistance.
              </p>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A6CFF] rounded-full text-sm font-bold hover:bg-white/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
