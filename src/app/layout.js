import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "./(navigation)/Navbar";
import Footer from "./(navigation)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Punctual Importer",
	description: "Importing various machineries from all over the world",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
