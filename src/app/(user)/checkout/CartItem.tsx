import React, { useEffect, useState } from "react";
import { CartProduct, Product } from "@src/utils/types";
import { HOST_URL } from "@src/utils/URLS";
import { useDispatch } from "react-redux";
import { setCart, useCart } from "@src/redux/slices/cartSlice";
import { addToCart, removeFromCart } from "@src/utils/actions";
import Image from "next/image";

export default function CartItem({
  cartProduct,
}: {
  cartProduct: CartProduct;
}) {
  const { count, images, name, price } = cartProduct;
  const dispatch = useDispatch();
  const handleDeleteFromCart = async () => {
    dispatch(setCart(await removeFromCart(cartProduct)));
  };

  const [units, setUnits] = useState<number>(count);
  const increaseUnits = async () => {
    setUnits(units + 1);
    await handleAddToCart(units === 0 ? 0 : units - 1);
  };
  const decreaseUnits = async () => {
    setUnits(units === 0 ? 0 : units - 1);
    await handleAddToCart(units === 0 ? 0 : units - 1);
  };
  const handleAddToCart = async (n: number) => {
    dispatch(setCart(await addToCart({ ...cartProduct, count: n })));
  };
  return (
    <div className="mx-auto flex max-w-xl items-center justify-between gap-2 border-2 p-3">
      <div className="h-14 w-14 md:h-24 md:w-24">
        <Image src={`${HOST_URL}${images[0].slice(1)}`} alt={name} />
      </div>
      <div className="w-2/5">
        <p className="text-sm font-semibold md:text-lg">{name}</p>
        <p className="text-sm text-gray-600 md:text-lg">${price}</p>
      </div>
      <button
        className="px-6 py-4 text-xl font-semibold"
        onClick={decreaseUnits}
      >
        -
      </button>
      <p className="w-8 py-4 text-center">{units}</p>
      <button
        className="px-6 py-4 text-xl font-semibold"
        onClick={increaseUnits}
      >
        +
      </button>
      <p className="mx-2 font-semibold md:text-lg">${+price * +count}</p>
      <button
        className="text-sm text-red-500 hover:opacity-75 md:text-lg"
        onClick={handleDeleteFromCart}
      >
        Delete
      </button>
    </div>
  );
}
