"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { notification } from "antd";
// import { useRouter } from "next/navigation";
import { Input, Button, Alert, Form, Typography, Select } from "antd";

const { Title } = Typography;
// Mock Array
const students = [
	{ id: "12345", name: "John Doe" },
	{ id: "67890", name: "Jane Smith" },
	{ id: "11223", name: "Alice Johnson" },
];

// Mock Product Array
const products = [
	{ id: "1", name: "ID Card" },
	{ id: "2", name: "Library Card" },
	{ id: "3", name: "Bus Pass" },
];

function Contact() {
	// const router = useRouter();
	const [termsAccepted, setTermsAccepted] = useState(false); // Terms & Conditions state
	const [product, setProduct] = useState("");
	const [isProductVisible, setIsProductVisible] = useState(false);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false); // Loading state
	const [studentId, setStudentId] = useState("");
	const [studentInfo, setStudentInfo] = useState(null);

	const handleCheckStudent = () => {
		// Find the student in the mock array
		const student = students.find((student) => student.id === studentId);

		if (student) {
			setStudentInfo(student);
			setError("");
			setIsProductVisible(true);
		} else {
			setStudentInfo(null);
			setError("Student not found.");
			setIsProductVisible(false);
		}
	};

	const handleSubmit = () => {
		if (studentInfo && product) {
			alert(`Student ID: ${studentId}, Selected Product: ${product}`);
		} else {
			alert("Please select a product.");
		}
	};

	const handleSearch = () => {
		// Find the student in the mock array
		const student = students.find((student) => student.id === studentId);

		if (student) {
			setStudentInfo(student);
			setError("");
		} else {
			setStudentInfo(null);
			setError("Student not found.");
		}
	};

	const [formData, setFormData] = useState({
		firstName: "",
		middleName: "",
		lastName: "",
		gender: "",
		placeOfBirth: "",
		birthDate: "",
		address: {
			city: "",
			subCity: "",
			woroda: "",
			houseNumber: "",
			phone: "",
			email: "",
			maritalStatus: "",
		},
		familyMembersCount: "",
		educationLevel: "",
		workType: "",
		workPosition: "",
		companyName: "",
		monthlySalary: "",
		monthlySavings: "",
		infoSource: "",
		memberInfo: {
			name: "",
			phone: "",
			relation: "",
			address: {
				city: "",
				subCity: "",
				woroda: "",
				houseNumber: "",
				phone: "",
				email: "",
			},
		},
		loanTimeAssumption: "",
		loanReason: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		const keys = name.split("."); // Split the name by '.' to handle nested fields

		if (keys.length === 1) {
			// Handle top-level fields
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		} else {
			// Handle nested fields like address or memberInfo
			setFormData((prevData) => {
				let updatedData = { ...prevData };

				// Traverse the keys and update the nested object
				let nested = updatedData;
				for (let i = 0; i < keys.length - 1; i++) {
					nested = nested[keys[i]];
				}
				nested[keys[keys.length - 1]] = value;

				return updatedData;
			});
		}
	};

	const handleCheckboxChange = (e) => {
		setTermsAccepted(e.target.checked);
	};

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	setLoading(true);

	// 	try {
	// 		const response = await axios.post(
	// 			"https://helazbeauty.et/api/member-registration",
	// 			formData,
	// 			{
	// 				headers: {
	// 					"Content-Type": "application/json",
	// 				},
	// 			}
	// 		);

	// 		if (response.status === 200) {
	// 			setLoading(false); // Remove loading after submission
	// 			notification.success({
	// 				message: "Success",
	// 				description: "Form submitted successfully",
	// 			});
	// 			// Route to the contact page
	// 			// router.push("/page-contact");
	// 		} else {
	// 			notification.error({
	// 				message: "Error",
	// 				description: "Error submitting form",
	// 			});
	// 			setLoading(false);
	// 		}
	// 	} catch (error) {
	// 		setLoading(false);
	// 		notification.error({
	// 			message: "Error",
	// 			description: "There was an error submitting the form",
	// 		});
	// 	}
	// };

	return (
		<section className="contact section-padding">
			<div className="container">
				<div className="row">
					{/* Address */}
					<div className="col-lg-4">
						<div className="sec-head info-box full-width md-mb80">
							{/* <!-- Main Branch Section --> */}
							<h2 className="contact-title">አድራሻ</h2>
							<div className="morinfo mt-50 pb-30 bord-thin-bottom secondary-color">
								<h6 className="mb-15 section-title">ዋና ቅርንጫፍ አድራሻ</h6>
								<p className="address-details">የካ ኮተቤ 02 3ኛ, #302</p>

								{/* <!-- Main Branch Phone --> */}
								<div className="contact-info mt-15">
									<h6 className="contact-title">ስልክ</h6>
									<p>
										<a href="tel:+251913228892" className="contact-link">
											+251 906 90 46 46 | +251 925 54 65 27
										</a>
									</p>
								</div>

								{/* <!-- Main Branch Email --> */}
								<div className="contact-info">
									<h6 className="contact-title">ኢሜይል</h6>
									<p>
										<a
											href="mailto:support@brighsacco.com"
											className="contact-link">
											info@rasynergy.com
										</a>
									</p>
								</div>
							</div>

							{/* <!-- Branch Address Section --> */}

							{/* <!-- Social Media Icons --> */}
							<div className="social-icon mt-50">
								<a href="https://www.facebook.com/BrightSaccoOfficial">
									<i className="fab fa-facebook-f"></i>
								</a>
								<a href="https://t.me/BrightSaccoLTD">
									<i className="fab fa-telegram"></i>
								</a>
								<a href="https://t.me/brightsacco">
									<i className="fab fa-telegram"></i>
								</a>
								<a href="#0">
									<i className="fab fa-instagram"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-8">
						{/* Form Field */}
						<div className="form-container sec-head info-box full-width md-mb80">
							<Title level={2} className="form-title">
								የተማሪ ያስገቡ
							</Title>

							<Form className="student-form">
								{/* Student ID Input */}
								<Form.Item
									label="Student ID"
									name="studentId"
									rules={[
										{ required: true, message: "Please input the Student ID!" },
									]}
									className="input-form-item">
									<Input
										value={studentId}
										onChange={(e) => setStudentId(e.target.value)}
										placeholder="Enter Student ID"
										className="student-input"
									/>
								</Form.Item>

								{/* Check Button */}
								<Form.Item>
									<Button
										type="primary"
										onClick={handleCheckStudent}
										className="check-btn">
										Check
									</Button>
								</Form.Item>

								{/* Product Selection (only visible if student is found) */}
								{isProductVisible && (
									<>
										<Form.Item
											label="Select Product"
											name="product"
											className="select-form-item">
											<Select
												placeholder="Select a product"
												onChange={(value) => setProduct(value)}
												className="product-select">
												{products.map((product) => (
													<Option key={product.id} value={product.name}>
														{product.name}
													</Option>
												))}
											</Select>
										</Form.Item>

										{/* Submit Button */}
										<Form.Item>
											<Button
												type="primary"
												onClick={handleSubmit}
												className="submit-btn">
												Submit
											</Button>
										</Form.Item>
									</>
								)}

								{/* Display Success or Error Alert */}
								{studentInfo && (
									<Alert
										message={`Student Found: ${studentInfo.name}`}
										type="success"
										showIcon
										className="alert-message"
									/>
								)}

								{error && (
									<Alert
										message={error}
										type="error"
										showIcon
										className="alert-message"
									/>
								)}
							</Form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
