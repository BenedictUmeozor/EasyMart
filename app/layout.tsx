import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import "@smastrom/react-rating/style.css";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/SessionProvider";
import NoRenderComponent from "@/context/NoRenderComponent";
import { CartProvider } from "@/context/CartProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyMart",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  themeColor: "#000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-white"}>
        <AuthProvider>
          <CartProvider>
            <NoRenderComponent>
              <section className="body">
                <Header />
                <main>
                  {children}
                  <Toaster />
                </main>
                <Footer />
              </section>
            </NoRenderComponent>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
