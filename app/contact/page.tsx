"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ServiceDropdown from "@/components/ServiceDropdown";
import { SERVICES, type ServiceName } from "@/components/services/services";

const BASE_TRANSITION = { ease: "anticipate", duration: 0.75 };

function getInitialService(param: string | null): ServiceName | "" {
  if (!param) return "";
  return SERVICES.find((s) => s.toLowerCase() === param.toLowerCase()) ?? "";
}

export default function ContactPage() {
  const [selected, setSelected] = useState<"new" | "existing">("new");
  const searchParams = useSearchParams();
  const [service, setService] = useState<ServiceName | "">(() =>
    getInitialService(searchParams.get("service"))
  );

  return (
    <section className="min-h-screen bg-[#F0F8FF] flex flex-col">
      {/* Back nav */}
      <div className="p-4 md:p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#0A6CFF] hover:text-[#0856cc] transition-colors"
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
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Form */}
      <div className="flex-1 flex items-center justify-center p-4 pb-12">
        <div className="w-full max-w-6xl shadow-xl flex flex-col-reverse lg:flex-row rounded-2xl overflow-hidden">
          <Form
            selected={selected}
            setSelected={setSelected}
            service={service}
            setService={setService}
          />
          <Images selected={selected} />
        </div>
      </div>
    </section>
  );
}

function Form({
  selected,
  setSelected,
  service,
  setService,
}: {
  selected: "new" | "existing";
  setSelected: Dispatch<SetStateAction<"new" | "existing">>;
  service: ServiceName | "";
  setService: Dispatch<SetStateAction<ServiceName | "">>;
}) {
  const inputBg =
    selected === "existing" ? "bg-[#0A6CFF]/80" : "bg-[#064aad]";

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`p-8 w-full text-white transition-colors duration-[750ms] ${
        selected === "existing" ? "bg-[#0A6CFF]" : "bg-[#0856cc]"
      }`}
    >
      <h3 className="text-4xl font-bold mb-6">Book an Appointment</h3>

      {/* Name input */}
      <div className="mb-6">
        <p className="text-2xl mb-2">Hi! My name is...</p>
        <input
          type="text"
          placeholder="Your full name..."
          className={`${inputBg} transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* New/Existing patient toggle */}
      <div className="mb-6">
        <p className="text-2xl mb-2">and I am a...</p>
        <FormSelect selected={selected} setSelected={setSelected} />
      </div>

      {/* Insurance info — shown for existing patients */}
      <AnimatePresence>
        {selected === "existing" && (
          <motion.div
            initial={{ marginTop: -104, opacity: 0 }}
            animate={{ marginTop: 0, opacity: 1 }}
            exit={{ marginTop: -104, opacity: 0 }}
            transition={BASE_TRANSITION}
            className="mb-6"
          >
            <p className="text-2xl mb-2">my patient ID is...</p>
            <input
              type="text"
              placeholder="Your patient ID (optional)..."
              className={`${inputBg} transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service selection */}
      <div className="mb-6">
        <p className="text-2xl mb-2">I&apos;d like to book for...</p>
        <ServiceDropdown
          selected={service}
          setSelected={setService}
          colorClass={`${inputBg} transition-colors duration-[750ms]`}
        />
      </div>

      {/* Phone */}
      <div className="mb-6">
        <p className="text-2xl mb-2">reach me at...</p>
        <input
          type="tel"
          placeholder="Your phone number..."
          className={`${inputBg} transition-colors duration-[750ms] placeholder-white/70 p-2 rounded-md w-full focus:outline-0`}
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        type="submit"
        className={`${
          selected === "existing"
            ? "bg-white text-[#0A6CFF]"
            : "bg-white text-[#0856cc]"
        } transition-colors duration-[750ms] text-lg text-center rounded-lg w-full py-3 font-semibold`}
      >
        Request Appointment
      </motion.button>
    </form>
  );
}

function FormSelect({
  selected,
  setSelected,
}: {
  selected: "new" | "existing";
  setSelected: Dispatch<SetStateAction<"new" | "existing">>;
}) {
  return (
    <div className="border-[1px] rounded border-white overflow-hidden font-medium w-fit">
      <button
        type="button"
        className={`${
          selected === "new" ? "text-[#0856cc]" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("new")}
      >
        <span className="relative z-10">New Patient</span>
        {selected === "new" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
      <button
        type="button"
        className={`${
          selected === "existing" ? "text-[#0A6CFF]" : "text-white"
        } text-sm px-3 py-1.5 transition-colors duration-[750ms] relative`}
        onClick={() => setSelected("existing")}
      >
        <span className="relative z-10">Existing Patient</span>
        {selected === "existing" && (
          <motion.div
            transition={BASE_TRANSITION}
            layoutId="form-tab"
            className="absolute inset-0 bg-white z-0"
          />
        )}
      </button>
    </div>
  );
}

function Images({ selected }: { selected: "new" | "existing" }) {
  return (
    <div className="bg-white relative overflow-hidden w-full min-h-[200px] lg:min-h-[100px]">
      <motion.div
        initial={false}
        animate={{ x: selected === "new" ? "0%" : "100%" }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <motion.div
        initial={false}
        animate={{ x: selected === "existing" ? "0%" : "-100%" }}
        transition={BASE_TRANSITION}
        className="absolute inset-0 bg-slate-200"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1740&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
