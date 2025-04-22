/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import WishListItem from "../components/WishListItem/WishListItem";
import axios from "axios";
import { CartContext } from "@/app/_core/_contexts/CartContext";
import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import Link from "next/link";
import Image from "next/image";
import { WishlistContext } from "@/app/_core/_contexts/wishlistContext";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function WishListContent() {
  const [wishListProducts, setWishListProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeletedLoading, setIsDeletedLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { addUserCart } = useContext(CartContext);
  const { getWishlistItems } = useContext(WishlistContext);

  const getWishList = useCallback((isFirstTime = false) => {
    if (isFirstTime) {
      setIsPageLoading(true);
    }
    getWishlistItems()
      .then((res) => {
        setWishListProducts(res?.data?.data);
      })
      .finally(() => setIsPageLoading(false));
  }, []);

  useEffect(() => {
    getWishList();
  }, []);

  const addToCart = useCallback((productId: string) => {
    setSelectedProductId(productId);
    const addItem = async (productId) => {
      setIsLoading(true);
      const res = await addUserCart(productId);
      removeItem(productId, true);
      setIsLoading(false);
      toast.success(res?.data?.message || "Product added to cart");
      console.log("rrrrrrrrrrrr", res);
    };
    addItem(productId);
  }, []);

  useEffect(() => {
    getWishList(true);
  }, []);

  const removeItem = useCallback((productId: string, isAddedToCart = false) => {
    setSelectedProductId(productId);
    if (!isAddedToCart) {
      setIsDeletedLoading(() => true);
    }

    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        getWishList();
        console.log(res);
        setIsDeletedLoading(false);
        toast.success(res?.data?.message || "Product removed from wishlist");
      });
  }, []);

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
      <section>
        {wishListProducts.length ? (
          <h1 className="text-5xl text-center my-10 font-semibold text-black tracking-wide">
            Wishlist{" "}
          </h1>
        ) : null}

        <div>
          {isPageLoading ? (
            <div className="flex justify-center items-center h-lvh">
              <div className="mb-[10rem]">
                <DotLoader bgColor="black"></DotLoader>
              </div>
            </div>
          ) : wishListProducts.length === 0 ? (
            <div className="min-h-[calc(100vh-10rem)] flex justify-center ">
              <div className="text-center flex flex-col gap-y-4 mt-[10rem]">
                <Image
                  className="mx-auto mb-3"
                  src={"/images/wishlist/box.png"}
                  width={100}
                  height={100}
                  alt="Empty wishlist"
                ></Image>
                <h2 className="text-2xl font-[500]">
                  Looks like you don’t have anything saved
                </h2>
                <Link
                  href={"/"}
                  className="bg-black text-white px-8 py-3 rounded-md font-[500] w-fit mx-auto"
                >
                  Return To Home
                </Link>
              </div>
            </div>
          ) : (
            wishListProducts.map((product) => (
              <WishListItem
                key={product?._id}
                product={product}
                onRemoveWishList={removeItem}
                onAddToCart={addToCart}
                isLoading={isLoading}
                selectedProductId={selectedProductId}
                isDeletedLoading={isDeletedLoading}
              ></WishListItem>
            ))
          )}
        </div>
      </section>
    </>
  );
}
