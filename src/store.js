import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/BookSlice";
import bankReducer from "./redux/BankSlice";
import themeReducer from "./redux/ThemeSlice"
import ContentSlice from "./redux/ContentSlice";
import ProductSlice from "./redux/ProductSlice";

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        bank:bankReducer,
        theme:themeReducer,
        content:ContentSlice,
        product:ProductSlice
    }
})