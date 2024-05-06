import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./services/productApi";

export const store = configureStore({
  reducer: {
    // Listo para agregar slices si se necesita en el futuro
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
