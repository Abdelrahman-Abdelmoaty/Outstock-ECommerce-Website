import Card from "@src/components/Cards/Card";
import { Product } from "@src/lib/types";
import axios from "axios";
import Link from "next/link";
import shopImg from "@public/assets/images/shop-1.jpg";
export default async function page() {
  const response = await axios.get("http://127.0.0.1:8000/api/products");
  const products = (await response.data.data) as Product[];

  return (
    <div>
      <div className="text-center bg-bottom bg-cover bg-no-repeat py-36 w-screen" style={{ backgroundImage: `url(${shopImg.src})` }}>
        <p className="font-semibold text-4xl py-10">Shop</p>
        <p>
          <Link href="/">Home</Link>
          <span className="mx-2">{">"}</span>
          Shop
        </p>
      </div>
      <div className="res-w py-10">
        <div className="flex">
          <div className="w-[20%]">Sidebar</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Card key={product.id} id={product.id} name={product.name} images={product.images} quantity={product.quantity} price={product.price} rating={product.rating} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
