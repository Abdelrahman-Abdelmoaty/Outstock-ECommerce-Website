"use client";
import { setCart, useCart } from "@src/redux/slices/cartSlice";
import { addToCart } from "@src/utils/actions";
import { Product } from "@src/utils/types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function AddToCart({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const cart = useCart();
  const [count, setCount] = useState<number>(
    cart.products.filter((pr) => pr.id === product.id)[0]?.count || 0,
  );
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count === 0 ? 0 : count - 1);
  };
  const handleAddToCart = async () => {
    dispatch(setCart(await addToCart({ ...product, count })));
    if (count > 0) {
      toast.success("Product added to cart");
    }
  };
  return (
    <div className="flex items-center gap-4">
      <div className="flex w-fit items-center border-2 border-gray-300">
        <button
          className="px-3 py-2 text-xl font-semibold lg:px-6 lg:py-4"
          onClick={decreaseCount}
        >
          -
        </button>
        <p className="w-8 py-4 text-center">{count}</p>
        <button
          className="px-3 py-2 text-xl font-semibold lg:px-6 lg:py-4"
          onClick={increaseCount}
        >
          +
        </button>
      </div>

      <div>
        <button
          className="animate-btn border-2 border-black !bg-black px-8 py-4 font-semibold uppercase text-white"
          onClick={handleAddToCart}
        >
          <span>add to cart</span>
        </button>
      </div>
    </div>
  );
}
