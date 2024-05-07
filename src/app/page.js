"use client";

// import "../css/index.css";
// import "../css/home.css";
import styles from "./home.module.css";

import React, { useState, useEffect } from "react";

import Nuka from "./(carousels)/Nuka";

import Marquee from "react-fast-marquee";

import { Playfair, Roboto } from "next/font/google";
import SwiperCarousel from "./(carousels)/SwiperCarousel";

const playfair = Playfair({
	subsets: ["latin"],
	weight: "700",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const HomePage = () => {
	const __dirName = `/assets/img`;
	const files = [
		{ name: "Ethiopian Airlines", path: "airline.jpg" },
		{ name: "National Blood Bank Service", path: "bloodbank.jpg" },
		{ name: "Customs Comission", path: "customs.jpg" },
		{ name: "Ethiopian Electric Power", path: "eep.jpg" },
		{ name: "Ethiopian Electric Utility", path: "eeu.jpg" },
		{ name: "Ethiopian Pharmaceuticals Supply Agency", path: "epsa.jpg" },
		{ name: "FDRE Defence Force", path: "fdre.jpg" },
		{ name: "Ministry of Foreign Affairs", path: "foreign.jpg" },
		{ name: "Arba Minch University", path: "amu.gif" },
		{ name: "Gondar University", path: "gu.jpg" },
		{ name: "Mekelle University", path: "mu.jpg" },
		{ name: "Wachemo University", path: "wu.jpg" },
		{ name: "METEC", path: "metec.jpg" },
		{ name: "A.A City Roads Authority", path: "roads.jpg" },
		{ name: "Sugar Corporation", path: "sugar.jpg" },
		{ name: "Ethio-Telecom", path: "tele.jpg" },
		{ name: "Defence Construction Enterprise", path: "dce.jpg" },
	];

	const [marq, setMarq] = useState("");

	useEffect(() => {
		window.addEventListener("resize", resize());
		return () => window.removeEventListener("resize", resize());
	}, []);

	const resize = () => {
		window.innerWidth <= 760 ? setMarq("small") : setMarq("big");
	};

	return (
		<>
			{/* Hero */}
			<section className="h-screen section">
				<div
					className="hero min-h-screen bg-home-img bg-fixed z-10"
					style={{ backgroundImage: 'url("/assets/img/hero1.jpg")' }}
				>
					<div className="hero-overlay bg-opacity-30"></div>
					<div
						className={`hero-content text-center text-neutral-content ${playfair.className}`}
					>
						<div className="max-w-md flex flex-col justify-center items-center font-playfair tracking-widest shadow-lg rounded-large shadow-cyan-900 text-white">
							<h1 className="mb-5 text-5xl font-bold">Welcome</h1>
							<h1 className="mb-5 text-5xl font-bold">To</h1>
							<h1 className="mb-5 text-5xl font-bold">Punctual Engineering</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="lg:h-24 bg-gray-300 text-black">
				<div className="text-3xl flex items-center justify-center text-center lg:h-24 font-poppins">
					Fulfilling your machinery needs exactly at the right time.
				</div>
			</section>

			{/* Electro Mechanical */}
			<section
				className="lg:h-fit h-auto flex flex-col justify-around items-center text-gray-400 body-font overflow-hidden bg-cover bg-center bg-fixed py-10"
				style={{ backgroundImage: 'url("/assets/img/em-background.jpg")' }}
			>
				<div className="flex flex-col justify-center items-center w-full gap-12 pt-12">
					<div className="flex justify-center items-center text-4xl font-medium underline text-white mb-12 lg:mb-0">
						<h2 className={`font-playfair pb-12 ${playfair.className}`}>
							Products We Offer
						</h2>
					</div>
					<div className="container px-5 mx-auto flex flex-col justify-center items-center">
						<div className="w-full lg:w-4/5 items-center justify-center flex flex-wrap">
							<div className="lg:basis-1/2 w-full md:w-fit overflow-hidden h-fit rounded-md">
								{/* <Nuka name="em" /> */}
								<SwiperCarousel name="electro" />
							</div>

							<div className="lg:w-1/2 w-full lg:pr-10 pt-6 pb-24 flex flex-col justify-around items-center px-5 md:px-0">
								<h1 className="text-white text-2xl text-center title-font font-medium mb-1 underline underline-offset-8 pb-8">
									Electro Mechanical Machinery Supply and Construction
								</h1>

								<div className="text-center">
									<p className="leading-relaxed">
										It is virtually impossible to list every single
										electromechanical device. <br />
									</p>
									<div className="text-lg p-4">
										Some of the most common Machineries used include:
									</div>
								</div>
								<ul className="list-disc mb-12 lg:mb-0">
									<li>Agriculture for Irrigation Systems,</li>
									<li>Turn-key Energy Transformers and Generator Projects</li>
									<li>Creshers like sand and Cement Projects,</li>
									<li>Extra large hydropower Projects, etc...</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Construction Machineries */}
			<section className="lg:h-fit h-auto flex flex-col justify-around items-center text-gray-400 body-font overflow-hidden bg-cover bg-center bg-fixed bg-slate-800 px-10 md:px-0 pt-10">
				<div className="container px-5 mx-auto flex flex-col justify-center items-center">
					<div className="bg-slate-800 lg:w-11/12 w-full items-center justify-center flex flex-col lg:flex-row gap-0 md:gap-2 lg:gap-6">
						<div className="lg:w-1/2 w-full lg:pr-10 pt-6 lg:pb-24 flex flex-col justify-around items-center">
							<h1 className="text-white text-2xl text-center title-font font-medium mb-1 underline underline-offset-8 pb-8">
								Construction Machineries
							</h1>

							<div className="text-center">
								<p className="leading-relaxed">
									We provide a variety of construction machineries of all sizes
									and brands. We can provide all the machineries required for
									your project in a timely manner. We guarantee your needs will
									be fulfilled with our top of the line products.
									<br />
								</p>

								<div className="text-lg py-4 text-center">
									Some of the machineries include:
								</div>
							</div>

							<ul className={`${styles.listRoman} lg:pl-6`}>
								<li>
									Chippers with different mechanisms like Disk Chippers, Drum
									Chippers, PTO Chippers, etc...
								</li>
								<li>
									Cranes that can support multitude amount of loads with various
									scales. These include Crawlers, Towers, Truck-Mounted Cranes
									and the like
								</li>
								<li>
									Excavators with Dragline, Suction, Wheeled & Crawler mobility
									systems.
								</li>
								<li>
									Forklifts including Counter-balance, Heavy Duty, Rough
									Terrain, etc...
								</li>
							</ul>
						</div>

						<div className="basis-1/2 w-full overflow-hidden h-fit rounded-md mb-20 lg:mb-0">
							{/* <Nuka name="construction" /> */}
							<SwiperCarousel name="construction" />
						</div>
					</div>
				</div>
			</section>

			{/* Waters Wells & Drilling Construction */}
			<section
				className="lg:h-fit h-auto flex flex-col justify-around items-center text-gray-400 body-font overflow-hidden bg-cover bg-center bg-fixed pb-20"
				style={{ backgroundImage: 'url("/assets/img/em-background.jpg")' }}
			>
				<div className="pt-20"></div>
				<div className="container px-5 mx-auto">
					<div className="lg:w-4/5 w-full items-center justify-center lg:mx-36 flex flex-wrap">
						<div className="basis-1/2 w-fit overflow-hidden h-fit rounded-md">
							{/* <Nuka name="drilling" /> */}
							<SwiperCarousel name="drilling" />
						</div>

						<div className="lg:w-1/2 w-full lg:pr-10 pt-6 pb-24 flex flex-col justify-around items-center">
							<h1 className="text-white text-2xl text-center title-font font-medium mb-1 underline underline-offset-8 pb-8">
								Waters Wells & Drilling Construction
							</h1>

							<div className="text-center mb-12 lg:mb-0">
								<p className="leading-relaxed">
									We provide highly durable machines that can perform extensive
									drilling of water wells. These drills are of the upmost
									quality and have high resistance against errosion and machine
									failure. If you are looking for long-lasting and efficent
									drilling equipments, you have come to the right place.
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="bg-slate-800">
				<h1 className="font-bold font-playfair text-white text-2xl text-center pt-12 title-font underline underline-offset-8 lg:pb-24 mb-12 lg:mb-0">
					Companies we have worked with in the past
				</h1>

				{/* Marquee */}
				<div className="flex flex-col justify-center items-center">
					<div className="relative flex overflow-x-hidden rounded-md">
						<Marquee
							play="true"
							speed={marq === "big" ? "50" : "100"}
							gradientColor={[0, 0, 0]}
							pauseOnHover="false"
						>
							{files.map((file) => {
								return (
									<div key={file.path + file.name}>
										<img
											className="h-52 w-60"
											src={`${__dirName}/comp/${file.path}`}
											// style={{ width: 220, height: 200 }}
											alt={file.name}
										/>
									</div>
								);
							})}
						</Marquee>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomePage;
