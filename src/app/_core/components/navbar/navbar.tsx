"use client";
import Link from "next/link";
import { TokenContext } from "../../_contexts/tokenContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { token, setToken } = useContext(TokenContext);

  const router = useRouter();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(() => localStorage.getItem("userToken"));
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setToken(null);
    router.push("/login");
  };

  return (
    <>
      <nav className="bg-[#1B1A41] text-white pt-10 pb-3">
        <div className="container mx-auto sm:px-10 px-5">
          <div>
            <div className="flex items-center justify-between max-lg:flex-wrap mb-8">
              <div className="flex items-center gap-x-4 max-lg:mb-3">
                <Link href={"/"} className="order-1">
                  <h2 className="text-3xl font-[500]">Shopetto</h2>
                </Link>
                {token && (
                  <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="cursor-pointer lg:hidden"
                  >
                    <i className="fa-solid fa-bars text-2xl"></i>
                  </button>
                )}
              </div>

              {/* Mobile */}
              <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
                  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} `}
                aria-label="Sidebar"
              >
                <div className="h-full pb-4 overflow-y-auto bg-white">
                  <div className="bg-main text-white  p-3 flex items-center justify-between">
                    <h2 className="self-center font-semibold whitespace-nowrap  text-md flex items-center gap-x-2 ">
                      <i className="fa-regular fa-user text-sm"></i>
                      <span>Hello Dear</span>
                    </h2>

                    <button
                      onClick={() => setIsSidebarOpen(false)}
                      className="cursor-pointer"
                    >
                      <i className="fa-solid fa-xmark text-white text-lg"></i>
                    </button>
                  </div>

                  <ul className="space-y-2 font-medium my-4">
                    <li>
                      <Link
                        onClick={() => setIsSidebarOpen(false)}
                        href="/"
                        className="flex items-center py-2 px-3  text-gray-900 rounded-lg  hover:bg-gray-100  group"
                      >
                        <svg
                          className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                        <span className="ms-3">Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsSidebarOpen(false)}
                        href="/about"
                        className="flex items-center py-2 px-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          About
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsSidebarOpen(false)}
                        href="/categories/6439d2d167d9aa4ca970649f"
                        className="flex items-center py-2 px-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 18"
                        >
                          <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Categories
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsSidebarOpen(false)}
                        href="cart"
                        className="flex items-center py-2 px-3  text-gray-900 rounded-lg  hover:bg-gray-100 group"
                      >
                        <svg
                          className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Cart
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => setIsSidebarOpen(false)}
                        href="/wishlist"
                        className="flex items-center py-2 px-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 20"
                        >
                          <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Wishlist
                        </span>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsSidebarOpen(false);
                        }}
                        className="flex items-center py-2 px-3  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                          />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Logout
                        </span>
                      </button>
                    </li>
                  </ul>
                </div>
              </aside>

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
                  onClick={(e) => e.preventDefault()}
                  type="submit"
                  title="Search"
                  className="p-4 ms-2 text-sm font-medium text-white bg-main focus:outline-none cursor-pointer"
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

              <div className="flex items-center gap-x-3 order-3 max-lg:order-2 max-lg:mb-3">
                {token && (
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
                )}
                {token && (
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
                )}

                {token ? (
                  <button
                    title="Logout"
                    className="cursor-pointer"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-right-from-bracket text-lg"></i>
                  </button>
                ) : (
                  <div className="flex gap-x-3 font-[500]">
                    <Link href={"/register"}>Register</Link>
                    <Link href={"/login"}>Login</Link>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-x-4">
                <a href="#">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>

              {token && (
                <ul className="flex items-center gap-6 text-[0.95rem] justify-center max-lg:hidden">
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
              )}

              <div className="flex items-center gap-x-2">
                <div className="flex items-center gap-x-1">
                  <svg width={15} fill="white" viewBox="0 0 32 32">
                    <path d="M16 4.457c6.354 0 11.543 5.189 11.543 11.543s-5.189 11.543-11.543 11.543-11.543-5.189-11.543-11.543 5.189-11.543 11.543-11.543zM16 1.714c-7.886 0-14.286 6.4-14.286 14.286s6.4 14.286 14.286 14.286 14.286-6.4 14.286-14.286-6.4-14.286-14.286-14.286v0z"></path>
                    <path d="M14.72 18.606c-0.046-0.229-0.069-0.48-0.069-0.754 0-0.96 0.411-1.874 1.44-2.651l0.869-0.663c0.549-0.411 0.777-0.891 0.777-1.44 0-0.846-0.594-1.646-1.829-1.646-1.303 0-1.874 1.051-1.874 2.057 0 0.229 0.023 0.411 0.069 0.594l-2.263-0.091c-0.069-0.251-0.091-0.549-0.091-0.823 0-1.966 1.486-3.863 4.183-3.863 2.834 0 4.32 1.783 4.32 3.634 0 1.44-0.731 2.469-1.806 3.246l-0.754 0.503c-0.64 0.457-0.983 1.029-0.983 1.783v0.114h-1.989zM15.749 19.771c0.8 0 1.463 0.663 1.463 1.463s-0.663 1.44-1.463 1.44c-0.8 0-1.44-0.64-1.44-1.44s0.64-1.463 1.44-1.463z"></path>
                  </svg>
                  <p className="text-xs font-[500]">Help Center</p>
                </div>
                <div className="flex items-center gap-x-1">
                  <svg width={15} fill="white" viewBox="0 0 32 32">
                    <path d="M25.531 2.286h-16.777l-4.183 8.8v18.629h25.143v-18.629l-4.183-8.8zM26.72 11.2h-8.206v-6.171h5.28l2.926 6.171zM10.491 5.029h5.28v6.171h-8.206l2.926-6.171zM7.314 26.971v-13.029h8.457v4.343h2.743v-4.343h8.457v13.029h-19.657z"></path>
                  </svg>
                  <p className="text-xs font-[500]">Track Order</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
