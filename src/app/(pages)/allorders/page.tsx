"use client";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import OrdersTable from "@/app/_feature/components/OrdersTable/OrdersTable";
import axios from "axios";
import ProtectRoute from "@/app/_core/components/ProtectRoute/ProtectRoute";
import { UserData } from "@/app/_core/interfaces/userData";

export default function Orders() {
  useEffect(() => {
    const userData: UserData = jwtDecode(localStorage.getItem("userToken")!);

    axios
      .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userData?.id}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data[res.data?.length - 1].cartItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [products, setProducts] = useState([]);

  return (
    <ProtectRoute>
      <section className="min-h-[calc(100vh-10rem)] my-10">
        <div className="flex-1">
          <OrdersTable products={products}></OrdersTable>
        </div>
      </section>
    </ProtectRoute>
  );
}
