import React from "react";

function Services() {
	return (
		<section className="services-clas">
			<div className="container section-padding bord-bottom-grd pt-0">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">የእኛ መገለጫ የሆኑ</span>
							<h3 className="fw-600 fz-50 secondary-color text-u d-rotate wow">
								<span className="rotate-text">
									ተልዕኳችን እና <span className="fw-200">ርዕያችን</span>
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
				<div className="row">
					<div className="col-lg-4">
						<div className="item sub-bg md-mb30 fixed-height-card">
							<div className="icon-img-60 opacity-5 mb-40">
								<img src="/assets/imgs/serv-icons/3.png" alt="" />
							</div>
							<h5>ርዕያችን</h5>
							<div className="text mt-40">
								<p className="truncate-text">
									ለትምህርት ተቋማት የተማሪን መታወቂያ እና ደህንነትን የሚያስተዳድሩበትን መንገድ ለመቀየር፣
									በወላጆች እና በትምህርት ቤቶች መካከል በፈጠራ ቴክኖሎጂ የታገዘ እና ወጪ ቆጣቢ ቁሳቁሶችን
									በመጠቀም ጠንካራ ግንኙነቶችን ማጎልበት።
								</p>
							</div>
							<a href="/page-services-details" className="mt-100">
								<span className="ti-arrow-top-right"></span>
							</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="item sub-bg md-mb30 fixed-height-card">
							<div className="icon-img-60 opacity-5 mb-40">
								<img src="/assets/imgs/serv-icons/4.png" alt="" />
							</div>
							<h5>ተልዕኳችን</h5>
							<div className="text mt-40">
								<p className="truncate-text">
									ከፍተኛ ጥራት ያለው፣ ወጪ ቆጣቢ የህትመት እና የዲጂታል መታወቂያ ካርድ መፍትሄዎችን ለማቅረብ፣
									የተማሪን ደህንነት የሚያጎለብት እና የወላጅ ቁጥጥርን የሚያቃልል፣ ከትምህርት ቤቶች ጋር በመተባበር
									አስፈላጊ ቁሳቁሶችን በከፍተኛ ቅናሽ ለማቅረብ።
								</p>
							</div>
							<a href="/page-services-details" className="mt-100">
								<span className="ti-arrow-top-right"></span>
							</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="item sub-bg fixed-height-card">
							<div className="icon-img-60 opacity-5 mb-40">
								<img src="/assets/imgs/serv-icons/5.png" alt="" />
							</div>
							<h5>ዓላማዎቻችን</h5>
							<div className="text mt-40">
								<p className="truncate-text">
									የተማሪን ደህንነት የሚያበረታቱ፣ግንኙነቶችን የሚያቀላጥፉ እና የማህበረሰብ ተሳትፎን የሚደግፉ
									አስተማማኝ ምርቶችን እና አገልግሎቶችን በማቅረብ ቤተሰቦችን እና የትምህርት ተቋማትን ማበረታታት።
								</p>
							</div>
							<a href="/page-services-details" className="mt-100">
								<span className="ti-arrow-top-right"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
