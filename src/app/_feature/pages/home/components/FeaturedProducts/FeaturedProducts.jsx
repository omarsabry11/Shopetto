"use client";
import ProductCard from "@/app/_shared/components/ProductCard/ProductCard";
import { Bounce, toast, ToastContainer } from "react-toastify";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Slider from "react-slick";
import { WishlistContext } from "@/app/_core/_contexts/wishlistContext";
import { CartContext } from "@/app/_core/_contexts/CartContext";
import { useQueryClient } from "@tanstack/react-query";
import { Product } from "@/app/_core/interfaces/Product";

export default function FeaturedProducts({ products, title }) {
  const sliderRef = useRef(null);
  const [isSliderReady, setIsSliderReady] = useState(false);

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

  useEffect(() => {
    if (sliderRef.current) {
      setIsSliderReady(true);
    }
    getWishlist();
    setAllProducts(products.slice(0, 5));
  }, [getWishlist]);

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

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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

      <section className="mb-10">
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-4xl font-[500]">{title}</h2>

          {isSliderReady && (
            <div className="flex items-center gap-4">
              <button
                onClick={prevSlide}
                className="bg-main text-white w-12 h-12 rounded-full cursor-pointer"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                onClick={nextSlide}
                className="bg-main text-white w-12 h-12 rounded-full cursor-pointer"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          )}
        </div>

        <div>
          <Slider {...settings} ref={sliderRef}>
            {products.map((product) => (
              <div key={product._id} className="p-2">
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
              </div>
            ))}
          </Slider>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 py-5">
          {products.map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </div> */}
      </section>
    </>
  );
}
