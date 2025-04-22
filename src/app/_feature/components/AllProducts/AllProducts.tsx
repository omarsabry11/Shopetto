"use client";
import { CartContext } from "@/app/_core/_contexts/CartContext";
import { WishlistContext } from "@/app/_core/_contexts/wishlistContext";
import { Product } from "@/app/_core/interfaces/Product";
import ProductCard from "@/app/_shared/components/ProductCard/ProductCard";
import { useQueryClient } from "@tanstack/react-query";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

export default function AllProducts({ products }: { products: Product[] }) {
  const { getWishlistItems, addToUserWishlist, removeFromUserWishlist } =
    useContext(WishlistContext);
  const [wishListProducts, setWishListProducts] = useState([]);
  const [productIds, setProductIds] = useState<string[]>([]);
  const [allProducts, setAllProducts] = useState(products);
  const [addToWishlistLoading, setAddToWishlistLoading] =
    useState<boolean>(false);
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);
  const [isShowingAllProducts, setIsShowingAllProducts] =
    useState<boolean>(false);

  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );

  const [selectedAddedProductId, setSelectedAddedProductId] = useState<
    string | null
  >(null);
  const queryClient = useQueryClient();

  const { addUserCart } = useContext(CartContext);

  const getWishlist = useCallback(async () => {
    try {
      const res = await getWishlistItems();
      const products = res?.data?.data || [];
      setWishListProducts(products);
      setProductIds(products.map((product: Product) => product._id));
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  }, []);

  useEffect(() => {
    getWishlist();
    setAllProducts(products.slice(0, 5));
  }, [getWishlist]);

  const handleAddToWishList = async (productId: string) => {
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

  const handleRemoveFromWishList = async (productId: string) => {
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

  const handleChangeSelectedProduct = useCallback((productId: string) => {
    setSelectedProductId(productId);
  }, []);
  const handleChangeSelectedAddedProduct = useCallback((productId: string) => {
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

  const handleAddToCart = async (productId: string) => {
    try {
      setAddToCartLoading(true);
      const res = await addUserCart(productId);

      setAddToCartLoading(false);
      queryClient.setQueryData(["cart"], (oldData: any) => {
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

      <section className="my-10">
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-4xl font-[500]">Feature Products</h2>
          <button
            onClick={() => handleChangeShowingProducts()}
            className="underline cursor-pointer font-[500]"
          >
            {isShowingAllProducts ? "Show less" : "See all products"}
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 py-5">
          {allProducts.map((product) => (
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
          ))}
        </div>
      </section>
    </>
  );
}
