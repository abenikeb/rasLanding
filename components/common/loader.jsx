"use client";
// import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useEffect } from "react";

function LoadingScreen() {
	useEffect(() => {
		const interval = setInterval(() => {
			if (typeof gsap !== "undefined") {
				clearInterval(interval);
				const svg = document.getElementById("svg");
				if (svg) {
					const tl = gsap.timeline();
					const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
					const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

					// Faster animation with reduced delay and shorter durations
					tl.to(".loader-wrap-heading .load-text, .loader-wrap-heading .cont", {
						y: -100,
						opacity: 0,
						duration: 0.7, // Shorten the duration of this animation
						delay: 0.5, // Reduce delay to half a second
					});
					tl.to(svg, {
						duration: 0.4, // Shorten the curve animation
						attr: { d: curve },
						ease: "power2.easeIn",
					}).to(svg, {
						duration: 0.4, // Shorten the flat animation
						attr: { d: flat },
						ease: "power2.easeOut",
					});
					tl.to(".loader-wrap", { y: -1500, duration: 0.6 }); // Shorter transition time for loader-wrap
					tl.to(".loader-wrap", { zIndex: -1, display: "none", duration: 0 }); // Immediately hide loader after it's gone
					tl.from("header", { y: 200, duration: 0.7 }, "-=0.8"); // Faster header reveal and overlap
					tl.from(
						"header .container",
						{ y: 40, opacity: 0, duration: 0.5 }, // Shorter container animation
						"-=1.2" // Overlap to reduce overall time
					);
				}
			}
		}, 100);

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (typeof gsap !== "undefined") {
	// 			clearInterval(interval);
	// 			const svg = document.getElementById("svg");
	// 			const tl = gsap.timeline();
	// 			const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
	// 			const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

	// 			tl.to(".loader-wrap-heading .load-text , .loader-wrap-heading .cont", {
	// 				delay: 1.5,
	// 				y: -100,
	// 				opacity: 0,
	// 			});
	// 			tl.to(svg, {
	// 				duration: 0.5,
	// 				attr: { d: curve },
	// 				ease: "power2.easeIn",
	// 			}).to(svg, {
	// 				duration: 0.5,
	// 				attr: { d: flat },
	// 				ease: "power2.easeOut",
	// 			});
	// 			tl.to(".loader-wrap", { y: -1500 });
	// 			tl.to(".loader-wrap", { zIndex: -1, display: "none" });
	// 			tl.from("header", { y: 200 }, "-=1.5");
	// 			tl.from(
	// 				"header .container",
	// 				{ y: 40, opacity: 0, delay: 0.3 },
	// 				"-=1.5"
	// 			);
	// 		}
	// 	}, 100);
	// }, []);

	return (
		<div className="loader-wrap">
			<svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
				<path
					id="svg"
					d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
					fill="#a31742"></path>
			</svg>

			<div className="loader-wrap-heading">
				<div className="load-text">
					<span>L</span>
					<span>o</span>
					<span>a</span>
					<span>d</span>
					<span>i</span>
					<span>n</span>
					<span>g</span>
				</div>
			</div>
		</div>
	);
}

export default LoadingScreen;
