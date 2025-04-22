import Image from "next/image";
import React, { useContext, useState } from "react";
import { CartContext } from "@/app/_core/_contexts/CartContext";
import { toast } from "react-toastify";
import Link from "next/link";
import DotLoader from "@/app/_core/components/DotLoader/DotLoader";

export default function SecondProductCard({ product }) {
  const { addUserCart } = useContext(CartContext);
  const notify = (message: string) => toast.success(message);
  const [isLoading, setIsLoading] = useState(false);

  console.log(product);

  const addToCart = async (productId: string) => {
    setIsLoading(true);
    const res = await addUserCart(productId);
    notify(res.data.message);
    setIsLoading(false);
    console.log("rrrrrrrrrr", res);
  };
  return (
    <>
      <div className="flex gap-8 p-5 shadow mb-5 rounded max-lg:flex-col">
        <Link
          href={`/product-details/${product?._id}`}
          className="mx-auto block"
        >
          <Image
            width={150}
            height={200}
            src={product?.imageCover}
            alt={product?.title}
          ></Image>
        </Link>

        <div className="flex-1">
          <div className="flex justify-between  mb-10 max-xl:flex-col">
            <div className="w-3/4 max-xl:w-full mb-3">
              <h3 className="text-[#1d2128] w-[70%] max-xl:w-full mb-3 font-[500] text-lg">
                {product?.title}
              </h3>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  <i className="fa-solid fa-star text-[0.6rem] text-[#FFA439]"></i>
                  <i className="fa-solid fa-star text-[0.6rem] text-[#FFA439]"></i>
                  <i className="fa-solid fa-star text-[0.6rem] text-[#FFA439]"></i>
                  <i className="fa-solid fa-star text-[0.6rem] text-[#FFA439]"></i>
                  <i className="fa-solid fa-star text-[0.6rem] text-[#FFA439]"></i>
                </div>
                <p className="text-[#7c818b] text-xs">
                  {product?.ratingsAverage} (
                  {product.reviews ? product.reviews.length : 0} Reviews)
                </p>
              </div>
              <p className="text-sm w-[70%] max-xl:w-full">
                {(() => {
                  const words = product?.description
                    ?.split(/[\s,]+/)
                    .filter(Boolean);
                  const shortDesc = words?.slice(0, 25).join(" ");
                  return words?.length > 2
                    ? shortDesc + " see more..."
                    : shortDesc;
                })()}
              </p>
            </div>

            <div className="w-1/4 max-xl:w-full">
              <div className="flex items-center gap-2 mb-5">
                <p className="text-lg font-[500]">
                  $
                  {product?.priceAfterDiscount
                    ? product?.priceAfterDiscount?.toFixed(2)
                    : product?.price?.toFixed(2)}
                </p>
                <p className="line-through text-sm text-[#adadad]">
                  ${product?.price?.toFixed(2)}
                </p>
              </div>
              <Link
                href={`/product-details/${product?._id}`}
                className="px-5 h-[3rem] border-main border-2 text-main hover:bg-[#E6E9F9] duration-300 rounded-sm cursor-pointer flex-1 flex items-center justify-center mb-3"
              >
                <button className="cursor-pointer">View Details</button>
              </Link>
              <button
                onClick={() => addToCart(product?._id)}
                className="bg-main flex items-center justify-center text-white px-5 h-[3rem] w-full rounded-sm cursor-pointer flex-1"
              >
                {" "}
                {isLoading ? (
                  <DotLoader></DotLoader>
                ) : (
                  <>
                    <svg
                      width="24"
                      height="24"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      viewBox="0 0 32 32"
                      className="inline"
                      fill="white"
                    >
                      <path d="M25.248 22.4l3.552-14.4h-18.528l-0.96-4.8h-6.112v3.2h3.488l3.2 16h15.36zM24.704 11.2l-1.968 8h-10.24l-1.6-8h13.808z"></path>
                      <path d="M25.6 26.4c0 1.325-1.075 2.4-2.4 2.4s-2.4-1.075-2.4-2.4c0-1.325 1.075-2.4 2.4-2.4s2.4 1.075 2.4 2.4z"></path>
                      <path d="M14.4 26.4c0 1.325-1.075 2.4-2.4 2.4s-2.4-1.075-2.4-2.4c0-1.325 1.075-2.4 2.4-2.4s2.4 1.075 2.4 2.4z"></path>
                    </svg>
                    <span className="ms-1">Add To Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <div
                className="w-5 h-5 bg-contain bg-no-repeat bg-center rounded-full"
                style={{ backgroundImage: `url(${product?.brand?.image})` }}
              ></div>
              <p className="text-xs">{product?.brand?.name}</p>
            </div>

            <div className="flex items-center gap-1.5 text-[#7c818b] text-sm cursor-pointer">
              <i className="fa-regular fa-heart"></i>
              <span className="font-[500]">WishList</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
