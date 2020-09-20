export const setType = (value) => {
	return {
		type: "SET_TYPE",
		payload: value,
	};
};
export const resetFilter = () => {
	return {
		type: "RESET_FILTER",
	};
};