"use client";
import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { toast } from "react-toastify";

export default function VerifyCodeContent({ onChangeFormType }) {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    resetCode: Yup.string().required("Reset Code is required"),
  });

  function onsubmit(val) {


    setIsLoading(true);
    const cleanedCode = val.resetCode.trim();
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
        resetCode: cleanedCode,
      })
      .then((res) => {
        console.log(res);
        onChangeFormType("resetPassword");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      })
      .finally(() => setIsLoading(false));
  }

  const formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema,
    onSubmit: onsubmit,
  });

  return (
    <>
    
    
    <div className="flex-1">
      <Link
        href={"/login"}
        className="mb-3 flex items-center gap-1 text-[#313131]"
      >
        <ArrowBackIosNewIcon sx={{ fontSize: "12px" }} />{" "}
        <span className="text-sm">Back to login</span>
      </Link>
      <h2 className="text-4xl font-[500] font-poppins mb-4">Verify Code</h2>
      <p className="text-[#313131]">
        An authentication code has been sent to your email.
      </p>
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="flex flex-col gap-y-5 mt-10 mb-5"
      >
        <div className="flex flex-col flex-1">
          <div className="relative ">
            <input
              value={formik.values.resetCode}
              type="text"
              name="resetCode"
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
              Enter Code
            </label>
          </div>
          {formik.errors.resetCode && formik.touched.resetCode && (
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
                  {typeof formik.errors.resetCode === "string" &&
                    formik.errors.resetCode}
                </span>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="text-white h-[3rem] rounded-md bg-secondary flex items-center justify-center text-center cursor-pointer"
        >
          {isLoading ? <DotLoader></DotLoader> : "Verify"}
        </button>
      </form>
    </div>
    </>
  );
}
