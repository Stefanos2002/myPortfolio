import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ToggleTheme/ToggleTheme";
import DesktopSidebar from "./components/DesktopSidebar/DesktopSidebar";
import MobileSidebar from "./components/MobileSidebar/MobileSidebar";

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaloulis-dev",
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
