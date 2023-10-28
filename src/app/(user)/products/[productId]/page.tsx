"use client";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import axios from "axios";
import { Product } from "@src/lib/types";
import { Suspense, useEffect, useState } from "react";
import LoadingComponent from "@src/components/LoadingComponent";
import { ImgProps } from "next/dist/shared/lib/get-img-props";

export default function Product({ params }: { params: { productId: string } }) {
  const [loading, setLoading] = useState<boolean>(true);
  const [count, setCount] = useState<number>(1);
  const [mainImg, setMainImg] = useState<string>("");
  const [product, setProduct] = useState<Product>({ id: 0, name: "", price: 0, quantity: 0, rating: 0, images: [] });
  useEffect(() => {
    (async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/products/${params.productId}`);
      const responseProduct = (await response.data.data) as Product;
      setMainImg(`http://localhost:8000${responseProduct.images[0]}`);
      setProduct(responseProduct);
      setLoading(false);
    })();
  }, []);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const decreaseCount = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };
  const changeMainImg = (e: React.MouseEvent<HTMLImageElement>) => {
    setMainImg(e.currentTarget.src);
  };
  const handleBorder = (e: React.MouseEvent<HTMLDivElement>) => {
    for (let i = 0; i < product.images.length; i++) {
      document.getElementById(`productImg${i}`)?.classList.remove("border-2");
    }
    e.currentTarget.classList.add("border-2");
  };
  const showRating = (rating: number) => {
    let stars: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<StarRoundedIcon key={i} className="text-[var(--secondary-color)] m-[-2px] w-5 h-5" />);
      } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
        stars.push(<StarHalfRoundedIcon key="half" className="text-[var(--secondary-color)] m-[-2px] w-5 h-5" />);
      } else {
        stars.push(<StarOutlineRoundedIcon key={i} className="text-[var(--secondary-color)] m-[-2px] w-5 h-5" />);
      }
    }
    return <div className="mb-1">{...stars}</div>;
  };
  return (
    <div>
      {loading ? (
        <div className="h-[70vh] flex-center">
          <LoadingComponent />
        </div>
      ) : (
        <div className="bg-[var(--primary-color)]">
          <div className="res-w flex py-10">
            <div className="flex flex-col gap-y-2">
              {product.images.map((img: string, index: number) => (
                <div key={img} className={`w-24 h-30 cursor-pointer border-[var(--secondary-color)] p-1 ${index === 0 && "border-2"}`} id={`productImg${index}`} onClick={handleBorder}>
                  <img src={`http://localhost:8000${img}`} alt={product.name} className="img-fill" onClick={changeMainImg} />
                </div>
              ))}
            </div>
            <div className="max-w-[35rem]">
              <img src={mainImg} alt={product.name} className="img-fill" />
            </div>
            <div className="flex flex-col gap-y-3">
              <div>
                <p className="font-medium text-2xl">{product.name}</p>
              </div>
              <div className="flex items-center gap-x-4">
                {showRating(product.rating)}
                <a href="" className="text-sm hover:text-[var(--secondary-color)] ease-500 border-x-2 px-4">
                  1 Review
                </a>
                <a href="" className="text-sm hover:text-[var(--secondary-color)] ease-500">
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
                    <button className="uppercase !bg-black text-white py-4 px-16 font-semibold border-2 border-black animate-btn">
                      <span>add to cart</span>
                    </button>
                  </div>
                </div>
                <div>{/* <button>Add to wishlist</button> */}</div>
                <div>{product.category && <p>Category: {product.category}</p>}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
