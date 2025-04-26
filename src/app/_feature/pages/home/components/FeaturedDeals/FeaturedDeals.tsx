import Link from 'next/link'
import React from 'react'


export default function FeaturedDeals() {
  return (
      <div className="flex w-full flex-col gap-5">
          <div className="flex w-full max-lg:flex-col gap-5">
            <div className="py-6 w-[60%] flex-1 max-lg:w-full bg-[url(/images/home/laptop.webp)] bg-cover bg-right flex items-center">
              <div className="ms-6 text-[#1c393d] py-5">
                <span className="mb-2 block text-sm">Laptop Savings</span>
                <h2 className="text-3xl font-semibold">
                  Performance <br />
                  Meets Design
                </h2>
                <p className="my-2">
                  Save up to $250 on select <br /> laptops
                </p>
                <Link
                  className="py-2 px-4 rounded-full border border-[#1c393d] cursor-pointer block w-fit"
                  href={"/categories/6439d2d167d9aa4ca970649f"}
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="py-6 w-[40%] max-lg:w-full bg-[url(/images/home/image3.webp)] bg-cover bg-right flex items-center">
              <div className="ms-6 text-[#1c393d] ">
                <span className="mb-2 block text-sm">Limited Time Offer</span>
                <h2 className="text-3xl font-semibold">Spring Revival</h2>
                <p className="my-2">Save up to 25% on All Furniture.</p>
                <Link
                  className="py-2 px-4 rounded-full border border-[#1c393d] cursor-pointer block w-fit"
                  href={"/categories/6439d58a0049ad0b52b9003f"}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className=" py-3 flex-1 max-lg:w-full bg-[url(/images/home/clothes.webp)] bg-cover bg-right flex items-center">
            <div className="ms-6 text-[#1c393d] py-5">
              <span className="mb-2 block text-sm">Clothing Deals</span>
              <h2 className="text-3xl font-semibold">
                Style Meets <br /> Comfort
              </h2>
              <p className="my-2">
                Save up to 50% on select <br /> clothing items
              </p>
              <Link
                className="py-2 px-4 rounded-full border border-[#1c393d] cursor-pointer block w-fit"
                href={"/categories/6439d5b90049ad0b52b90048"}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div> 

  )
}
