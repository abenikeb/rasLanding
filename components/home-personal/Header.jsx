"use client";
// import React, { useEffect, useLayoutEffect } from "react";
// import { gsap } from "gsap";
// import loadBackgroudImages from "@/common/loadBackgroudImages";
// import styles from "./home.module.css";
// function Header() {
// 	useLayoutEffect(() => {
// 		const tl = gsap.timeline();
// 		tl.fromTo(".header", { y: 200 }, { y: 0 }, "+=2.5");
// 		tl.fromTo(
// 			".header .container",
// 			{ opacity: 0, translateY: 40 },
// 			{ opacity: 1, translateY: 0 },
// 			"-=0"
// 		);

// 		return () => tl.kill();
// 	}, []);
// 	useEffect(() => {
// 		loadBackgroudImages();
// 	}, []);
// 	return (
// 		<div
// 			className="header header-personal valign bg-img"
// 			data-background="/assets/imgs/header/full/p113.png"
// 			data-overlay-dark="1">
// 			<div className="container ontop">
// 				<div className="row">
// 					<div className="col-lg-7">
// 						<div className="amharicText">
// 							<h6 className="mb-5">
// 								{/* <span className="icon-img-30 mr-10">
// 									<img src="/assets/imgs/header/lamp.png" alt="" />
// 								</span>{" "} */}
// 								የልጆችዎ የደብተርና
// 							</h6>

// 							<h1 className="fw-700 mb-10">
// 								የምሳቃ ቦርሳ {""}
// 								<span className="main-color3">ከት/ቤቱ ሎጎ ጋር </span>
// 							</h1>
// 							<h3>እንዲሁም ስሙን ጽፈን አዘጋጅተናል</h3>
// 							<div className="row">
// 								<div className="col-lg-9">
// 									<div className="text mt-30">
// 										<p>
// 											እኛ Ras Synergy Student ID Card Solution እንባላለን። ትዛዝ
// 											እንቀበላለን በቴሌብር የመክፈያ ኮድዎን በመላክ በ2ቀን ውስጥ ያሉበት እናደርሳለን!!
// 										</p>
// 									</div>
// 									<div className="d-flex align-items-center mt-60">
// 										<a
// 											href="/page-contact"
// 											className="butn butn-md butn-bord radius-30 secondary-color">
// 											<span className="text">ዛሬውኑ ይጀምሩ</span>
// 										</a>
// 										<div className="icon-img-60 ml-20">
// 											<img
// 												src="/assets/imgs/icon-img/arrow-down-big.png"
// 												alt=""
// 											/>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="info d-flex align-items-center justify-content-end mt-100">
// 					<div className="item">
// 						<h6 className="sub-title mb-10">ኢሜይል :</h6>
// 						<span className="p-color">brightsacco.Info@gmail.com</span>
// 					</div>
// 					<div className="item">
// 						<h6 className="sub-title mb-10">ስልክ :</h6>
// 						<span className="p-color">+251 (913) 243 452</span>
// 					</div>
// 					<div className="item">
// 						<h6 className="sub-title mb-10">አድራሻ :</h6>
// 						<span className="p-color">ገርጂ መብራት ሃይል በርሚንግሃም #301</span>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Header;

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
											<span className="text">ዛሬውኑ ይመዝገቡ</span>
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
						<span className="p-color">+251 906 90 46 46 | 925 54 65 27</span>
					</div>
					<div className="item">
						<h6 className="sub-title mb-10">አድራሻ :</h6>
						<span className="p-color">
							የካ ኮተቤ 02 <br /> 2ኛ, #302
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
