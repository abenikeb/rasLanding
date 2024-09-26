import React from "react";

function Services() {
	return (
		<section className="services-clas">
			<div className="container section-padding bord-bottom-grd pt-0">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">Our Specialize</span>
							<h3 className="fw-600 fz-50 secondary-color text-u d-rotate wow">
								<span className="rotate-text">
									Featured <span className="fw-200">Services.</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more secondary-color">
							<a
								href="/page-services"
								className="butn butn-sm butn-bord radius-30 secondary-color">
								<span>View All</span>
							</a>
							<span className="icon ti-arrow-top-right"></span>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="item sub-bg md-mb30">
							<div className="icon-img-60 opacity-5 mb-40">
								<img src="/assets/imgs/serv-icons/3.png" alt="" />
							</div>
							<h5>Investment Opportunities</h5>
							<div className="text mt-40">
								<div className="mb-10">
									<span className="tag">Investment</span>
									<span className="tag">Financial Planning</span>
								</div>
								<p>
									We always ensure provide Various types of loans, such as
									personal loans, business loans, and education loans.
								</p>
							</div>
							<a href="/page-services-details" className="mt-40">
								<span className="ti-arrow-top-right"></span>
							</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="item sub-bg md-mb30">
							<div className="icon-img-60 opacity-5 mb-40">
								<img src="/assets/imgs/serv-icons/4.png" alt="" />
							</div>
							<h5>Deposit and Withdrawal Services:</h5>
							<div className="text mt-40">
								<div className="mb-10">
									<span className="tag">Investment</span>
									<span className="tag">Financial Planning</span>
								</div>
								<p>
									Convenient methods for members to deposit or withdraw funds.
								</p>
							</div>
							<a href="/page-services-details" className="mt-40">
								<span className="ti-arrow-top-right"></span>
							</a>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="item sub-bg">
							<div className="icon-img-60 opacity-5 mb-40">
								<img src="/assets/imgs/serv-icons/5.png" alt="" />
							</div>
							<h5>SEO / Marketing</h5>
							<div className="text mt-40">
								<div className="mb-10">
									<span className="tag">Member</span>
									<span className="tag">Benefits</span>
								</div>
								<p>
									Access to exclusive discounts, financial literacy programs,
									and community support initiatives.
								</p>
							</div>
							<a href="/page-services-details" className="mt-40">
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
