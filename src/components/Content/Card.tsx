import "@src/components/Content/Content.css";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import AddIcon from "@mui/icons-material/Add";
import { Rubik } from "next/font/google";
import Link from "next/link";

const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
});

type cardProps = {
  src: string;
  secondSrc?: string;
  text: string;
  rating: number;
  price: number;
  discount?: number;
  newProduct?: boolean;
};

export default function Card({ src, secondSrc, text, rating, price, discount, newProduct }: cardProps) {
  const showRating = (rating: number) => {
    let stars: JSX.Element[] = [];

    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<StarRoundedIcon key={i} className="text-[var(--secondary-color)] m-[-2px] w-5 h-5" />);
    }

    if (rating % 1 >= 0.5) {
      stars.push(<StarHalfRoundedIcon key="half" className="text-[var(--secondary-color)] m-[-2px] w-5 h-5" />);
    }

    for (let i = Math.ceil(rating); i < 5; i++) {
      stars.push(<StarOutlineRoundedIcon key={i} className="text-[var(--secondary-color)] m-[-2px] w-5 h-5" />);
    }

    return <div className="mb-1">{...stars}</div>;
  };
  return (
    <Link href="/">
      <div className="relative flex flex-col items-start text-[#23232c] group cursor-pointer mb-2">
        {/* NEW PRODUCT TAG */}
        {newProduct && <span className="new-label">New</span>}
        {/* DISCOUNT TAG */}
        {discount && <span className="discount-label">{discount}%</span>}
        <div className="w-[255px] h-[324px] object-cover mb-3 overflow-hidden relative">
          {/* FIRST IMAGE */}
          <img src={src} alt={text} className={`img-fill z-40 group-hover:${secondSrc ? "opacity-0" : "scale-110"} ease-500`} />
          {/* SECOND IMAGE */}
          {secondSrc && <img src={secondSrc} alt={text} className="img-fill group-hover:scale-110 group-hover:opacity-100 opacity-0 absolute top-0 left-0 ease-500 z-50" />}
        </div>
        <div className="flex flex-col">
          <span className="text-sm">{text}</span>
          {/* RATING */}
          {showRating(rating)}
          <div className="relative">
            <div className="group-hover:opacity-0 group-hover:translate-y-[-10px] ease-500">
              {/* PRICE AFTER DISCOUNT */}
              <span className={`font-[Rubik] ${rubik.className}`}>{`$${(price - (price * (discount || 0)) / 100).toFixed(2)}`}</span>
              {/* PRICE BEFORE DISCOUNT */}
              {discount && <span className="text-[#999] ml-2 line-through">${price.toFixed(2)}</span>}
            </div>
            {/* ADD TO CART BUTTON */}
            <div className="absolute top-0 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 ease-500 hover:text-[var(--secondary-color)]">
              <AddIcon />
              <span>Add to Cart</span>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}








