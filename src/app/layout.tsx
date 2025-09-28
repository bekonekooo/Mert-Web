import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WixClientContextProvider } from "@/context/wixContext";
import Whatsapp from "@/components/Whatsapp"; // 👈 ekledik

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BagnuCorakciAkademi",
  description: "Hyatınız için ilk Adımı Atın",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", type: "image/x-icon" },
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
          <Navbar />
          {children}
          <Footer />
          <Whatsapp /> {/* 👈 her sayfada görünecek */}
        </WixClientContextProvider>
      </body>
    </html>
  );
}