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
							<h3 className="mb-30">
								At Rasynergy, <span className="fw-200">we’re dedicated to</span>{" "}
								empowering our members through innovative financial solutions{" "}
								<span className="fw-200"> and community support</span>
							</h3>
							<p>
								As a forward-thinking savings and credit cooperative, we offer
								tailored products and services designed to help you achieve your
								financial goals with confidence and ease. Join us to experience
								a brighter financial future together.
							</p>
							<a href="/page-services" className="underline main-color mt-40">
								<span className="text">
									Our Services <i className="ti-arrow-top-right"></i>
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
