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
		country: {
			open: false,
		},
		technology: {
			open: false,
		},
		photoChooser: {
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
		toggleCountry: (state, action) => {
			state.country = { open: action.payload };
		},
		toggleTechnology: (state, action) => {
			state.technology = { open: action.payload };
		},
		togglePhotoChooser: (state, action) => {
			state.photoChooser = { open: action.payload };
		},
	},
});

export const {
	togglePersonalInfo,
	togglePosition,
	toggleCountry,
	toggleTechnology,
	togglePhotoChooser,
} = modalSlice.actions;

export default modalSlice.reducer;
