"use client";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/services", label: "My Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav
      id="navbar"
      className="fixed bg-black light:bg-white flex flex-col items-center justify-center h-full w-68"
    >
      <ul
        className={`text-neutral-400 light:text-black ${styles.container} text-[17px] leading-12 mt-14 mb-16 text-left`}
      >
        {links.map((link) => (
          <li
            key={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="text-neutral-400 light:text-black text-left italic mr-4">
        © 2025 Portfolio
      </div>
    </nav>
  );
}
