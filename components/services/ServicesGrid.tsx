"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	ShieldCheck,
	Syringe,
	Scissors,
	Sparkles,
} from "lucide-react";

const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;

const SERVICES = [
	{
		title: "Cavity Protection",
		description:
			"As we move into this new era of technology, we tend to look at the future with confidence and pride, which is why our theme.",
		bg: "#FFF0D4",
	},
	{
		title: "Root Canal Treatment",
		description:
			"In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good.",
		bg: "#EDD8FF",
	},
	{
		title: "Oral Surgery",
		description:
			"In the new era of technology we look in the future with certainty and pride, that's why our theme looks so good.",
		bg: "#D4EEFF",
	},
	{
		title: "Teeth Whitening",
		description:
			"Professional whitening treatments that brighten your smile safely and effectively, boosting your confidence.",
		bg: "#D4F5E9",
	},
];

function Sparkle({ className }: { className?: string }) {
	return (
		<svg
			className={className}
			width="20"
			height="20"
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10 0L10.9 7.5L18 4L12.5 9.1L20 10L12.5 10.9L18 16L10.9 12.5L10 20L9.1 12.5L2 16L7.5 10.9L0 10L7.5 9.1L2 4L9.1 7.5L10 0Z"
				fill="currentColor"
				fillOpacity="0.35"
			/>
		</svg>
	);
}

function OutlineCursor({
	cursorRef,
}: {
	cursorRef: React.MutableRefObject<HTMLDivElement | null>;
}) {
	return (
		<div
			ref={cursorRef}
			style={{
				width: 0,
				height: 0,
				borderRadius: CURSOR_WIDTH,
				top: 0,
				left: 0,
			}}
			className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 border border-neutral-900 z-[9999]"
		/>
	);
}

