import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
export default function Rating({ rating }: { rating: number }) {
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
}
