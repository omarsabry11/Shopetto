import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
};

export default function About() {
  return (
    <section className="container mx-auto sm:px-10 px-5 my-10">
      <div className="flex items-center gap-8 max-lg:flex-col">
        <div className=" max-lg:w-full flex-1">
          <h2 className="main-title">Welcome to Shopetto</h2>
          <p className="text-lg text-[#7E7E7E] mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate id est laborum.
          </p>
          <p className="text-lg text-[#7E7E7E] mb-8">
            Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta
            et Ut placerat legendos interpre.Donec vitae sapien ut libero
            venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis
            commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut
            ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate id
            est laborum.
          </p>
          <div className="flex items-center gap-5 max-lg:justify-center">
            <div className="w-[200px]">
              <img
                src="./images/about/about-2.webp"
                className="w-full"
                alt="about section image1"
              />
            </div>
            <div className="w-[200px]">
              <img
                src="./images/about/about-3.webp"
                className="w-full"
                alt="about section image3"
              />
            </div>
            <div className="w-[200px]">
              <img
                src="./images/about/about-4.webp"
                className="w-full"
                alt="about section image4"
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[45%]">
          <img
            src="./images/about/torapril28.jpg"
            className="w-full"
            alt="about section image1"
          />
        </div>
      </div>
      <div className="my-14">
        <h2 className="main-title text-center mt-20">What We Provide?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center  p-6 rounded-lg custom-box-shadow">
            <img
              src="./images/about/icon-1.webp"
              className="mx-auto"
              alt="Best Prices icon"
            />
            <h3 className="text-title text-2xl font-semibold my-8">
              Best Prices &amp; Offers
            </h3>
            <p className="text-[#7E7E7E]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div className="text-center  p-6 rounded-lg custom-box-shadow">
            <img
              src="./images/about/icon-2.webp"
              className="mx-auto"
              alt="Wide Assortment icon"
            />
            <h3 className="text-title text-2xl font-semibold my-8">
              Wide Assortment
            </h3>
            <p className="text-[#7E7E7E]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div className="text-center  p-6 rounded-lg custom-box-shadow">
            <img
              src="./images/about/icon-3.webp"
              className="mx-auto"
              alt="Free Delivery icon"
            />
            <h3 className="text-title text-2xl font-semibold my-8">
              Free Delivery
            </h3>
            <p className="text-[#7E7E7E]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div className="text-center  p-6 rounded-lg custom-box-shadow">
            <img
              src="./images/about/icon-4.webp"
              className="mx-auto"
              alt="Easy Returns icon"
            />
            <h3 className="text-title text-2xl font-semibold my-8">
              Easy Returns
            </h3>
            <p className="text-[#7E7E7E]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div className="text-center  p-6 rounded-lg custom-box-shadow">
            <img
              src="./images/about/icon-5.webp"
              className="mx-auto"
              alt="100% Satisfaction icon"
            />
            <h3 className="text-title text-2xl font-semibold my-8">
              100% Satisfaction
            </h3>
            <p className="text-[#7E7E7E]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
          <div className="text-center  p-6 rounded-lg custom-box-shadow">
            <img
              src="./images/about/icon-6.webp"
              className="mx-auto"
              alt="Great Daily Deal icon"
            />
            <h3 className="text-title text-2xl font-semibold my-8">
              Great Daily Deal
            </h3>
            <p className="text-[#7E7E7E]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
          </div>
        </div>
      </div>
      <div className="my-14">
        <div className="flex items-center gap-8 max-lg:flex-col">
          <div>
            <img
              src="./images/about/partners.webp"
              className="w-full"
              alt="partners image"
            />
          </div>
          <div className="w-1/2 max-lg:w-full">
            <h3 className="main-title">
              Your Partner for e- commerce grocery solution
            </h3>
            <p className="text-lg text-[#7E7E7E] mb-5">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </p>
            <p className="text-lg text-[#7E7E7E] mb-8">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
