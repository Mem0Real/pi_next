"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { motion, useScroll } from "framer-motion";
import Nav from "./Nav";

export default function NavbarBase() {
	const [hidden, setHidden] = useState(false);

	const { scrollY } = useScroll();

	function update() {
		if (scrollY?.current < scrollY?.prev) {
			setHidden(false);
		} else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
			setHidden(true);
		}
	}

	useEffect(() => {
		return scrollY.on("change", update);
	});

	const variants = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: -85 },
	};
	return (
		<motion.nav
			variants={variants}
			animate={hidden ? "hidden" : "visible"}
			transition={{
				ease: [0.1, 0.25, 0.3, 1],
				duration: 0.6,
			}}
			className="fixed w-full h-[95px] navbar bg-transparent
      text-neutral-800 dark:text-neutral-200 border-b border-neutral-600/60 backdrop-blur-md shadow-md shadow-cyan-900 z-30 -mt-1"
		>
			<div className="relative md:flex justify-between md:justify-normal items-center w-full text-sm">
				<Link href="/">
					<div className="relative flex justify-start items-start">
						<div className="relative h-20 w-36">
							<Image
								src="/assets/img/logo1.jpg"
								alt="logo"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="cursor-pointer object-cover h-20 w-36 rounded-r-full mt-2"
								priority
							/>
						</div>
					</div>
				</Link>
				<div className="flex flex-col justify-end w-full">
					<Nav hidden={hidden} />
				</div>
			</div>
		</motion.nav>
	);
}
