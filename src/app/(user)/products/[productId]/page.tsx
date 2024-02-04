import { Product } from "@src/utils/types";
import Rating from "@src/components/Card/Rating";
import { HOST_URL } from "@src/utils/URLS";
import Wrapper from "@src/components/Wrapper/Wrapper";
import AddToCart from "./AddToCart";

export default async function Product({
  params: { productId },
}: {
  params: { productId: string };
}) {
  const response = await fetch(`${HOST_URL}api/products/${productId}`);
  const res = await response.json();
  const product: Product = res.data;
  return (
    <div className="bg-[var(--primary-color)]">
      <Wrapper>
        <div className="flex flex-col items-center gap-5 py-20 md:flex-row md:items-start">
          <div className="flex gap-2 md:flex-col">
            {product.images.map((img: string, index: number) => (
              <div
                key={img}
                className={`h-30 w-24 cursor-pointer border-2 p-1 ${index === 0 && "border-[var(--secondary-color)]"}`}
                id={`productImg${index}`}
                // onClick={handleBorder}
              >
                <img
                  src={`${HOST_URL}${img.slice(1)}`}
                  alt={product.name}
                  className="img-fill"
                  //   onClick={changeMainImg}
                />
              </div>
            ))}
          </div>
          <img
            src={HOST_URL + product.images[0].slice(1)}
            alt={product.name}
            className="max-w-md flex-1 border-2 border-white"
          />
          <div className="flex flex-col gap-y-3">
            <div>
              <p className="text-2xl font-medium">{product.name}</p>
            </div>
            {/* <div className="flex items-center gap-x-4">
              <Rating rating={product.rating} />
              <a
                href="/"
                className="ease-500 border-x-2 px-4 text-sm hover:text-[var(--secondary-color)]"
              >
                1 Review
              </a>
              <a
                href="/"
                className="ease-500 text-sm hover:text-[var(--secondary-color)]"
              >
                Add Your Review
              </a>
            </div> */}
            <div>
              <p className="text-2xl">${product.price}</p>
            </div>
            {/* <div className="flex gap-x-2">
              <button>Facebook</button>
              <button>Twitter</button>
            </div> */}
            <div>
              <p className="text-sm">
                Availability:{" "}
                <span className="font-medium">
                  {product.quantity > 0 ? "In stock" : "Out of stock"}
                </span>
              </p>
            </div>
            <hr className="my-5" />
            <div>
              <p className="text-sm text-gray-600">
                Typi non habent claritatem insitam, est usus legentis in iis qui
                facit eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius. Claritas est etiam
                processus.
              </p>
            </div>
            <hr className="my-5" />
            <div>
              <AddToCart product={product} />
              {/* <div><button>Add to wishlist</button></div> */}
              <div>
                {product.category && <p>Category: {product.category}</p>}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
