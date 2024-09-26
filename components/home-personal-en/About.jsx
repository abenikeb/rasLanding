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
							{/* <span className="icon">
								<img src="/assets/imgs/resume/icon1.png" alt="" />
							</span>
							<span className="icon">
								<img src="/assets/imgs/resume/icon2.png" alt="" />
							</span>
							<span className="icon">
								<img src="/assets/imgs/resume/icon3.png" alt="" />
							</span>
							<span className="icon">
								<img src="/assets/imgs/resume/icon4.png" alt="" />
							</span> */}
						</div>
					</div>
					<div className="col-lg-7 valign">
						<div className="cont">
							<h6 className="sub-title main-color mb-30">About Us</h6>
							<div className="text secondary-color">
								{/* <h4 className="mb-30">
									I&apos;m{" "}
									<span className="fw-200">
										Creative Director and UI-UX Designer
									</span>{" "}
									from Sydney, Australia, working in web development and print
									media.
								</h4> */}
								<h4 className="mb-30">
									At Rasynergy{" "}
									<span className="fw-200">
										we&apos;re dedicated to lighting
									</span>{" "}
									Established with a vision to empower individuals and
									businesses through collective financial strength.
								</h4>
								<p>
									we offer a range of tailored services designed to meet your
									unique needs. Our mission is to provide reliable savings
									solutions, accessible loans, and valuable financial advice
									while fostering a supportive community. With a commitment to
									transparency and integrity, we ensure that every member&apos;s
									journey with us is marked by trust and growth. Join Bright
									Sacco today and experience a brighter, more secure financial
									future.
								</p>
								<div className="numbers mt-50">
									<div className="row lg-marg">
										<div className="col-md-6">
											<div className="item bord-thin-top bord-thin-right pt-30 d-flex align-items-end mt-20">
												<div>
													<h3 className="fw-300 mb-10">100%</h3>
													<h6 className="p-color sub-title">
														Clients Satisfaction
													</h6>
												</div>
												<div className="ml-auto">
													<div className="icon-img-40">
														<img src="/assets/imgs/logo-light.png" alt="" />
													</div>
												</div>
											</div>
										</div>
										<div className="col-md-6">
											<div className="item bord-thin-top bord-thin-right pt-30 d-flex align-items-end mt-20">
												<div>
													<h3 className="fw-300 mb-10">100+</h3>
													<h6 className="p-color sub-title">
														Projects Completed
													</h6>
												</div>
												<div className="ml-auto">
													<div className="icon-img-40">
														<img src="/assets/imgs/logo-light.png" alt="" />
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
