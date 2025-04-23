"use client";
import { useEffect, useState } from "react";
import ShopAdvantages from "../ShopAdvantages/ShopAdvantages";
import AllProducts from "@/app/_feature/components/AllProducts/AllProducts";
import Statistics from "../Statistics/Statistics";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Slider from "../Slider/Slider";


export default function HomePageContent({ products }) {
  const [sortedDatesProducts, setSortedDatesProducts] = useState([]);
  console.log("sssssssss",products);
  

  useEffect(() => {
    const sorted = [...products]
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
      .slice(5, 20);
    setSortedDatesProducts(sorted);
  }, [products]);

  return (
    <section className="min-h-screen">
      {/* <Slider /> */}
      <FeaturedProducts
        title="Latest Products"
        products={sortedDatesProducts}
      />
      <ShopAdvantages />
      <AllProducts products={products} />
      <Statistics />
    </section>
  );
}
