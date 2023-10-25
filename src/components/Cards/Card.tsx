import "@src/components/Content/Content.css";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AddIcon from "@mui/icons-material/Add";
import { Rubik } from "next/font/google";
import Link from "next/link";
import { Product, TempProduct } from "@src/lib/types";
import CardOptions from "../Content/CardOptions";
import { Suspense } from "react";
import LoadingComponent from "../LoadingComponent";

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
});

export default function Card({ id, name, rating, price, images }: Product) {
  const newProduct = false;
  const discount = false;
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
    <Suspense fallback={<LoadingComponent />}>
      <Link href={`products/${id}`}>
        <div className="relative flex flex-col items-start text-[#23232c] group cursor-pointer mb-2">
          {newProduct && <span className="new-label">New</span>}
          {discount && <span className="discount-label">{discount}%</span>}
          <div className="h-[324px] w-full mb-3 overflow-hidden relative">
            <img src={"http://localhost:8000" + images[0]} alt={name} className={`img-fill z-40 group-hover:${images[1] ? "opacity-0" : "scale-110"} ease-500`} />
            {images[1] && <img src={"http://localhost:8000" + images[1]} alt={name} className="img-fill group-hover:scale-110 group-hover:opacity-100 opacity-0 absolute top-0 left-0 ease-500 z-50" />}
            <CardOptions />
          </div>
          <div className="flex flex-col">
            <p className="text-sm capitalize">{name}</p>
            {showRating(rating)}
            <div className="relative">
              <div className="group-hover:opacity-0 group-hover:translate-y-[-10px] ease-500">
                <p className={`${rubik.className}`}>{`$${(price - (price * (discount || 0)) / 100).toFixed(2)}`}</p>
                {discount && <p className="text-[#999] ml-2 line-through">${price.toFixed(2)}</p>}
              </div>
              <div className="absolute top-0 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 ease-500 hover:text-[var(--secondary-color)] flex-center">
                <AddIcon />
                <p className="whitespace-nowrap">Add to Cart</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Suspense>
  );
}
