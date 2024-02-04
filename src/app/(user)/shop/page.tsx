import Card from "@src/components/Card/Card";
import { Product } from "@src/utils/types";
import axios from "axios";
import shopImg from "@public/assets/images/shop-1.jpg";
import { redirect } from "next/navigation";
import { HOST_URL } from "@src/utils/URLS";
import Wrapper from "@src/components/Wrapper/Wrapper";
import { Search } from "lucide-react";

export default async function page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const response = await axios.get(`${HOST_URL}api/products`);
  let products = (await response.data.data) as Product[];
  const query = searchParams.query;
  if (query) {
    products = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()),
    );
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
      <div
        className="w-screen bg-cover bg-bottom bg-no-repeat py-36 text-center"
        style={{ backgroundImage: `url(${shopImg.src})` }}
      >
        <p className="py-10 text-4xl font-semibold">Shop</p>
        <p>
          <a href="/">Home</a>
          <span className="mx-2">{">"}</span>
          Shop
        </p>
      </div>
      <Wrapper>
        <div className="py-10">
          <div className="flex flex-col items-center gap-5">
            <div className="flex w-full min-w-[250px] flex-1 flex-col">
              <div className="">
                <form action={handleSearch}>
                  <div className="flex border-2 px-4 py-2">
                    <input
                      type="text"
                      name="query"
                      placeholder="Search"
                      className="w-full outline-none"
                    />
                    <Search className="text-gray-400" />
                  </div>
                </form>
              </div>
            </div>
            {products?.length <= 0 && query ? (
              <div className="flex-center flex-[2] py-24">
                <p className="uppercase">Product not found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {products?.map((product) => (
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
