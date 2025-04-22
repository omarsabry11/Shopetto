"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "./_core/components/navbar/navbar";
import { Outfit } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartContextProvider from "./_core/_contexts/CartContext";
import Footer from "./_core/components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TokenContextProvider from "./_core/_contexts/tokenContext";
import WishlistContextProvider from "./_core/_contexts/wishlistContext";

const outfit = Outfit({
  variable: "--font-lexend-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  // useEffect(() => {
  //   import("flowbite");
  // }, []);

  return (
    <html lang="en">
      <body className={``}>
        <TokenContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <div className="flex flex-col min-h-screen">
                <Navbar></Navbar>
                <QueryClientProvider client={queryClient}>
                  <div className="container mx-auto sm:px-10 px-5 flex-1">
                    {children}
                  </div>
                </QueryClientProvider>
                <Footer></Footer>
              </div>
            </WishlistContextProvider>
          </CartContextProvider>
        </TokenContextProvider>
      </body>
    </html>
  );
}
