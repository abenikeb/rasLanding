"use client";
import React, { useEffect } from "react";

function Portfolio() {
	function Playing() {
		gsap.registerPlugin(ScrollTrigger);

		const cards = document.querySelectorAll(".cards .card-item");
		let stickDistance = 0;

		const firstCardST = ScrollTrigger.create({
			trigger: cards[0],
			start: "center center",
		});

		const lastCardST = ScrollTrigger.create({
			trigger: cards[cards.length - 1],
			start: "bottom bottom",
		});

		cards.forEach((card, index) => {
			const scale = 1 - (cards.length - index) * 0.025;
			const scaleDown = gsap.to(card, {
				scale: scale,
				transformOrigin: "50% " + (lastCardST.start + stickDistance),
			});

			ScrollTrigger.create({
				trigger: card,
				start: "center center",
				end: () => lastCardST.start + stickDistance,
				pin: true,
				pinSpacing: false,
				ease: "none",
				animation: scaleDown,
				toggleActions: "restart none none reverse",
			});
		});
	}
	useEffect(() => {
		Playing();

		// Clean up function
		return () => {
			// Dispose GSAP ScrollTrigger instances
			ScrollTrigger.getAll().forEach((instance) => instance.kill());
		};
	}, []);
	return (
		<section className="work-card section-paddings pb-0">
			<div className="container">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">Our Profile</span>
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="rotate-text secondary-color">
									Selected <span className="fw-200">Works.</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more">
							<a
								href="/portfolio-grid"
								className="butn butn-sm butn-bord radius-30 secondary-color">
								<span>View All</span>
							</a>
							<span className="icon ti-arrow-top-right"></span>
						</div>
					</div>
				</div>
				<div className="cards">
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												Community
											</a>
											<a href="/portfolio-grid" className="tag">
												Development
											</a>
										</div>
										<h4>Community Development Projects</h4>
									</div>
									<div>
										<p>
											We have successfully funded and supported numerous
											community initiatives, including infrastructure
											development and educational programs, enhancing the
											quality of life in our member communities.
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												View Details <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/3.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												Affordable
											</a>
											<a href="/portfolio-grid" className="tag">
												Housing
											</a>
										</div>
										<h4>Affordable Housing Loans</h4>
									</div>
									<div>
										<p>
											Our tailored housing loan products have enabled many
											families to achieve homeownership, with flexible terms
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												View Details <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/5.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												Financial
											</a>
											<a href="/portfolio-grid" className="tag">
												Literacy
											</a>
										</div>
										<h4>Financial Literacy Workshops</h4>
									</div>
									<div>
										<p>
											We host regular workshops and seminars aimed at improving
											financial literacy among our members,
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												View Details <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/3.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												Investment
											</a>
											<a href="/portfolio-grid" className="tag">
												Projects
											</a>
										</div>
										<h4>Investment Projects</h4>
									</div>
									<div>
										<p>
											Our investment initiatives have created new opportunities
											for members, ranging from profitable
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												View Details <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/4.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					{/* <div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												Figma
											</a>
											<a href="/portfolio-grid" className="tag">
												Web Design
											</a>
										</div>
										<h4>Cutter mobile app</h4>
									</div>
									<div>
										<p>
											We’re a full stack firm that can help you from strategy to
											launch, and anywhere in between.
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												View Details <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/5.jpg" alt="" />
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
