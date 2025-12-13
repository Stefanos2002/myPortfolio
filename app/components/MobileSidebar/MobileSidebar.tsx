"use client";
import { useState } from "react";
import Header from "../Header/Header";
import MobileNavbarWrapper from "../MobileNavbarWrapper/MobileNavbarWrapper";
export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} onToggle={() => setOpen((prev) => !prev)} />

      <div
        className={`z-40 duration-300 fixed h-full transform transition-transform ease-in-out xl:hidden
          ${open ? "translate-x-0" : "-translate-x-70"}
        `}
      >
        <MobileNavbarWrapper onNavigate={() => setOpen(false)} />
      </div>
    </>
  );
}
