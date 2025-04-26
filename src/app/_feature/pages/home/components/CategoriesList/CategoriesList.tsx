import Link from "next/link";
import React from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Category } from "@/app/_core/interfaces/Category";

export default function CategoriesList({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className=" border border-[#E5E7EB] pt-4 rounded-lg">
      <button className="ps-3 border-b border-[#E5E7EB] w-full text-left pb-2">
        <p className="flex items-center gap-1.5">
          {" "}
          <FormatListBulletedIcon
            sx={{ width: "1.2rem", height: "1.2rem" }}
          />{" "}
          <span>All Categories</span>
        </p>
      </button>

      <ul>
        {categories.map((category: Category, index: number) => (
          <li key={category._id}>
            <Link href={`/categories/${category._id}`}>
              <div
                className={`cursor-pointer  w-full py-2 ${
                  index !== categories.length - 1 && "border-b border-[#E5E7EB]"
                }`}
              >
                <div className="flex items-center gap-2 ps-3 ">
                  <div
                    className="w-5 h-5 bg-contain bg-no-repeat bg-center rounded-full"
                    style={{ backgroundImage: `url(${category.image})` }}
                  ></div>
                  <p>{category.name}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
