import { notFound } from "next/navigation";
import ProductItemDetails from "../../../_feature/pages/product-details/ProductItemDetails/ProductItemDetails";
import RelatedProducts from "../../../_feature/pages/product-details/components/RelatedProducts/RelatedProducts";
import { Bounce, ToastContainer } from "react-toastify";
import ProtectRoute from "@/app/_core/components/ProtectRoute/ProtectRoute";

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
          className="text-center"
        />
        <ProductItemDetails data={data} />
        <RelatedProducts productCategory={data?.category?.name} />
      </>
    );
  } catch (error) {
    console.error("Error fetching product details:", error);
    return notFound();
  }
}
