"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	ShieldCheck,
	Syringe,
	Scissors,
	Sparkles,
	Stethoscope,
	Smile,
	Crown,
	Scan,
	Heart,
	Brush,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CURSOR_WIDTH = 32;
const HOVER_PADDING = 24;

interface ServiceCard {
	title: string;
	slug: string;
	description: string;
	bg: string;
	image: string;
	icon: React.ReactNode;
}

const ALL_SERVICES: ServiceCard[] = [
	{
		title: "Cavity Protection",
		slug: "cavity-protection",
		description:
			"Advanced cavity prevention using the latest dental sealants and fluoride treatments to protect your teeth.",
		bg: "#FFF0D4",
		image:
			"https://images.pexels.com/photos/6502019/pexels-photo-6502019.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />,
	},
	{
		title: "Root Canal Treatment",
		slug: "root-canal-treatment",
		description:
			"Pain-free root canal therapy with modern techniques and sedation options for your comfort.",
		bg: "#EDD8FF",
		image:
			"https://images.pexels.com/photos/6627578/pexels-photo-6627578.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <Syringe className="w-7 h-7" strokeWidth={1.5} />,
	},
	{
		title: "Oral Surgery",
		slug: "oral-surgery",
		description:
			"Expert oral surgery including wisdom tooth extraction and corrective jaw procedures.",
		bg: "#D4EEFF",
		image:
			"https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <Scissors className="w-7 h-7" strokeWidth={1.5} />,
	},
	{
		title: "Teeth Whitening",
		slug: "teeth-whitening",
		description:
			"Professional whitening treatments that brighten your smile up to 8 shades in one visit.",
		bg: "#D4F5E9",
		image:
			"https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <Sparkles className="w-7 h-7" strokeWidth={1.5} />,
	},
	{
		title: "Teeth Straightening",
		slug: "teeth-straightening",
		description:
			"Clear aligners and traditional braces for a perfectly aligned, confident smile.",
		bg: "#FFE4E6",
		image:
			"https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <Smile className="w-7 h-7" strokeWidth={1.5} />,
	},
	{
		title: "Dental Implant",
		slug: "dental-implant",
		description:
			"Permanent tooth replacement with state-of-the-art implant technology and natural results.",
		bg: "#FFF0D4",
		image:
			"https://images.pexels.com/photos/6627573/pexels-photo-6627573.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <Crown className="w-7 h-7" strokeWidth={1.5} />,
	},
	{
		title: "Dental Checkup",
		slug: "dental-checkup",
		description:
			"Comprehensive examinations with digital X-rays and oral cancer screening.",
		bg: "#EDD8FF",
		image:
			"https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <Stethoscope className="w-7 h-7" strokeWidth={1.5} />,
	},
	{
		title: "Dental X-Ray",
		slug: "dental-x-ray",
		description:
			"State-of-the-art digital imaging with 90% less radiation for accurate diagnosis.",
		bg: "#D4EEFF",
		image:
			"https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <Scan className="w-7 h-7" strokeWidth={1.5} />,
	},
	{
		title: "Pediatric Dentistry",
		slug: "pediatric-dentistry",
		description:
			"Gentle, child-friendly dental care building positive habits from the first visit.",
		bg: "#FFE4E6",
		image:
			"https://images.pexels.com/photos/5355840/pexels-photo-5355840.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <Heart className="w-7 h-7" strokeWidth={1.5} />,
	},
	{
		title: "Deep Cleaning",
		slug: "deep-cleaning",
		description:
			"Thorough scaling and root planing to remove buildup and restore gum health.",
		bg: "#D4F5E9",
		image:
			"https://images.pexels.com/photos/6502552/pexels-photo-6502552.jpeg?auto=compress&cs=tinysrgb&w=800",
		icon: <Brush className="w-7 h-7" strokeWidth={1.5} />,
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

export default function ServicesPage() {
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
		<main className="relative">
			<Navbar />
			<OutlineCursor cursorRef={cursorRef} />

			<section
				onMouseMove={handleMouseMove}
				onMouseLeave={() => {
					const cursorEl = cursorRef.current;
					if (cursorEl) {
						cursorEl.style.width = "0px";
						cursorEl.style.height = "0px";
					}
				}}
				className="relative bg-[#FAFAFA] pt-32 lg:pt-40 pb-24 lg:pb-32 overflow-clip"
			>
				<div className="relative max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className="mb-16 lg:mb-20"
					>
						<h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.08]">
							All Our Services
						</h1>
						<p className="text-[15px] text-[#475569] leading-relaxed mt-4 max-w-lg">
							Comprehensive dental care for your entire family. Explore our
							full range of services and find the right treatment for you.
						</p>
					</motion.div>

					{/* Grid */}
					<div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
						{ALL_SERVICES.map((service, i) => (
							<motion.a
								key={service.slug}
								href={`/services/${service.slug}`}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{
									duration: 0.6,
									delay: (i % 4) * 0.1,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="outline-card group/card relative rounded-[2rem] p-8 lg:p-10 min-h-[340px] flex flex-col justify-between overflow-hidden"
								style={{ backgroundColor: service.bg }}
							>
								{/* Hover image overlay */}
								<div
									className="absolute inset-0 bg-cover bg-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
									style={{ backgroundImage: `url(${service.image})` }}
								/>
								<div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

								{/* Icon + sparkle */}
								<div className="relative z-10 flex items-start justify-between">
									<div className="w-16 h-16 rounded-2xl bg-white/60 group-hover/card:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors duration-500">
										<span className="text-[#2D2D2D] group-hover/card:text-white transition-colors duration-500">
											{service.icon}
										</span>
									</div>
									<Sparkle className="text-[#2D2D2D] group-hover/card:text-white/60 mt-2 transition-colors duration-500" />
								</div>

								{/* Content */}
								<div className="relative z-10 mt-auto pt-12">
									<h3 className="text-2xl lg:text-[1.7rem] font-bold text-[#1a1a1a] group-hover/card:text-white mb-3 tracking-tight transition-colors duration-500">
										{service.title}
									</h3>
									<p className="text-[15px] text-[#555] group-hover/card:text-white/70 leading-relaxed mb-6 max-w-sm transition-colors duration-500">
										{service.description}
									</p>
									<span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group-hover/card:text-white transition-colors duration-500">
										<span className="border-b border-[#1a1a1a] group-hover/card:border-white/60 pb-0.5 transition-colors duration-500">
											Learn More
										</span>
										<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-2" />
									</span>
								</div>
							</motion.a>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</main>
	);
}
