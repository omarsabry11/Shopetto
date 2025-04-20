"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#1B1A41] text-white pt-10 pb-3">
        <div className="container mx-auto sm:px-10 px-5">
          <div>
            <div className="flex items-center justify-between max-lg:flex-wrap mb-8">
              <div className="flex items-center gap-x-4">
                <Link href={"/"} className="order-1" prefetch={true}>
                  <h2 className="text-3xl font-[500]">Shopetto</h2>
                </Link>
                <button className="cursor-pointer lg:hidden">
                  <i className="fa-solid fa-bars text-2xl "></i>
                </button>
              </div>

              <form className="flex items-center max-lg:w-full lg:min-w-[30rem] mx-auto order-2 max-lg:order-3">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 text-gray-900 text-sm block w-full p-3.5 focus:outline-none"
                    placeholder="Search for anything..."
                  />
                </div>
                <button
                  type="submit"
                  className="p-4 ms-2 text-sm font-medium text-white bg-main focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>

              <div className="flex items-center gap-x-3 order-3 max-lg:order-2">
                <Link href={"/wishlist"}>
                  <svg
                    width="24"
                    height="24"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    viewBox="0 0 32 32"
                    fill="white"
                  >
                    <path d="M22.736 6.4v0c1.792 0 3.44 1.12 4.128 2.768 0.8 1.92 0.112 4.144-1.856 6.112l-9.024 8.992-9.024-8.976c-1.984-1.984-2.64-4.144-1.824-6.080 0.688-1.68 2.352-2.8 4.144-2.8 1.504 0 3.040 0.752 4.448 2.16l2.256 2.256 2.256-2.256c1.44-1.424 2.992-2.176 4.496-2.176zM22.736 3.2c-2.176 0-4.544 0.912-6.752 3.104-2.192-2.176-4.544-3.088-6.704-3.088-6.368 0-11.040 7.904-4.576 14.336l11.28 11.248 11.28-11.248c6.496-6.448 1.856-14.352-4.528-14.352v0z"></path>
                  </svg>
                </Link>
                <Link href={"/cart"}>
                  <svg
                    width="24"
                    height="24"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    viewBox="0 0 32 32"
                    fill="white"
                    className="cursor-pointer"
                  >
                    <path d="M25.248 22.4l3.552-14.4h-18.528l-0.96-4.8h-6.112v3.2h3.488l3.2 16h15.36zM24.704 11.2l-1.968 8h-10.24l-1.6-8h13.808z"></path>
                    <path d="M25.6 26.4c0 1.325-1.075 2.4-2.4 2.4s-2.4-1.075-2.4-2.4c0-1.325 1.075-2.4 2.4-2.4s2.4 1.075 2.4 2.4z"></path>
                    <path d="M14.4 26.4c0 1.325-1.075 2.4-2.4 2.4s-2.4-1.075-2.4-2.4c0-1.325 1.075-2.4 2.4-2.4s2.4 1.075 2.4 2.4z"></path>
                  </svg>
                </Link>

                <svg
                  width="24"
                  height="24"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 32 32"
                  fill="white"
                  className="cursor-pointer"
                >
                  <path d="M16 16c-4.064 0-6.4-2.336-6.4-6.4 0-3.536 2.864-6.4 6.4-6.4s6.4 2.864 6.4 6.4c0 4-2.4 6.4-6.4 6.4zM16 6.4c-1.76 0-3.2 1.44-3.2 3.2 0 2.272 0.928 3.2 3.2 3.2 2.24 0 3.2-0.96 3.2-3.2 0-1.76-1.44-3.2-3.2-3.2z"></path>
                  <path d="M27.2 28.8h-22.4v-3.2c0-4.416 3.584-8 8-8h6.4c4.416 0 8 3.584 8 8v3.2zM8 25.6h16c0-2.64-2.16-4.8-4.8-4.8h-6.4c-2.64 0-4.8 2.16-4.8 4.8z"></path>
                </svg>
              </div>
            </div>
            <div className="">
              <ul className="flex items-center gap-6 text-[0.95rem] justify-center ">
                <li className="text-[1rem] font-[500] ">
                  <Link className="" href={"/"}>
                    Home
                  </Link>
                </li>
                <li className="text-[1rem] font-[500]">
                  <Link href={"/about"}>About</Link>
                </li>
                <li className="text-[1rem] font-[500]">
                  <Link href={"/categories/6439d2d167d9aa4ca970649f"}>
                    Categories
                  </Link>
                </li>
                <li className="text-[1rem] font-[500]">
                  <Link href={"/cart"}>Cart</Link>
                </li>
                <li className="text-[1rem] font-[500]">
                  <Link href={"/wishlist"}>Wish List</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
