"use client";
import DotLoader from "@/app/_core/components/DotLoader/DotLoader";
import axios from "axios";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "yup";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import VerifyCodeContent from "../../_feature/pages/forgot-password/components/VerifyCodeContent/VerifyCodeContent";
import ForgotPasswordContent from "../../_feature/pages/forgot-password/components/ForgotPasswordContent/ForgotPasswordContent";
import ResetPasswordContent from "../../_feature/pages/forgot-password/components/ResetPasswordContent/ResetPasswordContent";

export default function ForgotPassword() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [formType, setFormType] = useState("forgotPassword");
  const [userEmail, setUserEmail] = useState("");

  function handleChangeFormType(type) {
    setFormType(type);
  }
  function handleChangeUserEmail(email) {
    setUserEmail(email);
  }

  return (
    <section className="min-h-[calc(100vh-10rem)] my-10 flex items-center justify-center">
      <main className="flex gap-14 justify-between items-center w-full">
        <div className="max-xl:hidden">
          <Image
            src={"/images/auth/ForgotPassword.webp"}
            alt=""
            width={500}
            height={500}
          />
        </div>
        {formType === "forgotPassword" ? (
          <ForgotPasswordContent
            onChangeUserEmail={handleChangeUserEmail}
            onChangeFormType={handleChangeFormType}
          ></ForgotPasswordContent>
        ) : formType === "verifyCode" ? (
          <VerifyCodeContent
            onChangeFormType={handleChangeFormType}
          ></VerifyCodeContent>
        ) : (
          <ResetPasswordContent userEmail={userEmail}></ResetPasswordContent>
        )}
      </main>
    </section>
  );
}
