import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `items/${id}`,
    }),
    getProductsBySearch: builder.query({
      query: (q) => `items?q=${q}`,
    }),
  }),
});

export const { useGetProductByIdQuery, useGetProductsBySearchQuery } =
  productApi;
