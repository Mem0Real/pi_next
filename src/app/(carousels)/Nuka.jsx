"use client";

import React from "react";
import Carousel from "nuka-carousel";
import Image from "next/image";

const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

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
				className="rounded-xl text-white"
			>
				{images.map((item) => (
					<div
						className="flex h-64 md:h-64 lg:h-96 w-full justify-center items-center relative"
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
				))}
			</Carousel>
		</div>
	);
};

export default Nuka;
