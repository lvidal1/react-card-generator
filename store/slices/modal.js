import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
	name: "modal",
	initialState: {
		personalInfo: {
			open: false,
		},
	},
	reducers: {
		togglePersonalInfo: (state, action) => {
			state.personalInfo = { open: action.payload };
		},
	},
});

export const { togglePersonalInfo } = modalSlice.actions;

export default modalSlice.reducer;
