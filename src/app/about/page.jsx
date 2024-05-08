"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";
import { Playfair } from "next/font/google";

const playFair = Playfair({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
});

export default function About() {
	const __dirName = `/assets/img/about`;
	const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

	return (
		<>
			<div className="hero min-h-screen pt-12">
				<div
					className="hero-overlay bg-opacity-60 bg-about1-bg lg:bg-center bg-right bg-cover bg-fixed"
					style={{ backgroundImage: 'url("/assets/img/about1-bg.jpg")' }}
				></div>

				<div className="hero-content text-center text-gray-300 mt-12">
					<div className="w-full">
						<h1
							className={`mb-5 mt-4 text-6xl font-light tracking-tighter font-playfair underline ${playFair.className}`}
						>
							Punctual Importer
						</h1>
						<h3 className="mb-5 text-xl font-bold">
							Helping build a better future since 2015.
						</h3>
						<div className="text-xl text-center text-gray-200 font-medium">
							<p>
								Although our company started as an importer and distributor,
								it's currently envolved in various trades and investment
								ventures.
							</p>
							<p>
								Since it's start-up, the company has branched into multiple
								legally independent sister companies with a single management
								system.
							</p>

							<p className="text-gray-200 mt-8 lg:pt-24 lg:pb-6 text-4xl">
								Our main business focus lays in:
							</p>
							<ol className="mt-8 backdrop-blur-md mb-8 space-y-4 mx-auto w-full text-gray-200 dark:text-gray-400">
								<li className="flex items-center justify-center pl-8 lg:pl-36 text-xl font-semibold -mb-5 pt-12 space-x-3">
									<span className="w-full text-start text-3xl font-bold">
										Importing Distribution of:
									</span>
								</li>

								{/* <div className="flex justify-center items-center pb-12">
								<ul className="mt-8 backdrop-blur-md mb-8 space-y-4 text-left text-gray-200 dark:text-gray-400">
									<li className="flex items-center space-x-3">
										<svg
											className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>

										<span>Water related product distribution,</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg
											className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Electro mechanical contractor,</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg
											className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Building and water contructor,</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg
											className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>Importing various equipments,</span>
									</li>
									<li className="flex items-center space-x-3">
										<svg
											className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
										<span>
											Construction machineries import and distribution,
										</span>
									</li>
								</ul>
							</div> */}
								<div className="flex justify-between md:pl-12 lg:pl-48 lg:justify-start items-center pb-12 w-full">
									<ul className="mt-8 backdrop-blur-md mb-8 space-y-4 text-left text-gray-200 dark:text-gray-400">
										<li className="flex items-center space-x-3">
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>

											<span>Construction Machineries,</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Generators and Pumps,</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>UPS and AVR,</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Transformers,</span>
										</li>
									</ul>
								</div>
							</ol>

							<ol className="mt-8 backdrop-blur-md mb-8 space-y-4 mx-auto w-full text-gray-200 dark:text-gray-400">
								<li className="flex items-center justify-center pl-8 lg:pl-36 text-xl font-semibold -mb-5 pt-12 space-x-3">
									<span className="w-full text-start text-3xl font-bold">
										Constructions:
									</span>
								</li>

								<div className="flex justify-between md:pl-12 lg:pl-48 lg:justify-start items-center pb-2 md:pb-12 w-full">
									<ul className="mt-8 backdrop-blur-md mb-8 space-y-4 text-left text-gray-200 dark:text-gray-400">
										<li className="flex items-center space-x-3">
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>

											<span>Water well drill construction,</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Electro-Mechanical Construction,</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>Water Construction,</span>
										</li>
										<li className="flex items-center space-x-3">
											<svg
												className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
												fill="currentColor"
												viewBox="0 0 20 20"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clipRule="evenodd"
												></path>
											</svg>
											<span>
												Generators and Energy Turnkey projects construction,
											</span>
										</li>
									</ul>
								</div>
							</ol>
						</div>
					</div>
				</div>
			</div>
			<div
				className="w-full sm:pt-56 inline-flex flex-col h-fit lg:pt-8 lg:bg-center bg-about-bg bg-fixed bg-cover bg-left-top bg-blend-darken"
				style={{ backgroundImage: 'url("/assets/img/about-bg.jpg")' }}
			>
				{/* Responsive bg for mobile */}
				{isMobile ? (
					<div
						className="h-fitbg-about-bg bg-fixed bg-cover bg-left-top"
						style={{ backgroundImage: 'url("/assets/img/about1-bg.jpg")' }}
					></div>
				) : null}

				<div className="container px-5 mx-auto py-24 lg:py-12">
					<div className="lg:h-fit flex flex-col gap-12 flex-wrap lg:justify-end lg:items-end sm:justify-center sm:items-center lg:mr-6 lg:pt-6 lg:mb-6">
						<div className="p-4 sm:w-auto overflow-hidden md:w-fit shadow-md shadow-black rounded-3xl md:h-fit">
							<div className="flex h-full bg-black bg-opacity-80 rounded-3xl p-8 flex-col">
								<div className="flex items-center justify-center mb-3">
									<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
										<img src={`${__dirName}/mission.png`} alt="Mission" />
									</div>
									<h2 className="text-gray-100 text-xl title-font font-medium">
										Mission
									</h2>
								</div>
								<div className="">
									<ul className="space-y-4 max-w-md list-disc list-inside text-gray-100 dark:text-gray-400">
										<li>
											We are commited and compliant with international safety,
											environment and quality standard at all time.
										</li>
										<li>
											To provide our customers with high quality products and an
											exceptional level of service
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="p-4 sm:w-auto md:my-auto overflow-hidden md:w-fit shadow-md shadow-black rounded-3xl md:h-fit">
							<div className="flex h-full bg-black bg-opacity-80 rounded-3xl p-8 flex-col justify-center items-center">
								<div className="flex items-center justify-center mb-3">
									<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0">
										<img src={`${__dirName}/vision.png`} alt="Vision" />
									</div>
									<h2 className="text-gray-100 text-lg title-font font-medium">
										Vision
									</h2>
								</div>
								<div className="">
									<p className="text-center text-gray-100 dark:text-gray-400">
										To be a company that inspires and fulfills your curiosity
									</p>
								</div>
							</div>
						</div>
						<div className="p-4 sm:w-auto md:my-auto mb-12 overflow-hidden md:w-fit shadow-md shadow-black rounded-3xl md:h-fit">
							<div className="flex h-full bg-black bg-opacity-80 rounded-3xl p-8 flex-col">
								<div className="flex items-center justify-center mb-3">
									<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full   flex-shrink-0">
										<img src={`${__dirName}/values.png`} alt="Values" />
									</div>
									<h2 className="text-gray-100 text-lg title-font font-medium">
										Values
									</h2>
								</div>
								<div className="">
									{/* <p className="text-lg text-center lg:pt-8 text-gray-800"> */}
									<ul className="space-y-4 max-w-md list-disc list-inside text-gray-100 dark:text-gray-400">
										<li>Be an expert, a real professional.</li>
										<li>Be effective, take personal responsibility.</li>
										<li>
											Create and promote useful, innovative quality products.
										</li>
									</ul>
									{/* </p> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
