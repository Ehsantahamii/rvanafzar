import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/layouts/navbar/Navbar";

const font = localFont({
  src: [
    {
      path: "../public/font/bahij_roya_irfont.ttf",
      style: "normal",
    }
  ]
})



export const metadata = {
  title: "روان افزار",
  description: "روان افزار تولید کننده تخصصی نرم افزارهای روانشناسی و علوم رفتاری",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
