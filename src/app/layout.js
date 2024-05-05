import { Inter, Open_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "./(navigation)/Navbar";
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
			<body className={` bg-slate-800 ${openSans.className}`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
