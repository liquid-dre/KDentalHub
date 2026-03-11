"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
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
import RoundedSlideButton from "@/components/RoundedSlideButton";

interface ServiceShowcase {
	icon: React.ReactNode;
	title: string;
	description: string;
	image: string;
}

const SERVICE_SHOWCASE: ServiceShowcase[] = [
	{
		icon: <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />,
		title: "Cavity Protection",
		description:
			"Advanced cavity prevention using the latest dental sealants and fluoride treatments. We protect your teeth with thorough examinations and personalized care plans.",
		image:
			"https://images.pexels.com/photos/6502019/pexels-photo-6502019.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		icon: <Syringe className="w-10 h-10" strokeWidth={1.5} />,
		title: "Root Canal Treatment",
		description:
			"Pain-free root canal therapy with modern techniques and sedation options. Our specialists ensure comfort while saving your natural teeth from extraction.",
		image:
			"https://images.pexels.com/photos/6627578/pexels-photo-6627578.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		icon: <Scissors className="w-10 h-10" strokeWidth={1.5} />,
		title: "Oral Surgery",
		description:
			"Expert oral surgery procedures including wisdom tooth extraction, dental implants, and corrective jaw surgery performed with precision and care.",
		image:
			"https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		icon: <Sparkles className="w-10 h-10" strokeWidth={1.5} />,
		title: "Teeth Whitening",
		description:
			"Professional whitening treatments that brighten your smile safely and effectively. Get a radiant, confident smile in just one visit.",
		image:
			"https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		icon: <Smile className="w-10 h-10" strokeWidth={1.5} />,
		title: "Teeth Straightening",
		description:
			"Modern orthodontic solutions including clear aligners and traditional braces. Achieve a perfectly aligned smile with our customized treatment plans.",
		image:
			"https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		icon: <Crown className="w-10 h-10" strokeWidth={1.5} />,
		title: "Dental Implant",
		description:
			"Permanent tooth replacement with state-of-the-art implant technology. Restore your smile and chewing function with natural-looking, long-lasting implants.",
		image:
			"https://images.pexels.com/photos/6627573/pexels-photo-6627573.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		icon: <Stethoscope className="w-10 h-10" strokeWidth={1.5} />,
		title: "Dental Checkup",
		description:
			"Comprehensive dental examinations with digital X-rays and oral cancer screening. Regular checkups keep your smile healthy and catch issues early.",
		image:
			"https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		icon: <Scan className="w-10 h-10" strokeWidth={1.5} />,
		title: "Dental X-Ray",
		description:
			"State-of-the-art digital imaging for accurate diagnosis and treatment planning. Low-radiation technology ensures safety while providing crystal-clear results.",
		image:
			"https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		icon: <Heart className="w-10 h-10" strokeWidth={1.5} />,
		title: "Pediatric Dentistry",
		description:
			"Gentle, child-friendly dental care in a fun and welcoming environment. Building positive dental habits from the very first visit for lifelong healthy smiles.",
		image:
			"https://images.pexels.com/photos/5355840/pexels-photo-5355840.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
	{
		icon: <Brush className="w-10 h-10" strokeWidth={1.5} />,
		title: "Deep Cleaning",
		description:
			"Thorough scaling and root planing to remove plaque and tartar buildup below the gumline. Essential treatment for maintaining gum health and preventing disease.",
		image:
			"https://images.pexels.com/photos/6502552/pexels-photo-6502552.jpeg?auto=compress&cs=tinysrgb&w=800",
	},
];

function ServiceSelectBtns({
	numTracks,
	setSelected,
	selected,
}: {
	numTracks: number;
	setSelected: Dispatch<SetStateAction<number>>;
	selected: number;
}) {
	return (
		<div className="flex gap-1 mt-8">
			{Array.from(Array(numTracks).keys()).map((n) => (
				<button
					key={n}
					onClick={() => setSelected(n)}
					className="h-1.5 w-full bg-[#b5c9b6] relative rounded-full overflow-hidden"
				>
					{selected === n ? (
						<motion.span
							className="absolute top-0 left-0 bottom-0 bg-[#1a1a1a] rounded-full"
							initial={{ width: "0%" }}
							animate={{ width: "100%" }}
							transition={{ duration: 5 }}
							onAnimationComplete={() => {
								setSelected(selected === numTracks - 1 ? 0 : selected + 1);
							}}
						/>
					) : (
						<span
							className="absolute top-0 left-0 bottom-0 bg-[#1a1a1a] rounded-full"
							style={{ width: selected > n ? "100%" : "0%" }}
						/>
					)}
				</button>
			))}
		</div>
	);
}

function ServiceStackedCards({
	selected,
	setSelected,
}: {
	selected: number;
	setSelected: Dispatch<SetStateAction<number>>;
}) {
	return (
		<div className="relative h-[420px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
			{SERVICE_SHOWCASE.map((service, i) => {
				const scale = i <= selected ? 1 : 1 + 0.015 * (i - selected);
				const offset = i <= selected ? 0 : 95 + (i - selected) * 3;

				return (
					<motion.div
						key={i}
						initial={false}
						style={{
							zIndex: i,
							transformOrigin: "left bottom",
						}}
						animate={{ x: `${offset}%`, scale }}
						whileHover={{ translateX: i === selected ? 0 : -3 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						onClick={() => setSelected(i)}
						className="absolute top-0 left-0 w-full min-h-full cursor-pointer flex flex-col justify-between rounded-3xl overflow-hidden"
					>
						{/* Background image */}
						<div
							className="absolute inset-0 bg-cover bg-center"
							style={{ backgroundImage: `url(${service.image})` }}
						/>
						{/* Dark overlay for readability */}
						<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

						{/* Content */}
						<div className="relative z-10 p-8 lg:p-12 flex flex-col justify-between h-full">
							<div className="text-white/70">{service.icon}</div>
							<div>
								<h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
									{service.title}
								</h3>
								<p className="text-[15px] lg:text-base leading-relaxed max-w-md text-white/70">
									{service.description}
								</p>
							</div>
						</div>
					</motion.div>
				);
			})}
		</div>
	);
}

export default function ServicesCarousel() {
	const [selectedService, setSelectedService] = useState(0);

	return (
		<section className="bg-[#D6E9D7] py-20 lg:py-28">
			<div className="max-w-7xl mx-auto px-6 lg:px-10 xl:px-12">
				{/* Top row: (our works) left + title right */}
				<div className="flex items-start justify-between mb-14 lg:mb-20">
					<motion.p
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
						className="flex items-center gap-3 text-[13px] text-[#555]"
					>
						<span className="font-medium">(our works)</span>
						<span className="block w-16 h-px bg-[#555]" />
					</motion.p>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
						className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.08] text-right"
					>
						Services We Provide
						<br />
						Are Listed Below
					</motion.h2>
				</div>

				{/* Description text + stacked cards inline */}
				<div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">
					{/* Left column — description + CTA + avatars */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					>
						<p className="text-[15px] text-[#444] leading-relaxed mb-8 max-w-sm">
							Our team of skilled and experienced dental professionals strives
							to create a comfortable and welcoming environment for each
							patient.
						</p>
						<RoundedSlideButton
							href="#contact"
							initialBg="#ffffff"
							initialText="#000000"
							hoverBg="var(--brand-blue)"
							hoverText="#000000"
							hoverScale={1.15}
						>
							<span>Book Appointment</span>
							<ArrowRight className="w-4 h-4" />
						</RoundedSlideButton>

						{/* Member avatars */}
						<div className="flex items-center gap-4 mt-12">
							<div className="flex -space-x-3">
								<div className="w-11 h-11 rounded-full border-2 border-[#D6E9D7] bg-white/60 overflow-hidden">
									<svg
										className="w-full h-full text-[#bbb]"
										viewBox="0 0 44 44"
										fill="none"
									>
										<circle
											cx="22"
											cy="18"
											r="8"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
										<path
											d="M6 40c0-8.84 7.16-16 16-16s16 7.16 16 16"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
									</svg>
								</div>
								<div className="w-11 h-11 rounded-full border-2 border-[#D6E9D7] bg-white/60 overflow-hidden">
									<svg
										className="w-full h-full text-[#bbb]"
										viewBox="0 0 44 44"
										fill="none"
									>
										<circle
											cx="22"
											cy="18"
											r="8"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
										<path
											d="M6 40c0-8.84 7.16-16 16-16s16 7.16 16 16"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
									</svg>
								</div>
								<div className="w-11 h-11 rounded-full border-2 border-[#D6E9D7] bg-[#8B6E5B] overflow-hidden flex items-center justify-center">
									<svg
										className="w-full h-full text-white/70"
										viewBox="0 0 44 44"
										fill="none"
									>
										<circle
											cx="22"
											cy="18"
											r="8"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
										<path
											d="M6 40c0-8.84 7.16-16 16-16s16 7.16 16 16"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
									</svg>
								</div>
							</div>
							<div>
								<p className="text-sm font-bold text-[#1a1a1a]">10K+ happy</p>
								<p className="text-sm font-bold text-[#1a1a1a]">members</p>
							</div>
						</div>

						{/* Progress bars */}
						<ServiceSelectBtns
							numTracks={SERVICE_SHOWCASE.length}
							setSelected={setSelectedService}
							selected={selectedService}
						/>
					</motion.div>

					{/* Right column — stacked service cards */}
					<ServiceStackedCards
						selected={selectedService}
						setSelected={setSelectedService}
					/>
				</div>
			</div>
		</section>
	);
}
