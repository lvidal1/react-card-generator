import { createSlice } from "@reduxjs/toolkit";

export const positionSlice = createSlice({
	name: "position",
	initialState: {
		list: [],
	},
	reducers: {
		setPositionList: (state, action) => {
			state.list = action.payload;
		},
	},
});

export const { setPositionList } = positionSlice.actions;

export default positionSlice.reducer;
