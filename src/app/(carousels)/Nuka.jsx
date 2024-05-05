"use client";

import React from "react";
import Carousel from "nuka-carousel";

const Nuka = (props) => {
	const name = props.name;
	const __dirName = `/assets/img/${name}/`;

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
				{/* <Carousel
				wrapMode={"wrap"}
				autoplay={true}
				autoplayInterval={500}
				showArrows
				showDots
				id={name}
			> */}
				<img
					src={__dirName + "1.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
				<img
					src={name === "em" ? __dirName + "2.webp" : __dirName + "2.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
				<img
					src={__dirName + "3.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
				<img
					src={__dirName + "4.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
				<img
					src={__dirName + "5.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
				<img
					src={__dirName + "6.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
				<img
					src={__dirName + "7.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
				<img
					src={__dirName + "8.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
				<img
					src={__dirName + "9.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
				<img
					src={__dirName + "10.jpg"}
					alt={`${name} 'image'`}
					className="object-cover h-80 w-full"
				/>
			</Carousel>
		</div>
	);
};

export default Nuka;
