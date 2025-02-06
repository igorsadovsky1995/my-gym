import { configureStore } from "@reduxjs/toolkit";
import gymSlice from "./gymSlice";

const store = configureStore({
    reducer:{
        gym:gymSlice
    }
}) 

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
