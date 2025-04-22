"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectRoute({ children }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      router.push("/login");
    } else {
        setIsLoggedIn(true);
    }
  }, [router]);

  if (!isLoggedIn) return null;

  return children;
}
