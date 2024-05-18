import { createSlice } from "@reduxjs/toolkit";

const selectValue = createSlice({
    name: 'selectValue',
    initialState: '',
    reducers: {
        setSelectValue: (_value, action) => action.payload,
    }
});

export const { setSelectValue } = selectValue.actions;

export default selectValue.reducer;