"use client";
import React from "react";
import Image from "next/image";
import { message } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
	TagIcon,
	DocumentTextIcon,
	UserIcon,
} from "@heroicons/react/24/outline";
// import { Button } from "../button";
import axios from "axios";

function Contact() {
	const router = useRouter();
	const [postFieldVariation, setPostFieldVariation] = useState([]);
	const [items, setItems] = useState([]);
	const [studentData, setStudentData] = useState(null);
	const [loading, setLoading] = useState(false);

	const [formState, setFormState] = useState({
		name: "",
		item_id: "",
		student_id: "",
		school_id: "",
		billerRefNumber: "",
		user_id: 1,
		description: "Rasynergy Product Description",
		actual_price: 0,
		discount_price: 0,
		rating: 1,
		vendor_id: 1,
		isSelected: true,
		isVariableProduct: false,
		category_id: 1,
		sub_category_id: 1,
		can_make_an_offer: false,
		location: "Addis Ababa, Ethiopia",
		stock_quantity: "10000",
		instruction: "",
		brand: "Rasynergy",
		quantity: 1,
		single_price: 0,
		shipping: false,
		flatRate: 0,
	});

	const calculateActualPrice = (quantity, single_price, flatRate, shipping) => {
		const validQuantity = quantity || 0;
		const validPrice = single_price || 0;
		const validFlatRate = flatRate || 0;

		const baseTotal = validQuantity * validPrice;
		const actual_price = shipping ? baseTotal + validFlatRate : baseTotal;

		setFormState((prevState) => ({
			...prevState,
			actual_price,
		}));
	};

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;

		const parsedValue =
			name === "flatRate" || name === "quantity" || name === "single_price"
				? parseFloat(inputValue) || 0
				: inputValue;

		setFormState((prevState) => {
			const updatedState = {
				...prevState,
				[name]: parsedValue,
			};

			calculateActualPrice(
				updatedState.quantity,
				updatedState.single_price,
				updatedState.flatRate,
				updatedState.shipping
			);

			return updatedState;
		});
	};

	const handleItemChange = (itemId, index) => {
		setFormState((prevState) => {
			const updatedState = {
				...prevState,
				item_id: itemId,
				name: items[index]?.item_name ?? "product name",
				single_price: items[index].item_price,
			};

			calculateActualPrice(
				updatedState.quantity,
				updatedState.single_price,
				updatedState.flatRate,
				updatedState.shipping
			);

			return updatedState;
		});
	};

	useEffect(() => {
		async function fetchFieldVariations() {
			try {
				const mappedData = fields.map((field) => ({
					field_id: field.field_id,
					fieldName: field.label,
					options: field.values.map((value) => ({
						value_id: value.id,
						valueName: value.value,
					})),
				}));

				setPostFieldVariation(mappedData);
			} catch (error) {
				console.error("Error fetching field variations:", error);
			}
		}

		fetchFieldVariations();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			...formState,
			shipping: formState.shipping ? 1 : 0,
		};

		try {
			setLoading(true);
			const response = await fetch(
				"http://rasynergy.et/api/product-post/store",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}
			);

			const result = await response.json();

			if (response.ok) {
				console.log("Product created successfully");
				router.push("/dashboard/products");
			} else {
				console.error("Error creating product", result);
			}
		} catch (error) {
			console.error("Error submitting form", error);
		} finally {
			setLoading(false);
		}
	};

	const generateBillerRefNumber = () => {
		const uniqueNumber = `RAS${Math.floor(
			10000000 + Math.random() * 90000000
		)}`;
		setFormState({
			...formState,
			billerRefNumber: uniqueNumber,
		});
	};

	const findStudentData = async () => {
		try {
			const response = await axios.get(
				`http://rasynergy.et/api/users/find-students?student_id=${formState.student_id}`
			);
			setItems(response.data.data.items);

			setStudentData({
				first_name: response.data.data.first_name,
				middle_name: response.data.data.middle_name,
				student_user_id: response.data.data.student_user_id,
				last_name: response.data.data.last_name,
				student_id: response.data.data.student_id,
				school_id: response.data.data.school_id,
				school_name: response.data.data.school_name,
			});

			setFormState((prevState) => ({
				...prevState,
				school_id: response.data.data.school_id,
				user_id: response.data.data.student_user_id,
			}));
		} catch (error) {
			message.error("Failed to fetch items");
		}
	};

	return (
		<section className="-mt-5 contact section-padding">
			<div className="container">
				<div className="row">
					{/* Address */}
					<div className="col-lg-4">
						<div className="sec-head info-box full-width md-mb40">
							<h2 className="contact-title">አድራሻ</h2>
							<div className="morinfo mt-20 pb-30 bord-thin-bottom secondary-color">
								<h6 className="mb-15 section-title">ዋና ቅርንጫፍ አድራሻ</h6>
								<p className="address-details">
									የካ ኮተቤ 02 የኢትዮጵያ ንግድ ባንክ 2ኛ ፎቅ, #207
								</p>

								{/* <!-- Main Branch Phone --> */}
								<div className="contact-info mt-15">
									<h6 className="contact-title">ስልክ</h6>
									<p>
										<a href="tel:+251906904646" className="contact-link">
											+251 9 06 90 46 46 / +251 925546527
										</a>
									</p>
								</div>

								{/* <!-- Main Branch Email --> */}
								<div className="contact-info mt-20">
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

					<div className="col-lg-8 -mt-5">
						{/* Form Field */}

						<div
							id="form_contact"
							className="form-container sec-head info-box full-width md-mb80">
							<h3 className="mb-15 secondary-color">
								{" "}
								<b>አገልግሎታችሁን እንዴት ላግኝ?</b>
							</h3>

							<p className="address-details mb-20">
								<span className="main-color">በጣም ቀላል ነው!</span> በቅድሚያ ከታች በምስሉ
								ላይ እንደምትመለከቱት ወደ ቴሌብር በመሄድ የተማሪውን መታወቂያ ቁጥር ያስገባሉ : ከከፈሉም በኋላ እኛ
								በሁለት ቀናት ውስጥ ያሉበት ድረስ እናደርሳለን ወይም በትምርት ቤቶ አማካኝነት እንልካለን::
							</p>

							<Image
								src="/assets/imgs/telebirr.png"
								alt="Telebirr payment"
								height={250}
								width={150}
							/>
							<div className="sec-bottoms">________________</div>
							<form onSubmit={handleSubmit} className="custom-form-container">
								<div className="custom-form-content">
									<div className="custom-form-group">
										<label htmlFor="student_id" className="custom-form-label">
											<UserIcon className="custom-form-icon" />
											Student ID
										</label>
										<div className="custom-form-input-group">
											<input
												id="student_id"
												name="student_id"
												type="text"
												className="custom-form-input-field"
												placeholder="Enter student ID"
												value={formState.student_id}
												onChange={handleChange}
											/>
											<button
												type="button"
												onClick={findStudentData}
												className="custom-form-button-primary">
												Check
											</button>
										</div>
										{studentData && (
											<div className="custom-form-student-info">
												{studentData.first_name} {studentData.last_name}
											</div>
										)}
									</div>

									<div className="custom-form-group">
										<label htmlFor="item_id" className="custom-form-label">
											<TagIcon className="custom-form-icon" />
											Select Item
										</label>
										<select
											id="item_id"
											name="item_id"
											className="custom-form-select-field"
											value={formState.item_id}
											onChange={handleChange}>
											<option value="">Select an item</option>
											{items.map((item, index) => (
												<option key={index} value={item.id}>
													{item.item_name}
												</option>
											))}
										</select>
									</div>

									<div className="custom-form-group">
										<label
											htmlFor="biller_ref_number"
											className="custom-form-label">
											<DocumentTextIcon className="custom-form-icon" />
											Biller Ref Number
										</label>
										<div className="custom-form-input-group">
											<input
												id="biller_ref_number"
												name="biller_ref_number"
												type="text"
												className="custom-form-input-field"
												value={formState.billerRefNumber}
												onChange={handleChange}
												readOnly
											/>
											<button
												type="button"
												onClick={generateBillerRefNumber}
												className="custom-form-button-secondary">
												Generate
											</button>
										</div>
									</div>

									{/* Quantity, Price, and Total */}
									<div className="custom-form-grid">
										<div>
											<label
												htmlFor="single_price"
												className="custom-form-label">
												Single Price
											</label>
											<input
												id="single_price"
												name="single_price"
												type="number"
												className="custom-form-input-field"
												placeholder="Enter price per unit"
												value={formState.single_price}
												onChange={handleChange}
											/>
										</div>

										<div>
											<label htmlFor="quantity" className="custom-form-label">
												Quantity
											</label>
											<input
												id="quantity"
												name="quantity"
												type="number"
												className="custom-form-input-field"
												placeholder="Enter quantity"
												value={formState.quantity}
												onChange={handleChange}
											/>
										</div>

										{/* Shipping and Flat Rate */}
										<div className="custom-form-group">
											<label htmlFor="shipping" className="custom-form-label">
												Shipping
											</label>
											<div className="custom-form-checkbox-group">
												<input
													id="shipping"
													name="shipping"
													type="checkbox"
													className="custom-form-checkbox"
													checked={formState.shipping}
													onChange={handleChange}
												/>
												<span>Enable shipping</span>
											</div>
											{formState.shipping && (
												<div className="custom-form-flat-rate">
													<label
														htmlFor="flatRate"
														className="custom-form-label">
														Flat Rate
													</label>
													<input
														id="flatRate"
														name="flatRate"
														type="number"
														className="custom-form-input-field"
														placeholder="Enter flat rate"
														value={formState.flatRate}
														onChange={handleChange}
													/>
												</div>
											)}
										</div>

										{/* Total Price */}
										<div>
											<label
												htmlFor="actual_price"
												className="custom-form-label">
												Total Price
											</label>
											<input
												id="actual_price"
												name="actual_price"
												type="text"
												className="custom-form-input-field"
												placeholder="Total price"
												value={formState.actual_price.toFixed(2)}
												readOnly
											/>
										</div>
									</div>
								</div>

								<div className="custom-form-actions">
									<button
										loading={loading}
										className="custom-form-button-primary">
										Create Post
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
