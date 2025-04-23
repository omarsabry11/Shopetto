"use client";
import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import ProductCard from "@/app/_shared/components/ProductCard/ProductCard";
import SecondProductCard from "@/app/_shared/components/SecondProductCard/SecondProductCard";
import { Product } from "@/app/_core/interfaces/Product";
import { Category } from "@/app/_core/interfaces/Category";
import { CartContext } from "@/app/_core/_contexts/CartContext";
import { useQueryClient } from "@tanstack/react-query";
import { WishlistContext } from "@/app/_core/_contexts/wishlistContext";
import Image from "next/image";

function CategoriesBody({ products, categories, categoryID, categoryName }) {
  const [selectedCategoryID, setSelectedCategoryID] = useState(categoryID);
  const [selectedCategoryName, setSelectedCategoryName] =
    useState(categoryName);
  const [selectedSort, setSelectedSort] = useState("default");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [arrangementProducts, setArrangementProducts] = useState("grid2");

  const { getWishlistItems, addToUserWishlist, removeFromUserWishlist } =
    useContext(WishlistContext);
  const [wishListProducts, setWishListProducts] = useState([]);
  const [productIds, setProductIds] = useState([]);
  const [allProducts, setAllProducts] = useState(products);
  const [addToWishlistLoading, setAddToWishlistLoading] = useState(false);
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [isShowingAllProducts, setIsShowingAllProducts] = useState(false);

  const [selectedProductId, setSelectedProductId] = useState(null);

  const [selectedAddedProductId, setSelectedAddedProductId] = useState(null);
  const queryClient = useQueryClient();

  const sidebarRef = useRef(null);
  const { addUserCart } = useContext(CartContext);

  const getWishlist = useCallback(async () => {
    try {
      const res = await getWishlistItems();
      const products = res?.data?.data || [];
      setWishListProducts(products);
      setProductIds(products.map((product) => product._id));
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  }, []);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowMobileFilters(false);
    }
  };
  useEffect(() => {
    getWishlist();
    setAllProducts(products.slice(0, 5));
    if (showMobileFilters) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    if (showMobileFilters) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [getWishlist, showMobileFilters, setShowMobileFilters]);

  const handleAddToWishList = async (productId) => {
    try {
      setAddToWishlistLoading(true);
      const res = await addToUserWishlist(productId);
      console.log(res.data.message);

      await getWishlist();
      setAddToWishlistLoading(false);
      toast.success(res?.data?.message || "Product added to wishlist");
    } catch (error) {
      console.error("Failed to add to wishlist:", error);
    }
  };

  const handleRemoveFromWishList = async (productId) => {
    try {
      setAddToWishlistLoading(true);
      const res = await removeFromUserWishlist(productId);

      await getWishlist();
      setAddToWishlistLoading(false);
      toast.success(res?.data?.message || "Product removed from wishlist");
    } catch (err) {
      console.log("Failed to remove from wishlist", err);
    }
  };

  const handleChangeSelectedProduct = useCallback((productId) => {
    setSelectedProductId(productId);
  }, []);
  const handleChangeSelectedAddedProduct = useCallback((productId) => {
    setSelectedAddedProductId(productId);
  }, []);

  const handleChangeShowingProducts = () => {
    setIsShowingAllProducts((prev) => !prev);
    console.log(isShowingAllProducts);

    if (!isShowingAllProducts) {
      setAllProducts([...products]);
    } else {
      setAllProducts(products.slice(0, 5));
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      setAddToCartLoading(true);
      const res = await addUserCart(productId);

      setAddToCartLoading(false);
      queryClient.setQueryData(["cart"], (oldData) => {
        return {
          ...oldData,
          data: {
            ...oldData?.data,
            data: res?.data?.data,
          },
        };
      });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeCategory = useCallback((categoryId, categoryName) => {
    setSelectedCategoryID(categoryId);
    setSelectedCategoryName(categoryName);
    setSelectedSort("default");
    setSelectedPriceRange(null);
    setShowMobileFilters(false);
  }, []);

  const handleChangeSort = useCallback((sortValue) => {
    setSelectedSort(sortValue);
  }, []);

  const handleChangePriceRange = useCallback((priceRange) => {
    setSelectedPriceRange(priceRange);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = products;

    if (selectedCategoryID) {
      result = result.filter(
        (product) => product.category._id === selectedCategoryID
      );
    }

    if (selectedPriceRange === "firstClass") {
      result = result.filter((product) => product.price <= 500);
    } else if (selectedPriceRange === "secondClass") {
      result = result.filter(
        (product) => product.price > 500 && product.price <= 1000
      );
    } else if (selectedPriceRange === "thirdClass") {
      result = result.filter((product) => product.price > 1000);
    }

    if (selectedSort === "asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (selectedSort === "desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (selectedSort === "rating") {
      result = [...result].sort((a, b) => b.ratingsAverage - a.ratingsAverage);
    }

    return result;
  }, [products, selectedCategoryID, selectedPriceRange, selectedSort]);

  const handleChangeArrangement = useCallback((arrangement) => {
    setArrangementProducts(arrangement);
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        className={"text-center"}
      />
      <section className="my-10 h-full">
        <div className="h-[20rem] flex-1 max-lg:w-full bg-[url(/images/categories/shoppetoCover.jpg)] bg-cover bg-center  flex items-center">
          <h2 className="ps-10 text-3xl font-bold">{selectedCategoryName}</h2>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row">
        {/* ☰ Mobile filter button */}
        <div className="lg:hidden p-4">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="bg-main text-white px-4 py-2 rounded-md"
          >
            ☰ Filter
          </button>
        </div>

        {/* Sidebar Filters */}
        <aside
          ref={sidebarRef}
          className={`
          fixed top-0 left-0 h-full w-64 z-50 p-5 transform transition-transform duration-300 ease-in-out
          ${
            showMobileFilters ? "translate-x-0" : "-translate-x-full"
          } overflow-y-auto
          lg:translate-x-0 lg:relative lg:block lg:w-1/4 bg-white
        `}
        >
          {/* Close btn for mobile */}
          <div className="lg:hidden flex justify-end">
            <button
              onClick={() => setShowMobileFilters(false)}
              className="text-gray-700 text-xl font-bold"
            >
              ✕
            </button>
          </div>

          <div className="text-[#7c818b] flex items-center gap-2 pb-3 border-b border-b-[#EEF1F5] mb-4 ps-2">
            <svg width="24" height="24" fill="#7c818b" viewBox="0 0 32 32">
              <path d="M8 14.4h3.2v-9.6h-3.2v3.2h-4.8v3.2h4.8z"></path>
              <path d="M24 17.6h-3.2v9.6h3.2v-3.2h4.8v-3.2h-4.8z"></path>
              <path d="M14.4 8h14.4v3.2h-14.4v-3.2z"></path>
              <path d="M3.2 20.8h14.4v3.2h-14.4v-3.2z"></path>
            </svg>{" "}
            <h3 className="font-semibold text-lg">Filter</h3>
          </div>

          {/* Categories */}
          <ul className="border-b border-b-gray-300 pb-4 ">
            {categories.map((category) => (
              <li key={category._id}>
                <button
                  className={`block w-full text-left p-2 rounded cursor-pointer ${
                    selectedCategoryID === category._id
                      ? "bg-main font-[500] text-white"
                      : ""
                  }`}
                  onClick={() =>
                    handleChangeCategory(category._id, category.name)
                  }
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Price Range */}
          <div className="py-4">
            <label className="block font-[500] mb-4">Price:</label>
            <div className="pb-3 cursor-pointer">
              <input
                type="radio"
                id="low"
                name="price"
                checked={selectedPriceRange === "firstClass"}
                onChange={() => handleChangePriceRange("firstClass")}
                className="cursor-pointer"
              />
              <label htmlFor="low" className="ml-2 cursor-pointer">
                0 - $500
              </label>
            </div>
            <div className="pb-3">
              <input
                type="radio"
                id="mid"
                name="price"
                checked={selectedPriceRange === "secondClass"}
                onChange={() => handleChangePriceRange("secondClass")}
                className="cursor-pointer"
              />
              <label htmlFor="mid" className="ml-2 cursor-pointer">
                $500 - $1000
              </label>
            </div>
            <div className="pb-3">
              <input
                type="radio"
                id="high"
                name="price"
                checked={selectedPriceRange === "thirdClass"}
                onChange={() => handleChangePriceRange("thirdClass")}
                className="cursor-pointer"
              />
              <label htmlFor="high" className="ml-2 cursor-pointer">
                $1000+
              </label>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1 p-5">
          <div className=" flex items-center justify-between pb-2 border-b border-b-[#EEF1F5] mb-5">
            <h3 className="font-semibold text-md text-[#7c818b] text-sm">
              {filteredProducts?.length} Results
            </h3>

            {/* Sort */}
            <div className="flex  items-center gap-2">
              <label className="block font-[500] text-sm text-[#7c818b] ">
                Sort:
              </label>
              <select
                title="Sort"
                value={selectedSort}
                onChange={(e) => handleChangeSort(e.target.value)}
                className="w-full p-1 border border-gray-200 rounded cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="rating">Average rating</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
            <div className="flex items-center gap-2 max-md:hidden">
              <button
                title="Grid 2"
                className="cursor-pointer"
                onClick={() => handleChangeArrangement("grid2")}
              >
                <svg
                  width="35"
                  height="35"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 43 32"
                >
                  <path d="M18.667 6.667v18.667h-12v-18.667h12zM20 5.333h-14.667v21.333h14.667v-21.333z"></path>
                  <path d="M36 6.667v18.667h-12v-18.667h12zM37.333 5.333h-14.667v21.333h14.667v-21.333z"></path>
                </svg>
              </button>
              <button
                title="Grid 3"
                className="cursor-pointer"
                onClick={() => handleChangeArrangement("grid3")}
              >
                <svg
                  width="35"
                  height="35"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 43 32"
                >
                  <path d="M13.333 6.667v6.667h-6.667v-6.667h6.667zM14.667 5.333h-9.333v9.333h9.333v-9.333z"></path>
                  <path d="M25.333 6.667v6.667h-6.667v-6.667h6.667zM26.667 5.333h-9.333v9.333h9.333v-9.333z"></path>
                  <path d="M13.333 18.667v6.667h-6.667v-6.667h6.667zM14.667 17.333h-9.333v9.333h9.333v-9.333z"></path>
                  <path d="M25.333 18.667v6.667h-6.667v-6.667h6.667zM26.667 17.333h-9.333v9.333h9.333v-9.333z"></path>
                  <path d="M37.333 6.667v6.667h-6.667v-6.667h6.667zM38.667 5.333h-9.333v9.333h9.333v-9.333z"></path>
                  <path d="M37.333 18.667v6.667h-6.667v-6.667h6.667zM38.667 17.333h-9.333v9.333h9.333v-9.333z"></path>
                </svg>
              </button>
              <button
                title="Grid 4"
                className="cursor-pointer"
                onClick={() => handleChangeArrangement("grid4")}
              >
                <svg
                  width="35"
                  height="35"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 43 32"
                >
                  <path d="M10.667 6.667v2.667h-2.667v-2.667h2.667zM12 5.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M10.667 14.667v2.667h-2.667v-2.667h2.667zM12 13.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M10.667 22.667v2.667h-2.667v-2.667h2.667zM12 21.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M18.667 6.667v2.667h-2.667v-2.667h2.667zM20 5.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M18.667 14.667v2.667h-2.667v-2.667h2.667zM20 13.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M18.667 22.667v2.667h-2.667v-2.667h2.667zM20 21.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M26.667 6.667v2.667h-2.667v-2.667h2.667zM28 5.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M26.667 14.667v2.667h-2.667v-2.667h2.667zM28 13.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M26.667 22.667v2.667h-2.667v-2.667h2.667zM28 21.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M34.667 6.667v2.667h-2.667v-2.667h2.667zM36 5.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M34.667 14.667v2.667h-2.667v-2.667h2.667zM36 13.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M34.667 22.667v2.667h-2.667v-2.667h2.667zM36 21.333h-5.333v5.333h5.333v-5.333z"></path>
                </svg>
              </button>
              <button
                title="Grid List"
                className="cursor-pointer"
                onClick={() => handleChangeArrangement("gridList")}
              >
                <svg
                  width="35"
                  height="35"
                  aria-hidden="true"
                  role="img"
                  focusable="false"
                  viewBox="0 0 43 32"
                >
                  <path d="M10.667 6.667v2.667h-2.667v-2.667h2.667zM12 5.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M10.667 14.667v2.667h-2.667v-2.667h2.667zM12 13.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M10.667 22.667v2.667h-2.667v-2.667h2.667zM12 21.333h-5.333v5.333h5.333v-5.333z"></path>
                  <path d="M34.667 6.667v2.667h-18.667v-2.667h18.667zM36 5.333h-21.333v5.333h21.333v-5.333z"></path>
                  <path d="M34.667 14.667v2.667h-18.667v-2.667h18.667zM36 13.333h-21.333v5.333h21.333v-5.333z"></path>
                  <path d="M34.667 22.667v2.667h-18.667v-2.667h18.667zM36 21.333h-21.333v5.333h21.333v-5.333z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`grid ${
              arrangementProducts === "grid2"
                ? "md:grid-cols-2 gap-6"
                : arrangementProducts === "grid3"
                ? "md:grid-cols-2 lg:grid-cols-3 gap-4"
                : arrangementProducts === "grid4"
                ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
                : arrangementProducts === "gridList"
                ? "grid-cols-1"
                : ""
            } `}
          >
            {filteredProducts.length ? (
              arrangementProducts !== "gridList" ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    onAddToWishList={handleAddToWishList}
                    productIds={productIds}
                    addToWishlistLoading={addToWishlistLoading}
                    handleChangeSelectedProduct={handleChangeSelectedProduct}
                    selectedProductId={selectedProductId}
                    onRemoveFromWishList={handleRemoveFromWishList}
                    onAddToCart={handleAddToCart}
                    addToCartLoading={addToCartLoading}
                    handleChangeSelectedAddedProduct={
                      handleChangeSelectedAddedProduct
                    }
                    selectedAddedProductId={selectedAddedProductId}
                  ></ProductCard>
                ))
              ) : (
                filteredProducts.map((product) => (
                  <SecondProductCard
                    key={product._id}
                    product={product}
                  ></SecondProductCard>
                ))
              )
            ) : (
              <div className="col-span-full min-h-[calc(100vh-15rem)] flex flex-col items-center justify-center text-center  w-full">
                <Image
                  className="mx-auto"
                  src={"/images/cart/emptyBag.svg"}
                  width={80}
                  height={80}
                  alt={"Bag Image"}
                ></Image>
                <h2 className="text-3xl font-[500] m-0">
                  No Products Available
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesBody;
