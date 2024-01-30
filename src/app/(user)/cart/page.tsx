"use client";
import { useAppSelector } from "@src/redux/store";
import CartItem from "./CartItem";
import { useEffect, useRef, useState } from "react";
import Wrapper from "@src/components/Wrapper/Wrapper";
import LoadingComponent from "@src/components/Loading/LoadingComponent";
import { setCart, useCart } from "@src/redux/slices/cartSlice";
import { useStore } from "react-redux";
import { Cart } from "@src/utils/types";
import { useUser } from "@src/redux/slices/userSlice";

export default function page() {
  let initialCart: Cart = {
    products: [],
  };
  const user = useUser();
  if (user.user) {
    initialCart = user.user.cart;
  }
  // if (!initialized.current) {
  //   store.dispatch(setCart(initialCart));
  //   initialized.current = true;
  // }
  const cart = useCart();
  return (
    <Wrapper>
      <div className="mx-auto my-12 min-h-[50vh]">
        <div className="my-auto">
          <p className="mb-10 text-center text-4xl font-semibold">Cart</p>
        </div>
        {cart.products.length === 0 ? (
          <div>
            <p className="text-center text-2xl">Nothing in the cart!</p>
          </div>
        ) : (
          cart.products.map((product, idx) => (
            <CartItem key={idx} id={product.id} count={product.count} />
          ))
        )}
      </div>
    </Wrapper>
  );
}

// const localStorageProducts = useAppSelector(
//   (state) => state.auth.localStorage.products,
// );
// const userCartProducts = useAppSelector(
//   (state) => state.auth.user?.cart.products,
// );
// const [cartProducts, setCartProducts] = useState<
//   { id: number; count: number }[]
// >([]);
// const [loading, setLoading] = useState<boolean>(true);
// useEffect(() => {
//   userCartProducts ? setCartProducts(userCartProducts) : setCartProducts(localStorageProducts);
//   setLoading(false);
// }, [localStorageProducts, userCartProducts]);
