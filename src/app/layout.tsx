import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// app/layout.tsx
import { Providers } from "./providers";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sotelius Movies",
  description: "Movie Landing based on Next.Js,Typescript and Api-rest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
