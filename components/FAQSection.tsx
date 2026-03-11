"use client";

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const FAQSection = () => {
  return (
    <div id="faq" className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold text-brand-navy">
          Frequently Asked Questions
        </h3>
        <Question title="How often should I brush my teeth?" defaultOpen>
          <p>
            You should brush your teeth at least twice a day — once in the
            morning and once before bed. Each brushing session should last about
            two minutes, using a soft-bristled toothbrush and fluoride
            toothpaste. This helps remove plaque and prevent cavities and gum
            disease.
          </p>
        </Question>
        <Question title="Is flossing really necessary?">
          <p>
            Yes, flossing is essential for good oral health. Brushing alone only
            cleans about 60% of your tooth surfaces. Flossing removes food
            particles and plaque from between your teeth and along the gumline
            where your toothbrush can&apos;t reach, helping to prevent cavities
            and gum disease.
          </p>
        </Question>
        <Question title="How often should I visit the dentist?">
          <p>
            Most dentists recommend a checkup and professional cleaning every six
            months. However, depending on your oral health, your dentist may
            suggest more frequent visits. Regular checkups allow early detection
            of issues like cavities, gum disease, and oral cancer before they
            become serious.
          </p>
        </Question>
        <Question title="What causes bad breath and how can I prevent it?">
          <p>
            Bad breath (halitosis) is most commonly caused by bacteria on the
            tongue, gum disease, dry mouth, or food particles left in the mouth.
            To prevent it, brush your teeth and tongue twice daily, floss
            regularly, stay hydrated, and visit your dentist for routine
            cleanings.
          </p>
        </Question>
        <Question title="When should I replace my toothbrush?">
          <p>
            You should replace your toothbrush every three to four months, or
            sooner if the bristles become frayed or splayed. A worn toothbrush is
            less effective at removing plaque. You should also replace it after
            recovering from an illness to avoid reintroducing bacteria.
          </p>
        </Question>
        <Question title="Are electric toothbrushes better than manual ones?">
          <p>
            Both can be effective when used properly. However, electric
            toothbrushes can make brushing easier and more consistent, especially
            for people with limited mobility. Many studies show that electric
            toothbrushes with oscillating heads can remove slightly more plaque
            than manual brushing. The best toothbrush is one you&apos;ll use
            correctly for the full two minutes.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-brand-blue to-brand-blue-light bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(10 108 255)",
            },
            closed: {
              rotate: "0deg",
              color: "#0F172A",
            },
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
        className="overflow-hidden text-brand-slate"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;
