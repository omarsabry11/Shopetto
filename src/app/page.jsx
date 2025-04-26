import { Metadata } from "next";
import HeroSection from "./_feature/pages/home/components/HeroSection/HeroSection";
import ProtectRoute from "./_core/components/ProtectRoute/ProtectRoute";
import { Bounce, ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
const FeaturedProducts = dynamic(() =>
  import("./_feature/pages/home/components/FeaturedProducts/FeaturedProducts")
);
const AllProducts = dynamic(() =>
  import("./_feature/components/AllProducts/AllProducts")
);
const ShopAdvantages = dynamic(() =>
  import("./_feature/pages/home/components/ShopAdvantages/ShopAdvantages")
);
const Statistics = dynamic(() =>
  import("./_feature/pages/home/components/Statistics/Statistics")
);
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
        <HeroSection></HeroSection>
        <FeaturedProducts
          title={"Latest Products"}
          products={sortedDatesProducts}
        ></FeaturedProducts>
        <ShopAdvantages></ShopAdvantages>
        <AllProducts products={data}></AllProducts>
        <Statistics></Statistics>
      </ProtectRoute>
    </>
  );
}
