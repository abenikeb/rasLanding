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
									የተለያዩ የህትመት እና የተማሪዎች ዲጂታል መታወቂያ ካርድ : የመንግስት መስሪያ ቤት መታወቂያ
									ካርድን ጨምሮ በተለያዩ የትምርት መገልገያ መሳሪያዎችን በአነስተኛ ዋጋ የሚያቀርብ ድርጅት ነው::{" "}
									አሁን ደግሞ
									<span className="fw-200">
										የባር ኮድ የተገጠመለት የዲጂታል ተማሪዎች መታወቂያ ካርድ
									</span>{" "}
									በመስራት የተማሪዎችን መረጃ የሚይዝ ለወላጆች በቀላሉ የልጆቻቸውን የት/ቤት መግቢያና እና መውጫ
									ባሉበት ቦታ ሆነው በስልካቸው መቆጣጠር የሚችሉበት ሲስተም ሰርቷል:: ይህም ለቤተሰቦች የአእምሮ
									ሰላም እንዲሁም በወላጆች እና በትምህርት ቤቶች መካከል ጠንካራ ትስስር ይፈጥራል::
								</h4>
								<p className="div-p">
									በተጨማሪም ከተለያዩ ትምህርት ቤቶች ጋር በአጋርነት በመሆን የተማሪዎችን ስም እና የትምህርት ቤት
									አርማዎች የታተመባቸው ቦርሳዎች፣ የምሳ እቃዎች እና ዩኒፎርሞች በ45% ቅናሽ ለወላጆች አቅርቧል
									በዚህ እድል ይጠቀሙ እንላለን::
								</p>
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
