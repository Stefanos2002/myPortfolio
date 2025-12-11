"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { FaGear } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About Me", icon: <GoPersonFill /> },
    { href: "/services", label: "My Services", icon: <FaGear /> },
    { href: "/portfolio", label: "Portfolio", icon: <BsBriefcaseFill /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];
  return (
    <nav
      id="navbar"
      className="fixed bg-black light:bg-white hidden xl:flex flex-col items-center justify-center h-full w-70"
    >
      <ul
        className={`text-neutral-400 light:text-black ${styles.container} text-[17px] leading-12 mt-14 mb-16 text-left`}
      >
        {links.map((link) => (
          <li
            key={link.href}
            className={`${
              pathname === link.href ? "active" : ""
            } flex flex-row items-center gap-2`}
          >
            <span>{link.icon}</span>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="text-neutral-400 transition-all duration-200 light:text-black light:font-semibold text-left italic mr-4">
        © 2025 Portfolio
      </div>
    </nav>
  );
}
