import Link from "next/link";
import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className="bg-black fixed flex flex-col items-center justify-center h-full w-2xs">
      <ul
        className={`text-neutral-400 ${styles.container} text-[17px] leading-12 mr-10 mt-14 mb-16 text-left`}
      >
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About Me</Link>
        </li>
        <li>
          <Link href={"/services"}>My Services</Link>
        </li>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
      <div className="text-neutral-400 text-left italic mr-4">
        © 2025 Portfolio
      </div>
    </div>
  );
}
