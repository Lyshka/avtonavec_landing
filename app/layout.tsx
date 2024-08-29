import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";

import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: 'ЧТУП "АВТОнаВЕК"',
  description:
    "Все для вашего передвижения - от классики до инноваций. Широкий выбор велосипедов, мотоциклов, скутеров и электрической техники в Брестской области",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={sourceSans.className}>
        <NextTopLoader />
        <Header />
        {children}
        <Footer />
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
