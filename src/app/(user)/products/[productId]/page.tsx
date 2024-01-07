"use client";
import axios from "axios";
import { Product } from "@src/lib/types";
import { useEffect, useState } from "react";
import LoadingComponent from "@src/components/Loading/LoadingComponent";
import Rating from "@src/components/Cards/Rating";
import { addProductToCartLocalStorageUtil, removeProductFromLocalStorageUtil } from "@src/lib/utils";
import { useAppDispatch, useAppSelector } from "@src/redux/store";
import { addProductToLocalStorage, addToCart, removeFromCart } from "@src/redux/slices/authSlice";
import { HOST } from "@src/lib/validations";
import Wrapper from "@src/components/Wrapper/Wrapper";

async function getProduct(id: string) {
  const response = await axios.get(`${HOST}api/products/${id}`);
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
  const savedProduct = useAppSelector((state) => state.auth.user?.cart.products.find((pr) => pr.id === +params.productId));
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
    setMainImg(e.currentTarget.src.slice(e.currentTarget.src.indexOf("/products")));
  };
  const handleBorder = (e: React.MouseEvent<HTMLDivElement>) => {
    for (let i = 0; i < product.images.length; i++) {
      document.getElementById(`productImg${i}`)?.classList.remove("border-2");
    }
    e.currentTarget.classList.add("border-2");
  };

  return (
    <div className="bg-[var(--primary-color)]">
      <Wrapper>
        {isPending ? (
          <div className=" flex-center h-[60vh]">
            <LoadingComponent />
          </div>
        ) : (
          <div className=" flex py-10">
            <div className="flex flex-col gap-y-2">
              {product.images.map((img: string, index: number) => (
                <div key={img} className={`w-24 h-30 cursor-pointer border-[var(--secondary-color)] p-1 ${index === 0 && "border-2"}`} id={`productImg${index}`} onClick={handleBorder}>
                  <img src={`${HOST}${img.slice(1)}`} alt={product.name} className="img-fill" onClick={changeMainImg} />
                </div>
              ))}
            </div>
            <div className="max-w-[35rem]">
              <img src={`${HOST}${mainImg.slice(1)}`} alt={product.name} className="img-fill" />
            </div>
            <div className="flex flex-col gap-y-3">
              <div>
                <p className="font-medium text-2xl">{product.name}</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Rating rating={product.rating} />
                <a href="/" className="text-sm hover:text-[var(--secondary-color)] ease-500 border-x-2 px-4">
                  1 Review
                </a>
                <a href="/" className="text-sm hover:text-[var(--secondary-color)] ease-500">
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
                  Availability: <span className="font-medium">{product.quantity > 0 ? "In stock" : "Out of stock"}</span>
                </p>
              </div>
              <hr className="my-5" />
              <div>
                <p className="text-sm text-gray-600">
                  Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus.
                </p>
              </div>
              <hr className="my-5" />
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex border-2 border-gray-300 w-fit items-center">
                    <button className="px-6 py-4 font-semibold text-xl" onClick={decreaseCount}>
                      -
                    </button>
                    <p className="py-4 w-20 text-center">{count}</p>
                    <button className="px-6 py-4 font-semibold text-xl" onClick={increaseCount}>
                      +
                    </button>
                  </div>
                  <div>
                    <button className="uppercase !bg-black text-white py-4 px-16 font-semibold border-2 border-black animate-btn" onClick={handleAddToCart}>
                      <span>add to cart</span>
                    </button>
                  </div>
                </div>
                <div>{/* <button>Add to wishlist</button> */}</div>
                <div>{product.category && <p>Category: {product.category}</p>}</div>
              </div>
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
}
