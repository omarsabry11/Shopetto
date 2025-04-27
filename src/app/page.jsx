import { Metadata } from "next";
import HeroSection from "./_feature/pages/home/components/HeroSection/HeroSection";
import ProtectRoute from "./_core/components/ProtectRoute/ProtectRoute";
import { Bounce, ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
import ToastContainerClient from "./_core/components/ToastContainerClient/ToastContainerClient";
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
  const [productsRes, categoriesRes] = await Promise.all([
    fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
      next: { revalidate: 1000 },
      cache: "force-cache",
    }),
    fetch(`https://ecommerce.routemisr.com/api/v1/categories`, {
      next: { revalidate: 1000 },
      cache: "force-cache",
    }),
  ]);

  const [productsData, categoriesData] = await Promise.all([
    productsRes.json(),
    categoriesRes.json(),
  ]);

  const sortedDatesProducts = [...productsData.data]
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
    .slice(5, 20);

  return (
    <>
      <ToastContainerClient />

      <ProtectRoute>
        <HeroSection data={categoriesData.data}></HeroSection>
        <FeaturedProducts
          title={"Latest Products"}
          products={sortedDatesProducts}
        ></FeaturedProducts>
        <ShopAdvantages></ShopAdvantages>
        <AllProducts products={productsData.data}></AllProducts>
        <Statistics></Statistics>
      </ProtectRoute>
    </>
  );
}
