import { Metadata } from "next";
import Slider from "./_feature/pages/home/components/Slider/Slider";
import ShopAdvantages from "./_feature/pages/home/components/ShopAdvantages/ShopAdvantages";
import FeaturedProducts from "./_feature/pages/home/components/FeaturedProducts/FeaturedProducts";
import AllProducts from "./_feature/components/AllProducts/AllProducts";
import Statistics from "./_feature/pages/home/components/Statistics/Statistics";

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
  console.log("iiiiiiiiii", data);

  const highestPriceProducts = data
    .slice()
    .sort((a, b) => b.price - a.price)
    .slice(0, 20);

  console.log("ssssss", highestPriceProducts);

  const sortedDatesProducts = [...data]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(5, 20);
  console.log("tttttt", sortedDatesProducts);

  return (
    <>
      <Slider></Slider>
      <ShopAdvantages></ShopAdvantages>

      <FeaturedProducts
        title={"Latest Products"}
        products={sortedDatesProducts}
      ></FeaturedProducts>

      <AllProducts products={data}></AllProducts>
      <Statistics></Statistics>
      {/* <FeaturedProducts
        title={"Highest Price"}
        products={highestPriceProducts}
      ></FeaturedProducts> */}
    </>
  );
}
