import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ToggleTheme/ToggleTheme";
import { SlMenu } from "react-icons/sl";
import Link from "next/link";
import MenuToggle from "./components/MenuToggle/MenuToggle";
import Header from "./components/Header/Header";
import DesktopSidebar from "./components/DesktopSidebar/DesktopSidebar";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";

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
        className={` ${montSerrat.variable} antialiased flex relative flex-row w-full min-h-screen`}
      >
        <DesktopSidebar />
        <MobileSidebar />
        <div className="flex-1 ml-0 xl:ml-70">
          <ThemeToggle />
          <div className="bg-neutral-900 light:bg-stone-200">{children}</div>
        </div>
      </body>
    </html>
  );
}
