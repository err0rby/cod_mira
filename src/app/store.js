import { configureStore } from "@reduxjs/toolkit";
import application from "../features/applicationSlice";
import productSlice from "../features/productSlice";
import categorySlice from "../features/categorySlice";

export const store = configureStore({
  reducer: {
    application,
    productSlice,
    categorySlice,
  },
});
