import { configureStore } from "@reduxjs/toolkit";
import TabSlice from "./tabSlice";

export const store = configureStore({
    reducer:{
        'tabmenu':TabSlice.reducer,
    }
})