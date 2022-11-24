import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		fullname: "John Doe",
		birth: "1991-01-01",
		position: "FrontEnd",
		country: "PE",
		technologies: ["python", "js", "css", "react"],
		photo: null,
	},
	reducers: {
		setBirth: (state, action) => {
			state.birth = action.payload;
		},
		setCountry: (state, action) => {
			state.country = action.payload;
		},
		setFullName: (state, action) => {
			state.fullname = action.payload;
		},
		setPosition: (state, action) => {
			state.position = action.payload;
		},
		setPersonalInformation: (state, { payload }) => {
			state.fullname = payload.fullname;
			state.birth = payload.birth;
		},
		setTechnologies: (state, action) => {
			state.technologies = action.payload;
		},
		setPhoto: (state, action) => {
			state.photo = action.payload;
		},
	},
});

export const {
	setBirth,
	setCountry,
	setFullName,
	setPersonalInformation,
	setPosition,
	setTechnologies,
	setPhoto,
} = userSlice.actions;

export default userSlice.reducer;
