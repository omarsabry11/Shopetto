import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import {
  FaTags,
  FaLayerGroup,
  FaShippingFast,
  FaExchangeAlt,
  FaCheckCircle,
  FaBolt,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "About",
  description: "About Shopetto - Your trusted e-commerce partner",
};

const iconsClasses = "text-[2.5rem] text-[#1B1A41] mx-auto";
const features = [
  {
    icon: <FaTags className={iconsClasses} />,
    title: "Best Prices & Offers",
    desc: "We bring you top deals on quality products.",
  },
  {
    icon: <FaLayerGroup className={iconsClasses} />,
    title: "Wide Assortment",
    desc: "A diverse selection across all categories.",
  },
  {
    icon: <FaShippingFast className={iconsClasses} />,
    title: "Free Delivery",
    desc: "Enjoy free shipping on selected products.",
  },
  {
    icon: <FaExchangeAlt className={iconsClasses} />,
    title: "Easy Returns",
    desc: "Hassle-free returns for your peace of mind.",
  },
  {
    icon: <FaCheckCircle className={iconsClasses} />,
    title: "100% Satisfaction",
    desc: "We guarantee quality and satisfaction.",
  },
  {
    icon: <FaBolt className={iconsClasses} />,
    title: "Great Daily Deal",
    desc: "Catch unbeatable offers every day.",
  },
];

export default function About() {
  return (
    <section className="container mx-auto px-5 sm:px-10 my-16 min-h-[calc(100vh-10rem)]">
      <div className="flex items-center gap-8 flex-wrap mb-20">
        <div className="flex-1 min-w-[300px]">
          <h2 className="main-title">Welcome to Shopetto</h2>
          <p className="text-lg text-[#7E7E7E] mb-5">
            Shopetto brings you the best in fashion, electronics, home
            essentials, and more — all in one place. Discover unbeatable prices
            and fast delivery.
          </p>
          <p className="text-lg text-[#7E7E7E] mb-8">
            We believe shopping should be simple, fun, and rewarding. That’s why
            we offer quality products, exclusive deals, and a secure platform.
          </p>
        </div>
        <div className="w-[45%] max-xl:hidden">
          <Image
            src="/images/about/Ecommerce2.svg"
            alt="About Shopetto"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>

      <div className="my-14">
        <h2 className="main-title text-center">What We Provide</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg custom-box-shadow"
            >
              {feature.icon}
              <h3 className="text-2xl text-[#1B1A41] font-semibold my-5">
                {feature.title}
              </h3>
              <p className="text-[#7E7E7E]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-20 flex flex-wrap gap-8 items-center">
        <div className="w-full lg:w-[45%]">
          <Image
            src="/images/about/partners.webp"
            alt="Shopetto partners"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="flex-1">
          <h3 className="main-title">
            Your Partner for E-commerce Grocery Solutions
          </h3>
          <p className="text-lg text-[#7E7E7E] mb-5">
            Whether you're a local store or a supermarket, Shopetto offers
            smart, scalable solutions tailored to the grocery industry.
          </p>
          <p className="text-lg text-[#7E7E7E]">
            From inventory tracking to seamless order fulfillment, we help you
            build and grow your digital grocery business smoothly.
          </p>
        </div>
      </div>
    </section>
  );
}
