"use client";
import axios from "axios";
import { Product } from "@src/utils/types";
import { useEffect, useState } from "react";
import LoadingComponent from "@src/components/Loading/LoadingComponent";
import Rating from "@src/components/Cards/Rating";
import {
  addProductToCartLocalStorageUtil,
  removeProductFromLocalStorageUtil,
} from "@src/utils/lib";
import { useAppDispatch, useAppSelector } from "@src/redux/store";
import {
  addProductToLocalStorage,
  addToCart,
  removeFromCart,
} from "@src/redux/slices/authSlice";
import { HOST_URL } from "@src/utils/URLS";
import Wrapper from "@src/components/Wrapper/Wrapper";

async function getProduct(id: string) {
  const response = await axios.get(`${HOST_URL}api/products/${id}`);
  const product = (await response.data.data) as Product;
  return product as Product;
}

export default function Product({ params }: { params: { productId: string } }) {
  const [isPending, setPending] = useState(true);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "string",
    price: 0,
    quantity: 0,
    rating: 0,
    images: [],
  });
  const [mainImg, setMainImg] = useState<string>(product.images[0]);
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const savedProduct = useAppSelector((state) =>
    state.auth.user?.cart.products.find((pr) => pr.id === +params.productId),
  );
  const [count, setCount] = useState<number>(savedProduct?.count || 0);

  useEffect(() => {
    getProduct(params.productId).then((pr) => {
      setProduct(pr);
      setMainImg(pr.images[0]);
      setPending(false);
    });
  }, []);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const handleAddToCart = () => {
    if (count === 0) {
      if (isAuthenticated) {
        dispatch(removeFromCart({ id: +params.productId }));
      } else {
        removeProductFromLocalStorageUtil(+params.productId);
      }
    } else {
      if (isAuthenticated) {
        dispatch(addToCart({ id: +params.productId, count }));
      } else {
        addProductToCartLocalStorageUtil(+params.productId, count);
        dispatch(addProductToLocalStorage({ id: +params.productId, count }));
      }
    }
  };
  const changeMainImg = (e: React.MouseEvent<HTMLImageElement>) => {
    setMainImg(
      e.currentTarget.src.slice(e.currentTarget.src.indexOf("/products")),
    );
  };
  const handleBorder = (e: React.MouseEvent<HTMLDivElement>) => {
    for (let i = 0; i < product.images.length; i++) {
      document
        .getElementById(`productImg${i}`)
        ?.classList.remove("border-[var(--secondary-color)]");
    }
    e.currentTarget.classList.add("border-[var(--secondary-color)]");
  };

  return (
    <div className="bg-[var(--primary-color)]">
      <Wrapper>
        {isPending ? (
          <div className=" flex-center h-[60vh]">
            <LoadingComponent />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5 py-20 lg:flex-row lg:items-start">
            <div className="flex gap-2 lg:flex-col">
              {product.images.map((img: string, index: number) => (
                <div
                  key={img}
                  className={`h-30 w-24 cursor-pointer border-2 p-1 ${index === 0 && "border-[var(--secondary-color)]"}`}
                  id={`productImg${index}`}
                  onClick={handleBorder}
                >
                  <img
                    src={`${HOST_URL}${img.slice(1)}`}
                    alt={product.name}
                    className="img-fill"
                    onClick={changeMainImg}
                  />
                </div>
              ))}
            </div>
            <div className="mx-20 w-full border-2 border-white lg:w-[80rem]">
              <img
                src={`${HOST_URL}${mainImg.slice(1)}`}
                alt={product.name}
                className="img-fill"
              />
            </div>
            <div className="flex flex-col gap-y-3">
              <div>
                <p className="text-2xl font-medium">{product.name}</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Rating rating={product.rating} />
                <a
                  href="/"
                  className="ease-500 border-x-2 px-4 text-sm hover:text-[var(--secondary-color)]"
                >
                  1 Review
                </a>
                <a
                  href="/"
                  className="ease-500 text-sm hover:text-[var(--secondary-color)]"
                >
                  Add Your Review
                </a>
              </div>
              <div>
                <p className="text-2xl">${product.price}</p>
              </div>
              <div className="flex gap-x-2">
                <button>Facebook</button>
                <button>Twitter</button>
              </div>
              <div>
                <p className="text-sm">
                  Availability:{" "}
                  <span className="font-medium">
                    {product.quantity > 0 ? "In stock" : "Out of stock"}
                  </span>
                </p>
              </div>
              <hr className="my-5" />
              <div>
                <p className="text-sm text-gray-600">
                  Typi non habent claritatem insitam, est usus legentis in iis
                  qui facit eorum claritatem. Investigationes demonstraverunt
                  lectores legere me lius quod ii legunt saepius. Claritas est
                  etiam processus.
                </p>
              </div>
              <hr className="my-5" />
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex w-fit items-center border-2 border-gray-300">
                    <button
                      className="px-6 py-4 text-xl font-semibold"
                      onClick={decreaseCount}
                    >
                      -
                    </button>
                    <p className="w-8 py-4 text-center">{count}</p>
                    <button
                      className="px-6 py-4 text-xl font-semibold"
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
                <div>{/* <button>Add to wishlist</button> */}</div>
                <div>
                  {product.category && <p>Category: {product.category}</p>}
                </div>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
}
