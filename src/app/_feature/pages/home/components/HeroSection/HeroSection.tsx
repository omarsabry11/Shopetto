import FeaturedDeals from "../FeaturedDeals/FeaturedDeals";
import CategoriesList from "../CategoriesList/CategoriesList";

export default async function HeroSection() {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`, {
    next: {
      revalidate: 1000,
    },
  });
  const { data } = await res.json();

  return (
    <section className="mt-5 mb-20">
      <div className="flex gap-5 items-start">
        <div className="w-1/4 max-lg:hidden ">
          <CategoriesList categories={data}></CategoriesList>
        </div>

        <div className="flex-1">
          <FeaturedDeals></FeaturedDeals>
        </div>
      </div>
    </section>
  );
}
