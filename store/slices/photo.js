import { createSlice } from "@reduxjs/toolkit";

export const photoSlice = createSlice({
	name: "photo",
	initialState: {
		raw: null,
	},
	reducers: {
		setRawPhoto: (state, action) => {
			state.raw = action.payload;
		},
		resetRawPhoto: (state) => {
			state.raw = null;
		},
	},
});

export const { setRawPhoto, resetRawPhoto } = photoSlice.actions;

export default photoSlice.reducer;
