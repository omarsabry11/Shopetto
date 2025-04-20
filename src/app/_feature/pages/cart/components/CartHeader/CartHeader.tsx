"use client";
import { CartContext } from "@/app/_core/_contexts/CartContext";
import React, { useContext } from "react";

export default function CartHeader({ isCartPage }) {
  const { numOfCartProducts } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between pb-4 border-b border-b-gray-200 text-[#060709]  font-[500]">
      <h2 className=" text-2xl">{isCartPage ? "Your Cart" : "Shipping"}</h2>
      <span className="text-lg">( {numOfCartProducts} )</span>
    </div>
  );
}
