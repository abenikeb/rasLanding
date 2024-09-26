import React from "react";

function Services() {
	return (
		<section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
			<div className="container ontop">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							{/* <span className="sub-title main-color mb-5">አጠቃላይ እይታ</span> */}
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="rotate-text">
									ተልዕኳችን እና <span className="fw-200">ርዕያችን</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more">
							<a
								href="/page-services"
								className="butn butn-sm butn-bord radius-30">
								<span>ሁሉንም ይመልከቱ</span>
							</a>
							<span className="icon ti-arrow-top-right"></span>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="row md-marg align-items-end">
						<div className="col-lg-4">
							<div>
								<span className="num">01</span>
								<div>
									<span className="sub-title main-color mb-10">ተልዕኮ</span>
									<h2>
										በሰለጠነ እና በስነምግባር በታነፀ{" "}
										<span className="fw-200"> ደህንነትን የሚያስተዳድሩበትን</span>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text md-mb80">
								<p>
									ለትምህርት ተቋማት የተማሪን መታወቂያ እና ደህንነትን የሚያስተዳድሩበትን መንገድ ለመቀየር፣
									በወላጆች እና በትምህርት ቤቶች መካከል በፈጠራ ቴክኖሎጂ የታገዘ እና ወጪ ቆጣቢ ቁሳቁሶችን
									በመጠቀም ጠንካራ ግንኙነቶችን ማጎልበት።
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="img fit-img">
								<img src="/assets/imgs/serv-img/1.jpg" alt="" />
								<a href="/page-services-details">
									<span className="ti-arrow-top-right"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="item">
					<div className="row md-marg align-items-end">
						<div className="col-lg-4">
							<div>
								<span className="num">02</span>
								<div>
									<span className="sub-title main-color mb-10">ርዕያችን</span>
									<h2>
										የተማሪን መታወቂያ <span className="fw-200">ወጪ ቆጣቢ</span>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text md-mb80">
								<p>
									ከፍተኛ ጥራት ያለው፣ ወጪ ቆጣቢ የህትመት እና የዲጂታል መታወቂያ ካርድ መፍትሄዎችን ለማቅረብ፣
									የተማሪን ደህንነት የሚያጎለብት እና የወላጅ ቁጥጥርን የሚያቃልል፣ ከትምህርት ቤቶች ጋር በመተባበር
									አስፈላጊ ቁሳቁሶችን በከፍተኛ ቅናሽ ለማቅረብ።
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="img fit-img">
								<img src="/assets/imgs/serv-img/2.jpg" alt="" />
								<a href="/page-services-details">
									<span className="ti-arrow-top-right"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="item pb-0">
					<div className="row md-marg align-items-end">
						<div className="col-lg-4">
							<div>
								<span className="num">03</span>
								<div>
									<span className="sub-title main-color mb-10">ዓላማዎቻችን</span>
									<h2>
										የፋይናንስ / <span className="fw-200">ትምህርትና ስልጠና በመስጠት</span>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text md-mb80">
								<p>
									የተማሪን ደህንነት የሚያበረታቱ፣ግንኙነቶችን የሚያቀላጥፉ እና የማህበረሰብ ተሳትፎን የሚደግፉ
									አስተማማኝ ምርቶችን እና አገልግሎቶችን በማቅረብ ቤተሰቦችን እና የትምህርት ተቋማትን ማበረታታት።
								</p>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="img fit-img">
								<img src="/assets/imgs/serv-img/3.jpg" alt="" />
								<a href="/page-services-details">
									<span className="ti-arrow-top-right"></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
