"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isBot, setIsBot] = useState(false);

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
    setIsBot(detectedBot);


    const token = localStorage.getItem("token");
    if (!detectedBot && !token) {
      router.push("/login");
    }
  }, [router]);


  return <>{children}</>;
}
