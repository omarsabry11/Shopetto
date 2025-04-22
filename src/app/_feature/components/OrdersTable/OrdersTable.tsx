import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import Image from "next/image";
import React from "react";

export default function OrdersTable({ products }) {
  return (
    <div>
      <table className="w-full text-sm rtl:text-right text-gray-500 shadow">
        <thead className="text-[1.05rem] text-gray-700 bg-gray-50 text-center dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3 font-semibold">
              {" "}
            </th>
            <th scope="col" className="px-6 py-3 font-semibold"></th>
            <th scope="col" className="px-6 py-3 font-semibold text-center">
              Category
            </th>
            <th scope="col" className="px-6 py-3 font-semibold text-center">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3 font-semibold text-start">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr
              key={product._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
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
              <td className="px-6 py-4 text-gray-900 dark:text-white text-lg">
                {product?.product?.title}
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-white text-xs">
                <div className="flex items-center gap-2 justify-center">
                  <div
                    className="w-5 h-5 bg-contain bg-no-repeat bg-center rounded-full"
                    style={{
                      backgroundImage: `url(${product?.product?.category?.image})`,
                    }}
                  ></div>
                  <p className="">{product?.product?.category?.name}</p>
                </div>
              </td>
              <td className="px-6 py-4 text-center ">
                <div className="flex items-center">
                  <p className="text-black font-semibold text-[0.93rem] w-full text-center">
                    {product?.count}
                  </p>
                </div>
              </td>
              <td className="px-6 py-4 font-semibold text-[1rem] text-gray-900 dark:text-white">
                ${product?.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
