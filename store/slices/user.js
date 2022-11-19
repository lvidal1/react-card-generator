import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        fullname: "John Doe"
    },
    reducers: {
        setName: (state, action) => {
            state.fullname = action.payload
        }
    }
})

export const { setName } = userSlice.actions;

export default userSlice.reducer