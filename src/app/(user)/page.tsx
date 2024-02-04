import Card from "@src/components/Card/Card";
import Heading from "@src/components/Content/Heading";
import SmallWideCard from "@src/components/Content/SmallWideCard";
import WideCard from "@src/components/Content/WideCard";
import BigCard from "@src/components/Content/BigCard";
import Hero from "@src/components/Hero/Hero";
import axios from "axios";
import { Product } from "@src/utils/types";
import { HOST_URL } from "@src/utils/URLS";
import Wrapper from "@src/components/Wrapper/Wrapper";

export default async function Home() {
  const response = await axios.get(`${HOST_URL}api/products`);
  let products = (await response.data.data) as Product[];

  return (
    <>
      <Hero />
      <Wrapper>
        <main className="relative z-[9999] bg-white p-8 shadow">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <SmallWideCard
              text="British Made Pocket Knife - Oak"
              src="/assets/images/banner-1.jpg"
            />
            <SmallWideCard
              text="Chair Kimi No Isu Project"
              src="/assets/images/banner-2.jpg"
            />
            <SmallWideCard
              text="Merino Lambswool Scarf Moss"
              src="/assets/images/banner-3.jpg"
            />
          </div>
          <Heading title="New Products" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Card product={products[0]} />
            <Card product={products[1]} />
            <BigCard
              text="Creative Design Juicy Pendant Lamp"
              src="/assets/images/banner-2_1.jpg"
            />
            <BigCard
              text="Creative Design Juicy Pendant Lamp"
              src="/assets/images/banner-1_1.jpg"
            />
            <Card product={products[2]} />
            <Card product={products[4]} />
          </div>
          <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <WideCard
              text="Bottle With Wooden Cork"
              category="Products Essentials"
              src="/assets/images/banner-main1.jpg"
            />
            <WideCard
              text="Hauteville Plywood Chair"
              src="/assets/images/banner-main2.jpg"
              category="Products Furniture"
            />
          </div>
          <Heading title="Trending Products" />
          <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {products
              ?.slice(0, 8)
              .map((product) => <Card key={product.id} product={product} />)}
          </div>
          {/* <div className="mb-16 mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
              <BlogPost
                imgUrl={blogImage1.src}
                category={"Funiture"}
                title={"The color scheme for bedrooms"}
                date={"March 22, 2021"}
                desc={
                  "Diga, Koma and Torus are three kitchen utensils designed for Ommo, a new design-oriented brand introduced at the Ambiente show in February 2016. Minimalist approach, bright colors, stainless steel and matte plastic, abstract shapes and curved lines are the defining features of these products designed to be extremely functional, user-friendly and fun"
                }
              />
              <BlogPost
                imgUrl={blogImage2.src}
                category={"Funiture"}
                title={"Create Good Feng Shui in Kitchen"}
                date={"March 22, 2021"}
                desc={
                  "Diga, Koma and Torus are three kitchen utensils designed for Ommo, a new design-oriented brand introduced at the Ambiente show in February 2016. Minimalist approach, bright colors, stainless steel and matte plastic, abstract shapes and curved lines are the defining features of these products designed to be extremely functional, user-friendly and fun"
                }
              />
              <BlogPost
                imgUrl={blogImage3.src}
                category={"Funiture"}
                title={"The color scheme for bedrooms"}
                date={"March 22, 2021"}
                desc={
                  "Diga, Koma and Torus are three kitchen utensils designed for Ommo, a new design-oriented brand introduced at the Ambiente show in February 2016. Minimalist approach, bright colors, stainless steel and matte plastic, abstract shapes and curved lines are the defining features of these products designed to be extremely functional, user-friendly and fun"
                }
              />
            </div> */}
        </main>
      </Wrapper>
    </>
  );
}
