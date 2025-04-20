"use client";
import CartCostDetails from "@/app/(pages)/cart/_CartCostDetails/CartCostDetails";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function CartBody() {
  return (
    <>
      <div className="flex gap-5 my-5 items-start max-xl:flex-col">
        <ProductsTable></ProductsTable>
        <CartCostDetails isCartPage={true}></CartCostDetails>
      </div>
    </>
  );
}
