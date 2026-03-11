"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GetStartedCTA() {
	return (
		<section id="contact" className="relative overflow-hidden">
			<div className="relative bg-[#0A6CFF] py-20 lg:py-28 px-6 overflow-hidden">
				<div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full border border-white/[0.07] pointer-events-none" />
				<div className="absolute -top-16 -right-16 w-[320px] h-[320px] rounded-full border border-white/[0.06] pointer-events-none" />
				<div className="absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full border border-white/[0.07] pointer-events-none" />
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background:
							"linear-gradient(135deg, #0A6CFF 0%, #1a7fff 50%, #6FD3FF 100%)",
					}}
				/>
				<div className="relative max-w-3xl mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "-80px" }}
						transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
					>
						<p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-5">
							/ Get Started Today
						</p>
						<h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.07] mb-5">
							A brighter smile is just
							<br />
							one visit away
						</h2>
						<p className="text-[15px] text-white/65 leading-relaxed mb-10 max-w-xl mx-auto">
							Book your appointment at K Dental Hub and experience dental care
							that&apos;s gentle, modern, and designed around your
							family&apos;s needs.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="tel:+1234567890"
								className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-[#0A6CFF] text-sm font-bold hover:bg-[#F0F8FF] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
							>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<path
										d="M3 2H5.5L6.75 5L5.25 5.88C6 7.5 8.5 10 10.12 10.75L11 9.25L14 10.5V13C14 13.55 13.55 14 13 14C6.37 14 2 9.63 2 3C2 2.45 2.45 2 3 2Z"
										fill="#0A6CFF"
									/>
								</svg>
								Call Us Today
							</a>
							<a
								href="mailto:hello@kdentalhub.com"
								className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/25 text-white text-sm font-bold hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
							>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
									<rect
										x="2"
										y="3.5"
										width="12"
										height="9"
										rx="1.5"
										stroke="white"
										strokeWidth="1.3"
									/>
									<path
										d="M2 6l6 4 6-4"
										stroke="white"
										strokeWidth="1.3"
										strokeLinecap="round"
									/>
								</svg>
								Send a Message
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
