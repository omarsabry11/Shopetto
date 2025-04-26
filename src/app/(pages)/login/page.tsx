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

export default function Login() {
  const router = useRouter();

  const { token, setToken } = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email name is required"),
    password: Yup.string().required("Password is required"),
  });
  function onsubmit(val) {
    setIsLoading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", val)
      .then((res) => {
        console.log(res.data.token);
        router.push("/");
        localStorage.setItem("userToken", res?.data?.token);
        setToken(() => res?.data?.token);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  const formik = useFormik({
    initialValues: {
      email: "gosati@mailinator.com",
      password: "Asssssss",
    },
    validationSchema,
    onSubmit: onsubmit,
  });

  return (
    <section className="min-h-[calc(100vh-10rem)] my-10 flex items-center justify-center">
      <main className="flex gap-14 justify-between items-center w-full">
        <div className="max-xl:hidden">
          <Image
            src={"/images/auth/login2.svg"}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl font-[500] font-poppins mb-4">Login</h2>
          <p className="text-[#313131]">
            Login to access your travelwise account
          </p>
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="flex flex-col gap-y-5 mt-10 mb-5"
          >
            <div className="flex flex-col flex-1">
              <div className="relative ">
                <input
                  value={formik.values.email}
                  type="email"
                  name="email"
                  id="floating_outlined3"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border border-[#79747E] appearance-none focus:outline-none focus:ring-0  peer"
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
                      {typeof formik.errors.email === "string" &&
                        formik.errors.email}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-col flex-grow-1">
              <div className="relative">
                <input
                  value={formik.values.password}
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
                      {typeof formik.errors.password === "string" &&
                        formik.errors.password}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between">
              <div className="ms-1 flex items-center gap-x-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <Link href={"/forgot-password"} className="text-red-700">
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="text-white h-[3rem] rounded-md bg-secondary flex items-center justify-center text-center cursor-pointer"
            >
              {isLoading ? <DotLoader></DotLoader> : "Login"}
            </button>
          </form>
          <p className="text-center">
            Don’t have an account?{" "}
            <Link className="text-red-700" href={"/register"}>
              Sign up
            </Link>{" "}
          </p>
        </div>
      </main>
    </section>
  );
}
