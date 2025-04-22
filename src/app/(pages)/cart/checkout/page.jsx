"use client";
import React, { useContext, useEffect, useState } from "react";
import CartCostDetails from "../_CartCostDetails/CartCostDetails";
import CartHeader from "@/app/_feature/pages/cart/components/CartHeader/CartHeader";
import { useFormik } from "formik";
import axios from "axios";
import { CartContext } from "@/app/_core/_contexts/CartContext";
import { useRouter } from "next/navigation";
import ProtectRoute from "@/app/_core/components/ProtectRoute/ProtectRoute";

export default function Checkout() {
  const { getUserCart, setTotalPrice, setNumOfCartProducts } =
    useContext(CartContext);

  const [cartId, setCartId] = useState(null);
  const router = useRouter();

  const fetchCart = async () => {
    try {
      const res = await getUserCart();
      setTotalPrice(() => res.data.data.totalCartPrice);
      setNumOfCartProducts(() => res.data.numOfCartItems);
      setCartId(() => res.data.cartId);

      console.log("Cart Response:", res);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  console.log("ccccccccccc", cartId);

  const [paymentType, setPaymentType] = useState("cash");

  const handlePlaceOrder = (values) => {
    if (paymentType === "cash") {
      console.log(values);
      console.log(cartId);

      axios
        .post(
          `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
          {
            shippingAddress: values,
          },
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          router.push("/allorders");
        })
        .catch((err) => {
          console.error("Order error:", err);
        });
    } else if (paymentType === "online") {
      axios
        .post(
          `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
          {
            shippingAddress: values,
          },
          {
            headers: {
              token: localStorage.getItem("userToken"),
            },
          }
        )
        .then((res) => {
          console.log(res);
          window.location.href = res?.data?.session?.url;
        })
        .catch((err) => {
          console.error("Order error:", err);
        });
    }
  };
  const formik = useFormik({
    initialValues: {
      city: "",
      phone: "",
      details: "",
    },
    onSubmit: handlePlaceOrder,
  });

  const handleChangePaymentType = (value) => {
    console.log(value);
    setPaymentType(value);
  };

  return (
    <>
      <ProtectRoute>
        <section className="my-10 ">
          <div>
            <div className="flex gap-5 my-5 items-start max-xl:flex-col">
              <div className="w-3/4 max-xl:w-full">
                <CartHeader isCartPage={false}></CartHeader>

                <form
                  id="myForm"
                  className="my-10 flex flex-col gap-5"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="flex items-center gap-6 max-md:flex-col">
                    <div className="flex-1 max-md:w-full">
                      <label
                        className="text-[#46494F] mb-2 block font-[500]"
                        htmlFor="firstName"
                      >
                        First Name *
                      </label>

                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="border border-gray-400 p-2 rounded-lg w-full"
                      />
                    </div>
                    <div className="flex-1 max-md:w-full">
                      <label
                        className="text-[#46494F] mb-2 block font-[500]"
                        htmlFor="lastName"
                      >
                        Last Name *
                      </label>

                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="border border-gray-400 p-2 rounded-lg w-full"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-6 max-md:flex-col">
                    <div className="flex-1 max-md:w-full">
                      <label
                        className="text-[#46494F] mb-2 block font-[500]"
                        htmlFor="city"
                      >
                        City *
                      </label>

                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        name="city"
                        id="city"
                        className="border border-gray-400 p-2 rounded-lg w-full"
                      />
                    </div>
                    <div className="flex-1 max-md:w-full">
                      <label
                        className="text-[#46494F] mb-2 block font-[500]"
                        htmlFor="phone"
                      >
                        Phone *
                      </label>

                      <input
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="tel"
                        name="phone"
                        id="phone"
                        className="border border-gray-400 p-2 rounded-lg w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="text-[#46494F] mb-2 block font-[500]"
                      htmlFor="details"
                    >
                      Details *
                    </label>
                    <textarea
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="details"
                      id="details"
                      className="border border-gray-400 p-2 rounded-lg w-full h-[6rem]"
                    ></textarea>
                  </div>
                  {/* <button type="submit" className="bg-main text-white text-center py-2 rounded-full block w-full font-[500] cursor-pointer">
                  Place Order | $
                  {totalPrice.toFixed(2)}
                </button> */}
                </form>
              </div>

              <CartCostDetails
                onChangePaymentType={handleChangePaymentType}
                isCartPage={false}
              ></CartCostDetails>
            </div>
          </div>
        </section>
      </ProtectRoute>
    </>
  );
}
