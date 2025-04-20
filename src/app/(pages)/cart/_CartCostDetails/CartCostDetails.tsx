"use client";

import { CartContext } from "@/app/_core/_contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

export default function CartCostDetails({ isCartPage, onChangePaymentType }) {
  const { totalPrice } = useContext(CartContext);
  return (
    <>
      <div className="w-1/4 max-xl:w-full border p-4 rounded-xl border-[#F4F4F4] ">
        <h3 className="text-[1.2rem] font-[500] mb-4">Cart totals</h3>

        <div className="flex flex-col gap-y-4 pb-2 ">
          <div className="flex items-center justify-between">
            <h4 className="text-[#9D9EA2]">Subtotal</h4>
            <p className="font-[500]">${totalPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <h4 className="text-[#9D9EA2]">Discount</h4>
            <p className="font-[500]">$0.00</p>
          </div>

          <div className="flex items-center justify-between">
            <h4 className="text-[#9D9EA2]">Shipping Costs</h4>
            <p className="font-[500]">
              ${0 > 100 ? totalPrice?.toFixed(2) : (0).toFixed(2)}
            </p>
          </div>
        </div>

        <div className="border-y border-[#F4F4F4] py-3">
          <div className="bg-gray-100 h-[0.4rem] rounded-full mb-3">
            <div className="bg-main w-[60%] h-full rounded-full"></div>
          </div>
          <p className="font-[500] text-center  text-sm mb-3">
            <span className="text-[#717378]">Get Free</span> Shipping{" "}
            <span className="text-[#717378]">for orders over </span>
            <span className="text-red-500">$100.00</span>{" "}
          </p>
          {!isCartPage && (
            <div className="mb-3">
              <div className="flex items-center rounded-sm">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  name="bordered-radio"
                  className="w-4 h-4 bg-red-400 checked:bg-main"
                  value={"cash"}
                  onChange={(e) => onChangePaymentType(e.target.value)}
                  defaultChecked
                />
                <label
                  htmlFor="bordered-radio-1"
                  className="w-full ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Cash on delivery
                </label>
              </div>
              <div className="flex items-center  rounded-sm dark:border-gray-700">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  value={"online"}
                  onChange={(e) => onChangePaymentType(e.target.value)}
                />
                <label
                  htmlFor="bordered-radio-2"
                  className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Online payment
                </label>
              </div>
            </div>
          )}

          {isCartPage ? (
            <Link href={isCartPage ? "/cart/checkout" : "/"}>
              <button className="bg-main text-white text-center py-3 rounded-full block w-full font-[500] cursor-pointer">
                {isCartPage ? "Checkout" : "Place Order"} | $
                {totalPrice?.toFixed(2)}
              </button>
            </Link>
          ) : (
            <button
              form="myForm"
              type="submit"
              className="bg-main text-white text-center py-3 rounded-full block w-full font-[500] cursor-pointer"
            >
              Place Order | ${totalPrice?.toFixed(2)}
            </button>
          )}
        </div>
        <div>
          <h4 className="text-sm text-[#717378] my-4">
            SECURE PAYMENTS PROVIDED BY
          </h4>
          <div className="flex items-center gap-4">
            <div className="border p-2 border-gray-200 rounded-sm h-[2.2rem] w-[3rem] flex items-center justify-center">
              <Image
                src={"/images/cart/masterCard.webp"}
                alt=""
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="border p-2 border-gray-200 rounded-sm h-[2.2rem] w-[3rem] flex items-center justify-center">
              <Image
                src={"/images/cart/Visa.webp"}
                alt=""
                width={20}
                height={20}
              ></Image>
            </div>
            <div className="border p-2 border-gray-200 rounded-sm h-[2.2rem] w-[3rem] flex items-center justify-center">
              <Image
                src={"/images/cart/interac.webp"}
                alt=""
                width={18}
                height={18}
              ></Image>
            </div>
            <div className="border p-2 border-gray-200 rounded-sm h-[2.2rem] w-[3rem] flex items-center justify-center">
              <Image
                src={"/images/cart/bCoin.webp"}
                alt=""
                width={18}
                height={18}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
