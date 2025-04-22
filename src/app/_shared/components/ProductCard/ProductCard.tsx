"use client";

import { CartContext } from "@/app/_core/_contexts/CartContext";
import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import { Product } from "@/app/_core/interfaces/Product";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

type Props = {
  product: Product;
  onAddToWishList?: () => void;
  handleChangeSelectedProduct?: () => void;
  onRemoveFromWishList?: () => void;
};
export default function ProductCard({
  product,
  onAddToWishList = () => {},
  productIds = [],
  addToWishlistLoading = false,
  handleChangeSelectedProduct = () => {},
  selectedProductId = null,
  onRemoveFromWishList = () => {},
  onAddToCart = () => {},
  addToCartLoading = false,
  handleChangeSelectedAddedProduct = () => {},
  selectedAddedProductId = null,
}: Props) {
  return (
    <>
      <div
        key={product.id}
        className="custom-box-shadow rounded-md p-3 relative"
      >
        {productIds.includes(product._id) ? (
          <button
            disabled={addToWishlistLoading}
            onClick={() => {
              onRemoveFromWishList(product._id);
              handleChangeSelectedProduct(product._id);
            }}
            className={`absolute top-3 right-4 ${
              !addToWishlistLoading && "cursor-pointer"
            } `}
          >
            {addToWishlistLoading && selectedProductId === product._id ? (
              <i className="fa fa-spin fa-spinner text-gray-400"></i>
            ) : (
              <i className="fa-solid fa-heart text-red-500 text-lg"></i>
            )}
          </button>
        ) : (
          <button
            disabled={addToWishlistLoading}
            onClick={() => {
              onAddToWishList(product._id);
              handleChangeSelectedProduct(product._id);
            }}
            className={`absolute top-3 right-4 ${
              !addToWishlistLoading && "cursor-pointer"
            } `}
          >
            {addToWishlistLoading && selectedProductId === product._id ? (
              <i className="fa fa-spin fa-spinner text-gray-400"></i>
            ) : (
              <i className="fa-regular fa-heart text-gray-400 text-lg"></i>
            )}
          </button>
        )}

        <div className="w-1/2 mx-auto">
          <Image
            src={product.imageCover}
            alt={product.title}
            width={250}
            height={250}
          ></Image>
        </div>
        <div>
          <div className="my-3">
            <span className="text-sm text-[#ADADAD]">
              {product.category.name}
            </span>
            <h3
              title={product.description}
              className="text-[#253D4E] font-semibold text-[1.05rem]"
            >
              {(() => {
                const words = product.description
                  .split(/[\s,]+/)
                  .filter(Boolean);
                const shortDesc = words.slice(0, 2).join(" ");
                return words.length > 2 ? shortDesc + "..." : shortDesc;
              })()}
            </h3>

            <div className="flex justify-between items-center mb-1">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-xl">
                  $
                  {product?.priceAfterDiscount
                    ? product?.priceAfterDiscount.toFixed(2)
                    : product?.price.toFixed(2)}
                </p>
                <p className="line-through font-semibold text-[#ADADAD] text-sm">
                  ${product?.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-1 ">
                <i className="fa-solid fa-star text-xs text-[#FFA439]" />
                <p className="text-[#7c818b] text-sm font-[500]">
                  {product.ratingsAverage}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <div
                className="w-5 h-5 bg-contain bg-no-repeat bg-center rounded-full"
                style={{ backgroundImage: `url(${product.brand.image})` }}
              ></div>
              <p className="text-xs">{product.brand.name}</p>
            </div>
          </div>
        </div>

        <div>
          <button
            disabled={addToCartLoading}
            onClick={() => {
              handleChangeSelectedAddedProduct(product._id);
              onAddToCart(product._id);
            }}
            className={`bg-main text-white w-full h-[2rem] flex items-center justify-center rounded-md ${
              !addToCartLoading && "cursor-pointer"
            }  mb-2`}
          >
            {addToCartLoading && selectedAddedProductId === product._id ? (
              <DotLoader></DotLoader>
            ) : (
              "Add To Cart"
            )}
          </button>
          <Link
            href={`/product-details/${product._id}`}
            className="border-main border-2 text-main hover:bg-[#E6E9F9] duration-300 w-full h-[2rem] flex items-center justify-center rounded-md cursor-pointer"
          >
            View Details
          </Link>
        </div>
      </div>
    </>
  );
}
