import ProtectRoute from "@/app/_core/components/ProtectRoute/ProtectRoute";
import WishListContent from "@/app/_feature/WishListContent/WishListContent";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Wishlist page",
};

export default function WishList() {
  return (
    <>
      <ProtectRoute>
        <WishListContent></WishListContent>
      </ProtectRoute>
    </>
  );
}
