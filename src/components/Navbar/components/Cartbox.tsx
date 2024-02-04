import { setCart, useCart } from "@src/redux/slices/cartSlice";
import { cn } from "@src/utils/lib";
import { useState } from "react";
import { X } from "lucide-react";
import { HOST_URL } from "@src/utils/URLS";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@src/utils/actions";
import { CartProduct } from "@src/utils/types";

export default function Cartbox() {
  const cart = useCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };
  const dispatch = useDispatch();
  const handleDeleteFromCart = async (cartProduct: CartProduct) => {
    dispatch(setCart(await removeFromCart(cartProduct)));
  };

  return (
    <>
      <button onClick={handleCartClick} className="flex-center">
        <div className="flex-center hv-eff">
          <div className="relative">
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="mb-1 mr-1 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className="absolute right-0 top-3 h-4 w-4 rounded-full bg-[var(--secondary-color)] text-center text-xs text-white xl:hidden">
              {cart.products.length}
            </div>
          </div>
          <div className="flex-center">
            <span className="hidden xl:block">
              Cart <span>({cart.products.length})</span>
            </span>
          </div>
        </div>
      </button>
      <div
        className={cn(
          "fixed right-0 top-0 h-screen w-full bg-white p-5 shadow transition-all duration-500 md:w-2/5",
          {
            "visible translate-x-0 opacity-100": isCartOpen,
            "invisible translate-x-full opacity-0": !isCartOpen,
          },
        )}
      >
        <button type="button" onClick={handleCartClick}>
          <X className="h-9 w-9 text-black" />
        </button>
        <p className="my-3 text-center text-base font-bold text-black sm:text-3xl">
          Your Cart
        </p>
        <div className="flex flex-col space-y-2">
          {cart.products.map((product) => (
            <table key={product.name}>
              <tbody>
                <tr>
                  <td className="w-24">
                    <Image
                      src={HOST_URL + product.images[0].slice(1)}
                      alt={product.name}
                      width={96}
                      height={64}
                    />
                  </td>
                  <td className="px-3 text-start">
                    <center>
                      <span>{product.name}</span>
                    </center>
                  </td>
                  <td className="px-3 text-start">
                    <center>
                      <span>{product.count}</span>
                      <span> x </span>
                      <span>{product.price}</span>
                    </center>
                  </td>
                  <td className="px-3 text-start">
                    <center>{product.count * product.price}</center>
                  </td>
                  <td className="px-3 text-start">
                    <center>
                      <button
                        className="rounded-full p-2 transition hover:bg-gray-100"
                        onClick={() => handleDeleteFromCart(product)}
                      >
                        <X className="text-red-500" />
                      </button>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
          {cart.products.length === 0 ? (
            <p className="py-12 text-center text-gray-500">Cart is empty</p>
          ) : (
            <div className="mx-auto">
              <a href="/checkout">
                <button className="my-3 bg-[var(--secondary-color)] px-3 py-2 text-base text-white transition hover:opacity-80 sm:text-xl">
                  Checkout
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
