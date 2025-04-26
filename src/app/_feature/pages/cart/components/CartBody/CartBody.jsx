"use client";
import CartCostDetails from "@/app/(pages)/cart/_CartCostDetails/CartCostDetails";
import ProductsTable from "../ProductsTable/ProductsTable";
import { Bounce, ToastContainer } from "react-toastify";

export default function CartBody() {
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
      <div className="flex gap-5 my-5 items-start max-xl:flex-col">
        <ProductsTable></ProductsTable>
        <CartCostDetails
          isCheckoutPage={false}
          isCartPage={true}
        ></CartCostDetails>
      </div>
      
    </>
  );
}
