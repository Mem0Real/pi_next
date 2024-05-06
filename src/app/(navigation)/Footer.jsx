import React from "react";
import { Poppins, Audiowide } from "next/font/google";

const poppins = Poppins({
	subsets: ["latin"],
	weight: "100",
});

const audioWide = Audiowide({
	subsets: ["latin"],
	weight: ["400"],
});

const Footer = () => {
	const __dirName = `/assets/img`;

	return (
		<footer className="absolute w-full sm:h-fit z-40 text-gray-400 bg-black font-poppins">
			<div className="container px-2 mx-auto flex items-center sm:flex-row flex-col">
				<button className="basis-1/4 start-0 title-font font-medium text-white">
					<span className={`text-base ${poppins.className}`}>
						Punctual Importer
					</span>
				</button>

				<span className="inline-flex sm:ml-auto sm:mt-4 mt-4 justify-center sm:justify-start">
					<div
						className={`flex justify-center items-center ${audioWide.className}`}
					>
						<span> Web Developed by: </span>
						<img
							src={`${__dirName}/Mem0Real.png`}
							alt="Mem0Real"
							className="relative h-16 w-36"
						/>
					</div>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
