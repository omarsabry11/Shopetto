"use client";
import "./globals.css";
import Navbar from "./_core/components/navbar/navbar";
import { Outfit } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartContextProvider from "./_core/_contexts/CartContext";
import Footer from "./_core/components/Footer/Footer";
import TokenContextProvider from "./_core/_contexts/tokenContext";
import WishlistContextProvider from "./_core/_contexts/wishlistContext";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en" className={`${outfit.variable}`}>
      <body className={`${outfit.className}`}>
        <AppRouterCacheProvider>
          <TokenContextProvider>
            <CartContextProvider>
              <WishlistContextProvider>
                <div className="flex flex-col min-h-screen">
                  <Navbar></Navbar>
                  <QueryClientProvider client={queryClient}>
                    <div className="container mx-auto sm:px-10 px-5 flex-1 min-h-[calc(100vh-10rem)]">
                      {children}
                    </div>
                  </QueryClientProvider>
                  <Footer></Footer>
                </div>
              </WishlistContextProvider>
            </CartContextProvider>
          </TokenContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
