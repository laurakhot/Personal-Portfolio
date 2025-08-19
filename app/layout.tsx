import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Oswald } from "next/font/google";
import { Rubik } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});
const titillium = Titillium_Web({ weight: ["400", "600"], subsets: ["latin"] });
const rubik = Rubik({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });
const oswald = Oswald({ weight: ["200"], subsets: ["latin"] });
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Laura | Personal Portfolio",
  keywords: ["Laura", "Portfolio", "Software Developer", "Next.js"],
  description: "Laura is a full stack web and app developer",
  icons: {
    icon: "/stars-purple.svg", // Path to your SVG favicon in the public folder
  },
};

// root component of the app
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-26`}> 
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div> 
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div> 
        <Header />
        {children} 
        </body>
    </html>
  );
}
