"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
// import "tw-elements";
import styles from "./contact.module.css";
import Image from "next/image";

export default function Contact() {
	const [clientName, setClientName] = useState("");
	const [clientAddress, setClientAddress] = useState("");
	const [bodyContent, setBodyContent] = useState("");
	const [loader, setLoader] = useState(false);

	const __dirName = `/assets/img`;

	const form = useRef();
	const modal = useRef();

	const handleName = (e) => {
		setClientName(e.target.value);
	};

	const handleAddress = (e) => {
		setClientAddress(e.target.value);
	};

	const handleBodyContent = (e) => {
		setBodyContent(e.target.value);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		setLoader(true);
		emailjs
			.sendForm(
				"outgoing_server",
				"emailjsTemplate",
				form.current,
				"Ukhd6RegygUhozwud"
			)
			.then(
				(result) => {
					successNotify();
					toggleModal();
					setLoader(false);

					// Clear form values
					setClientName("");
					setClientAddress("");
					setBodyContent("");
				},
				(error) => {
					errorNotify();
					setLoader(false);
				}
			);
	};

	const toggleModal = () => {
		document.getElementById("modal").classList.toggle("invisible");
		document.getElementById("contactBtn").classList.toggle("invisible");
	};

	const successNotify = () =>
		toast.success(`Message sent successfully.`, {
			duration: 7000,
			style: {
				borderRadius: "24px",
				background: "#333",
				color: "#fff",
				textAlign: "center",
			},
			position: "top-center",
		});

	const errorNotify = () => toast.error("Error");

	return (
		<div className="min-h-screen sm:h-auto bg-home-img7 bg-center bg-cover sm:mt-24">
			<Toaster />
			<section className="text-gray-600 body-font relative sm:flex">
				{/* Dember Img */}
				<div className="h-fit lg:w-1/2 md:w-1/2 backgrop-blur-lg lg:mt-36 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
					<img
						src={`${__dirName}/dembel.jpg `}
						alt="Dember"
						className="mt-32"
					/>
				</div>

				<div className="absolute inset-0 bg-gray-300 justify-center items-center h-[40em]">
					<button
						id="contactBtn"
						className="btn fixed lg:bottom-20 mx-auto mt-12 bottom-10 right-8 rounded-large drop-shadow-lg flex justify-center items-center text-white text-md z-50 px-4 py-3 rounded-lg bg-neutral-900"
						onClick={() => toggleModal()}
					>
						Contact Us
					</button>
					<div className="relative h-full lg:w-full">
						<span className="z-1">
							<iframe
								width="100%"
								height="100%"
								frameBorder="0"
								marginHeight="10"
								marginWidth="10"
								title="map"
								scrolling="no"
								src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15762.574794341912!2d38.767084!3d9.004895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x941677a8f60160fe!2sDembel%20City%20Center!5e0!3m2!1sen!2set!4v1665933195534!5m2!1sen!2set"
							></iframe>
						</span>
					</div>
				</div>

				{/* Modal */}
				<div
					ref={modal}
					id="modal"
					className="z-50 invisible container px-5 mx-auto flex"
				>
					<div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col gap-5 md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
						<button
							className="btn btn-circle btn-outline btn-error px-3 py-2 rounded-full border border-red-400 hover:bg-red-400 text-red-400 hover:text-neutral-900 transition-all ease-in-out duration-300 mx-auto"
							onClick={() => toggleModal()}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						{/* Social Buttons */}
						<span className="basis-1/4 inline-flex justify-center items-center sm:ml-auto sm:mt-0 mt-4 w-full">
							<a
								className="cursor-pointer text-gray-500"
								href="https://facebook.com"
							>
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
								</svg>
							</a>
							<a
								className="ml-3 cursor-pointer text-gray-500"
								href="https://twitter.com"
							>
								<svg
									fill="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
								</svg>
							</a>
							<a
								className="ml-3 cursor-pointer text-gray-500"
								href="https://instagram.com"
							>
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-5 h-5"
									viewBox="0 0 24 24"
								>
									<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
									<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
								</svg>
							</a>
						</span>

						{/* Phone No */}
						<span className="sm:ml-auto flex justify-center items-center w-full text-center sm:justify-start py-5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
							<p>+251911245059</p>
						</span>

						{/* Contact Form */}
						<form ref={form} onSubmit={(e) => sendEmail(e)}>
							<div className="z-50 relative mb-4">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-gray-600"
								>
									Name
								</label>
								<input
									required
									type="text"
									id="name"
									name="name"
									value={clientName}
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									onChange={(e) => handleName(e)}
								/>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="email"
									className="leading-7 text-sm text-gray-600"
								>
									Email
								</label>
								<input
									required
									type="email"
									id="email"
									value={clientAddress}
									name="email"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									onChange={(e) => handleAddress(e)}
								/>
							</div>
							<div className="relative mb-4 mx-auto ">
								<label
									htmlFor="message"
									className="leading-7 text-sm text-gray-600"
								>
									Message
								</label>
								<textarea
									required
									id="message"
									name="message"
									value={bodyContent}
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									onChange={(e) => handleBodyContent(e)}
								></textarea>
							</div>
							<div className="relative mb-4 mx-auto ">
								<div id="results" className="search-results">
									{!loader ? (
										<div className="flex items-center justify-center">
											<div
												className={`${styles.spinnerBorder} animate-spin inline-block w-10 h-10 -mb-3`}
												role="status"
											>
												<Image
													src="/assets/img/spinner.png"
													width={200}
													height={200}
													alt="Loading..."
													className="object-cover object-center"
												/>
											</div>
										</div>
									) : (
										<div className="flex items-center justify-center">
											<button
												id="sendBtn"
												className="btn px-5 py-3 lg:px-12 lg:mx-24 bg-neutral-800 rounded-lg text-white"
												type="submit"
											>
												SEND
											</button>
										</div>
									)}
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}
