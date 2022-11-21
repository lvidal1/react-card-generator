import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
	name: "modal",
	initialState: {
		personalInfo: {
			open: false,
		},
		position: {
			open: false,
		},
	},
	reducers: {
		togglePersonalInfo: (state, action) => {
			state.personalInfo = { open: action.payload };
		},
		togglePosition: (state, action) => {
			state.position = { open: action.payload };
		},
	},
});

export const { togglePersonalInfo, togglePosition } = modalSlice.actions;

export default modalSlice.reducer;
