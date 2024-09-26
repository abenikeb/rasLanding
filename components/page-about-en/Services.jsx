import React from "react";

function Services() {
	return (
		<section className="services-inline2 section-padding sub-bg bord-bottom-grd bord-top-grd">
			<div className="container ontop">
				<div className="sec-head mb-80">
					<div className="d-flex align-items-center">
						<div>
							<span className="sub-title main-color mb-5">Overview</span>
							<h3 className="fw-600 fz-50 text-u d-rotate wow">
								<span className="rotate-text">
									Featured <span className="fw-200">Us.</span>
								</span>
							</h3>
						</div>
						<div className="ml-auto vi-more">
							<a
								href="/page-services"
								className="butn butn-sm butn-bord radius-30">
								<span>View All</span>
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
									<span className="sub-title main-color mb-10">Mission</span>
									<h2>
										Empower <span className="fw-200">our members</span>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text md-mb80">
								<p>
									At Rasynergy, our mission is to empower our members by
									providing innovative and accessible financial solutions that
									foster personal and collective growth.
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
									<span className="sub-title main-color mb-10">Vision</span>
									<h2>
										Envision <span className="fw-200">a vibrant community</span>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text md-mb80">
								<p>
									We envision a vibrant community where financial stability and
									success are within everyone&apos;s reach, driven by integrity,
									transparency, and member-centric service.
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
									<span className="sub-title main-color mb-10">History</span>
									<h2>
										Founded / <span className="fw-200">in 2010</span>
									</h2>
								</div>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="text md-mb80">
								<p>
									Founded in 2010EC, Rasynergy began with a simple goal: to
									create a supportive financial environment for individuals and
									families. Over the years, we&apos;ve grown into a trusted
									cooperative known for our commitment to excellence and
									community development.
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
