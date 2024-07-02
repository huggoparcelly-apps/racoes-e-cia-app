import { ptBR } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Hydrate from "./components/Hydrate";
import Navbar from "./components/Navbar";
import "./globals.css";
import ShearchBar from "./components/ShearchBar";

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
            <Navbar />
            <ShearchBar />
            <main className="h-screen pt-32">{children}</main>
            <Footer />
          </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  );
}
