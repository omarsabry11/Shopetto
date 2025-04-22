import ProtectRoute from "@/app/_core/components/ProtectRoute/ProtectRoute";
import CartBody from "@/app/_feature/pages/cart/components/CartBody/CartBody";
import CartHeader from "@/app/_feature/pages/cart/components/CartHeader/CartHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart",
  description: "Cart page",
};
export default function Cart() {
  return (
    <>
      <ProtectRoute>
        <section className="my-10">
          <CartHeader isCartPage={true}></CartHeader>
          <CartBody></CartBody>
        </section>
      </ProtectRoute>
    </>
  );
}
