import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  totalPages: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const { setPage, setTotalPages } = productsSlice.actions;

export default productsSlice.reducer;
