"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function Navbar() {
	const [language, setLanguage] = useState("am"); // default to Amharic
	const scrolled = useScroll(20);
	const router = useRouter();

	useEffect(() => {
		// Read the language from cookies when the component mounts
		// const savedLanguage = Cookies.get("language") || "am";
		const savedLanguage = Cookies.get("am") || "am";
		setLanguage(savedLanguage);

		// if (savedLanguage === "en") {
		// 	router.push("/home-en");
		// }
	}, [router]);

	const handleLanguageChange = (e) => {
		const newLanguage = e.target.value;
		setLanguage(newLanguage);
		Cookies.set("language", newLanguage);

		if (newLanguage === "en") {
			router.push("/home-en");
		} else {
			router.push("/");
		}
	};

	const getLink = (path) => {
		return language === "en" ? `${path}-en` : path;
	};

	function handleScroll() {
		const bodyScroll = window.scrollY;
		const navbar = document.querySelector(".navbar");

		if (bodyScroll > 300) navbar.classList.add("nav-scroll");
		else navbar.classList.remove("nav-scroll");
	}
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	function handleDropdownMouseMove(event) {
		event.currentTarget.querySelector(".dropdown-menu").classList.add("show");
	}

	function handleDropdownMouseLeave(event) {
		event.currentTarget
			.querySelector(".dropdown-menu")
			.classList.remove("show");
	}
	function handleToggleNav() {
		if (
			document
				.querySelector(".navbar .navbar-collapse")
				.classList.contains("show")
		) {
			document
				.querySelector(".navbar .navbar-collapse")
				.classList.remove("show");
		} else if (
			!document
				.querySelector(".navbar .navbar-collapse")
				.classList.contains("show")
		) {
			document.querySelector(".navbar .navbar-collapse").classList.add("show");
		}
	}
	return (
		<nav
			className={`navbar navbar-expand-lg bord blur ${
				scrolled ? "navbar-fixed" : ""
			}`}>
			<div className="container o-hidden">
				<Link className="logo icon-img-70" href="#">
					<img src="/assets/imgs/logo-light.png" alt="logo" />
				</Link>

				<div
					className="collapse navbar-collapse justify-content-center"
					id="navbarSupportedContent">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link"
								href={language === "en" ? "/home-en" : "/"}>
								<span className="rolling-text">
									{language === "am" ? "ዋና ገጽ" : "Home"}
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href={getLink("/page-about")}>
								<span className="rolling-text">
									{language === "am" ? "ስለ እኛ" : "About Us"}
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href={getLink("/page-services")}>
								<span className="rolling-text">
									{language === "am" ? "አገልግሎቶቻችን" : "Services"}
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href={getLink("/page-testimonials")}>
								<span className="rolling-text">
									{language === "am" ? "ምስክርነቶች" : "Testimonials"}
								</span>
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" href={getLink("/page-FAQ")}>
								<span className="rolling-text">
									{language === "am" ? "የሚጠየቁ ጥያቄዎች" : "FAQ"}
								</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" href={getLink("/page-contact")}>
								<span className="rolling-text">
									{language === "am" ? "ያግኙን" : "Contact"}
								</span>
							</Link>
						</li>
					</ul>
				</div>

				<div className="contact-button">
					<a
						href={getLink("/page-contact")}
						className="butn butn-sm butn-bg main-colorbg radius-5">
						<span className="text">
							{language === "am" ? "እንገናኝ" : "Get in Touch"}
						</span>
					</a>
				</div>

				{/* <div
					className="language-dropdown"
					style={{ display: "flex", alignItems: "center" }}>
					<select
						value={language}
						onChange={handleLanguageChange}
						style={{
							backgroundColor: "transparent",
							border: "none",
							color: "white",
							fontSize: "1rem",
						}}>
						<option value="am">አማርኛ</option>
						<option value="en">English</option>
					</select>
				</div> */}

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={handleToggleNav}>
					<span className="icon-bar">
						<i className="fas fa-bars"></i>
					</span>
				</button>
			</div>
		</nav>
	);
}

export default Navbar;
