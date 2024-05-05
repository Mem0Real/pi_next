"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import { Roboto } from "next/font/google";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const Navbar = () => {
	const __dirName = `/assets/img`;

	const [menu, setMenu] = useState(false);
	const [pathName, setPathName] = useState("");

	let location = usePathname();

	useEffect(() => {
		setPathName(location);
	}, [location]);

	function useScrollDirection() {
		const [scrollDirection, setScrollDirection] = React.useState(null);

		React.useEffect(() => {
			let lastScrollY = window.pageYOffset;

			const updateScrollDirection = () => {
				const scrollY = window.pageYOffset;
				const direction = scrollY > lastScrollY ? "down" : "up";
				if (
					direction !== scrollDirection &&
					(scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
				) {
					setScrollDirection(direction);
				}
				lastScrollY = scrollY > 0 ? scrollY : 0;
			};
			window.addEventListener("scroll", updateScrollDirection); // add event listener
			return () => {
				window.removeEventListener("scroll", updateScrollDirection); // clean up
			};
		}, [scrollDirection]);

		return scrollDirection;
	}

	const scrollDirection = useScrollDirection();
	return (
		<nav
			id="navbar"
			className={`fixed z-50 w-screen text-gray-400 body-font h-24 transition-all duration-500 backdrop-blur-md bg-black/10
     ${scrollDirection === "down" ? "-top-32" : "top-0"}`}
		>
			{/* Dropdown */}
			<div className={`dropdown flex justify-between items-center w-screen `}>
				{/* Logo */}
				<img
					// className="lg:basis-1/3 lg:hidden ml-3 text-xl w-28 lg:w-12 rounded-large h-20 px-4 shadow-lg"
					className="lg:hidden object-cover h-20 w-36 rounded-r-full mt-2"
					src={`${__dirName}/logo1.jpg`}
					alt="Punctual Importer"
				></img>

				{/* Hamburger Button */}
				<label tabIndex={0} className="lg:hidden">
					<button
						type="button"
						className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
						onClick={() => setMenu(true)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</button>
				</label>

				{/* Hamburger List */}
				{menu && (
					<ul
						id="dropdownMenu"
						tabIndex={0}
						className={`${
							scrollDirection === "down" ? "invisible" : ""
						} z-50 btn-group btn-group-vertical dropdown-content mt-80 shadow-large shadow-black rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
					>
						<div
							className="z-50 sm:mt-24 text-center inline-flex flex-col rounded-large shadow-sm"
							role="group"
						>
							{[
								["Home", "/"],
								["Services", "/services"],
								["About", "/about"],
								["Contact", "/contact"],
							].map(([title, path]) => (
								<Link href={path} key={path}>
									<button
										type="button"
										className={
											"btn z-50 bg-gray-900 backdrop-blur-sm py-2 px-auto mx-auto text-sm font-medium text-gray-300 bg-transparent rounded-l-lg border border-gray-100 hover:bg-gray-400 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
										}
										onClick={() => setMenu(false)}
									>
										{title}
									</button>
								</Link>
							))}
						</div>
					</ul>
				)}
			</div>

			{/* Nav Center */}
			<div className="md:ml-auto md:mr-auto hidden lg:flex lg:flex-wrap items-center justify-between">
				<div className="h-20 w-32 relative">
					<Image
						src={`${__dirName}/logo1.jpg`}
						fill
						sizes="(max-width: 768px) 50vw"
						alt="Punctual Importer"
						className="rounded-r-full mt-2 object-cover object-center"
					/>
				</div>

				<div className="flex justify-center items-center">
					{[
						["HOME", "/"],
						["SERVICES", "/services"],
						["ABOUT", "/about"],
						["CONTACT", "/contact"],
					].map(([title, path]) => (
						<Link href={path} key={path}>
							<button
								className={`btn btn-sm btn-outline-primary capitalize shadow-lg relative flex items-center justify-around p-0.5 mb-2 overflow-hidden rounded-xl group lg:mx-12`}
							>
								<span className="px-6 py-1.5 font-semibold text-sm relative transition-all ease-in duration-50 bg-neutral-900 hover:bg-neutral-700 rounded-lg group-hover:bg-opacity-120">
									{title}
								</span>
							</button>
							{/* <button className="btn btn-sm btn-outline-primary shadow-lg relative flex items-center justify-around p-0.5 mb-2 overflow-hidden text-sm rounded-xl group lg:mx-12">
								<span
									className={`${
										path === pathName ? "btn-active" : ""
									} ' px-5 relative transition-all ease-in duration-50 bg-neutral-900 hover:bg-neutral-700 rounded-md group-hover:bg-opacity-0'`}
								>
									{title}
								</span>
							</button> */}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
