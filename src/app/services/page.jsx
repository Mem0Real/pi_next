import React from "react";
import { Audiowide } from "next/font/google";
import Image from "next/image";

const audioWide = Audiowide({ subsets: ["latin"], weight: "400" });

export default function Services() {
	const __dirName = `/assets/img`;

	return (
		<div
			className="lg:mt-16 bg-services-bg bg-cover bg-center bg-fixed"
			style={{ backgroundImage: 'url("/assets/img/services-bg.jpg")' }}
		>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center items-center justify-center w-full mb-32">
						<h1
							className={`text-white shadow-xl shadow-cyan-200 lg:w-1/2 lg:flex lg:items-center lg:justify-center text-4xl font-medium font-audioWide bg-black bg-opacity-50 rounded-md ${audioWide.className}`}
						>
							Some of the services we provide
						</h1>
					</div>
					<div className="flex flex-col gap-36">
						<div className="flex flex-wrap justify-evenly items-center gap-6">
							{/* Service Supply */}
							<div className="rounded-3xl">
								<div className="relative h-[240px] w-[350px] rounded-t-3xl">
									<Image
										fill
										src={`${__dirName}/services-img.jpg`}
										alt="Service"
										className="object-cover object-center rounded-t-3xl"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										priority
									/>
								</div>
								<div className="bg-black/80 text-center h-36 rounded-b-3xl text-white w-[350px] flex flex-col justify-center items-center gap-3">
									<h2 className="text-lg font-bold flex justify-center items-center">
										Service Supply
									</h2>
									<p className="font-light">
										We provide a multitude of services to our customers
										in-person or online.
									</p>
								</div>
							</div>

							{/* Import Supply */}
							<div className="rounded-3xl">
								<div className="relative h-[240px] w-[350px] rounded-t-3xl">
									<Image
										fill
										src={`${__dirName}/import1-img.jpg`}
										alt="Service"
										className="object-cover object-center rounded-t-3xl"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										priority
									/>
								</div>
								<div className="bg-black/80 text-center h-36 rounded-b-3xl text-white w-[350px] flex flex-col justify-center items-center gap-3">
									<h2 className="text-lg font-bold flex justify-center items-center">
										Import Supply
									</h2>
									<p className="font-light">
										We deliver cost-effective items from overseas on customers'
										requests providing highest quality products.
									</p>
								</div>
							</div>

							{/* Installation */}
							<div className="rounded-3xl">
								<div className="relative h-[240px] w-[350px] rounded-t-3xl">
									<Image
										fill
										src={`${__dirName}/install-img.jpg`}
										alt="Service"
										className="object-cover object-center rounded-t-3xl"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										priority
									/>
								</div>
								<div className="bg-black/80 text-center h-36 rounded-b-3xl text-white w-[350px] flex flex-col justify-center items-center gap-3">
									<h2 className="text-lg font-bold flex justify-center items-center ">
										Installation
									</h2>
									<p className="font-light">
										We will install any and all products to your business or
										home on delivery.
									</p>
								</div>
							</div>
						</div>

						{/* <div className="flex flex-wrap -m-4 lg:mt-36"> */}
						<div className="flex flex-wrap justify-evenly items-center gap-2">
							{/* Maintainance */}
							<div className="rounded-3xl">
								<div className="relative h-[240px] w-[350px] rounded-t-3xl">
									<Image
										fill
										src={`${__dirName}/maintainance-img.jpg`}
										alt="Service"
										className="object-cover object-center rounded-t-3xl"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										priority
									/>
								</div>
								<div className="bg-black/80 text-center h-36 rounded-b-3xl text-white w-[350px] flex flex-col justify-center items-center gap-3">
									<h2 className="text-lg font-bold flex justify-center items-centertext-center">
										Maintenance
									</h2>
									<p className="font-light">
										We provide on-site Maintenance in case of malfunctions of
										our products.
									</p>
								</div>
							</div>

							{/* Comission */}
							<div className="rounded-3xl">
								<div className="relative h-[240px] w-[350px] rounded-t-3xl">
									<Image
										fill
										src={`${__dirName}/Comission2.jpg`}
										alt="Service"
										className="object-cover object-center rounded-t-3xl"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										priority
									/>
								</div>
								<div className="bg-black/80 text-center h-36 rounded-b-3xl text-white w-[350px] flex flex-col justify-center items-center gap-3">
									<h2 className="text-lg font-bold flex justify-center items-center text-center">
										Comissioning
									</h2>
									<p className="font-light">
										We offer advice and councelling for those that seek it.
									</p>
								</div>
							</div>

							{/* Distribution */}
							<div className="rounded-3xl">
								<div className="relative h-[240px] w-[350px] rounded-t-3xl">
									<Image
										fill
										src={`${__dirName}/distribution.jpg`}
										alt="Service"
										className="object-cover object-center rounded-t-3xl"
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
										priority
									/>
								</div>
								<div className="bg-black/80 text-center h-36 rounded-b-3xl text-white w-[350px] flex flex-col justify-center items-center gap-3">
									<h2 className="text-lg font-bold flex justify-center items-centertext-center">
										Distribution
									</h2>
									<p className="font-light">
										We provide transport and delivery of large amounts of
										equipment on a moment's notice.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
