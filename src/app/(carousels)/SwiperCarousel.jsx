"use client";

import Image from "next/image";
import React, { useRef, useState, useCallback } from "react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const electromechanical = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const construction = ["chipper", "crane", "excavator", "forklift", "roller"];
const drill = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

export default function SwiperCarousel({ name }) {
	const sliderRef = useRef(null);

	const [controlledSwiper, setControlledSwiper] = useState(null);

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	return (
		<div className="w-full relative">
			<div className="px-7 md:px-10 lg:px-16 rounded-3xl">
				<Swiper
					ref={sliderRef}
					autoplay
					rewind
					grabCursor
					watchOverflow
					slidesPerView={1}
					pagination={{ dynamicBullets: true, clickable: true }}
					modules={[Navigation, Pagination, Autoplay]}
					className="h-full w-full rounded-lg"
					onSwiper={setControlledSwiper}
				>
					{name === "electro"
						? electromechanical.map((item) => (
								<SwiperSlide key={item}>
									<div className="h-96 w-full relative">
										<Image
											fill
											src={`/assets/img/${name}/${item}.png`}
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											alt={item}
											className="object-contain object-center"
										/>
									</div>
								</SwiperSlide>
						  ))
						: name === "construction"
						? construction.map((item) => (
								<SwiperSlide key={item}>
									<div className="flex h-96 w-full justify-center items-center relative">
										<Image
											fill
											src={`/assets/img/${name}/${item}.png`}
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											alt={item}
											className="object-contain object-center"
										/>
									</div>
								</SwiperSlide>
						  ))
						: drill.map((item) => (
								<SwiperSlide key={item}>
									<div className="flex h-96 w-full justify-center items-center relative">
										<Image
											fill
											src={`/assets/img/${name}/${item}.png`}
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											alt={item}
											className="object-contain object-center"
										/>
									</div>
								</SwiperSlide>
						  ))}
				</Swiper>
			</div>

			{/* Nav Buttons */}
			<motion.div
				className={`absolute top-[40%] left-0 z-50 cursor-pointer`}
				whileTap={{ scale: 0.95 }}
				initial={{ opacity: 0 }}
				whileHover={{ scale: 1.5 }}
				onClick={handlePrev}
				animate={
					controlledSwiper?.isBeginning && controlledSwiper?.isEnd
						? { opacity: 0 }
						: { opacity: 1 }
				}
			>
				<Image
					src="/assets/icons/caret-circle-left-svgrepo-com.svg"
					width={5}
					height={5}
					alt={"Next"}
					className="object-cover w-full h-full"
				/>
			</motion.div>
			<motion.div
				className={`absolute top-[40%] right-0 z-50 cursor-pointer`}
				style={{ display: "block" }}
				initial={{ opacity: 0 }}
				whileTap={{ scale: 0.95 }}
				whileHover={{ scale: 1.5 }}
				onClick={handleNext}
				animate={
					controlledSwiper?.isBeginning && controlledSwiper?.isEnd
						? { opacity: 0 }
						: { opacity: 1 }
				}
			>
				<Image
					src="/assets/icons/caret-circle-right-svgrepo-com.svg"
					width={15}
					height={15}
					alt={"Next"}
					className="object-cover w-full h-full block"
				/>
			</motion.div>
		</div>
	);
}
