
"use client";
import { createContext, useCallback } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export default function WishlistContextProvider({ children }) {
  const getWishlistItems = useCallback(async () => {
    const token = localStorage.getItem("userToken");
    try {
      return axios
        .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
          headers: { token },
        })
        .then((res) => res);
    } catch (error) {
      console.error("Error loading wishlist:", error);
    }
  }, []);

  const addToUserWishlist = (productId) => {
    const token = localStorage.getItem("userToken");

    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        productId,
      },
      {
        headers: {
          token,
        },
      }
    );
  };
  const removeFromUserWishlist = (productId) => {
    const token = localStorage.getItem("userToken");

    return axios.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,

      {
        headers: {
          token,
        },
      }
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        getWishlistItems,
        addToUserWishlist,
        removeFromUserWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
