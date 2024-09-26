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
							<span className="sub-title main-color mb-5">ተመራጭ የሚያደርጉን</span>
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="rotate-text secondary-color">
									ዋና ዋና <span className="fw-200">አገልግሎቶቻችን</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more secondary-color">
							<a
								href="/page-services"
								className="butn butn-sm butn-bord-2nd radius-30 secondary-color">
								<span>ሁሉንም ይመልከቱ</span>
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
												ዲጂታል
											</a>
											<a href="/portfolio-grid" className="tag">
												መታወቂያ
											</a>
										</div>
										<h4>የተማሪዎች ዲጂታል መታወቂያ ካርድ</h4>
									</div>
									<br />
									<div>
										<p>
											QR ኮድ ያለው የተማሪ ልጅዎትን መረጃ የሚይዝ የዲጂታል መታወቂያ ሲሆኑ ለወላጆች በቀላሉ
											የልጆቻቸውን የት/ቤት መግቢያና እና መውጫ ሰዓት ባሉበት ቦታ ሆነው በስልካቸው አማካኝነት
											መቆጣጠር የሚችሉበት መፍትሄ አቅርበናል::
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
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

					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										<div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												የተማሪዎች
											</a>
											<a href="/portfolio-grid" className="tag">
												ቦርሳ
											</a>
										</div>
										<h4>የትምህርት ቤት ቦርሳዎችና እና ዩኒፎርሞች</h4>
									</div>
									<br />
									<div>
										<p>
											የትመህርት መገልገያ መሳሪያዎች የሆኑና የተማሪዎች ስሞች እና የት/ቤት አርማዎች በግል
											የታተመባቸውን ቦርሳዎች፣ የምሳ ዕቃዎች ፣ ዩኒፎርሞች እና ደብተሮች በታላቅ ቅናሽ
											አቅርበናል::
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/2.jpg" alt="" />
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
												የህትመት
											</a>
											<a href="/portfolio-grid" className="tag">
												አገልግሎቶች
											</a>
										</div>
										<h4>የህትመት አገልግሎቶች</h4>
									</div>
									<br />
									<div>
										<p>
											ልዩ ልዩ ፍላጎቶችን ለማሟላት የተዘጋጁ መታወቂያ ካርዶችን፣ ብሮሹሮችን እና የማስተዋወቂያ
											እቃዎችን ጨምሮ የተለያዩ የህትመት ስራዎችን በከፍተኛ ጥራት እናቀርባለን::
										</p>
										<a href="/project-details" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
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
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
