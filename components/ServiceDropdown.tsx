"use client";

import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { SERVICES, type ServiceName } from "@/components/services/services";

export default function ServiceDropdown({
  selected,
  setSelected,
  colorClass = "bg-[#064aad]",
}: {
  selected: ServiceName | "";
  setSelected: Dispatch<SetStateAction<ServiceName | "">>;
  colorClass?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        type="button"
        onClick={() => setOpen((pv) => !pv)}
        className={`flex items-center justify-between gap-2 px-3 py-2 rounded-md w-full text-left transition-colors duration-[750ms] ${colorClass}`}
      >
        <span
          className={`text-sm ${selected ? "text-white" : "text-white/70"}`}
        >
          {selected || "Select a service..."}
        </span>
        <motion.span variants={iconVariants} className="text-white/70">
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top" }}
        className="flex flex-col gap-1 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-0 w-full z-50 overflow-hidden"
      >
        {SERVICES.map((service) => (
          <Option
            key={service}
            text={service}
            setOpen={setOpen}
            onSelect={() => setSelected(service)}
            isSelected={selected === service}
          />
        ))}
      </motion.ul>
    </motion.div>
  );
}

function Option({
  text,
  setOpen,
  onSelect,
  isSelected,
}: {
  text: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onSelect: () => void;
  isSelected: boolean;
}) {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        onSelect();
        setOpen(false);
      }}
      className={`flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 transition-colors cursor-pointer ${
        isSelected
          ? "bg-indigo-50 text-indigo-600"
          : "text-slate-700 hover:text-indigo-500"
      }`}
    >
      <motion.span variants={actionIconVariants}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          {isSelected && <polyline points="22 4 12 14.01 9 11.01" />}
        </svg>
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { when: "beforeChildren" },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: { when: "afterChildren" },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
