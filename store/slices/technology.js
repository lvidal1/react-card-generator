import { createSlice } from "@reduxjs/toolkit";

export const technologySlice = createSlice({
	name: "technology",
	initialState: {
		list: [],
	},
	reducers: {
		setTechnologyList: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const { setTechnologyList } = technologySlice.actions;

export default technologySlice.reducer;
