import React from "react";

function About() {
	return (
		<section className="about-author section-padding">
			<div className="container with-pad">
				<div className="row lg-marg">
					<div className="col-lg-5 valign">
						<div className="profile-img">
							<div className="img">
								<img src="/assets/imgs/header/p2222.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-7 valign">
						<div className="cont">
							<h6 className="sub-titles main-color mb-30">
								ስለ <span className="secondary-color">እኛ</span>{" "}
							</h6>
							<div className="text secondary-color">
								<h4 className="about-us-content text-bright mb-30">
									ራስሲነርጂ{" "}
									<span className="fw-200">ID ካርድ ሶልዊሽን እና ህትመት ድርጅት</span>{" "}
									የተለያዩ የህትመት ስራዎችና የተማሪዎች ዲጂታል መታወቂያ ካርድ እንዲሁም{" "}
									<span className="fw-200">
										ለተማሪ ልጆች አስፈላጊ የሆኑ ወሳኝ የትምህርት መገልገያ መሳሪያዎችን
									</span>{" "}
									በአነስተኛ ዋጋ የሚያቀርብ ድርጅት ነው::
								</h4>
								<p className="div-p">
									በተጨማሪም ከተለያዩ ትምህርት ቤቶች ጋር በአጋርነት በመሆን የተማሪዎችን ስም እና የትምህርት ቤት
									አርማዎች የታተመባቸው <span className="fw-200">ቦርሳዎች፣</span>{" "}
									<span className="fw-200">የምሳ እቃዎች</span> እና{" "}
									<span className="fw-200">ዩኒፎርሞችን</span> ከገብያ ሂሳብ በታላቅ ቅናሽ
									ለወላጆች ያቀርባል በዚህ እድል ይጠቀሙ ስንል በደስታ ነው::
								</p>
								<br />
								<div className="ml-auto vi-more secondary-color">
									<a
										href="/page-about"
										className="butn butn-sm butn-bord-2nd radius-30 secondary-color">
										<span>ሁሉንም ይመልከቱ</span>
									</a>
									<span className="icon ti-arrow-top-right"></span>
								</div>
								<div className="numbers mt-50">
									<div className="row lg-marg">
										<div className="col-md-6">
											<div className="item bord-thin-top bord-thin-right pt-30 d-flex align-items-end mt-20">
												<div>
													<h3 className="fw-300 mb-10">100%</h3>
													<h6 className="p-color sub-title">የደንበኞች እርካታ</h6>
												</div>
												<div className="ml-auto">
													<div className="icon-img-40">
														<img src="/assets/imgs/favicon.ico" alt="" />
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="item bord-thin-top bord-thin-right pt-30 d-flex align-items-end mt-20">
												<div>
													<h3 className="fw-300 mb-10">100+</h3>
													<h6 className="p-color sub-title">ፕሮጀክቶች ተጠናቀዋል</h6>
												</div>
												<div className="ml-auto">
													<div className="icon-img-40">
														<img src="/assets/imgs/favicon.ico" alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
