import FeaturedProducts from "@/app/_feature/pages/home/components/FeaturedProducts/FeaturedProducts";
import React from "react";

export default async function RelatedProducts({ productCategory }) {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`);
  const { data } = await res.json();

  const filteredProducts = data.filter(
    (product) => product.category.name === productCategory
  );

  return (
    <>
      <FeaturedProducts
        title={"Related Products"}
        products={filteredProducts}
      ></FeaturedProducts>
    </>
  );
}
