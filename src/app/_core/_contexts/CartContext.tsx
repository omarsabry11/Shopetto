"use client";

import axios from "axios";
import { createContext, ReactNode, useState } from "react";
interface CartContextType {
  addUserCart: (productId: string) => Promise<any>;
  removeUserCart: (productId: string) => Promise<any>;
  updateUserCart: (productId: string, count: number) => Promise<any>;
  getUserCart: () => Promise<any>;
  numOfCartProducts: number;
  setNumOfCartProducts: React.Dispatch<React.SetStateAction<number>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

function getUserCart() {
  return axios
    .get("https://ecommerce.routemisr.com/api/v1/cart", {
      headers: {
        token: localStorage.getItem("userToken"),
      },
    })
    .then((res) => res);
}
function addUserCart(productId: string) {
  return axios
    .post(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        productId,
      },
      {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }
    )
    .then((res) => res);
}
function removeUserCart(productId: string) {
  return axios
    .delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,

      {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }
    )
    .then((res) => res);
}
function updateUserCart(productId: string, count: number) {
  return axios
    .put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,

      { count: `${count}` },
      {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      }
    )
    .then((res) => res);
}

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [numOfCartProducts, setNumOfCartProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <CartContext.Provider
      value={{
        addUserCart,
        removeUserCart,
        updateUserCart,
        getUserCart,
        numOfCartProducts,
        setNumOfCartProducts,
        totalPrice,
        setTotalPrice,
      }}
    >
      {" "}
      {children}
    </CartContext.Provider>
  );
}
