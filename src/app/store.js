import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "../features/showBooksSlice";

export const store = configureStore({
    reducer: {
        booksReducer: booksSlice
    }
})


export default store