"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function Navbar() {
	const [language, setLanguage] = useState("am"); // default to Amharic
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleToggleNav = () => {
		setIsNavOpen(!isNavOpen); // Toggle the state
	};
	const scrolled = useScroll(20);
	const router = useRouter();

	useEffect(() => {
		// Read the language from cookies when the component mounts
		// const savedLanguage = Cookies.get("language") || "am";
		const savedLanguage = Cookies.get("am") || "am";
		setLanguage(savedLanguage);
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

	return (
		<nav
			className={`navbar navbar-expand-lg bord blur ${
				scrolled ? "navbar-fixed" : ""
			}`}>
			<div className="container o-hidden">
				<Link className="logo icon-img-70" href="/">
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

				<button
					className="navbar-toggler "
					type="button"
					aria-controls="navbarSupportedContent"
					aria-expanded={isNavOpen}
					aria-label="Toggle navigation"
					onClick={handleToggleNav}>
					<span className="icon-bar">
						<i className="fas fa-bars"></i>
					</span>
				</button>

				<div className={`navbar-collapse collapse  ${isNavOpen ? "show" : ""}`}>
					{/* Your navigation content goes here */}
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
			</div>
		</nav>
	);
}

export default Navbar;
