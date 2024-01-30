import smallCard1 from "@public/assets/images/banner-1.jpg";
import smallCard2 from "@public/assets/images/banner-2.jpg";
import smallCard3 from "@public/assets/images/banner-3.jpg";
import card1 from "@public/assets/images/22.jpg";
import card1Second from "@public/assets/images/22-1.jpg";
import card2 from "@public/assets/images/10-1.jpg";
import card3 from "@public/assets/images/3-1.jpg";
import card4 from "@public/assets/images/13-1.jpg";
import Card from "@src/components/Cards/Card";

import ContentCard from "@src/components/Content/Card";
import banner1 from "@public/assets/images/banner-2_1.jpg";
import banner2 from "@public/assets/images/banner-1_1.jpg";
import Heading from "@src/components/Content/Heading";
import SmallWideCard from "@src/components/Content/SmallWideCard";
import WideCard from "@src/components/Content/WideCard";
import BigCard from "@src/components/Content/BigCard";
import wideCard1 from "@public/assets/images/banner-main1.jpg";
import wideCard2 from "@public/assets/images/banner-main2.jpg";
import BlogPost from "@src/components/Content/BlogPost";
import blogImage1 from "@public/assets/images/blog12.jpeg";
import blogImage2 from "@public/assets/images/blog11.jpeg";
import blogImage3 from "@public/assets/images/blog9_1.jpeg";
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
      <div>
        <Hero />
        <Wrapper>
          <main className="relative z-[9999] bg-white p-8 shadow xl:mb-[-100px] xl:mt-[-100px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <SmallWideCard
                text="British Made Pocket Knife - Oak"
                src={smallCard1.src}
              />
              <SmallWideCard
                text="Chair Kimi No Isu Project"
                src={smallCard2.src}
              />
              <SmallWideCard
                text="Merino Lambswool Scarf Moss"
                src={smallCard3.src}
              />
            </div>
            <Heading title="New Products" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
              <ContentCard
                src={card1.src}
                secondSrc={card1Second.src}
                text="British Made Pocket Knife - Oak"
                rating={5}
                price={86}
                discount={5}
                newProduct={true}
              />
              <ContentCard
                src={card2.src}
                text="Chair Kimi No Isu Project"
                rating={5}
                price={230}
                newProduct={true}
              />
              <BigCard
                src={banner1.src}
                text="Creative Design Juicy Pendant Lamp"
              />
              <BigCard
                src={banner2.src}
                text="Creative Design Juicy Pendant Lamp"
              />
              <ContentCard
                src={card3.src}
                text="E27 PENDANT LAMP"
                rating={5}
                price={96}
                discount={74}
              />
              <ContentCard
                src={card4.src}
                text="Form Chair Normann Black"
                rating={4.5}
                price={200}
                discount={50}
              />
            </div>
            <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <WideCard
                category="Products Essentials"
                text="Bottle With Wooden Cork"
                src={wideCard1.src}
              />
              <WideCard
                category="Products Furniture"
                text="Hauteville Plywood Chair"
                src={wideCard2.src}
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
      </div>
    </>
  );
}
