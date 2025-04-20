import React from "react";

export default function Footer() {
  return (
    <footer className="text-white bg-[#1B1A41] shadow px-5">
      <div className="p-10 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-12 xl:gap-40 justify-center">
          <div className="lg:col-span-3 xl:col-span-2">
            <h2 className="text-3xl mb-4 font-semibold">Shoppeto</h2>
            <span className="mb-3 block font-[500]">Best For Shopping</span>
            <p className="text-sm mb-4 text-[#7c818b] w-1/2">
              Join Our newsletter to stay up to date on feautres and releases.
            </p>
          </div>
          <ul className="about-us flex flex-col gap-y-4 ng-star-inserted">
            <h4 className="font-semibold">About Us</h4>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Shipping</a>
            </li>
          </ul>
          <ul className="customer flex flex-col gap-y-4 text-nowrap ng-star-inserted">
            <h4 className="font-semibold">Customer Support</h4>
            <li>
              <a href="#">Affiliates</a>
            </li>
            <li>
              <a href="#">Apply Pay Payments</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
            <li>
              <a href="#">Returns Policy</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
          <ul className="follow flex flex-col gap-y-4 text-nowrap ng-star-inserted">
            <h4 className="font-semibold">Follow Us</h4>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f me-4"></i>Facebook
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram me-4"></i>Instagram
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter me-4"></i>Twitter
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-linkedin me-4"></i>Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center mt-10 flex-col sm:flex-row gap-y-3">
          <p className="text-xs">© 2025 Shoppeto. All right reserved</p>
          <ul className="flex gap-3 sm:gap-8 order-first sm:order-last text-nowrap">
            <li>
              <a href="#" className="text-xs">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-xs">
                Terms of Services
              </a>
            </li>
            <li>
              <a href="#" className="text-xs">
                Cookies Setting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
