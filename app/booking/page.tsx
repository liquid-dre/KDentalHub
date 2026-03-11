"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Check,
  ChevronLeft,
  ChevronRight,
  User,
  Phone,
  Mail,
} from "lucide-react";
import ServiceDropdown from "@/components/ServiceDropdown";
import { SERVICES, type ServiceName } from "@/components/services/services";

const TIME_SLOTS = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

const STEPS = ["Service", "Date & Time", "Your Info", "Confirm"];

function getInitialService(param: string | null): ServiceName | "" {
  if (!param) return "";
  return SERVICES.find((s) => s.toLowerCase() === param.toLowerCase()) ?? "";
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function BookingPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [service, setService] = useState<ServiceName | "">(() =>
    getInitialService(searchParams.get("service"))
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [patientType, setPatientType] = useState<"new" | "existing">("new");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const calendarDays = useMemo(() => {
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);
    return days;
  }, [firstDay, daysInMonth]);

  const isDateDisabled = (day: number) => {
    const date = new Date(viewYear, viewMonth, day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0) return true; // Sunday
    if (date < new Date(today.getFullYear(), today.getMonth(), today.getDate()))
      return true;
    return false;
  };

  const isDateSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === viewMonth &&
      selectedDate.getFullYear() === viewYear
    );
  };

  const isToday = (day: number) => {
    return (
      day === today.getDate() &&
      viewMonth === today.getMonth() &&
      viewYear === today.getFullYear()
    );
  };

  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };

  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear(viewYear + 1);
    } else {
      setViewMonth(viewMonth + 1);
    }
  };

  const canPrevMonth =
    viewYear > today.getFullYear() ||
    (viewYear === today.getFullYear() && viewMonth > today.getMonth());

  const canGoNext = () => {
    if (step === 0) return !!service;
    if (step === 1) return !!selectedDate && !!selectedTime;
    if (step === 2) return !!name && !!phone;
    return false;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-[#F0F8FF] flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 rounded-full bg-[#D4F5E9] flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-[#059669]" />
          </div>
          <h1 className="text-3xl font-bold text-[#0F172A] mb-3">
            Booking Confirmed!
          </h1>
          <p className="text-[#475569] mb-2">
            Your appointment has been requested for:
          </p>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <p className="font-bold text-[#0F172A] text-lg mb-1">{service}</p>
            <p className="text-[#475569]">
              {selectedDate?.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="text-[#0A6CFF] font-semibold">{selectedTime}</p>
          </div>
          <p className="text-sm text-[#64748B] mb-8">
            We&apos;ll contact you at <strong>{phone}</strong> to confirm your
            appointment within 24 hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A6CFF] text-white rounded-full font-semibold hover:bg-[#0856cc] transition-colors"
          >
            Back to Home
          </Link>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F0F8FF] flex flex-col">
      {/* Header */}
      <div className="p-4 md:p-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0A6CFF] hover:text-[#0856cc] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-start justify-center p-4 pb-24 pt-4 lg:pt-8">
        <div className="w-full max-w-3xl">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
              Book Your Appointment
            </h1>
            <p className="text-[#475569]">
              Schedule your visit in just a few simple steps
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-1 mb-10">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center gap-1">
                <button
                  onClick={() => {
                    if (i < step) setStep(i);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    i === step
                      ? "bg-[#0A6CFF] text-white"
                      : i < step
                        ? "bg-[#D4F5E9] text-[#059669] cursor-pointer"
                        : "bg-[#E2E8F0] text-[#94A3B8]"
                  }`}
                >
                  {i < step ? (
                    <Check className="w-3 h-3" />
                  ) : (
                    <span>{i + 1}</span>
                  )}
                  <span className="hidden sm:inline">{s}</span>
                </button>
                {i < STEPS.length - 1 && (
                  <div
                    className={`w-6 h-0.5 ${i < step ? "bg-[#059669]" : "bg-[#E2E8F0]"}`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <h2 className="text-xl font-bold text-[#0F172A] mb-2">
                    Select a Service
                  </h2>
                  <p className="text-sm text-[#64748B] mb-6">
                    Choose the dental service you&apos;d like to book
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {SERVICES.filter((s) => s !== "General Enquiry").map(
                      (s) => (
                        <button
                          key={s}
                          onClick={() => setService(s)}
                          className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                            service === s
                              ? "border-[#0A6CFF] bg-[#F0F8FF]"
                              : "border-[#E2E8F0] hover:border-[#CBD5E1]"
                          }`}
                        >
                          <span
                            className={`text-sm font-medium ${service === s ? "text-[#0A6CFF]" : "text-[#334155]"}`}
                          >
                            {s}
                          </span>
                        </button>
                      )
                    )}
                  </div>
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <h2 className="text-xl font-bold text-[#0F172A] mb-2">
                    Choose Date & Time
                  </h2>
                  <p className="text-sm text-[#64748B] mb-6">
                    Select your preferred appointment date and time
                  </p>

                  <div className="grid lg:grid-cols-[1fr_auto] gap-8">
                    {/* Calendar */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-semibold text-[#0F172A]">
                          {MONTH_NAMES[viewMonth]} {viewYear}
                        </h3>
                        <div className="flex gap-1">
                          <button
                            onClick={prevMonth}
                            disabled={!canPrevMonth}
                            className="p-1.5 rounded-lg hover:bg-[#F1F5F9] disabled:opacity-30 transition-colors"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={nextMonth}
                            className="p-1.5 rounded-lg hover:bg-[#F1F5F9] transition-colors"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-7 gap-1 mb-2">
                        {DAY_NAMES.map((d) => (
                          <div
                            key={d}
                            className="text-center text-xs font-medium text-[#94A3B8] py-2"
                          >
                            {d}
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-7 gap-1">
                        {calendarDays.map((day, i) =>
                          day === null ? (
                            <div key={`empty-${i}`} />
                          ) : (
                            <button
                              key={day}
                              onClick={() => {
                                if (!isDateDisabled(day)) {
                                  setSelectedDate(
                                    new Date(viewYear, viewMonth, day)
                                  );
                                }
                              }}
                              disabled={isDateDisabled(day)}
                              className={`
                                h-10 rounded-lg text-sm font-medium transition-all duration-200
                                ${isDateDisabled(day) ? "text-[#D1D5DB] cursor-not-allowed" : "hover:bg-[#F0F8FF] cursor-pointer"}
                                ${isDateSelected(day) ? "bg-[#0A6CFF] text-white hover:bg-[#0856cc]" : ""}
                                ${isToday(day) && !isDateSelected(day) ? "ring-2 ring-[#0A6CFF] ring-inset text-[#0A6CFF]" : ""}
                                ${!isDateDisabled(day) && !isDateSelected(day) && !isToday(day) ? "text-[#334155]" : ""}
                              `}
                            >
                              {day}
                            </button>
                          )
                        )}
                      </div>
                    </div>

                    {/* Time slots */}
                    <div className="lg:w-48 lg:border-l lg:pl-8 lg:border-[#F1F5F9]">
                      <h3 className="text-sm font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#0A6CFF]" />
                        Available Times
                      </h3>
                      {selectedDate ? (
                        <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
                          {TIME_SLOTS.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                selectedTime === time
                                  ? "bg-[#0A6CFF] text-white"
                                  : "bg-[#F8FAFC] text-[#334155] hover:bg-[#F0F8FF] hover:text-[#0A6CFF]"
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-[#94A3B8]">
                          Select a date to see available times
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <h2 className="text-xl font-bold text-[#0F172A] mb-2">
                    Your Information
                  </h2>
                  <p className="text-sm text-[#64748B] mb-6">
                    Tell us a bit about yourself
                  </p>

                  {/* Patient type toggle */}
                  <div className="mb-6">
                    <label className="text-sm font-medium text-[#334155] mb-2 block">
                      Patient Type
                    </label>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setPatientType("new")}
                        className={`flex-1 py-3 rounded-xl text-sm font-medium border-2 transition-all ${
                          patientType === "new"
                            ? "border-[#0A6CFF] bg-[#F0F8FF] text-[#0A6CFF]"
                            : "border-[#E2E8F0] text-[#64748B] hover:border-[#CBD5E1]"
                        }`}
                      >
                        New Patient
                      </button>
                      <button
                        onClick={() => setPatientType("existing")}
                        className={`flex-1 py-3 rounded-xl text-sm font-medium border-2 transition-all ${
                          patientType === "existing"
                            ? "border-[#0A6CFF] bg-[#F0F8FF] text-[#0A6CFF]"
                            : "border-[#E2E8F0] text-[#64748B] hover:border-[#CBD5E1]"
                        }`}
                      >
                        Existing Patient
                      </button>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="text-sm font-medium text-[#334155] mb-2 block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0A6CFF] focus:ring-2 focus:ring-[#0A6CFF]/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#334155] mb-2 block">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0A6CFF] focus:ring-2 focus:ring-[#0A6CFF]/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#334155] mb-2 block">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(555) 123-4567"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0A6CFF] focus:ring-2 focus:ring-[#0A6CFF]/10 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-[#334155] mb-2 block">
                        Additional Notes
                      </label>
                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Any specific concerns or requests..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#0A6CFF] focus:ring-2 focus:ring-[#0A6CFF]/10 transition-all resize-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <h2 className="text-xl font-bold text-[#0F172A] mb-2">
                    Confirm Your Booking
                  </h2>
                  <p className="text-sm text-[#64748B] mb-6">
                    Review your appointment details before confirming
                  </p>

                  <div className="space-y-4">
                    <div className="bg-[#F8FAFC] rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <CalendarDays className="w-5 h-5 text-[#0A6CFF]" />
                        <h3 className="font-semibold text-[#0F172A]">
                          Appointment Details
                        </h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                            Service
                          </p>
                          <p className="text-sm font-medium text-[#0F172A]">
                            {service}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                            Date
                          </p>
                          <p className="text-sm font-medium text-[#0F172A]">
                            {selectedDate?.toLocaleDateString("en-US", {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                            Time
                          </p>
                          <p className="text-sm font-medium text-[#0A6CFF]">
                            {selectedTime}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                            Patient Type
                          </p>
                          <p className="text-sm font-medium text-[#0F172A] capitalize">
                            {patientType} Patient
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#F8FAFC] rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-4">
                        <User className="w-5 h-5 text-[#0A6CFF]" />
                        <h3 className="font-semibold text-[#0F172A]">
                          Contact Information
                        </h3>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                            Name
                          </p>
                          <p className="text-sm font-medium text-[#0F172A]">
                            {name}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                            Phone
                          </p>
                          <p className="text-sm font-medium text-[#0F172A]">
                            {phone}
                          </p>
                        </div>
                        {email && (
                          <div>
                            <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                              Email
                            </p>
                            <p className="text-sm font-medium text-[#0F172A]">
                              {email}
                            </p>
                          </div>
                        )}
                        {notes && (
                          <div className="sm:col-span-2">
                            <p className="text-xs text-[#94A3B8] uppercase tracking-wider mb-1">
                              Notes
                            </p>
                            <p className="text-sm text-[#475569]">{notes}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="px-8 py-5 bg-[#F8FAFC] flex items-center justify-between">
              {step > 0 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#475569] hover:text-[#0F172A] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canGoNext()}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0A6CFF] text-white text-sm font-semibold hover:bg-[#0856cc] disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-[0.97]"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#059669] text-white text-sm font-bold hover:bg-[#047857] transition-all active:scale-[0.97] shadow-lg"
                >
                  <Check className="w-4 h-4" />
                  Confirm Booking
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
