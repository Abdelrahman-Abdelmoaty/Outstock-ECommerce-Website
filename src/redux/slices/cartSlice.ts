import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type Cart } from "@src/utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export interface CartState {
  cart: Cart;
}

const initialState: CartState = {
  cart: {
    products: [],
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<Cart>) => {
      state.cart = action.payload;
    },
  },
});

export default cartSlice.reducer;
export const { setCart } = cartSlice.actions;
export const useCart = () => useSelector((state: RootState) => state.cart.cart);
