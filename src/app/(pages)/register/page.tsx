"use client";

import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";

export default function Register() {
  const [privacyPolicies, setPrivacyPolicies] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("First name is required")
      .min(3, "First name must be at least 3 characters")
      .max(15, "First name must be at most 15 characters"),

    lastName: Yup.string()
      .required("Last name is required")
      .min(3, "Last name must be at least 3 characters")
      .max(15, "Last name must be at most 15 characters"),

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
  });
  function onsubmit(val: registerData) {
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signup", val)
      .then((res) => {
        console.log(res);
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: onsubmit,
  });

  return (
    <section className="min-h-screen flex items-center justify-center">
      <main className="flex gap-20 w-full">
        <div className="max-xl:hidden flex items-center">
          <Image
            src={"/images/auth/register.svg"}
            alt=""
            width={450}
            height={450}
          />
        </div>
        <div className="mt-10 flex-grow-1">
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
              <div className="flex flex-col flex-grow-1">
                <div className="relative ">
                  <input
                    type="text"
                    name="firstName"
                    id="floating_outlined1"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-[#79747E] appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
                    placeholder=""
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="floating_outlined1"
                    className="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    First Name
                  </label>
                </div>
                {formik.errors.firstName && formik.touched.firstName && (
                  <p className="mt-3">{formik.errors.firstName}</p>
                )}
              </div>

              <div className="flex flex-col flex-grow-1">
                <div className="relative">
                  <input
                    type="text"
                    name="lastName"
                    id="floating_outlined2"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-[#79747E] appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
                    placeholder=" "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor="floating_outlined2"
                    className="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Last Name
                  </label>
                </div>
                {formik.errors.lastName && formik.touched.lastName && (
                  <p className="mt-3">{formik.errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col flex-grow-1">
              <div className="relative ">
                <input
                  type="email"
                  name="email"
                  id="floating_outlined3"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-[#79747E] appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
                  placeholder=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label
                  htmlFor="floating_outlined3"
                  className="absolute text-md text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              {formik.errors.email && formik.touched.email && (
                <p className="mt-3">{formik.errors.email}</p>
              )}
            </div>

            <div className="flex flex-col flex-grow-1">
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="floating_outlined4"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-[#79747E] appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
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
                <p className="mt-3">{formik.errors.password}</p>
              )}
            </div>

            <div className="flex flex-col flex-grow-1">
              <div className="relative">
                <input
                  type="password"
                  name="rePassword"
                  id="floating_outlined5"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-[#79747E] appearance-none focus:outline-none focus:ring-0 focus:border-main peer"
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
                <p className="mt-3">{formik.errors.rePassword}</p>
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
                I agree to all the <span className="text-[#FF8682]">Terms</span>{" "}
                and <span className="text-[#FF8682]">Privacy Policies</span>
              </p>
            </div>
            <button
              disabled={!privacyPolicies}
              type="submit"
              className={` text-white py-3 rounded-md bg-main ${
                privacyPolicies ? "cursor-pointer" : ""
              }`}
            >
              Create account
            </button>
          </form>
          <p className="text-center">
            Don’t have an account?{" "}
            <Link className="text-[#FF8682]" href={"/login"}>
              Login
            </Link>{" "}
          </p>
        </div>
      </main>
    </section>
  );
}
