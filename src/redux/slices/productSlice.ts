// productSlice.ts

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@src/lib/types";
import axios from "axios";

interface ProductState {
  products: Product[];
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}
const initialState: ProductState = {
  products: [],
  loading: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = "fulfilled";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred while fetching products.";
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/products");
    return response.data;
  } catch (error) {
    throw error;
  }
});
