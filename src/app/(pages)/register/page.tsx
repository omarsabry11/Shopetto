"use client";

import { TokenContext } from "@/app/_core/_contexts/tokenContext";
import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import * as Yup from "yup";

export default function Register() {
  const [privacyPolicies, setPrivacyPolicies] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { token, setToken } = useContext(TokenContext);

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(15, "Name must be at most 15 characters"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),

    password: Yup.string()
      .required("Password is required")
      .matches(
        /[A-Z]\w{7,}/,
        "Password must start with an uppercase letter and be at least 8 characters long"
      ),

    rePassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/01[125][0-9]{8}/, "Phone must be Egyptian number"),
  });
  function onsubmit(val) {
    setIsLoading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", val)
      .then((res) => {
        console.log(res);
        setToken(() => res?.data?.token);
        localStorage.setItem("userToken", res?.data?.token);

        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: onsubmit,
  });

  return (
    <section className="min-h-[calc(100vh-10rem)] my-10 flex items-center justify-center xl:px-10">
      <main className="flex gap-20 w-full">
        <div className="mt-10 flex-1">
          <h2 className="text-4xl font-[500] font-poppins mb-4">Sign up</h2>
          <p className="text-[#313131]">
            Let’s get you all st up so you can access your personal account.
          </p>
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="flex flex-col gap-y-5 mt-10 mb-5"
          >
            <div className="flex gap-5 flex-wrap">
              <div className="flex flex-col flex-1">
                <div className="relative ">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-[#79747E] appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Name
                  </label>
                </div>

                {formik.errors.name && formik.touched.name && (
                  <div
                    className="flex items-center p-3 mt-3 text-sm text-red-800 rounded-lg bg-red-50"
                    role="alert"
                  >
                    <svg
                      className="shrink-0 inline w-4 h-4 me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">
                        {" "}
                        {typeof formik.errors.name === "string" &&
                          formik.errors.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>


            </div>

            <div className="flex gap-5 flex-wrap">
              <div className="flex flex-col flex-1">
                <div className="relative ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-[#79747E] appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Email
                  </label>
                </div>
                {formik.errors.email && formik.touched.email && (
                  <div
                    className="flex items-center p-3 mt-3 text-sm text-red-800 rounded-lg bg-red-50"
                    role="alert"
                  >
                    <svg
                      className="shrink-0 inline w-4 h-4 me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">
                        {" "}
                        {typeof formik.errors.email === "string" &&
                          formik.errors.email}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-[#79747E] appearance-none focus:outline-none focus:ring-0  peer"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Phone
                  </label>
                </div>
                {formik.errors.phone && formik.touched.phone && (
                  <div
                    className="flex items-center p-3 mt-3 text-sm text-red-800 rounded-lg bg-red-50"
                    role="alert"
                  >
                    <svg
                      className="shrink-0 inline w-4 h-4 me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      <span className="font-medium">
                        {" "}
                        {typeof formik.errors.phone === "string" &&
                          formik.errors.phone}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col flex-1">
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="floating_outlined4"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-[#79747E] appearance-none focus:outline-none focus:ring-0  peer"
                  placeholder=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label
                  htmlFor="floating_outlined4"
                  className="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
              {formik.errors.password && formik.touched.password && (
                <div
                  className="flex items-center p-3 mt-3 text-sm text-red-800 rounded-lg bg-red-50"
                  role="alert"
                >
                  <svg
                    className="shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">
                      {" "}
                      {typeof formik.errors.password === "string" &&
                        formik.errors.password}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col flex-1">
              <div className="relative">
                <input
                  type="password"
                  name="rePassword"
                  id="floating_outlined5"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-[#79747E] appearance-none focus:outline-none focus:ring-0  peer"
                  placeholder=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label
                  htmlFor="floating_outlined5"
                  className="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Confirm Password
                </label>
              </div>
              {formik.errors.rePassword && formik.touched.rePassword && (
                <div
                  className="flex items-center p-3 mt-3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <svg
                    className="shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">
                      {" "}
                      {typeof formik.errors.rePassword === "string" &&
                        formik.errors.rePassword}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="ms-1 flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={privacyPolicies}
                onChange={(e) => {
                  setPrivacyPolicies(e.target.checked);
                }}
              />
              <p>
                I agree to all the <span className="text-red-700">Terms</span>{" "}
                and <span className="text-red-700">Privacy Policies</span>
              </p>
            </div>
            <button
              disabled={!privacyPolicies}
              type="submit"
              className={` text-white h-[3rem] rounded-md bg-secondary flex items-center justify-center text-center ${
                privacyPolicies ? "cursor-pointer" : ""
              }`}
            >
              {isLoading ? <DotLoader /> : "Create account"}
            </button>
          </form>
          <p className="text-center">
            Don’t have an account?{" "}
            <Link className="text-red-700" href={"/login"}>
              Login
            </Link>{" "}
          </p>
        </div>
        <div className="max-xl:hidden flex items-center">
          <Image
            src={"/images/auth/register2.svg"}
            alt=""
            width={450}
            height={450}
          />
        </div>
      </main>
    </section>
  );
}
