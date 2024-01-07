import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "@src/lib/types";
import { HOST } from "@src/lib/validations";
import axios from "axios";

interface RootState {
  products: Product[];
  filteredProducts: Product[];
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

const initialState: RootState = {
  products: [],
  filteredProducts: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<{ name: string }>) => {
      const filteredProducts = state.products.filter((product) => product.name.includes(action.payload.name));
      return { ...state, filteredProducts };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getProducts.fulfilled, (state, action: PayloadAction<{ products: Product[] }>) => {
        state.loading = "fulfilled";
        state.products = action.payload.products;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = "rejected";
        state.error = "Error fetching products";
      });
  },
});

export default productsSlice.reducer;

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  try {
    const response = await axios.get(`${HOST}api/products`);
    const products = response.data.data as Product[];
    return { products };
  } catch (error) {
    throw error;
  }
});
