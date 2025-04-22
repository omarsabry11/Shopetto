import ProtectRoute from "@/app/_core/components/ProtectRoute/ProtectRoute";
import CategoriesBody from "@/app/_feature/pages/categoreis/components/CategoriesBody/CategoriesBody";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Categories",
  description: "Categories page",
};
export default async function CategoryDetails({ params }) {
  const categoryID = params.categoryDetails;

  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
    next: {
      revalidate: 1000,
    },
  });
  const { data } = await res.json();

  const categoriesRes = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories`,
    {
      next: {
        revalidate: 1000,
      },
    }
  );
  const categoriesData = await categoriesRes.json();

  const categories = categoriesData.data;

  const categoryNameRes = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${categoryID}`,
    {
      next: {
        revalidate: 1000,
      },
    }
  );
  const categoryName = await categoryNameRes.json();

  console.log("NAmeeeeee", categoryName);

  return (
    <ProtectRoute>
      <section className="mt-5">
        <CategoriesBody
          products={data}
          categories={categories}
          categoryID={categoryID}
          categoryName={categoryName?.data?.name}
        ></CategoriesBody>
      </section>
    </ProtectRoute>
  );
}
