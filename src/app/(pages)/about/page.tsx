import ProtectRoute from "@/app/_core/components/ProtectRoute/ProtectRoute";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function About() {
  return (
    <ProtectRoute>
      <section className="container mx-auto sm:px-10 px-5 my-16 min-h-[calc(100vh-10rem)]">
        <div className="flex items-center gap-8 max-lg:flex-col mb-20">
          <div className=" max-lg:w-full flex-1 ">
            <h2 className="main-title">Welcome to Shopetto</h2>
            <p className="text-lg text-[#7E7E7E] mb-5">
              At Shopetto, we bring you the best in fashion, electronics, home
              essentials, and more – all in one place. Discover top-quality
              products, unbeatable prices, and fast delivery. Our mission is to
              make your shopping experience smooth, secure, and satisfying.
            </p>
            <p className="text-lg text-[#7E7E7E] mb-8">
              At Shopetto, we believe that shopping should be simple, fun, and
              rewarding. That’s why we’ve built a platform that combines a wide
              variety of high-quality products, exclusive deals, and a smooth,
              secure shopping experience. Our dedicated team works hard to
              handpick the best items from trusted brands to bring them right to
              your doorstep.
            </p>
          </div>
          <div className="max-xl:hidden w-[45%]">
            <Image
              src={"/images/about/Ecommerce2.svg"}
              className="w-full"
              alt={"About section image1"}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="my-14">
          <h2 className="main-title text-center">What We Provide?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            <div className="text-center  p-6 rounded-lg custom-box-shadow">
              <i className="fas fa-tags text-[3rem] text-[#1B1A41]"></i>
              <h3 className="text-title text-2xl text-[#1B1A41] font-[500] my-5">
                Best Prices & Offers
              </h3>
              <p className="text-[#7E7E7E]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="text-center  p-6 rounded-lg custom-box-shadow">
              <i className="fas fa-layer-group text-[3rem] text-[#1B1A41]"></i>
              <h3 className="text-title text-2xl text-[#1B1A41] font-[500] my-5">
                Wide Assortment
              </h3>
              <p className="text-[#7E7E7E]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="text-center  p-6 rounded-lg custom-box-shadow">
              <i className="fas fa-shipping-fast text-[3rem] text-[#1B1A41]"></i>
              <h3 className="text-title text-2xl text-[#1B1A41] font-[500] my-5">
                Free Delivery
              </h3>
              <p className="text-[#7E7E7E]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="text-center  p-6 rounded-lg custom-box-shadow">
              <i className="fas fa-exchange-alt text-[3rem] text-[#1B1A41]"></i>
              <h3 className="text-title text-2xl text-[#1B1A41] font-[500] my-5">
                Easy Returns
              </h3>
              <p className="text-[#7E7E7E]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="text-center  p-6 rounded-lg custom-box-shadow">
              <i className="fas fa-check-circle text-[3rem] text-[#1B1A41]"></i>

              <h3 className="text-title text-2xl text-[#1B1A41] font-[500] my-5">
                100% Satisfaction
              </h3>
              <p className="text-[#7E7E7E]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
            <div className="text-center  p-6 rounded-lg custom-box-shadow">
              <i className="fas fa-bolt text-[3rem] text-[#1B1A41]"></i>
              <h3 className="text-title text-2xl text-[#1B1A41] font-[500] my-5">
                Great Daily Deal
              </h3>
              <p className="text-[#7E7E7E]">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form
              </p>
            </div>
          </div>
        </div>
        <div className="my-20">
          <div className="flex items-center gap-8 max-lg:flex-col">
            <div className="w-[45%] max-lg:w-full">
              <Image
                src={"/images/about/partners.webp"}
                className="w-full"
                alt="partners image"
                width={500}
                height={500}
              />
            </div>
            <div className="w-1/2 max-lg:w-full">
              <h3 className="main-title">
                Your Partner for e- commerce grocery solution
              </h3>
              <p className="text-lg text-[#7E7E7E] mb-5">
                At Shopetto, we specialize in providing smart, scalable, and
                user-friendly e-commerce solutions tailored for the grocery
                industry. Whether you are a local store looking to go digital or
                a supermarket aiming to streamline online operations, our
                platform is designed to support your growth every step of the
                way.
              </p>
              <p className="text-lg text-[#7E7E7E] mb-8">
                From intuitive product management to seamless order fulfillment
                and real-time inventory tracking — we offer everything you need
                to run your online grocery business smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ProtectRoute> 
  );
}
