import type { Metadata } from "next";
import "./globals.css";
import {Poppins, Noto_Sans_KR} from 'next/font/google'
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import { SessionProvider } from "next-auth/react";
import ScrollTop from "@/components/Helper/ScrollTop";

const poppins = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets:['latin']
})
const notoSans = Noto_Sans_KR({
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
        className={`${poppins.className} ${notoSans.className} font-sans antialiased`}>
        <SessionProvider>
        <ResponsiveNav/>
        {children}
        </SessionProvider>
        <ScrollTop />
      </body>
    </html>
  );
}
