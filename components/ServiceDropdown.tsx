"use client";

import { FiChevronDown } from "react-icons/fi";
import {
  ShieldCheck,
  Syringe,
  Scissors,
  Sparkles,
  Smile,
  Crown,
  Stethoscope,
  Scan,
  Heart,
  Brush,
  MessageCircleQuestion,
} from "lucide-react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { SERVICES, type ServiceName } from "@/components/services/services";

const SERVICE_ICONS: Record<ServiceName, React.ReactNode> = {
  "Cavity Protection": <ShieldCheck size={16} />,
  "Root Canal Treatment": <Syringe size={16} />,
  "Oral Surgery": <Scissors size={16} />,
  "Teeth Whitening": <Sparkles size={16} />,
  "Teeth Straightening": <Smile size={16} />,
  "Dental Implant": <Crown size={16} />,
  "Dental Checkup": <Stethoscope size={16} />,
  "Dental X-Ray": <Scan size={16} />,
  "Pediatric Dentistry": <Heart size={16} />,
  "Deep Cleaning": <Brush size={16} />,
  "General Enquiry": <MessageCircleQuestion size={16} />,
};

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
          className={`text-sm flex items-center gap-2 ${selected ? "text-white" : "text-white/70"}`}
        >
          {selected && SERVICE_ICONS[selected]}
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
        className="flex flex-col gap-1 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-0 w-full z-50 overflow-y-auto max-h-60"
      >
        {SERVICES.map((service) => (
          <Option
            key={service}
            text={service}
            icon={SERVICE_ICONS[service]}
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
  icon,
  setOpen,
  onSelect,
  isSelected,
}: {
  text: string;
  icon: React.ReactNode;
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
      <motion.span variants={actionIconVariants}>{icon}</motion.span>
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
