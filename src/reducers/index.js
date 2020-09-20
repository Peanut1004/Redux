import { combineReducers } from "redux";
import productsReducer from "./products";
import sidebarReducer from "./sidebar";

const rootReducer = combineReducers({
	sidebar: sidebarReducer,
	products: productsReducer,
});

export default rootReducer;
