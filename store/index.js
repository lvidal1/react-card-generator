import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import modalReducer from "./slices/modal";

export default configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
	},
});
