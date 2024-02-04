import { Star } from "lucide-react";

export default function Rating({ rating }: { rating: number }) {
  let stars: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(
        <Star className="m-[-2px] h-5 w-5 fill-[var(--secondary-color)] text-[var(--secondary-color)]" />,
      );
    } else if (i === Math.floor(rating) && rating % 1 >= 0.5) {
      stars.push(
        <Star
          key="half"
          className="m-[-2px] h-5 w-5 text-[var(--secondary-color)]"
        />,
      );
    } else {
      stars.push(
        <Star className="m-[-2px] h-5 w-5 text-[var(--secondary-color)]" />,
      );
    }
  }
  return <div className="my-1 flex space-x-0.5">{...stars}</div>;
}
