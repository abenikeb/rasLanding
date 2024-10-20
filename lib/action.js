"use server";
import axios from "axios";

export async function findStudentData(student_id) {
	try {
		const response = await axios.get(
			`http://rasynergy.et/api/users/find-students?student_id=${student_id}`
		);

		console.log({ response });

		return response.data.data;
	} catch (error) {
		console.error("Error fetching student data:", error);
		throw new Error("Failed to fetch student data");
	}
}

// "use server";
// import axios from "axios";

// export async function findStudentData() {
// 	// console.log("first");
// 	// noStore();
// 	try {
// 		const response = await axios.get(
// 			`http://rasynergy.et/api/users/find-students?student_id=${formState.student_id}`
// 		);
// 		return response;
// 		// setItems(response.data.data.items);

// 		// console.log({ studentInfo: response.data.data });

// 		// setStudentData({
// 		// 	first_name: response.data.data.first_name,
// 		// 	middle_name: response.data.data.middle_name,
// 		// 	student_user_id: response.data.data.student_user_id,
// 		// 	last_name: response.data.data.last_name,
// 		// 	student_id: response.data.data.student_id,
// 		// 	school_id: response.data.data.school_id,
// 		// 	school_name: response.data.data.school_name,
// 		// });

// 		// setFormState((prevState) => ({
// 		// 	...prevState,
// 		// 	school_id: response.data.data.school_id,
// 		// 	user_id: response.data.data.student_user_id,
// 		// }));

// 		// generatebiller_ref_no();
// 	} catch (error) {
// 		// message.error("Failed to fetch items");
// 	}
// }
