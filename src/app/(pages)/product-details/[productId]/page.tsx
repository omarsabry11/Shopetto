import Image from "next/image";
import React from "react";
import ProductItemDetails from "../_product/page";
import RelatedProducts from "../../../_feature/pages/product-details/components/RelatedProducts/RelatedProducts";
import { Bounce, ToastContainer } from "react-toastify";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  console.log(params.productId);
  const res = await fetch(
    `${process.env.API_URL}/products/${params.productId}`,
    {
      next: {
        revalidate: 1000,
      },
    }
  );
  const { data } = await res.json();
  console.log(data);

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
      <ProductItemDetails data={data}></ProductItemDetails>
      <RelatedProducts productCategory={data?.category?.name}></RelatedProducts>
    </>
  );
}
