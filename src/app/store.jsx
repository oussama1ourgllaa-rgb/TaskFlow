import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../features/tasksSlice";

export const Store=configureStore({
    reducer:{
        tasks:taskSlice
    }
});