import { Inter, Open_Sans } from "next/font/google";

import "./globals.css";
import NavbarBase from "./(navigation)/NavbarBase";
import Footer from "./(navigation)/Footer";

const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["300", "400"] });

export const metadata = {
	title: "Punctual Importer",
	description: "Importing various machineries from all over the world",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={` bg-neutral-800 ${openSans.className}`}>
				<div className="flex flex-col justify-between h-full overflow-x-hidden no-scrollbar overflow-y-auto overscroll-y-none relative transition-all ease-in-out duration-1000">
					<NavbarBase />
				</div>
				{children}
				<Footer />
			</body>
		</html>
	);
}
