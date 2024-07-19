import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import BackHome from "./components/BackHome";
import Footer from "./components/Footer";
import Hydrate from "./components/Hydrate";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./Context/AuthContext";
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
    <ClerkProvider localization={ptBR}>
      <html lang="pt">
        <body className={clsx(inter.className, "bg-slate-200")}>
          <Hydrate>
            <AuthProvider>
              <Navbar />
              <BackHome />
              <main className="h-screen pt-32">
                <ProductsProvider>{children}</ProductsProvider>
              </main>
              <Footer />
            </AuthProvider>
          </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  );
}
