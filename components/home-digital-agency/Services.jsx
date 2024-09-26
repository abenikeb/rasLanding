"use client";
import React from "react";
import data from "@/data/services";

function Services() {
	function handleActiveSer(event) {
		document.querySelectorAll(".serv-boxs .item").forEach((serv) => {
			serv.classList.remove("active");
		});
		event.currentTarget.classList.add("active");
	}
	return (
		<section className="services-modern section-padding">
			<div className="container">
				<div className="sec-head mb-80">
					<div className="row">
						<div className="col-lg-4">
							<h6 className="title-bord mb-30 secondary-color">Our Services</h6>
						</div>
						<div className="col-lg-8">
							<div className="text secondary-color">
								<h4>
									Rasynergy provides a comprehensive range of financial products
									and services designed to support the diverse needs of our
									members. From secure savings accounts to flexible loan
									options, our offerings are tailored to help individuals and
									businesses.
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid rest">
				<div className="serv-boxs">
					{data.map((item, i) => (
						<div
							key={i}
							onClick={handleActiveSer}
							className={`item ${i == 0 && "active"}`}>
							<div className="icon-img-60">
								<img src={item.img} alt="" />
							</div>
							<div>
								<div className="text mb-30 secondary-color">
									<p className="secondary-color">{item.desc}</p>
								</div>
								<div className="d-flex align-items-center secondary-color">
									<h6 className="sub-title">{item.title}</h6>
									<span className="ml-auto fz-13">0{i + 1}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
