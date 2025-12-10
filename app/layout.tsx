import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ThemeToggle from "./components/ToggleTheme/ToggleTheme";

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
        <Navbar />
        <div className="flex-1 ml-70">
          <ThemeToggle />
          <div className="bg-neutral-900 light:bg-stone-200">{children}</div>
        </div>
      </body>
    </html>
  );
}
