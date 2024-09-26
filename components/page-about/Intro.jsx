import React from "react";

function Intro() {
	return (
		<section className="page-intro section-padding pb-0">
			<div className="container">
				<div className="row md-marg">
					<div className="col-lg-6">
						<div className="img md-mb80">
							<div className="row">
								<div className="col-6">
									<img src="/assets/imgs/intro/i1.jpg" alt="" />
									<div className="img-icon">
										<img src="/assets/imgs/arw0.png" alt="" />
									</div>
								</div>
								<div className="col-6 mt-40">
									<img src="/assets/imgs/intro/i2.jpg" alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 valign secondary-color">
						<div className="cont">
							<h4 className="about-us-content text-bright mb-30">
								ራስሲነርጂ <span className="fw-200">ID ካርድ ሶልዊሽን እና ህትመት ድርጅት</span>{" "}
								የተለያዩ የህትመት እና የተማሪዎች ዲጂታል መታወቂያ ካርድ : የመንግስት መስሪያ ቤት መታወቂያ ካርድን
								ጨምሮ በተለያዩ የትምርት መገልገያ መሳሪያዎችን በአነስተኛ ዋጋ የሚያቀርብ ድርጅት ነው:: አሁን ደግሞ
								<span className="fw-200">
									የባር ኮድ የተገጠመለት የዲጂታል ተማሪዎች መታወቂያ ካርድ
								</span>{" "}
								በመስራት የተማሪዎችን መረጃ የሚይዝ ለወላጆች በቀላሉ የልጆቻቸውን የት/ቤት መግቢያና እና መውጫ
								ባሉበት ቦታ ሆነው በስልካቸው መቆጣጠር የሚችሉበት ሲስተም ሰርቷል:: ይህም ለቤተሰቦች የአእምሮ ሰላም
								እንዲሁም በወላጆች እና በትምህርት ቤቶች መካከል ጠንካራ ትስስር ይፈጥራል::
							</h4>
							<p className="div-p">
								በተጨማሪም ከተለያዩ ትምህርት ቤቶች ጋር በአጋርነት በመሆን የተማሪዎችን ስም እና የትምህርት ቤት
								አርማዎች የታተመባቸው ቦርሳዎች፣ የምሳ እቃዎች እና ዩኒፎርሞች በ45% ቅናሽ ለወላጆች አቅርቧል በዚህ
								እድል ይጠቀሙ እንላለን::
							</p>
							<a href="/page-services" className="underline main-color mt-40">
								<span className="text">
									የእኛ አገልግሎቶች <i className="ti-arrow-top-right"></i>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Intro;
