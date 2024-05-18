import { createSlice } from "@reduxjs/toolkit";

const page = createSlice({
    name: 'page',
    initialState: 1,
    reducers: {
        setPage: (_value, action) => action.payload,
    }
});

export const { setPage } = page.actions;

export default page.reducer;