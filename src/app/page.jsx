import { Metadata } from "next";
import Slider from "./_feature/pages/home/components/Slider/Slider";
import ShopAdvantages from "./_feature/pages/home/components/ShopAdvantages/ShopAdvantages";
import FeaturedProducts from "./_feature/pages/home/components/FeaturedProducts/FeaturedProducts";
import AllProducts from "./_feature/components/AllProducts/AllProducts";
import Statistics from "./_feature/pages/home/components/Statistics/Statistics";
import ProtectRoute from "./_core/components/ProtectRoute/ProtectRoute";

export const metadata = {
  title: "Home",
  description: "Home page",
};
export default async function Home() {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
    next: {
      revalidate: 1000,
    },
  });
  const { data } = await res.json();

  // const highestPriceProducts = data
  //   .slice()
  //   .sort((a, b) => b.price - a.price)
  //   .slice(0, 20);


  const sortedDatesProducts = [...data]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(5, 20);

  return (
    <>
      <ProtectRoute>
        <Slider></Slider>
        <FeaturedProducts
          title={"Latest Products"}
          products={sortedDatesProducts}
        ></FeaturedProducts>
        <ShopAdvantages></ShopAdvantages>

        <AllProducts products={data}></AllProducts>
        <Statistics></Statistics>
        {/* <FeaturedProducts
        title={"Highest Price"}
        products={highestPriceProducts}
      ></FeaturedProducts> */}
      </ProtectRoute>
    </>
  );
}
