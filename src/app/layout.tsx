import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BagnuCorakciAkademi",
  description: "Hyatınız için ilk Adımı Atın",
    icons: {
    icon: [
      { url: "/favicon.ico?v=3", type: "image/x-icon" }, // ?v=3 cache-bust
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      
      <body className={inter.className}>
        <WixClientContextProvider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </WixClientContextProvider>
        </body>
    </html>
  );
}
