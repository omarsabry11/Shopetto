import { Metadata } from "next";
import Slider from "./_feature/pages/home/components/Slider/Slider";
import ShopAdvantages from "./_feature/pages/home/components/ShopAdvantages/ShopAdvantages";
import FeaturedProducts from "./_feature/pages/home/components/FeaturedProducts/FeaturedProducts";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};
export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/products`, {
    next: {
      revalidate: 1000,
    },
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <>
      <Slider></Slider>
      <ShopAdvantages></ShopAdvantages>

      <FeaturedProducts
        title={"Featured Products"}
        products={data}
      ></FeaturedProducts>
    </>
  );
}
