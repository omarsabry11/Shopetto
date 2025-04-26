"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    const bots = [
      "googlebot",
      "bingbot",
      "slurp",
      "duckduckbot",
      "baiduspider",
      "yandexbot",
    ];

    const detectedBot = bots.some((bot) => userAgent.includes(bot));

    const token = localStorage.getItem("userToken");
    if (detectedBot || token) {
      setIsLoggedIn(true);
    } else {
      router.push("/login");
    }
  }, [router]);

  if (!isLoggedIn) return null;

  return children;
}
