"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";
function Header() {
	useLayoutEffect(() => {
		const tl = gsap.timeline();

		// Set animations to be near-instantaneous
		tl.fromTo(".header", { y: 200 }, { y: 0, duration: 0.5 }); // Duration set to 0.1 seconds
		tl.fromTo(
			".header .container",
			{ opacity: 0, translateY: 40 },
			{ opacity: 1, translateY: 0, duration: 0.1 }, // Duration set to 0.1 seconds
			"-=0.1" // Overlap the animations
		);

		return () => tl.kill();
	}, []);
	useEffect(() => {
		loadBackgroudImages();
	}, []);
	return (
		<div
			className="header page-headers bg-img section-padding valign"
			data-background="/assets/imgs/background/bg4_.jpg"
			data-overlay-dark="1">
			<div className="container pt-80">
				<div className="row">
					<div className="col-12">
						<div className="text-center">
							<h1 className="text-u ls1 fz-80">
								ደንበኞቻችን ስለእኛ {""}
								<span className="fw-200 main-colors">ምን ይላሉ?</span>
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
