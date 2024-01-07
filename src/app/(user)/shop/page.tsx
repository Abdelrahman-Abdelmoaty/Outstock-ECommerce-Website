import Card from "@src/components/Cards/Card";
import { Product } from "@src/lib/types";
import axios from "axios";

import shopImg from "@public/assets/images/shop-1.jpg";
import Search from "@src/components/Utils/Search";
import SearchIcon from "@mui/icons-material/Search";
import { redirect } from "next/navigation";
import { HOST } from "@src/lib/validations";
import Wrapper from "@src/components/Wrapper/Wrapper";

export default async function page({ searchParams }: { searchParams: { query: string } }) {
  const response = await axios.get(`${HOST}api/products`);
  let products = (await response.data.data) as Product[];
  const query = searchParams.query;
  if (query) {
    products = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  }

  const handleSearch = async (formData: FormData) => {
    "use server";
    const query = formData.get("query");
    if (query) {
      const params = new URLSearchParams(`query=${formData.get("query")}`);
      redirect(`?${params}`);
    }
  };
  return (
    <div>
      <div className="text-center bg-bottom bg-cover bg-no-repeat py-36 w-screen" style={{ backgroundImage: `url(${shopImg.src})` }}>
        <p className="font-semibold text-4xl py-10">Shop</p>
        <p>
          <a href="/">Home</a>
          <span className="mx-2">{">"}</span>
          Shop
        </p>
      </div>
      <Wrapper>
        <div className=" py-10">
          <div className="flex gap-5">
            <div className="flex flex-col flex-1 min-w-[250px]">
              <div className="">
                <form action={handleSearch}>
                  <div className="flex border-2 px-4 py-2">
                    <input type="text" name="query" placeholder="Search" className="w-full outline-none" />
                    <SearchIcon className="text-gray-400" />
                  </div>
                </form>
              </div>
            </div>
            {products.length <= 0 && query ? (
              <div className="flex-center flex-[2] py-24">
                <p className="uppercase">Product not found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {products.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
