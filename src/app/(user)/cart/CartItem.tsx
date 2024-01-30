import React, { useEffect, useState } from "react";
import { Product } from "@src/utils/types";
import {
  getProduct,
  removeFromCart,
  removeProductFromLocalStorage,
} from "@src/redux/slices/authSlice";
import { HOST_URL } from "@src/utils/URLS";
import { useAppDispatch, useAppSelector } from "@src/redux/store";

export default function CartItem({ id, count }: { id: number; count: number }) {
  const [product, setProduct] = useState<Product | null>(null);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProduct(id)
      .then((product) => setProduct(product))
      .catch((error) => console.error("Failed to get product", error))
      .finally(() => setLoading(false));
  }, []);

  const handleDeleteFromCart = () => {
    if (isAuthenticated) {
      dispatch(removeFromCart({ id }));
    } else {
      dispatch(removeProductFromLocalStorage({ id }));
    }
  };
  return (
    <>
      {loading ? (
        <></>
      ) : (
        <div className="mx-auto flex max-w-xl items-center justify-between gap-2 border-2 p-3">
          <div className="h-14 w-14 md:h-24 md:w-24">
            <img
              src={`${HOST_URL}${product?.images[0].slice(1)}`}
              alt={product?.name}
              className="img-fill"
            />
          </div>
          <div className="w-2/5">
            <p className="text-sm font-semibold md:text-lg">{product?.name}</p>
            <p className="text-sm text-gray-600 md:text-lg">
              ${product?.price}
            </p>
          </div>
          <p className="mx-2 text-sm md:text-lg">{count}</p>
          <p className="mx-2 font-semibold md:text-lg">
            ${+(product?.price || 0) * +count}
          </p>
          <button
            className="text-sm text-red-500 hover:opacity-75 md:text-lg"
            onClick={handleDeleteFromCart}
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
