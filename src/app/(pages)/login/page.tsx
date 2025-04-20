"use client";
import registerData from "@/app/interfaces/registerData";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function Login() {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email name is required"),
    password: Yup.string().required("Password is required"),
  });
  function onsubmit(val: registerData) {
    axios
      .post("http://localhost:3000/api/signin", val)
      .then((res) => {
        console.log(res);
        if (res.data.message === "Success") {
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: onsubmit,
  });

  return (
    <section className="min-h-screen flex items-center justify-center lg:px-28 px-5 max-sm:py-5">
      <main className="flex gap-14 w-full">
        <div className="mt-10 flex-grow-1">
          <h2 className="text-4xl font-[500] font-poppins mb-4">Login</h2>
          <p className="text-[#313131]">
            Login to access your travelwise account
          </p>
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="flex flex-col gap-y-5 mt-10 mb-5"
          >
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

            <div className="flex justify-between">
              <div className="ms-1 flex items-center gap-x-2">
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <Link href={"/forgot-password"} className="text-[#FF8682]">
                Forgot Password
              </Link>
            </div>

            <button
              type="submit"
              className="bg-main text-white py-3 rounded-md cursor-pointer"
            >
              Login
            </button>
          </form>
          <p className="text-center">
            Don’t have an account?{" "}
            <Link className="text-[#FF8682]" href={"/register"}>
              Sign up
            </Link>{" "}
          </p>
        </div>
        <div className="max-xl:hidden">
          <Image
            src={"/images/auth/login.svg"}
            alt=""
            width={450}
            height={450}
          />
        </div>
      </main>
    </section>
  );
}
