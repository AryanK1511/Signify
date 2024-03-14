/*
===================================
Lamp operation function
===================================
*/

// => Change lamp state
const changeLampState = async (gesture) => {
	// Make a POST request to the /api/lamp route of the API
	const response = await fetch(
		`http://localhost:8000/api/lamp`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({'lamp_state': gesture}),
		},
	);

	const data = await response.json();

	// Throw an error if response is not 200
	if (response.ok) {
		return { success: true, message: data.message };
	} else {
		return { success: false, message: data.message };
	}
};

export { changeLampState };