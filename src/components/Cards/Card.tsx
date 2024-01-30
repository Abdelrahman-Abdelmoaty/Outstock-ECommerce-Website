import "@src/components/Content/Content.css";

import { Rubik } from "next/font/google";
import Link from "next/link";
import { Product } from "@src/utils/types";
import CardOptions from "../Content/CardOptions";
import Rating from "./Rating";
import AddToCartButton from "./AddToCartButton";
import { HOST_URL } from "@src/utils/URLS";

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
});

export default function Card({
  product: { id, name, images, price, rating },
}: {
  product: Product;
}) {
  const newProduct = false;
  const discount = false;
  return (
    <div className="group relative mb-2 flex cursor-pointer flex-col items-start text-[#23232c]">
      {newProduct && <span className="new-label">New</span>}
      {discount && <span className="discount-label">{discount}%</span>}
      <Link href={`products/${id}`}>
        <div className="relative mb-3 max-h-[300px] overflow-hidden">
          <img
            src={HOST_URL + images[0]?.slice(1)}
            alt={name}
            className={`img-fill z-40 group-hover:${images[1] ? "opacity-0" : "scale-110"} ease-500`}
          />
          {images[1] && (
            <img
              src={HOST_URL + images[1].slice(1)}
              alt={name}
              className="img-fill ease-500 absolute left-0 top-0 z-50 opacity-0 group-hover:scale-110 group-hover:opacity-100"
            />
          )}
          <CardOptions />
        </div>
      </Link>
      <div className="flex w-full flex-col">
        <p className=" text-base capitalize">{name}</p>
        <Rating rating={rating} />
        <div className="relative">
          <div className="ease-500 group-hover:translate-y-[-10px] group-hover:opacity-0">
            <p
              className={`${rubik.className}`}
            >{`$${(price - (price * (discount || 0)) / 100).toFixed(2)}`}</p>
            {discount && (
              <p className="ml-2 text-[#999] line-through">
                ${price.toFixed(2)}
              </p>
            )}
          </div>
          <div className="ease-500 flex-center absolute top-0 translate-y-[10px] opacity-0 hover:text-[var(--secondary-color)] group-hover:translate-y-0 group-hover:opacity-100">
            <AddToCartButton id={id} />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
