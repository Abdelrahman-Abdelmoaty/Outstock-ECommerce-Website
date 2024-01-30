import "@src/components/Content/Content.css";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AddIcon from "@mui/icons-material/Add";
import { Rubik } from "next/font/google";

import { TempProduct } from "@src/utils/types";
import CardOptions from "./CardOptions";
import { Suspense } from "react";
import LoadingComponent from "../Loading/LoadingComponent";

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
});

export default function Card({
  src,
  secondSrc,
  text,
  rating,
  price,
  discount,
  newProduct,
}: TempProduct) {
  const showRating = (rating: number) => {
    let stars: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(
          <StarRoundedIcon className="m-[-2px] h-5 w-5 text-[var(--secondary-color)]" />,
        );
      } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
        stars.push(
          <StarHalfRoundedIcon
            key="half"
            className="m-[-2px] h-5 w-5 text-[var(--secondary-color)]"
          />,
        );
      } else {
        stars.push(
          <StarOutlineRoundedIcon className="m-[-2px] h-5 w-5 text-[var(--secondary-color)]" />,
        );
      }
    }
    return <div className="mb-1">{...stars}</div>;
  };

  return (
    <Suspense fallback={<LoadingComponent />}>
      <a href="/" className="col-span-1 row-span-1">
        <div className="group relative mb-2 flex cursor-pointer flex-col items-start text-[#23232c]">
          {newProduct && <span className="new-label">New</span>}
          {discount && <span className="discount-label">{discount}%</span>}
          <div className="relative mb-3 max-h-[324px] w-full overflow-hidden object-cover">
            <img
              src={src}
              alt={text}
              className={`img-fill z-40 group-hover:${secondSrc ? "opacity-0" : "scale-110"} ease-500`}
            />
            {secondSrc && (
              <img
                src={secondSrc}
                alt={text}
                className="img-fill ease-500 absolute left-0 top-0 z-50 opacity-0 group-hover:scale-110 group-hover:opacity-100"
              />
            )}
            <CardOptions />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">{text}</span>
            {showRating(rating)}
            <div className="relative">
              <div className="ease-500 group-hover:translate-y-[-10px] group-hover:opacity-0">
                <span
                  className={`${rubik.className}`}
                >{`$${(price - (price * (discount || 0)) / 100).toFixed(2)}`}</span>
                {discount && (
                  <span className="ml-2 text-[#999] line-through">
                    ${price.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="ease-500 absolute top-0 translate-y-[10px] opacity-0 hover:text-[var(--secondary-color)] group-hover:translate-y-0 group-hover:opacity-100">
                <AddIcon />
                <span>Add to Cart</span>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Suspense>
  );
}
