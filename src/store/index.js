import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainer.slice";
import page from "./slices/page.slice";
import selectValue from "./slices/selectValue.slice";

const store = configureStore({
    reducer: {
        trainer,
        page,
        selectValue,
    }
});

export default store;