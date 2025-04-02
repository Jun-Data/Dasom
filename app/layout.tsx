import type { Metadata } from "next";
import "./globals.css";
import {Poppins} from 'next/font/google'
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Dasom | 나를 지켜주는 봇",
  description: "Special project ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}>
        <ResponsiveNav/>
        <main className="pt-[12vh]">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
