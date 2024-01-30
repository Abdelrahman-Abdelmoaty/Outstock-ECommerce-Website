import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { getProductsFromLocalStorageUtil } from "@src/utils/lib";
import { useAppSelector } from "@src/redux/store";
import { useEffect, useState } from "react";
import { useCart } from "@src/redux/slices/cartSlice";
export default function Cartbox() {
  // const state = useAppSelector((state) => state.auth);
  // const [productsCount, setProductsCount] = useState<number>(0);
  // useEffect(() => {
  //   if (state.isAuthenticated) {
  //     setProductsCount(state.user?.cart.products.length || 0);
  //   } else {
  //     setProductsCount(state.localStorage.products.length);
  //   }
  // }, [state.localStorage.products, state.user?.cart.products]);

  const { products } = useCart();

  return (
    <a href="/cart">
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
            {products.length}
          </div>
        </div>
        <div className="flex-center">
          <span className="hidden xl:block">
            Cart <span>({products.length})</span>
          </span>
        </div>
      </div>
    </a>
  );
}
