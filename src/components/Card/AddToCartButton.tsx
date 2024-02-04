"use client";

import { useState, useTransition } from "react";
import { Plus } from "lucide-react";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { useDispatch } from "react-redux";
import { setCart } from "@src/redux/slices/cartSlice";
import { addToCart } from "@src/utils/actions";
import { Product } from "@src/utils/types";
import { toast } from "sonner";

export default function AddToCartButton({ product }: { product: Product }) {
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  const addItem = () => {
    setCount(count + 1);
    startTransition(async () => {
      dispatch(setCart(await addToCart({ ...product, count: count + 1 })));
    });
    toast.success("Product added to cart");
  };
  return (
    <button onClick={addItem} className="flex items-center">
      {!isPending ? (
        <>
          <Plus />
          <p className="inline-block">Add To Cart</p>
        </>
      ) : (
        <LoadingSpinner sz="4" />
      )}
    </button>
  );
}
