import smallCard1 from "@public/assets/images/banner-1.jpg";
import smallCard2 from "@public/assets/images/banner-2.jpg";
import smallCard3 from "@public/assets/images/banner-3.jpg";
import card1 from "@public/assets/images/22.jpg";
import card1Second from "@public/assets/images/22-1.jpg";
import card2 from "@public/assets/images/10-1.jpg";
import card3 from "@public/assets/images/3-1.jpg";
import card4 from "@public/assets/images/13-1.jpg";
import Card from "@src/components/Content/Card";
import Heading from "@src/components/Content/Heading";
import SmallWideCard from "@src/components/Content/SmallWideCard";

export default function Home() {
  return (
    <main className="w-[100%] xl:w-[60%]  mx-auto pb-[10000px] p-8 bg-white shadow xl:mt-[-100px] relative z-[9999] grid grid-cols-1 sm:grid-cols-3 gap-x-5">
      <SmallWideCard text="British Made Pocket Knife - Oak" src={smallCard1.src} />
      <SmallWideCard text="Chair Kimi No Isu Project" src={smallCard2.src} />
      <SmallWideCard text="Merino Lambswool Scarf Moss" src={smallCard3.src} />
      <Heading title="New Products" />
      <Card src={card1.src} secondSrc={card1Second.src} text="British Made Pocket Knife - Oak" rating={5} price={86} discount={5} newProduct={true} />
      <Card src={card2.src} text="Chair Kimi No Isu Project" rating={5} price={230} newProduct={true} />
      <Card src={card3.src} text="E27 PENDANT LAMP" rating={5} price={96} discount={74} />
      <Card src={card4.src} text="Form Chair Normann Black" rating={4.5} price={200} discount={50} />
    </main>
  );
}
