"use client";

import React from "react";
import { motion } from "framer-motion";
import { CountUp } from "@/components/ui/count-up";

const STATS = [
	{ value: 10, suffix: "+", label: "Years of care" },
	{ value: 5, suffix: "K+", label: "Happy patients" },
	{ value: 98, suffix: "%", label: "Satisfaction rate" },
	{ value: 100, suffix: "%", label: "Child-friendly" },
];

const TRUST_POINTS = [
	{
		icon: "🏆",
		title: "Board-Certified Specialists",
		body: "Advanced training in pediatric and family dental care, delivering the highest clinical standard every visit.",
	},
	{
		icon: "💙",
		title: "Anxiety-Free Approach",
		body: "Child-friendly techniques that make every appointment calm, positive, and genuinely fear-free.",
	},
	{
		icon: "✨",
		title: "Modern Equipment",
		body: "Digital X-rays, gentle precision tools, and state-of-the-art technology for comfortable, accurate care.",
	},
];

export default function WhyChooseUsSection() {
	return (
		<section id="why" className="bg-white py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
				{/* Stats row */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
					{STATS.map((stat, i) => (
						<motion.div
							key={stat.label}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: 0.5,
								delay: i * 0.08,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="rounded-2xl bg-[#F7FBFF] border border-[#E8F1FF] px-6 py-7 text-center"
						>
							<CountUp
								value={stat.value}
								suffix={stat.suffix}
								duration={2.2}
								className="text-3xl xl:text-4xl font-extrabold mb-1"
								numberClassName="bg-clip-text text-transparent"
								style={{
									background:
										"linear-gradient(135deg, #0A6CFF 0%, #6FD3FF 100%)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							/>
							<p className="text-xs font-semibold text-[#475569] uppercase tracking-wider">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>

				{/* Split: headline left, trust cards right */}
				<div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					>
						<p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#0A6CFF] mb-4">
							<span className="text-[#0A6CFF]/40 font-light">/</span>
							Why Choose Us
						</p>
						<h2 className="text-4xl xl:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.07] mb-6">
							Designed for
							<br />
							comfort. Built
							<br />
							on trust.
						</h2>
						<p className="text-[15px] text-[#475569] leading-relaxed mb-8 max-w-sm">
							At K Dental Hub, we believe every child deserves a dental
							experience that is positive, gentle, and genuinely caring — from
							the very first visit to a lifetime of healthy smiles.
						</p>
						<a
							href="#contact"
							className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0A6CFF] text-white text-sm font-bold shadow-[0_4px_20px_rgba(10,108,255,0.25)] hover:bg-[#0055D4] hover:shadow-[0_6px_28px_rgba(10,108,255,0.35)] active:scale-[0.98] transition-all duration-200"
						>
							Book a Consultation
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path
									d="M2 7h10M8 3l4 4-4 4"
									stroke="white"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</a>
					</motion.div>

					<div className="space-y-4">
						{TRUST_POINTS.map((point, i) => (
							<motion.div
								key={point.title}
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: "-40px" }}
								transition={{
									duration: 0.55,
									delay: i * 0.1,
									ease: [0.22, 1, 0.36, 1],
								}}
								className="group flex gap-5 p-6 rounded-2xl bg-[#F7FBFF] border border-[#E8F1FF] hover:border-[#6FD3FF]/60 hover:shadow-[0_6px_24px_rgba(10,108,255,0.07)] transition-all duration-250"
							>
								<div className="w-11 h-11 rounded-2xl bg-white border border-[#E8F1FF] flex items-center justify-center text-[22px] flex-shrink-0 group-hover:shadow-[0_2px_10px_rgba(10,108,255,0.10)] transition-shadow duration-200">
									{point.icon}
								</div>
								<div className="pt-0.5">
									<h3 className="text-[15px] font-bold text-[#0F172A] mb-1.5">
										{point.title}
									</h3>
									<p className="text-[13.5px] text-[#64748B] leading-[1.7]">
										{point.body}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
