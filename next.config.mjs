/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "out",
	output: "export",
	images: {
		loader: "custom",
		loaderFile: "./ImageLoader.js",
	},
};

export default nextConfig;
