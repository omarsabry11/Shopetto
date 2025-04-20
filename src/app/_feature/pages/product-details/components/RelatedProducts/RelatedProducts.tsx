import FeaturedProducts from "@/app/_feature/pages/home/components/FeaturedProducts/FeaturedProducts";
import React from "react";

export default async function RelatedProducts({
  productCategory,
}: {
  ProductCategory: string;
}) {
  const res = await fetch(`${process.env.API_URL}/products`);
  const { data } = await res.json();
  console.log("pppp", data);

  const filteredProducts = data.filter(
    (product) => product.category.name === productCategory
  );
  console.log("ffffff", filteredProducts);

  return (
    <>
      <FeaturedProducts
        title={"Related Products"}
        products={filteredProducts}
      ></FeaturedProducts>
    </>
  );
}
