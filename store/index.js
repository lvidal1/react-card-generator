import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import modalReducer from "./slices/modal";
import positionReducer from "./slices/position";
import countryReducer from "./slices/country";

export default configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
		position: positionReducer,
		country: countryReducer,
	},
});
