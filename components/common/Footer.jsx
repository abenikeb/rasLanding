import React from "react";

function Footer() {
	return (
		<footer className="clean-footer crev">
			<div className="container pb-40 ontop">
				<div className="row justify-content-between">
					<div className="col-lg-2">
						<div className="logo icon-img-100 md-mb40">
							<img src="/assets/imgs/logo-light.png" alt="" />
						</div>
					</div>
					<div className="col-lg-4">
						<div className="column md-50">
							<h6 className="sub-title mb-30">አድራሻ</h6>
							<h6 className="p-color fw-400">
								የካ ኮተቤ 02 የኢትዮጵያ ንግድ ባንክ 2ኛ ፎቅ, #207
							</h6>
							<h6 className="mt-30 mb-15">
								<a href="#0">info@rasynergy.com</a>
							</h6>
							<a href="tel:+251906904646" className="underline">
								<span className="fz-22 main-color">+251 906904646</span>
							</a>
							<br />
							<a href="tel:+251925546527" className="underline">
								<span className="fz-22 main-color">+251 925546527</span>
							</a>
						</div>
					</div>
					<div className="col-lg-2">
						<div className="column md-mb50">
							<h6 className="sub-title mb-30">ጠቃሚ አገናኞች</h6>
							<ul className="rest fz-14 opacity-7">
								<li className="mb-15">
									<a href="/page-about">ስለ እኛ</a>
								</li>
								<li className="mb-15">
									<a href="/page-services">የሚቀርቡ አገልግሎቶች</a>
								</li>
								<li className="mb-15">
									<a href="/">ምስክርነቶች</a>
								</li>
								<li className="mb-15">
									<a href="/page-FAQ">የሚጠየቁ ጥያቄዎች</a>
								</li>
								<li>
									<a href="/page-contact">አድራሻ</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="column subscribe-minimal">
							{/* <h6 className="sub-title mb-30">Newsletter</h6> */}
							{/* <div className="form-group mb-40">
								<input type="text" name="subscrib" placeholder="Your Email" />
								<button>
									<span className="ti-location-arrow"></span>
								</button>
							</div> */}
							<ul className="rest social-icon d-flex align-items-center">
								<li className="hover-this cursor-pointer">
									<a href="#0" className="hover-anim">
										<i className="fab fa-telegram"></i>
									</a>
								</li>
								<li className="hover-this cursor-pointer">
									<a href="#0" className="hover-anim">
										<i className="fab fa-facebook-f"></i>
									</a>
								</li>
								<li className="hover-this cursor-pointer ml-10">
									<a href="#0" className="hover-anim">
										<i className="fab fa-dribbble"></i>
									</a>
								</li>

								<li className="hover-this cursor-pointer ml-10">
									<a href="#0" className="hover-anim">
										<i className="fab fa-instagram"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="pt-30 pb-30 mt-80 bord-thin-top">
					<div className="text-center">
						<p className="fz-14">
							© 2024 Rasynergy is Proudly Powered by{" "}
							<span className="underline main-color">
								<a href="https://www.rasynergy.et" target="_blank">
									Rasynery Group
								</a>
							</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
