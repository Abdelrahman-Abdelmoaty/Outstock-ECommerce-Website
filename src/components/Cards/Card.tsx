import "@src/components/Content/Content.css";

import { Rubik } from "next/font/google";
import Link from "next/link";
import { Product } from "@src/lib/types";
import CardOptions from "../Content/CardOptions";
import AddIcon from "@mui/icons-material/Add";
import Rating from "./Rating";
import AddToCartButton from "./AddToCartButton";
import { HOST } from "@src/lib/validations";

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
});

export default function Card({ product: { id, name, images, price, rating } }: { product: Product }) {
  const newProduct = false;
  const discount = false;
  return (
    <div className="relative flex flex-col items-start text-[#23232c] group cursor-pointer mb-2">
      {newProduct && <span className="new-label">New</span>}
      {discount && <span className="discount-label">{discount}%</span>}
      <Link href={`products/${id}`}>
        <div className="h-[324px] w-[280px] mb-3 overflow-hidden relative">
          <img src={HOST + images[0].slice(1)} alt={name} className={`img-fill z-40 group-hover:${images[1] ? "opacity-0" : "scale-110"} ease-500`} />
          {images[1] && <img src={HOST + images[1].slice(1)} alt={name} className="img-fill group-hover:scale-110 group-hover:opacity-100 opacity-0 absolute top-0 left-0 ease-500 z-50" />}
          <CardOptions />
        </div>
      </Link>
      <div className="flex flex-col w-full">
        <p className=" text-base capitalize">{name}</p>
        <Rating rating={rating} />
        <div className="relative">
          <div className="group-hover:opacity-0 group-hover:translate-y-[-10px] ease-500">
            <p className={`${rubik.className}`}>{`$${(price - (price * (discount || 0)) / 100).toFixed(2)}`}</p>
            {discount && <p className="text-[#999] ml-2 line-through">${price.toFixed(2)}</p>}
          </div>
          <div className="absolute top-0 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 ease-500 hover:text-[var(--secondary-color)] flex-center">
            <AddToCartButton id={id} />
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
