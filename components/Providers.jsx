"use client";

import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}