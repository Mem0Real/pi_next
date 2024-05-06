"use client";

// import "../css/index.css";
// import "../css/home.css";
import styles from "./home.module.css";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import Nuka from "./(carousels)/Nuka";

import Marquee from "react-fast-marquee";

import { Playfair, Roboto } from "next/font/google";

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
							<h1 className="mb-5 text-5xl font-bold">Punctual Importer</h1>
						</div>
					</div>
				</div>
			</section>
			<section className="lg:h-24 bg-gray-300 text-black">
				<div className="text-3xl flex items-center justify-center text-center lg:h-24 font-poppins">
					We really care for your demands
				</div>
			</section>

			{/* Electro Mechanical */}
			<section
				className="lg:h-fit h-auto flex flex-col justify-around items-center text-gray-400 body-font overflow-hidden bg-em-bg bg-cover bg-center bg-fixed"
				style={{ backgroundImage: 'url("/assets/img/em-background.jpg")' }}
			>
				<div className="pt-20"></div>
				<div className="flex justify-center items-center text-4xl font-medium underline text-white mb-12 lg:mb-0">
					<h2 className={`font-playfair pb-12 ${playfair.className}`}>
						Products We Offer
					</h2>
				</div>
				<div className="container px-5 mx-auto">
					<div className="lg:w-4/5 w-full items-center justify-center lg:mx-36 flex flex-wrap">
						<div className="w-fit overflow-hidden h-fit rounded-md">
							<Nuka name="em" />
						</div>

						<div className="lg:w-1/2 w-full lg:pr-10 pt-6 pb-24 flex flex-col justify-around items-center">
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
								<li>Large Water supply and Sewerage Projects,</li>
								<li>Creshers like sand and Cement Projects,</li>
								<li>Extra large hydropower Projects, etc...</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="lg:h-fit h-auto flex flex-col justify-around items-center text-gray-400 body-font overflow-hidden bg-kitchen-bg bg-cover bg-center bg-fixed bg-slate-800 px-10 md:px-0">
				<div className="bg-slate-800 w-full items-center justify-center flex flex-wrap gap-0 md:gap-2 lg:gap-12">
					<div className="lg:w-1/2 w-full lg:pr-10 pt-6 pb-24 flex flex-col justify-around items-center">
						<h1 className="text-white text-2xl text-center title-font font-medium mb-1 underline underline-offset-8 pb-8">
							Kitchen Equipment
						</h1>

						<div className="text-center">
							<p className="leading-relaxed">
								We provide a variety kitchen equipment for home & commercial use
								especially used in restaurants, hotels and the like with top of
								the market products possessing the utmost quality on market.{" "}
								<br />
							</p>

							<div className="text-lg py-4 text-center">
								Some of our most common kitchen-ware products include:
							</div>
						</div>

						<ul className={`${styles.listRoman} lg:pl-6`}>
							<li>
								Refrigerators ranging from carry-ons all the way to distribution
								size,
							</li>
							<li>Grills supported with a compressed gasoline intake,</li>
							<li>
								Multi layered electrical stoves that can operate on multiple
								dishes at a moment's notice
							</li>
						</ul>
					</div>

					<div className="w-fit overflow-hidden lg:h-auto h-fit object-cover object-center rounded-md mb-20 lg:mb-0">
						<Nuka name="kitchen" />
					</div>
				</div>
			</section>

			{/* Home Electronics */}
			<section
				className="lg:h-fit lg:pb-12 lg:pt-24 h-auto flex flex-col justify-around items-center text-gray-400 body-font overflow-hidden bg-em-bg bg-cover bg-center bg-fixed"
				style={{ backgroundImage: 'url("/assets/img/em-background.jpg")' }}
			>
				<div className="pt-20"></div>
				<div className="container px-5 mx-auto">
					<div className="lg:w-4/5 w-full items-center justify-center lg:mx-36 flex flex-wrap">
						<div className="w-fit overflow-hidden h-fit rounded-md">
							{/* <HomeCarousel name="home" /> */}
							<Nuka name="home" />
						</div>

						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-evenly items-center">
							<h1 className="text-white text-2xl text-center title-font font-medium mb-1 underline underline-offset-8 pb-8">
								ICT & Electronics
							</h1>

							<div className="text-center mb-12 lg:mb-0">
								<p className="leading-relaxed">
									We provide all the technologies that make your life better.
									Computer setup and configuration, routers and surround system
									aim to transform your home to a smart & modernized safe
									heaven. Our reliable equipment will ensure our customers'
									satisfaction and a guaranteed ease of access to all electronic
									devices within an arm's reach. <br />
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
