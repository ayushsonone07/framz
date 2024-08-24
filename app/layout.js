import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import USCprovider from "@/components/Providers";
import { CartProvider } from "use-shopping-cart";
import ShoppingCart from "@/components/ShoppingCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar/>
          <ShoppingCart/>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
