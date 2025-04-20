"use client";

import { CartContext } from "@/app/_core/_contexts/CartContext";
import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
  const { addUserCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const notify = (message: string) => toast.success(message);

  async function addToCart(productId: string) {
    setIsLoading(true);
    const res = await addUserCart(productId);
    notify(res.data.message);
    setIsLoading(false);

    console.log(res);
  }
  return (
    <>
      <div key={product.id} className="custom-box-shadow rounded-md p-3">
        <Link href={`/product-details/${product._id}`}>
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
        </Link>
        <button
          onClick={() => addToCart(product._id)}
          className="bg-main text-white w-full py-[0.4rem] h-[2rem] flex items-center justify-center rounded-lg cursor-pointer"
        >
          {isLoading ? <DotLoader></DotLoader> : "Add To Cart"}
        </button>
      </div>
    </>
  );
}
