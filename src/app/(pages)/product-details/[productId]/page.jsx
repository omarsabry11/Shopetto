import { notFound } from "next/navigation";

import ProductDetailsClient from "../../../_feature/pages/product-details/components/ProductDetailsClient/ProductDetailsClient";
import RelatedProducts from "@/app/_feature/pages/product-details/components/RelatedProducts/RelatedProducts";

export default async function ProductDetails({ params }) {
  const { productId } = params;
  console.log(productId);

  if (!productId) return notFound();

  try {
    const res = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${productId}`,
      {
        next: { revalidate: 1000 },
      }
    );

    if (!res.ok) return notFound();

    const { data } = await res.json();

    if (!data) return notFound();

    return (
      <>
        <ProductDetailsClient data={data} />
        <RelatedProducts productCategory={data?.category?.name} />
      </>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return notFound();
  }
}
