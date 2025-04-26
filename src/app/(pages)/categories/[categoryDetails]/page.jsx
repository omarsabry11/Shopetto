import ProtectRoute from "@/app/_core/components/ProtectRoute/ProtectRoute";
import CategoriesContent from "@/app/_feature/pages/categories/components/CategoriesContent/CategoriesContent";

export const metadata = {
  title: "Categories",
  description: "Categories page",
};
export default async function CategoryDetails({ params }) {
  const { categoryID } = await params;

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

  return (
    <ProtectRoute>
      <CategoriesContent
        products={data}
        categories={categories}
        categoryID={categoryID}
        categoryName={categoryName?.data?.name}
      ></CategoriesContent>
    </ProtectRoute>
  );
}
