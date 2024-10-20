"use client";
import React from "react";
import Image from "next/image";
import { message } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserIcon } from "@heroicons/react/24/outline";
import axios from "axios";

function Contact() {
	const router = useRouter();
	const [postFieldVariation, setPostFieldVariation] = useState([]);
	const [items, setItems] = useState([]);
	const [isItemSelect, setIsItemSelect] = useState(false);

	const [studentData, setStudentData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [submitLoading, setsubmitLoading] = useState(false);

	const [formState, setFormState] = useState({
		name: "",
		item_id: "",
		phone: "",
		student_id: "",
		school_id: "",
		biller_ref_no: "",
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
		flatRate: 10,
	});

	const [formErrors, setFormErrors] = useState({
		phone: "",
	});

	const handlePhoneChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const validatePhoneNumber = () => {
		const { phone } = formState;
		let phoneError = "";

		// Phone number validation rules
		const phoneRegex = /^(09|251)([0-9]{7,9})$/;

		if (!phoneRegex.test(phone)) {
			phoneError =
				"Phone number must start with 09 or 251 and have 9 to 11 digits.";
		}

		setFormErrors((prevState) => ({
			...prevState,
			phone: phoneError,
		}));

		return phoneError === "";
	};

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
		let uniqueNumber = generatebiller_ref_no();
		setFormState((prevState) => {
			const updatedState = {
				...prevState,
				item_id: itemId,
				name: items[index]?.item_name ?? "product name",
				single_price: items[index].item_price,
				biller_ref_no: uniqueNumber,
			};

			calculateActualPrice(
				updatedState.quantity,
				updatedState.single_price,
				updatedState.flatRate,
				updatedState.shipping
			);

			return updatedState;
		});
		setIsItemSelect(true);
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
		setsubmitLoading(true);

		if (formErrors.phone) {
			return;
		}

		const bodyData = {
			...formState,
			shipping: formState.shipping ? 1 : 0,
		};

		try {
			const { data } = await axios.post(
				"http://rasynergy.et/api/product-post/store",
				bodyData,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			console.log({ bodyData });

			if (data.code === "0") {
				const refNo = bodyData.biller_ref_no;
				message.success(
					`ውድ ደንበኛችን በተሳካ ሁኔታ አገልግሎቱን ገዝተዋል። የእርስዎ የመክፈያ ቁጥር ${refNo} ነው። ቁጥሩ ወደ ቅንጥብ ሰሌዳዎ ተቀድቷል።.`
				);

				setTimeout(() => {
					window.location.reload();
				}, 20000);
			} else {
				message.error("Error creating product");
				console.error("Error creating product", data);
			}
		} catch (error) {
			message.error("Error creating product");
			console.error("Request failed", error.response || error);
		} finally {
			setsubmitLoading(false);
		}
	};

	const generatebiller_ref_no = () => {
		const uniqueNumber = `RAS${Math.floor(
			10000000 + Math.random() * 90000000
		)}`;
		return uniqueNumber;
	};

	const findStudentData = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await axios.get(
				`http://rasynergy.et/api/users/find-students?student_id=${formState.student_id}`
			);
			setItems(response.data.data.items);

			console.log({ studentInfo: response.data.data });

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

			setLoading(false);

			// generatebiller_ref_no();
		} catch (error) {
			message.error("Failed to fetch items");
			setLoading(false);
		}
	};

	return (
		<section className="-mt-5 contact section-padding">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 -mt-40">
						<div
							id="form_contact"
							className="sec-head info-box full-width md-mb80">
							<h3 className="mb-15 secondary-color">
								{" "}
								<b>የምታቀርቡትን አገልግሎት እንዴት ላግኝ?</b>

							</h3>

							<p className="address-details mb-20">
								<span className="main-color">በጣም ቀላል ነው!</span> በቅድሚያ የተማሪውን
								መታወቂያ ቁጥር ከታች ቅጽ ላይ በመሙላት የሚያገኙትን የመክፈያ ቁጥር በማያዝ ከታች በምስሉ ላይ
								እንደምትመለከቱት ወደ ቴሌብር በመሄድ ያስገባሉ : ከከፈሉም በኋላ እኛ በሁለት ቀናት ውስጥ ያሉበት
								ድረስ እናደርሳለን ወይም በትምርት ቤቶ አማካኝነት እንልካለን::
							</p>

							<Image
								src="/assets/imgs/telebirr.png"
								alt="Telebirr payment"
								height={250}
								width={150}
							/>
							<div className="sec-bottoms">________________</div>
						</div>
						{/* Form Field */}
						<div className="custom-form-container form-container">
							<h3 className="mb-15 secondary-color">
								{" "}
								<b>እዚህ ይመዝገቡ</b>
							</h3>
							<div className="custom-form-content">
								<form onSubmit={findStudentData} className="custom-form-group">
									<label htmlFor="student_id" className="custom-form-label">
										የተማሪው ID <span className="required-field">*</span>
									</label>
									<div className="custom-form-input-group">
										<UserIcon className="custom-form-icon" />
										<input
											id="student_id"
											name="student_id"
											type="text"
											className="custom-form-input-field"
											placeholder="የተማሪውን ID ያስገቡ"
											value={formState.student_id}
											onChange={handleChange}
										/>
										<button
											type="submit"
											className="custom-form-button-primary">
											{loading ? <>Loading...</> : <>ያረጋግጡ</>}
										</button>
									</div>
									{studentData && (
										<div className="custom-form-student-info">
											{studentData.first_name} {studentData.last_name}
										</div>
									)}
								</form>

								<form onSubmit={handleSubmit}>
									<div className="custom-form-group">
										<label
											htmlFor="item_id"
											className="custom-form-label-center">
											የሚገዙትን እቃ ይምረጡ{" "}
											<span className="custom-req-label">
												{" "}
												(አስቀድመው ተማሪው መኖሩን ያረጋግጡ)
											</span>
										</label>
										{/* <TagIcon className="custom-form-icon-option" /> */}
										<select
											id="item_id"
											name="item_id"
											className="custom-form-select-field"
											value={formState.item_id}
											onChange={(e) => {
												const selectedIndex = e.target.selectedIndex - 1; // Adjust for "Select an item" option
												const selectedItemId = e.target.value;
												handleItemChange(selectedItemId, selectedIndex);
											}}>
											<option value="">የሚገዙትን እቃ ይምረጡ</option>
											{items.map((item, index) => (
												<option key={index} value={item.id}>
													{item.item_name}
												</option>
											))}
											x
										</select>
									</div>

									{isItemSelect && (
										<>
											{/* Quantity, Price, and Total */}
											<div className="custom-form-checkout-summary">
												<div className="checkout-item">
													<span className="checkout-label">ነጠላ ዋጋ:</span>
													<span className="checkout-value">
														{formState.single_price
															? `${formState.single_price} Birr`
															: "-"}
													</span>
												</div>

												<div className="checkout-item">
													<span className="checkout-label">ብዛት:</span>
													<span className="checkout-value">
														{formState.quantity || "-"}
													</span>
												</div>

												{/* Shipping and Flat Rate */}
												<div className="checkout-item">
													<span className="checkout-label">መላኪያ ይፈልጋሉ:</span>
													<span>
														<input
															id="shipping"
															name="shipping"
															type="checkbox"
															className="checkout-value"
															checked={formState.shipping}
															onChange={handleChange}
														/>
													</span>
												</div>

												{formState.shipping && (
													<div className="checkout-item">
														<span className="checkout-label">የመላኪያ ዋጋ:</span>
														<span className="checkout-value">
															{formState.flatRate
																? `${formState.flatRate} Birr`
																: "-"}
														</span>
													</div>
												)}

												<div className="checkout-item total">
													<span className="checkout-label">ጠቅላላ ዋጋ:</span>
													<span className="checkout-value">
														{formState.actual_price
															? `${formState.actual_price} Birr`
															: "-"}
													</span>
												</div>
											</div>

											{/* Phone Number Input */}
											<div className="custom-form-grid">
												<div className="custom-form-group">
													<label htmlFor="phone" className="custom-form-label">
														የምናገኝዎን ስልክ ያስገቡ{" "}
														<span className="required-field">*</span>
													</label>
													<input
														id="phone"
														name="phone"
														type="text"
														className="custom-form-input-field"
														placeholder="ስልኮትን ያስገቡ"
														value={formState.phone}
														onChange={handlePhoneChange}
														onBlur={validatePhoneNumber}
														required
													/>
													{formErrors.phone && (
														<p className="error-message">{formErrors.phone}</p>
													)}
												</div>
											</div>
										</>
									)}

									<div className="custom-form-actions">
										<button
											loading={loading}
											className="custom-form-button-primary">
											{submitLoading ? <>Loading...</> : <>የመረጡትን ያስገቡ</>}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>

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
				</div>
			</div>
		</section>
	);
}

export default Contact;
