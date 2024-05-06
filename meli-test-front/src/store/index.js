import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import { productApi } from "./services/productApi";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
