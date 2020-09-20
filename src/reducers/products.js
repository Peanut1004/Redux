const initialState = {
	products: [],
	count: 0,
	page: 1,
	sort: "",
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case "FETCH_PRODUCTS_BEGIN": {
			return {
				...state
			};
		}
		case "FETCH_PRODUCTS_SUCCESS": {
			return {
				...state,
				products: action.payload,
			};
		}
		case "FETCH_PRODUCTS_FAILURE": {
			return {
				...state,
				products: [],
			}
		}
		case "SET_COUNT": {
			return {
				...state,
				count: action.payload,
			};
		}
		case "SET_PAGE": {
			return {
				...state,
				page: action.payload,
			};
		}
		case "SET_SORT": {
			return {
				...state,
				sort: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default productsReducer;