import FeaturedDeals from "../FeaturedDeals/FeaturedDeals";
import CategoriesList from "../CategoriesList/CategoriesList";

export default async function HeroSection({ data = [] }) {
  
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
