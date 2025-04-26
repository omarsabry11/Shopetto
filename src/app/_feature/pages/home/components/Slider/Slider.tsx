import { Category } from "@/app/_core/interfaces/Category";
import Link from "next/link";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export default async function Slider() {
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`, {
    next: {
      revalidate: 1000,
    },
  });
  const { data } = await res.json();

  return (
    <section className="mt-5 mb-20">
      <div className="flex gap-5 items-start">
        <div className="w-1/4 max-lg:hidden border border-[#E5E7EB] pt-4 rounded-lg">
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
            {data.map((category: Category, index: number) => (
              <li key={category._id}>
                <Link href={`/categories/${category._id}`}>
                  <div
                    className={`cursor-pointer  w-full py-2 ${
                      index !== data.length - 1 && "border-b border-[#E5E7EB]"
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

        <div className="flex w-full flex-col gap-5">
          <div className="flex w-full max-lg:flex-col gap-5">
            <div className="py-6 w-[60%] flex-1 max-lg:w-full bg-[url(/images/home/laptop.jpg)] bg-cover bg-right flex items-center">
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
            <div className="py-6 w-[40%] max-lg:w-full bg-[url(/images/home/image3.jpg)] bg-cover bg-right flex items-center">
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
          <div className=" py-3 flex-1 max-lg:w-full bg-[url(/images/home/clothes.jpg)] bg-cover bg-right flex items-center">
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
      </div>
    </section>
  );
}
