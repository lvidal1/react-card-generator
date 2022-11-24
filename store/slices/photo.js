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
	},
});

export const { setRawPhoto } = photoSlice.actions;

export default photoSlice.reducer;
