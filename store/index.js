import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import modalReducer from "./slices/modal";
import positionReducer from "./slices/position";

export default configureStore({
	reducer: {
		user: userReducer,
		modal: modalReducer,
		position: positionReducer,
	},
});
