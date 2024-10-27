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
		<section className="work-card work-cards section-paddings pb-0">
			<div className="container">
				<div className="sec-head mb-60">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">ተመራጭ የሚያደርጉን</span>
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="secondary-color">
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
										<h4>የትምህርት ቤት ቦርሳዎችና እና ዩኒፎርሞች</h4>
									</div>
									<br />
									<div>
										<p>
											የተማሪዎች የቤተሰብን አቅም በመጠነና እኩልነትን ባሰፈነ መርሃ ግብራችን ውስጥ ከምናቀርባቸው
											ግበቶች ዩኒፎርም የእስፖርት ልብሶች ቦርሳ የምሳቃ መያዣን ጨምሮ እንዲሁም ጠንካራ ጫማዎችን 
											ከዩኒፎርማቸው ጋር ተመሳሳይ የሆኑ የተማሪው ስምና የትምህርት ቤቱን ሎጎ ያካተተ
											ከማዘጋጀታችንም በላይ በተማሪው በመለያ ቁጥር ሲሸመቱ የ30% ቅናሽ ማድረጋችንን ስናበስር
											በደስታ ነው።
										</p>
										<a href="/portfolio-gallery" className="underline mt-15">
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
										<h4>የተማሪዎች ዲጂታል መታወቂያ ካርድ</h4>
									</div>
									<br />
									<div>
										<p>
											የተማሪዎች ዲጅታል መታወቂያዎች ለቤተሰብ የመውጫና የመግቢያ ሰአቶችን ለወላጅ ከማሳወቅም
											በላይ ከሰርቪስ ባስ መግባታቸውን እንዲሁም በሰላም መድረሳቸውን በSMS የማሳወቅቅ አቅም
											ከመኖሩም በላይ ከትምህርት ቤት ቅጥር ውጪ ያሉትን እንቅስቃሴዎች የGPS መግለጫዎችን በግቢ
											ውስጥ መጽሃፍት ቤት የስፖርት ቦታዎችን እና እንደ አስፈጊነቱ በታዘዘበት ቦታ ሁሉ መረጃዎችን
											የመስጠት ብቃቱ ከፍተኛ ነው።
										</p>
										<a href="/portfolio-gallery" className="underline mt-15">
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
										<h4>የእስፖርት ልብሶች</h4>
									</div>
									<br />
									<div>
										<p>
											የተማሪዎች የቤተሰብን አቅም ባማከለ መልኩ የተማሪዎች የእስፖርት ልብሶችን አቅርበናል::
										</p>
										<a href="/portfolio-gallery" className="underline mt-15">
											<span className="text main-color sub-title">
												ዝርዝሮችን ይመልከቱ <i className="ti-arrow-top-right"></i>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="img">
									<img src="/assets/imgs/works/1/sport_main.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>

					<div className="card-item sub-bg">
						<div className="row">
							<div className="col-lg-5">
								<div className="cont">
									<div>
										{/* <div className="mb-15">
											<a href="/portfolio-grid" className="tag">
												የህትመት
											</a>
											<a href="/portfolio-grid" className="tag">
												አገልግሎቶች
											</a>
										</div> */}
										<h4>የህትመት አገልግሎቶች</h4>
									</div>
									<br />
									<div>
										<p>
											ልዩ ልዩ ፍላጎቶችን ለማሟላት የተዘጋጁ መታወቂያ ካርዶችን፣ ብሮሹሮችን እና የማስተዋወቂያ
											እቃዎችን ጨምሮ የተለያዩ የህትመት ስራዎችን በከፍተኛ ጥራት እናቀርባለን::
										</p>
										<a href="/portfolio-gallery" className="underline mt-15">
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
