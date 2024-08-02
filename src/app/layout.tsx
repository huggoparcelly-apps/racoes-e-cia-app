import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BackButton from "./components/buttons/BackButton";
import Footer from "./components/footers/Footer";
import Hydrate from "./components/Hydrate";
import Navbar from "./components/Navbar";
import { ProductsProvider } from "./Context/ProductsContext";
import "./globals.css";

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
        <Hydrate>
          <div className="flex flex-col h-screen">
            <Navbar />
            <BackButton />
            <main className="flex-grow overflow-y-auto pt-32">
              <ProductsProvider>{children}</ProductsProvider>
            </main>
            <Footer />
          </div>
        </Hydrate>
      </body>
    </html>
  );
}
