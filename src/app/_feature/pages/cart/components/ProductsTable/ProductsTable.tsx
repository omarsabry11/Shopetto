"use client";

import { CartContext } from "@/app/_core/_contexts/CartContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import { Product } from "@/app/_core/interfaces/Product";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { toast } from "react-toastify";
import { Button } from "@mui/material";
import axios from "axios";
import LoadingPage from "@/app/_core/components/LoadingPage/LoadingPage";

export default function ProductsTable() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const [products, setProducts] = useState<Product[]>();
  const [deletingProductLoading, setDeletingProductLoading] = useState(false);

  const {
    removeUserCart,
    updateUserCart,
    getUserCart,
    setNumOfCartProducts,
    setTotalPrice,
  } = useContext(CartContext);

  const queryClient = useQueryClient();

  const getCart = () => {
    return getUserCart();
  };

  const { data, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  useEffect(() => {
    if (data?.data?.data?.products) {
      setProducts(data.data.data.products);
    }
    console.log(data?.data?.data?.products);

    setNumOfCartProducts(data?.data?.numOfCartItems);
    setTotalPrice(data?.data?.data.totalCartPrice);
  }, [data]);

  function updateCart(productId: string, count: number) {
    updateUserCart(productId, count)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      });
  }

  function removeFromCart(productId: string) {
    setSelectedProductId(() => productId);
    setDeletingProductLoading(() => true);
    removeUserCart(productId)
      .then(() => {
        toast.success("Product removed successfully from your cart");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setDeletingProductLoading(() => false);
        queryClient.invalidateQueries({ queryKey: ["cart"] });
      });
  }

  const clearCart = () => {
    axios
      .delete("https://ecommerce.routemisr.com/api/v1/cart", {
        headers: {
          token: localStorage.getItem("userToken"),
        },
      })
      .then((res) => {
        queryClient.invalidateQueries({ queryKey: ["cart"] });
        toast.success("Cart cleared successfully");
      });
  };

  return (
    <>
      <div className={`relative w-3/4 max-xl:w-full overflow-x-auto`}>
        {isLoading ? (
          <LoadingPage></LoadingPage>
        ) : products?.length > 0 ? (
          <>
            <div className="">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-md border border-[#EFF2F6]">
                <thead className="text-[1.05rem] text-gray-700 bg-gray-50 text-center">
                  <tr>
                    <th scope="col" className="px-16 py-3 font-semibold"></th>
                    <th scope="col" className="px-6 py-3 font-semibold"></th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-semibold text-start"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-semibold text-start"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-semibold text-start"
                    >
                      Price
                    </th>

                    <th className="px-6 py-3 w-[5rem] font-semibold"></th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((product: Product) => (
                    <tr
                      key={product._id}
                      className="bg-white border-b  border-gray-200 hover:bg-gray-50 "
                    >
                      <td className="p-4">
                        {product?.product?.imageCover && (
                          <Image
                            style={{ margin: "auto" }}
                            src={product?.product?.imageCover}
                            width={50}
                            height={100}
                            alt="product image"
                          ></Image>
                        )}
                      </td>
                      <td className="px-6 py-4 text-gray-900  text-lg">
                        {product?.product?.title}
                      </td>
                      <td className="px-6 py-4 text-gray-900 text-xs">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-5 h-5 bg-contain bg-no-repeat bg-center rounded-full"
                            style={{
                              backgroundImage: `url(${product?.product?.category?.image})`,
                            }}
                          ></div>
                          <p>{product?.product?.category?.name}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center ">
                        <div className="flex items-center">
                          <button
                            onClick={() =>
                              updateCart(product.product.id, product.count - 1)
                            }
                            className="inline-flex group items-center justify-center p-1 me-3 rounded-[0.15rem] text-sm font-medium h-6 w-6 text-gray-500 bg-white border-gray-300 border-2 cursor-pointer focus:outline-none hover:border-black duration-200"
                            type="button"
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3 group-hover:text-black duration-200"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <div>
                            <p className="text-black font-semibold text-[0.93rem]">
                              {product?.count}
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              updateCart(product.product.id, product.count + 1)
                            }
                            className="inline-flex group items-center justify-center p-1 ms-3 rounded-[0.15rem] text-sm font-medium h-6 w-6 text-gray-500 bg-white border-gray-300 border-2 cursor-pointer focus:outline-none hover:border-black duration-200"
                            type="button"
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3 group-hover:text-black duration-200"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-[1rem] text-gray-900">
                        ${product?.price}
                      </td>
                      <td className="px-6 py-4">
                        {deletingProductLoading &&
                        selectedProductId === product.product.id ? (
                          <div className="-translate-x-3">
                            <DotLoader bgColor="#E7000B"></DotLoader>
                          </div>
                        ) : (
                          <button
                            title="Remove product from cart"
                            onClick={() => removeFromCart(product.product.id)}
                            className={`${
                              !deletingProductLoading && "cursor-pointer"
                            }`}
                            disabled={deletingProductLoading}
                          >
                            <DeleteForeverIcon
                              sx={{ color: "#E7000B" }}
                            ></DeleteForeverIcon>
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Button
              sx={{
                backgroundColor: "#E7000B",
                "&:hover": {
                  backgroundColor: "#E7000B",
                },
                color: "white",
                textTransform: "capitalize",
                fontWeight: "500",
                mx: "auto",
                textAlign: "center",
                width: "fit-content",
                px: "2rem",
                display: "block",
                mt: "1rem",
                borderRadius: "0.2rem",
              }}
              onClick={() => clearCart()}
            >
              Clear Cart
            </Button>
          </>
        ) : (
          <div className="min-h-[26rem] p-5 flex flex-col gap-4  items-center justify-center">
            <Image
              src={"/images/cart/emptyBag.svg"}
              width={100}
              height={100}
              alt={"Bag Image"}
            ></Image>
            <h2 className="text-2xl font-[500]">Your cart is empty</h2>
            <p className="text-lg text-center">
              Don&apos;t miss out on great deals! Start shopping or Sign in to
              view products added.
            </p>
            <Link
              href={"/"}
              className="bg-main text-white px-8 py-3 rounded-md font-[500]"
            >
              Back To Home
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
