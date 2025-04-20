import ProductCard from "@/app/_shared/components/ProductCard/ProductCard";
import React from "react";
import { Bounce, ToastContainer } from "react-toastify";

export default function FeaturedProducts({ products, title }) {
  console.log("sss", products);

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
        <h2 className="main-title">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 py-5">
          {products.map((product) => (
            <ProductCard product={product} key={product._id}></ProductCard>
          ))}
        </div>
      </section>
    </>
  );
}
