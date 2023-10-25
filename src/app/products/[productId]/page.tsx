import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import axios from "axios";
import { Product } from "@src/lib/types";

export default async function Product({ params }: { params: { productId: string } }) {
  const response = await axios.get(`http://127.0.0.1:8000/api/products/${params.productId}`);
  const product = (await response.data.data) as Product;

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
      <div className="bg-[var(--primary-color)]">
        <div className="res-w flex py-10">
          <div className="flex flex-col gap-y-2">
            {product.images.map((img: string) => (
              <div className="w-24 h-30 border-2 border-[var(--secondary-color)]">
                <img src={`http://localhost:8000${img}`} alt={product.name} className="img-fill" />
              </div>
            ))}
          </div>
          <div className="max-w-[35rem]">
            <img src={`http://localhost:8000${product.images[0]}`} alt={product.name} className="img-fill" />
          </div>
          <div className="flex flex-col gap-y-3">
            <div>
              <p className="font-medium text-2xl">Form Chair chaise Normann</p>
            </div>
            <div className="flex items-center gap-x-4">
              {showRating(5)}
              <a href="" className="text-sm hover:text-[var(--secondary-color)] ease-500 border-x-2 px-4">
                1 Review
              </a>
              <a href="" className="text-sm hover:text-[var(--secondary-color)] ease-500">
                Add Your Review
              </a>
            </div>
            <div>
              <p className="text-2xl">$100.00</p>
            </div>
            <div className="flex gap-x-2">
              <button>Facebook</button>
              <button>Twitter</button>
            </div>
            <div>
              <p className="text-sm">
                Availability: <span className="font-medium">In stock</span>
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
              <div>
                <button>-</button>
                <p>5</p>
                <button>+</button>
              </div>
              <div>
                <button>love</button>
                <button>compare</button>
              </div>
              <div>
                <p>Cateory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
