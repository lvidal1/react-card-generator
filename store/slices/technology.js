import { createSlice } from "@reduxjs/toolkit";

export const technologySlice = createSlice({
	name: "technology",
	initialState: {
		list: [],
		byId: {},
	},
	reducers: {
		setTechnologyList: (state, action) => {
			state.list = action.payload;
			state.byId = Object.assign({}, ...action.payload.map((item) => ({ [item.id]: item })))
		},
	},
});

export const { setTechnologyList } = technologySlice.actions;

export default technologySlice.reducer;
