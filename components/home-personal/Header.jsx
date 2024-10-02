"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import loadBackgroudImages from "@/common/loadBackgroudImages";
function Header() {
	useLayoutEffect(() => {
		const tl = gsap.timeline();
		tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
		tl.fromTo(
			".header .container",
			{ opacity: 0, translateY: 40 },
			{ opacity: 1, translateY: 0 },
			"-=0"
		);

		return () => tl.kill();
	}, []);
	useEffect(() => {
		loadBackgroudImages();
	}, []);
	return (
		<div
			className="header header-personal valign bg-img"
			data-background="/assets/imgs/header/full/p113.png"
			data-overlay-dark="0">
			<div className="container ontop">
				<div className="row">
					<div className="col-lg-7">
						<div className="caption">
							<h6 className="mb-5">የልጆችዎ የደብተርና</h6>

							<h1 className="fw-700 mb-10">
								የምሳቃ ቦርሳ {""}
								<span className="main-color3">ከት/ቤቱ ሎጎ ጋር</span>
							</h1>
							<h3>እንዲሁም ስሙን ጽፈን አዘጋጅተናል!</h3>
							<div className="row">
								<div className="col-lg-9">
									<div className="texts mt-30">
										<div className="texts">
											እኛ Ras Synergy Student ID Card Solution እንባላለን። ትዛዝ
											እንቀበላለን በቴሌብር የመክፈያ ኮድዎን በመላክ በ2ቀን ውስጥ ያሉበት እናደርሳለን!!
										</div>
									</div>
									<div className="d-flex align-items-center mt-60">
										<a
											href="/page-contact"
											className="butn butn-md butn-bord radius-30 secondary-color">
											<span className="text">ዛሬውኑ ያግኙን</span>
										</a>
										<div className="icon-img-60 ml-20">
											<img
												src="/assets/imgs/icon-img/arrow-down-big.png"
												alt=""
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="info d-flex align-items-center justify-content-end mt-100">
					<div className="item">
						<h6 className="sub-title mb-10">ኢሜይል :</h6>
						<span className="p-color">info@rasynergy.com</span>
					</div>
					<div className="item">
						<h6 className="sub-title mb-10">ስልክ :</h6>
						<a href="tel:+251906904646" className="contact-link p-color">
							+251 9 06 90 46 46 / +251 9 06 90 46 46
						</a>
					</div>
					<div className="item">
						<h6 className="sub-title mb-10">አድራሻ :</h6>
						<span className="p-color">
							የካ ኮተቤ 02 የኢትዮጵያ ንግድ ባንክ 2ኛ ፎቅ, #207
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
