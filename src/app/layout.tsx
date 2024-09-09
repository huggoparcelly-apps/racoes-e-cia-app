import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BackButton from "./Components/buttons/BackButton";
import Footer from "./Components/footers/Footer";
import Hydrate from "./Components/Hydrate";
import Navbar from "./Components/navbars/Navbar";
import { ProductsProvider } from "./Context/ProductsContext";
import "./globals.css";
import { OrdersProvider } from "./Context/OrdersContext";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rações e Cia",
  description: "Rações e Cia Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={clsx(inter.className, "bg-slate-200")}>
        <ChakraProvider>
          <Hydrate>
            <div className="flex flex-col h-screen">
              <Navbar />
              <BackButton />
              <main className="flex-grow overflow-y-auto pt-32">
                <ProductsProvider>
                  <OrdersProvider>{children}</OrdersProvider>
                </ProductsProvider>
              </main>
              <Footer />
            </div>
          </Hydrate>
        </ChakraProvider>
      </body>
    </html>
  );
}
