const initialState = {
	type: "",

};
const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_TYPE": {
			return {
				...state,
				type: action.payload,
			};
		}
		case "RESET_FILTER": {
			return {
				...state,
				type: "",
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};
export default sidebarReducer;