export default function ServicesGrid() {
	const cursorRef = useRef<HTMLDivElement | null>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		const el = e.target as HTMLElement;
		const card = el.closest(".outline-card") as HTMLElement | null;
		const cursorEl = cursorRef.current;
		if (!cursorEl) return;

		if (card) {
			const { width, height, top, left } = card.getBoundingClientRect();
			cursorEl.style.transition = "0.25s all";
			cursorEl.style.width = `${width + HOVER_PADDING}px`;
			cursorEl.style.height = `${height + HOVER_PADDING}px`;
			cursorEl.style.borderRadius = `${HOVER_PADDING / 2}px`;
			cursorEl.style.top = `${top + height / 2}px`;
			cursorEl.style.left = `${left + width / 2}px`;
		} else {
			cursorEl.style.transition = "0s all";
			cursorEl.style.width = `${CURSOR_WIDTH}px`;
			cursorEl.style.height = `${CURSOR_WIDTH}px`;
			cursorEl.style.borderRadius = `${CURSOR_WIDTH}px`;
			cursorEl.style.top = `${e.clientY}px`;
			cursorEl.style.left = `${e.clientX}px`;
		}
	};

	return (
		<>
			<OutlineCursor cursorRef={cursorRef} />

			<section
				id="services"
				onMouseMove={handleMouseMove}
				onMouseLeave={() => {
					const cursorEl = cursorRef.current;
					if (cursorEl) {
						cursorEl.style.width = "0px";
						cursorEl.style.height = "0px";
					}
				}}
				className="relative bg-[#FAFAFA] py-24 lg:py-32 overflow-clip"
			>
				<div className="relative max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
					{/* ── Section header — left-aligned ── */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className="mb-16 lg:mb-20"
					>
						<h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
							Services We Provide
							<br />
							Are Listed Below
						</h2>
					</motion.div>

					{/* ── Grid with vertical label ── */}
					<div className="relative flex gap-6 lg:gap-8">
						{/* Left column — 2 cards stacked */}
						<div className="flex-1 flex flex-col gap-6 lg:gap-8">
							{/* Card 1: Cavity Protection */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
								className="outline-card group/card relative rounded-[2rem] p-8 lg:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden"
								style={{ backgroundColor: SERVICES[0].bg }}
							>
								{/* Icon + sparkle */}
								<div className="flex items-start justify-between">
									<div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
										<ShieldCheck
											className="w-7 h-7 text-[#2D2D2D]"
											strokeWidth={1.5}
										/>
									</div>
									<Sparkle className="text-[#2D2D2D] mt-2" />
								</div>

								<div className="mt-auto pt-16">
									<h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#1a1a1a] mb-3 tracking-tight">
										{SERVICES[0].title}
									</h3>
									<p className="text-[15px] text-[#555] leading-relaxed mb-6 max-w-sm">
										{SERVICES[0].description}
									</p>
									<a
										href="#contact"
										className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group/link"
									>
										<span className="border-b border-[#1a1a1a] pb-0.5">
											Read More
										</span>
										<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-2" />
									</a>
								</div>
							</motion.div>

							{/* Card 3: Oral Surgery */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{
									duration: 0.6,
									delay: 0.2,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="outline-card group/card relative rounded-[2rem] p-8 lg:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden"
								style={{ backgroundColor: SERVICES[2].bg }}
							>
								<div className="flex items-start justify-between">
									<div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
										<Scissors
											className="w-7 h-7 text-[#2D2D2D]"
											strokeWidth={1.5}
										/>
									</div>
									<Sparkle className="text-[#2D2D2D] mt-2" />
								</div>

								<div className="mt-auto pt-16">
									<h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#1a1a1a] mb-3 tracking-tight">
										{SERVICES[2].title}
									</h3>
									<p className="text-[15px] text-[#555] leading-relaxed mb-6 max-w-sm">
										{SERVICES[2].description}
									</p>
									<a
										href="#contact"
										className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group/link"
									>
										<span className="border-b border-[#1a1a1a] pb-0.5">
											Read More
										</span>
										<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-2" />
									</a>
								</div>
							</motion.div>
						</div>

						{/* ── Vertical "our services" label ── */}
						<div className="hidden lg:flex flex-col items-center justify-center w-12 flex-shrink-0">
							<div className="flex-1 w-px bg-[#D1D5DB]" />
							<div
								className="py-6"
								style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
							>
								<span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9CA3AF]">
									our services
								</span>
							</div>
							<div className="flex-1 w-px bg-[#D1D5DB]" />
						</div>

						{/* Right column — 2 cards stacked */}
						<div className="flex-1 flex flex-col gap-6 lg:gap-8">
							{/* Card 2: Root Canal Treatment */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{
									duration: 0.6,
									delay: 0.1,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="outline-card group/card relative rounded-[2rem] p-8 lg:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden"
								style={{ backgroundColor: SERVICES[1].bg }}
							>
								<div className="flex items-start justify-between">
									<div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
										<Syringe
											className="w-7 h-7 text-[#2D2D2D]"
											strokeWidth={1.5}
										/>
									</div>
									<Sparkle className="text-[#2D2D2D] mt-2" />
								</div>

								<div className="mt-auto pt-16">
									<h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#1a1a1a] mb-3 tracking-tight">
										{SERVICES[1].title}
									</h3>
									<p className="text-[15px] text-[#555] leading-relaxed mb-6 max-w-sm">
										{SERVICES[1].description}
									</p>
									<a
										href="#contact"
										className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group/link"
									>
										<span className="border-b border-[#1a1a1a] pb-0.5">
											Read More
										</span>
										<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-2" />
									</a>
								</div>
							</motion.div>

							{/* Card 4: Teeth Whitening */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{
									duration: 0.6,
									delay: 0.3,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="outline-card group/card relative rounded-[2rem] p-8 lg:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden"
								style={{ backgroundColor: SERVICES[3].bg }}
							>
								<div className="flex items-start justify-between">
									<div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
										<Sparkles
											className="w-7 h-7 text-[#2D2D2D]"
											strokeWidth={1.5}
										/>
									</div>
									<Sparkle className="text-[#2D2D2D] mt-2" />
								</div>

								<div className="mt-auto pt-16">
									<h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#1a1a1a] mb-3 tracking-tight">
										{SERVICES[3].title}
									</h3>
									<p className="text-[15px] text-[#555] leading-relaxed mb-6 max-w-sm">
										{SERVICES[3].description}
									</p>
									<a
										href="#contact"
										className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group/link"
									>
										<span className="border-b border-[#1a1a1a] pb-0.5">
											Read More
										</span>
										<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-2" />
									</a>
								</div>
							</motion.div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
