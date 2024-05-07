"use client";

import React from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";

const electromechanical = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const construction = ["chipper", "crane", "excavator", "forklift", "roller"];
const drill = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const Nuka = ({ name }) => {
	return (
		<div className="w-auto sm:w-auto xs:w-auto md:w-96 h-fit">
			<Carousel
				wrapAround={true}
				slidesToShow={1}
				autoplay={true}
				animation={"zoom"}
				cellAlign="center"
				speed={1000}
				defaultControlsConfig={{
					nextButtonText: ">",
					prevButtonText: "<",
				}}
				id={name}
				className="rounded-xl"
			>
				{name === "electro"
					? electromechanical.map((item) => (
							<div
								className="h-64 md:h-64 lg:h-96 w-full relative border-2 rounded-xl border-neutral-500  backdrop-brightness-110 shadow-md shadow-cyan-900"
								key={item}
							>
								<Image
									fill
									src={`/assets/img/${name}/${item}.webp`}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									alt={item}
									className="object-contain object-center"
								/>
							</div>
					  ))
					: name === "construction"
					? construction.map((item) => (
							<div
								className="h-64 md:h-64 lg:h-96 w-full relative border-2 rounded-xl border-neutral-500  backdrop-brightness-110 shadow-xl shadow-cyan-900"
								key={item}
							>
								<Image
									fill
									src={`/assets/img/${name}/${item}.png`}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									alt={item}
									className="object-contain object-center"
								/>
							</div>
					  ))
					: drill.map((item) => (
							<div
								className="flex h-64 md:h-64 lg:h-96 w-full justify-center items-center relative border-2 rounded-xl border-neutral-500  backdrop-brightness-110 shadow-xl shadow-cyan-900"
								key={item}
							>
								<Image
									fill
									src={`/assets/img/${name}/${item}.png`}
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									alt={item}
									className="object-contain object-center"
								/>
							</div>
					  ))}
			</Carousel>
		</div>
	);
};

export default Nuka;
