"use client";

import { Bounce, ToastContainer } from "react-toastify";
import ProductItemDetails from "../../ProductItemDetails/ProductItemDetails";

export default function ProductDetailsClient({ data }) {
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
    </>
  );
}
