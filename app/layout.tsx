import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "myPortfolio",
  description: "Creating my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${montSerrat.variable} antialiased flex relative bg-neutral-900 flex-row w-full h-screen`}
      >
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
