import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "@smastrom/react-rating/style.css";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyMart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>
        <Header />
        <main>
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
