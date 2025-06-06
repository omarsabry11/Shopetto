"use client";

import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import { CartContext } from "@/app/_core/_contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import StarRateIcon from "@mui/icons-material/StarRate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductItemDetails({ data }) {
  const { addUserCart } = useContext(CartContext);
  const notify = (message) => toast.success(message);

  const colors = [
    {
      colorTitle: "Royal Brown",
      ColorCode: "#534029",
    },
    {
      colorTitle: "Platinum",
      ColorCode: "#EBEBEB",
    },
    {
      colorTitle: "Steel Blue",
      ColorCode: "#3A6A90",
    },
    {
      colorTitle: "Black",
      ColorCode: "#000000",
    },
  ];
  const [selectedColor, setSelectedColor] = useState({
    colorTitle: "Royal Brown",
    ColorCode: "#534029",
  });
  const sizes = [6, 8, 10, 14, 18, 20];
  const [selectedSize, setSelectedSize] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = async (productId) => {
    setIsLoading(true);
    const res = await addUserCart(productId);
    notify(res.data.message);
    setIsLoading(false);
    console.log("rrrrrrrrrr", res);
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <Image
            src={`${data?.images[i]}`}
            height={80}
            width={80}
            alt={`product image ${i + 1}`}
            className="mx-auto p-1 "
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="mt-10 mb-20">
        <div className="flex gap-8 max-lg:flex-col">
          <div className="w-[40%] max-lg:w-full bg-blue">
            <Slider {...settings}>
              {data?.images?.slice(0, 4).map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    layout="responsive"
                    width={400}
                    height={400}
                    alt={`product image ${index + 1}`}
                    className="mx-auto p-1"
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="my-10 text-[#292929] flex-1">
            <span className="bg-[#FF311C] px-2 py-[0.25rem] rounded-[0.15rem] text-white text-[0.7rem] font-semibold mb-3 block w-fit">
              {data?.priceAfterDiscount && "- "}
              {data?.priceAfterDiscount
                ? parseInt(
                    ((data.price - data.priceAfterDiscount) / data.price) * 100
                  )
                : 0}{" "}
              %
            </span>

            <h2 className="text-3xl font-[500] mb-3">{data?.title}</h2>

            <div className="flex items-center gap-8">
              <p className="text-[0.875rem]">
                <span className="text-[#7c818b]">in</span> {data?.category.name}
              </p>
              <span className="text-[#d8d9dc]">|</span>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center ">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarRateIcon
                      key={index}
                      sx={{ color: "#FFA439", fontSize: "16px" }}
                    ></StarRateIcon>
                  ))}
                </div>

                <p className="text-[#7c818b] text-sm">
                  {data?.ratingsAverage}{" "}
                  <span className="">
                    ({data?.reviews ? data?.reviews.length : 0} Reviews)
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b-2 border-[#F5F7F9] py-4">
              <p className="text-[1.75rem] font-[500]">
                $
                {data?.priceAfterDiscount
                  ? data?.priceAfterDiscount.toFixed(2)
                  : data?.price.toFixed(2)}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-[0.875rem]">
                  <p className="text-[#1d2128] text-[0.875rem] line-through ">
                    ${data?.price.toFixed(2)}
                  </p>
                  <p className="text-[#ff311c]">
                    Save: $
                    {data?.priceAfterDiscount
                      ? data?.price - data?.priceAfterDiscount
                      : (0).toFixed(2)}
                  </p>
                </div>
                <p className="text-[0.875rem] text-[#13bc96] font-[500]">
                  Available in stock
                </p>
              </div>
            </div>

            <div className="my-6">
              <h3 className="text-2xl mb-3 font-semibold">Description:</h3>
              <p className="text-[#7E7E7E] text-md ">{data?.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg">
                {" "}
                <span className="text-[#8F8F8F]">Color: </span>
                <span className="font-semibold">
                  {selectedColor.colorTitle}
                </span>
              </h3>
              <div className="flex items-center gap-3">
                {colors.map((color) => (
                  <button
                    key={color.colorTitle}
                    onClick={() => {
                      setSelectedColor(color);
                    }}
                    className={`${
                      selectedColor.colorTitle === color.colorTitle && "border"
                    }  w-14 h-8 rounded-lg cursor-pointer`}
                  >
                    <div
                      style={{ backgroundColor: color.ColorCode }}
                      className={`${
                        selectedColor.colorTitle === color.colorTitle &&
                        "border-4"
                      } h-full  border-white rounded-lg`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="mb-3 text-lg">
                {" "}
                <span className="text-[#8F8F8F]">Size: </span>
                <span className="font-semibold">{selectedSize}</span>
              </h3>
              <div className="flex items-center gap-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                    }}
                    className={`${
                      selectedSize === size
                        ? "bg-[#EBEBEB] border "
                        : "border-[#E6E6E6]"
                    } border  w-14 h-9 rounded-lg cursor-pointer`}
                  >
                    <div
                      className={`h-full border-white rounded-lg flex items-center justify-center`}
                    >
                      <p className="font-semibold">{size}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 w-[80%] max-lg:w-full max-lg:mt-10">
              <button
                onClick={() => addToCart(data._id)}
                className="bg-main flex items-center justify-center text-white px-5 h-[3rem] rounded-sm cursor-pointer flex-1"
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
              <Link
                href="/cart/checkout"
                className="px-5 h-[3rem] border-main border-2 text-main hover:bg-[#E6E9F9] duration-300 rounded-sm cursor-pointer flex-1 flex items-center justify-center cursor-pointer"
              >
                <button className="">Checkout Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
