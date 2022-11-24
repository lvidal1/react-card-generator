import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
	name: "country",
	initialState: {
		list: [],
	},
	reducers: {
		setCountryList: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const { setCountryList } = countrySlice.actions;

export default countrySlice.reducer;
