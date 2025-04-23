import { Metadata } from "next";
import Slider from "./_feature/pages/home/components/Slider/Slider";
import ShopAdvantages from "./_feature/pages/home/components/ShopAdvantages/ShopAdvantages";
import FeaturedProducts from "./_feature/pages/home/components/FeaturedProducts/FeaturedProducts";
import AllProducts from "./_feature/components/AllProducts/AllProducts";
import Statistics from "./_feature/pages/home/components/Statistics/Statistics";
import ProtectRoute from "./_core/components/ProtectRoute/ProtectRoute";
import { Bounce, ToastContainer } from "react-toastify";
import HomePageContent from "./_feature/pages/home/components/HomePageContent/HomePageContent";

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

  const sortedDatesProducts = [...data]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(5, 20);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        className={"text-center"}
      />

      <ProtectRoute>
        <section className="min-h-[calc(100vh-10rem)]">
          <Slider></Slider>
          <FeaturedProducts
            title={"Latest Products"}
            products={sortedDatesProducts}
          ></FeaturedProducts>
          <ShopAdvantages></ShopAdvantages>
          <AllProducts products={data}></AllProducts>
          <Statistics></Statistics>
          {/* <HomePageContent products={data}></HomePageContent> */}
        </section>
      </ProtectRoute>
    </>
  );
}
