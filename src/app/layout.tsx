import React, { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { AddtoCartProvider } from "./components/provider/AddtoCartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce",
  description: "Ecommerce refactored with typescript",
  keywords: "next.js, react, tailwind css",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <AddtoCartProvider>
        <body className={inter.className}>
          <Header />

          <main className="container mx-auto min-w-screen min-h-screen p-8">
            {children}
          </main>
        </body>
      </AddtoCartProvider>
    </html>
  );
}
