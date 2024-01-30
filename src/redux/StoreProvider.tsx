"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import { setCart } from "./slices/cartSlice";
import { Cart, User } from "@src/utils/types";
import { setUser } from "./slices/userSlice";

export default function StoreProvider({
  user,
  cart,
  children,
}: {
  user: User | null;
  cart: Cart;
  children: React.ReactNode;
}) {
  const storeRef = useRef<ReturnType<typeof createStore> | null>(null);

  if (!storeRef.current) {
    storeRef.current = createStore();
    storeRef.current.dispatch(setUser(user));
    storeRef.current.dispatch(setCart(cart));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
